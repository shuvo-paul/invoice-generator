<script lang="ts">
	import { DateInput } from 'date-picker-svelte'
  import { onMount } from 'svelte';

	let mounted = false;
	let details = {
		number: '',
		date: new Date()
	}

	$: {
		if (typeof localStorage !== 'undefined' && mounted) {
			localStorage.setItem('details', JSON.stringify(details))
		}
	}

	onMount(() => {
		if (localStorage.getItem('details') && localStorage.getItem('details') !== 'undefined') {
			const localData = JSON.parse(localStorage.getItem('details') as string);
			details.number = localData.number;
			details.date = new Date(localData.date);
		}
		mounted = true;
	})
</script>
<div class="grid grid-cols-1 gap-4">
	<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
		<div class="input-group-shim">#</div>
		<input type="text" placeholder="0001" bind:value={details.number} />
	</div>
	<DateInput bind:value={details.date} format="yyyy-MM-dd" placeholder="Due Date" />
</div>

<style lang="postcss">
	:root {
		--date-input-width: 100%;
	}
</style>
