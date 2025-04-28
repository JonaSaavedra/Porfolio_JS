declare module '@loscrackitos/svelte-typed-js' {
  import { SvelteComponentTyped } from 'svelte';

  export default class TypedJs extends SvelteComponentTyped<{
    strings: string[];
    typeSpeed?: number;
    backSpeed?: number;
    startDelay?: number;
    backDelay?: number;
    loop?: boolean;
    showCursor?: boolean;
    cursorChar?: string;
  }> {}
}