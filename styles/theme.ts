import {extendTheme} from 'native-base';

const theme = extendTheme({
  lineHeights: {
    h1: 48,
    h2: 40,
    h3: 32,
    p1: 24,
    p3: 16,
  },

  colors: {
    dark: {
      50: '#F6F7FC',
      100: '#EDEFFA',
      200: '#E5E7F6',
      300: '#CDD1EA',
      400: '#A1A6C6',
      500: '#8287AA',
      600: '#67698D',
      700: '#494F75',
      800: '#353A5A',
      900: '#272C46',
      1000: '#20243A',
    },
  },
  fontSizes: {
    h1: 40,
    h2: 32,
    h3: 24,
    p1: 16,
    p2: 14,
    p3: 12,
  },

  shadows: {
    elevation1: {
      shadowColor: '#243746',
      shadowOffset: {
        width: 8,
        height: 8,
      },
      shadowOpacity: 0.08,
      shadowRadius: 16,
      elevation: 25,
    },
    elevation2: {
      shadowColor: '#243746',
      shadowOffset: {
        width: 8,
        height: 8,
      },
      shadowOpacity: 0.08,
      shadowRadius: 24,
      elevation: 25,
    },
    elevation3: {
      shadowColor: '#243746',
      shadowOffset: {
        width: 16,
        height: 16,
      },
      shadowOpacity: 0.08,
      shadowRadius: 24,
      elevation: 25,
    },
    elevation4: {
      shadowColor: '#243746',
      shadowOffset: {
        width: 24,
        height: 24,
      },
      shadowOpacity: 0.08,
      shadowRadius: 32,
      elevation: 25,
    },
  },
});

export default theme;

type ThemeType = typeof theme;

declare module 'native-base' {
  interface ITheme extends ThemeType {
    lineHeights: ThemeType['lineHeights'];
    colors: ThemeType['colors'];
    fontSizes: ThemeType['fontSizes'];
    fontConfig: ThemeType['fontConfig'];
    shadows: ThemeType['shadows'];
  }
}
