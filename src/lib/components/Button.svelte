<script lang="ts">
  import { cssVariables } from '../utils';

  let {
    color = 'transparent',
    textColor = '#333',
    hoverColor = '#99f',
    borderColor = 'transparent',
    borderThickness = 1,
    disabled,
    children
  }: {
    color?;
    textColor?;
    hoverColor?;
    borderColor?;
    borderThickness?;
    children;
    disabled?;
  } = $props();

  let borderWidth = borderThickness + 'px';
</script>

<button
  on:click
  type="button"
  use:cssVariables={{ color, hoverColor, textColor, borderColor, borderWidth }}
  {disabled}
  class="flex bg-primary items-center gap-1 pointer-events-auto font-label font-normal rounded-md py-1 px-2 text-[0.8125rem] leading-5 text-white"
>
  {@render children()}
</button>

<style lang="scss">
  button {
    color: var(--textColor);
    background-color: var(--color);
    border: var(--borderWidth) solid var(--borderColor);
    &:hover {
      background-color: var(--hoverColor);
    }
  }
</style>
