import type { DemoType } from '../types/lead.types';

const STORAGE_KEY = 'spinedev_visited_demos';

export const demoTracking = {
  track(demo: DemoType): void {
    if (typeof window === 'undefined') return;
    
    const visited = this.getVisited();
    if (!visited.includes(demo)) {
      visited.push(demo);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(visited));
    }
  },

  getVisited(): DemoType[] {
    if (typeof window === 'undefined') return [];
    
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  },

  clear(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
  }
};
