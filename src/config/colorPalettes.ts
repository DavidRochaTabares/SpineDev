export const colorPalettes = {
  palette2: {
    name: 'Orden y Claridad Operativa',
    theme: 'Limpieza | Procesos | Dashboard',
    colors: {
      primary: {
        50: '#e8f1ff',
        100: '#d1e3ff',
        200: '#a3c7ff',
        300: '#75abff',
        400: '#357EFF',
        500: '#1a66e6',
        600: '#1552b8',
        700: '#103e8a',
        800: '#0b2a5c',
        900: '#333742',
        950: '#1a1d21',
      },
      secondary: {
        50: '#f0f2f4',
        100: '#e1e5e9',
        200: '#c3cbd3',
        300: '#a5b1bd',
        400: '#8797a7',
        500: '#526476',
        600: '#42505e',
        700: '#313c47',
        800: '#21282f',
        900: '#101418',
        950: '#080a0c',
      },
      accent: {
        50: '#eef7ff',
        100: '#dcefff',
        200: '#b9dfff',
        300: '#96cfff',
        400: '#72BAFF',
        500: '#4fa5ff',
        600: '#3f84cc',
        700: '#2f6399',
        800: '#204266',
        900: '#102133',
        950: '#081019',
      },
    }
  },
  palette3: {
    name: 'Pragmatismo Moderno',
    theme: 'Eficiencia | Tecnología | Sobriedad',
    colors: {
      primary: {
        50: '#e8f2fc',
        100: '#d1e5f9',
        200: '#a3cbf3',
        300: '#75b1ed',
        400: '#67A7F1',
        500: '#4a8dd9',
        600: '#3a71ad',
        700: '#2a5581',
        800: '#1a3955',
        900: '#0E2E4A',
        950: '#071722',
      },
      secondary: {
        50: '#f5f3f1',
        100: '#ebe7e3',
        200: '#d7cfc7',
        300: '#c3b7ab',
        400: '#af9f8f',
        500: '#A7558',
        600: '#7e6d5c',
        700: '#5e5245',
        800: '#3f372e',
        900: '#1f1b17',
        950: '#0f0e0b',
      },
      accent: {
        50: '#fef3ed',
        100: '#fde7db',
        200: '#fbcfb7',
        300: '#f9b793',
        400: '#F87440',
        500: '#f65c1c',
        600: '#c54a16',
        700: '#943711',
        800: '#62250b',
        900: '#311206',
        950: '#190903',
      },
    }
  }
} as const;

export const activePalette = 'palette3';

export const getActiveColors = () => colorPalettes[activePalette].colors;

export default colorPalettes;
