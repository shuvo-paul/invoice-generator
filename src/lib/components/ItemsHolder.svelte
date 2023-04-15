<script lang="ts">
    import ItemHead from "./ItemHead.svelte";
    import Item from "./Item.svelte";
    import {items} from "$lib/store"

</script>

<div class="mt-4">
    <ItemHead/>
    {#each $items as item, index}
        <Item {...item} {index} />
    {/each}
    <div class="flex flex-row justify-end">
        <button class="btn variant-filled" on:click={items.addItem} >+</button>
    </div>
</div>