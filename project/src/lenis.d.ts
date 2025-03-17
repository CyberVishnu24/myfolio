declare module '@studio-freight/lenis' {
    export default class Lenis {
      constructor(options?: {
        duration?: number;
        easing?: (t: number) => number;
        direction?: 'vertical' | 'horizontal';
        smooth?: boolean;
        mouseMultiplier?: number;
      });
      on(event: 'scroll', callback: (args: { scroll: number }) => void): void;
      raf(time: number): void;
      scrollTo(target: number | string | HTMLElement, options?: { offset?: number; duration?: number }): void;
    }
  }
  