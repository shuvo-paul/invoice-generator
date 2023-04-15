<script>
    import { AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- App Bar -->
<AppBar>
    <svelte:fragment slot="lead">
        <strong class="text-xl uppercase">Invoice Generator</strong>
    </svelte:fragment>
    <svelte:fragment slot="trail">
        <button class="btn btn-sm variant-ghost-surface">Download PDF</button>
    </svelte:fragment>
</AppBar>