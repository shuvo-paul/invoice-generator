<script lang="ts">
	import { billFrom, billTo  } from '$lib/store';
</script>

<div class="grid grid-cols-2 gap-x-8">
	<div class="">
		<h2 class="unstyled">From</h2>
		<div class="grid grid-cols-1 gap-4">
			<input type="text" placeholder="Business Name" bind:value={$billFrom.name}>
			<input type="text" placeholder="Email" bind:value={$billFrom.email}>
			<input type="text" placeholder="Address" bind:value={$billFrom.address}>
			<input type="text" placeholder="Phone" bind:value={$billFrom.phone}>
		</div>
	</div>
	<div class="">
		<h2 class="unstyled">Bill To</h2>
		<div class="grid grid-cols-1 gap-4">
			<input type="text" placeholder="Business Name" bind:value={$billTo.name}>
			<input type="text" placeholder="Email" bind:value={$billTo.email}>
			<input type="text" placeholder="Address" bind:value={$billTo.address}>
			<input type="text" placeholder="Phone" bind:value={$billTo.phone}>
		</div>
	</div>
</div>

<style lang="postcss">
	h2 {
		@apply mb-4 text-lg font-semibold;
	}

	input {
		@apply w-full border-0 bg-transparent;
	}
</style>
