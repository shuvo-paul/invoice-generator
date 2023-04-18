<script lang="ts">
  import InvoiceLogo from "./InvoiceLogo.svelte";
	import InvoiceDetails from "./InvoiceDetails.svelte";
</script>

<h1 class="text-center">
	<input type="text" value="Invoice" class=" bg-transparent border-0 text-4xl font-bold text-center">
</h1>
<div class="flex flex-row justify-between items-start mb-6">
	<InvoiceLogo />
	<InvoiceDetails />
</div>
