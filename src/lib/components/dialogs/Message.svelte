<script lang="ts">
  import Dialog from '../Dialog.svelte';
  import { onDestroy } from 'svelte';
  import { DialogResult } from '../../utils/index.js';

  let { message, onClose }: { message; onClose } = $props();
  let isOpen = $state(true);
  function closeWithRes(res: DialogResult) {
    isOpen = false;
    onClose(res);
  }
</script>

<Dialog {isOpen}>
  <div class="min-w-96">
    <p class="text-lg">{message}</p>
    <div class="h-4"></div>
    <div class="flex gap-2">
      <button
        class="bg-emerald-400 rounded px-2 py-1"
        on:click={() => closeWithRes(DialogResult.OK)}
      >
        Ok
      </button>
      
    </div>
  </div>
</Dialog>
<style lang="postcss">
</style>