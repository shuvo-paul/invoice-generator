<script lang="ts">
	import InvoiceHeader from "$comp/InvoiceHeader.svelte";
	import InvoiceContacts from "$comp/InvoiceContacts.svelte";
	import ItemsHolder from "$comp/ItemsHolder.svelte";
	import InvoiceFooter from "$comp/InvoiceFooter.svelte";
</script>

<section class="container mt-11 mb-11">
	<div class="max-w-5xl mx-auto">
		<div id="invoice-wrapper" class=" bg-white/60 p-6 border border-primary-400">

			<InvoiceHeader/>
			<InvoiceContacts/>

			<ItemsHolder />
			<InvoiceFooter/>
		</div>
	</div>
	<!-- end box -->
</section>

<style lang="postcss">

</style>
