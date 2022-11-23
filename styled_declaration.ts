import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius?: string;
    display?: string;
    direction?: string;
    width?: string;
    fill: string;
    color?: {
      beige: {};
      violet: {};
      white: {};
      sienna: {};
      mustard: {};
      violetGradient: {};
    };
  }
}
