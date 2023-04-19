<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-hamlindigo.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Header from '../lib/components/Header.svelte';

	import {details, logo, billFrom, billTo, items, notes, terms, paid} from '$lib/store';
	import type {IItem} from '$lib/store';
  import { onMount } from 'svelte';

	let storeReady = false;

	let invoice: {
		logo?: string;
		details?: {
			number: string;
			date: Date;
		},
		billFrom? : {},
		billTo? : {},
		items? : IItem[],
		notes?: string,
		terms?: string,
		paid?: number
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
		billFrom.set(getLocalInvoice?.billFrom);
		billTo.set(getLocalInvoice?.billTo);
		items.setItems(getLocalInvoice?.items);
		notes.set(getLocalInvoice?.notes);
		terms.set(getLocalInvoice?.terms);
		paid.set(getLocalInvoice?.paid);
		storeReady = true;
	})

	$: if (storeReady) {
			invoice.details = $details;
			invoice.logo = $logo;
			invoice.billFrom = $billFrom;
			invoice.billTo = $billTo;
			invoice.items = $items;
			invoice.notes = $notes;
			invoice.terms = $terms;
			invoice.paid = $paid;
			localStorage.setItem('invoice', JSON.stringify(invoice));
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
