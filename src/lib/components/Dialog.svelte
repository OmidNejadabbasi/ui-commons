<script lang="ts">
  import { cssVariables } from '../utils/svelte-utils.js';
  import { fade } from 'svelte/transition';

  let { isOpen = $bindable() } = $props<{ isOpen: boolean }>();

  let left,
    width = $state(0);
  let top;
  let wrapper: HTMLElement;
  let widthVar = $derived(`${width}px`);

  function close() {
    isOpen = false;
  }
</script>

<div
  class="wrapper"
  bind:this={wrapper}
  class:showing={isOpen}
  bind:clientWidth={width}
  use:cssVariables={{ widthVar }}
>
  <slot />
</div>

{#if isOpen}
  <div class="overlay" on:click={close} transition:fade></div>
{:else}{/if}

<style>
  .showing {
    display: block !important;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #202124;
    opacity: 0.42;
    z-index: 10;
  }
  .wrapper {
    @apply rounded-md p-3 bg-white;
    position: absolute;
    left: calc(50vw - var(--widthVar) / 2);
    top: 50vh;
    transform: translate(0, -50%);
    max-height: 80%;
    z-index: 20;
    display: none;
  }
</style>
