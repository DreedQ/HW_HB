import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius?: string;
    display?: string;
    direction?: string;
    width?: string;
    color?: {
      main: string;
      secondary: string;
    };
  }
}
