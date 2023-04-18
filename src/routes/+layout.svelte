<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-hamlindigo.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Header from '../lib/components/Header.svelte';

	import {details, logo} from '$lib/store';
  import { onMount } from 'svelte';

	let storeReady = false;

	let invoice: {
		logo?: string;
		details?: {
			number: string;
			date: Date;
		}
	} = {};

	onMount(() => {
		if(!localStorage.getItem('invoice')) {
			localStorage.setItem('invoice', JSON.stringify(invoice));
			storeReady = true;
			return;
		}

		const getLocalInvoice  = JSON.parse(localStorage.getItem('invoice') as string);
		details.set({...getLocalInvoice?.details, date: new Date(getLocalInvoice?.details?.date)});
		logo.set(getLocalInvoice?.logo);
		storeReady = true;
	})

	$: if (storeReady) {
			invoice.details = $details;
			invoice.logo = $logo;
			localStorage.setItem('invoice', JSON.stringify(invoice));
			console.log(invoice.details)
		}
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<Header/>
	</svelte:fragment>

	{#if storeReady}
		 <!-- Page Route Content -->
		 <slot />
	{/if}
</AppShell>
