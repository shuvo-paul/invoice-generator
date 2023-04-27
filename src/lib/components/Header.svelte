<script>
    import { AppBar } from '@skeletonlabs/skeleton';
		import { downloadPdf } from '$lib/utils';
</script>

<!-- App Bar -->
<AppBar>
    <svelte:fragment slot="lead">
        <strong class="text-xl uppercase">Invoice Generator</strong>
    </svelte:fragment>
    <svelte:fragment slot="trail">
        <button on:click={downloadPdf} class="btn btn-sm variant-ghost-surface">Download PDF</button>
    </svelte:fragment>
</AppBar>
