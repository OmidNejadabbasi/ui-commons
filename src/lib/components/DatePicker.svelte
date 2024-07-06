<script lang="ts">
  let { label, value = $bindable('') } = $props<{ label; value: string }>();
  //   let _value = $state('02/02/2023');
</script>

<div class="w-full">
  <p class="pl-1 font-label font-light pb-1">{label}</p>
  <input type="date" class="input" bind:value />
</div>

<style lang="postcss">
  .input {
    @apply w-full block border-[1.5px] focus:border-blue-400 border-gray-300 
    transition-all duration-200 rounded px-2 py-1.5 focus:shadow-md shadow-slate-700;

    outline: none;
  }
</style>
