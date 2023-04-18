<script lang="ts">
	import { DateInput } from 'date-picker-svelte'
	import { details } from '$lib/store';
</script>

<div class="grid grid-cols-1 gap-4">
	<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
		<div class="input-group-shim">#</div>
		<input type="text" placeholder="0001" bind:value={$details.number} />
	</div>
	<DateInput bind:value={$details.date} format="yyyy-MM-dd" placeholder="Due Date" />
</div>

<style lang="postcss">
	:root {
		--date-input-width: 100%;
	}
</style>
