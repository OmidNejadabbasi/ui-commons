<script lang="ts">
  import Dialog from '../Dialog.svelte';
  import { onDestroy } from 'svelte';
  import { DialogResult } from '../../utils/index.js';
  import Fa from 'svelte-fa';
  import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

  let { errorTitle, message, onClose }: { errorTitle; message; onClose } = $props();
  let isOpen = $state(true);
  function closeWithRes(res: DialogResult) {
    isOpen = false;
    onClose(res);
  }
</script>

<Dialog {isOpen} zindex=20>
  <div class="min-w-96">
    <h3 class="mb-3 ml-2 flex items-center">
      <Fa icon={faTriangleExclamation} color="#f99" />
      <div class="w-3"></div>
      <p>{errorTitle}</p>
    </h3>
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
