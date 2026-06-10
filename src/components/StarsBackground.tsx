import { Fragment, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface IStarsRef {
  x: number;
  y: number;
  radius: number;
  blur: number;
  opacity: number;
}

export default function StarsBackground({ height, onReady }: { height: number; onReady?: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Array<IStarsRef>>([]);
  const shadowRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<CanvasGradient | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  function drawBackground(
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
  ) {
    if (!gradientRef.current) {
      const gradient = ctx.createLinearGradient(0, canvas.height, canvas.width, 0);
      if (!darkMode) {
        gradient.addColorStop(0, "#eff6ff");
        gradient.addColorStop(0.5, "#ffffff");
        gradient.addColorStop(1, "#fdf4ff");
      } else {
        gradient.addColorStop(0, "#030712");
        gradient.addColorStop(0.5, "#111827");
        gradient.addColorStop(1, "#030712");
      }
      gradientRef.current = gradient;
    }
    ctx.fillStyle = gradientRef.current;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  function onMountAnimation(
    ctx: CanvasRenderingContext2D | null | undefined,
    frame: number,
  ) {
    if (!ctx) return;

    ctx.clearRect(0, 0, window.innerWidth, height);

    drawBackground(ctx, canvasRef.current!);

    if (starsRef.current.length === 0) {
      for (let i = 0; i < 400; i++) {
        starsRef.current.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * height,
          radius: Math.random() * 1.5,
          blur: Math.random() * 10,
          opacity: Math.random() * 0.8,
        });
      }
    }

    starsRef.current.forEach((star) => {
      ctx.beginPath();
      ctx.arc(
        star.x,
        star.y / (0.5 + frame * 0.5),
        star.radius,
        0,
        Math.PI * 2,
      );
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * frame})`;
      ctx.fill();
    });

    if (frame < 1) {
      requestAnimationFrame(() => onMountAnimation(ctx, frame + 0.05));
    } else {
      onReady?.();
      animate(ctx);
    }
  }

  function animate(ctx: CanvasRenderingContext2D | null | undefined) {
    if (!ctx) return;

    let rafId: number | null = null;
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (rafId !== null) return;

      rafId = requestAnimationFrame(() => {
        rafId = null;
        ctx.clearRect(0, 0, window.innerWidth, height);
        drawBackground(ctx, canvasRef.current!);
        ctx.shadowBlur = 0;
        starsRef.current.forEach((star) => {
          ctx.beginPath();
          ctx.arc(
            star.x + mouseX / 100,
            star.y + mouseY / 100,
            star.radius,
            0,
            Math.PI * 2,
          );
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
          ctx.fill();
        });
      });
    };

    window.removeEventListener("mousemove", (window as any).__starsMouseMove);
    (window as any).__starsMouseMove = onMouseMove;
    window.addEventListener("mousemove", onMouseMove);
  }

  useEffect(() => {
    const checkDarkMode = () => {
      setDarkMode(document.documentElement.classList.contains("dark"));
    }

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade in/out effect based on canvas visibility
    if (shadowRef.current) {
      gsap.set(shadowRef.current, { opacity: 0 });

      ScrollTrigger.create({
        trigger: canvasRef.current,
        start: "top bottom-=100", // Start fading in when top of canvas is 100px from bottom of viewport
        end: "bottom top+=100", // Finish fading out when bottom of canvas is 100px from top of viewport
        onEnter: () => {
          gsap.to(shadowRef.current, {
            opacity: 1,
            "--tw-gradient-from-position": "50%",
            duration: 0.8,
            ease: "power2.inOut",
          });
        },
        onLeave: () => {
          gsap.to(shadowRef.current, {
            opacity: 0,
            duration: 0.2,
            ease: "power2.inOut",
          });
        },
        onEnterBack: () => {
          gsap.to(shadowRef.current, {
            opacity: 1,
            "--tw-gradient-from-position": "40%",
            duration: 0.8,
            ease: "power2.inOut",
          });
        },
        onLeaveBack: () => {
          gsap.to(shadowRef.current, {
            opacity: 0,
            duration: 0.2,
            ease: "power2.inOut",
          });
        },
      });
    }
  }, [darkMode]);

  useEffect(() => {
    gradientRef.current = null;
    const canvas = canvasRef.current;
    if (canvas && height) {
      canvas.width = window.innerWidth;
      canvas.height = height;

      const ctx = canvas.getContext("2d");

      const raf = requestAnimationFrame(() => onMountAnimation(ctx, 0));
      return () => cancelAnimationFrame(raf);
    }
  }, [height, darkMode]);

  return (
    <Fragment>
      <div
        ref={shadowRef}
        className="fixed h-screen inset-0 w-screen bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-[#00000000] from-40% to-black z-10"
      />
      <canvas ref={canvasRef} className="absolute inset-0 w-screen z-0" />
    </Fragment>
  );
}
