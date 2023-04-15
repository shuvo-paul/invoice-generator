<script lang="ts">
	import ItemsHolder from "$lib/components/ItemsHolder.svelte";
	import { subtotal } from "$lib/store";
</script>

<section class="container mt-11">
	<div class=" bg-white/20 p-6 border border-primary-400">
		<div class="flex flex-row justify-between">
			<div class="">
				Add Your Logo
			</div>
			<div class="">
				Invoice
				<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
					<div class="input-group-shim">#</div>
					<input type="search" placeholder="Search..." />
				</div>
			</div>
		</div>

		<div class="flex flex-row justify-between">
			<div class=" max-w-xs">
				<textarea class="textarea resize-none" name="" id="" rows="2" placeholder="Who is this invoice from? (required)"></textarea>
			</div>
		</div>

		<ItemsHolder />
	</div>
	Subtotal: {$subtotal}
	<!-- end box -->
</section>

<style lang="postcss">

</style>
