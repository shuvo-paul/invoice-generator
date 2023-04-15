<script lang="ts">
    import { items } from "$lib/store";
    export let index: number;
    export let item: string;
    export let quantity: number;
    export let rate: number;
    export let total: number;
    $: {
        total = rate * quantity;
        items.updateItem(index, {item, quantity, rate, total});
    };
</script>
<div class="grid grid-cols-12 ">    
    <div class="col-span-6">
        <input type="text" bind:value={item}>
    </div>
    <div class="col-span-2">
        <input type="text" bind:value={quantity}>
    </div>
    <div class="col-span-2">
        <input type="text" bind:value={rate}>
    </div>
    <div class="col-span-2">
        <div class="flex flex-row">
            <input type="text" bind:value={total} readonly >
            <button on:click={()=>items.removeItem(index)}>-</button>
        </div>
    </div>
</div>

<style lang="postcss">
    input {
        @apply bg-transparent border-0 focus:border-0 focus:outline-0 focus:shadow-transparent focus:ring-transparent focus:bg-slate-200 w-full;
    }
</style>