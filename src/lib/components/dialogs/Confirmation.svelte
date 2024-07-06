<script lang="ts">
  import Dialog from '../Dialog.svelte';
  import { untrack } from 'svelte';
  import { DialogResult } from '../../utils/index.js';

  let { message, onClose }: { message; onClose } = $props();
  let isDiagOpen = $state(true);
  $effect(() => {
    if (isDiagOpen === false) {
      untrack(() => {
        closeWithRes(DialogResult.CANCEL);
      });
    }
  });
  function closeWithRes(res: DialogResult) {
    isDiagOpen = false;
    onClose(res);
  }
</script>

<Dialog bind:isOpen={isDiagOpen}>
  <div class="min-w-96">
    <p class="text-lg pb-6 pt-2">{message}</p>
    <div class="flex gap-2">
      <button
        class="bg-emerald-400 rounded px-2 py-1"
        on:click={() => closeWithRes(DialogResult.OK)}
      >
        Ok
      </button>
      <button
        class="rounded bg-gray-200 px-2 py-1"
        on:click={() => closeWithRes(DialogResult.CANCEL)}>Cancel</button
      >
    </div>
  </div>
</Dialog>

<style lang="postcss">
</style>
