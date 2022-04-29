import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: string;
      secondary: string;
      textColor: string;
      borderColor: string;
      titleColor: string;
    },
  }
};
