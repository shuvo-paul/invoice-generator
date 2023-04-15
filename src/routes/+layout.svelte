<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-hamlindigo.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Header from '../lib/components/Header.svelte';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<Header/>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
