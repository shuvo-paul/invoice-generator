<script>
	import { subtotal, notes, terms, discount, total, paid, due } from "$lib/store";
</script>

<div class="grid grid-cols-12 gap-x-8">
	<div class="col-span-7">
		<textarea name="" id="" rows="3" placeholder="Notes" bind:value={$notes}></textarea>
		<textarea name="" id="" rows="3" placeholder="Terms" bind:value={$terms}></textarea>
	</div>
	<div class="col-span-4 col-end-13">
		<div class="grid grid-cols-1 gap-2">
			<div class="grid grid-cols-2 gap-2">
				<div class="label">
					Subtotal:
				</div>
				<div class="value">
					<input type="text" value={$subtotal.toFixed(2)} class="text-right">
				</div>
			</div>

			<div class="grid grid-cols-2 gap-2">
				<div class="label">
					Discount:
				</div>
				<div class="value">
					<input type="text" bind:value={$discount} class="text-right">
				</div>
			</div>

			<div class="grid grid-cols-2 gap-2">
				<div class="label">
					Total:
				</div>
				<div class="value">
					<input type="text" value={$total.toFixed(2)} class="text-right" readonly>
				</div>
			</div>

			<div class="grid grid-cols-2 gap-2">
				<div class="label">
					Amount Paid:
				</div>
				<div class="value">
					<input type="text" bind:value={$paid} class="text-right">
				</div>
			</div>

			<div class="grid grid-cols-2 gap-2">
				<div class="label">
					Balance Due:
				</div>
				<div class="value">
					<input type="text" value={$due.toFixed(2)} class="text-right" readonly>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	textarea {
		@apply w-full resize-none;
	}

	input {
		@apply max-w-full;
	}

	.label {
		@apply text-right;
	}
</style>
