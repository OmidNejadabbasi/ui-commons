<script lang="ts">
  import Dialog from "../Dialog.svelte";
  import Button from "../Button.svelte";
  import { createEventDispatcher, type EventDispatcher } from "svelte";
  import type { DialogResult } from "$lib/index.js";

  let { message } = $props();
  let isOpen = true;
  let dispatcher = createEventDispatcher()
  function confirm(){
    isOpen = false;
    // dispatcher()
  }
</script>

<Dialog {isOpen} >
    <p class="text-lg"> {message}</p>
    <div class="flex">
        {@render primaryButton("Okay")}
    </div>
</Dialog>
{#snippet primaryButton(text)}
        <button class="bg-emerald-400 rounded px-2 py-1" on:click={confirm}>Ok</button>
        <button class="rounded bg-gray-200 px-2 py-1" 
        on:click={()=>isOpen= false}>Cancel</button>
{/snippet}