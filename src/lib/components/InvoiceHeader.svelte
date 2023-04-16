<script lang="ts">
	let imgFile: HTMLInputElement;
	let imgSrc: string;

	const handleChange = () => {
		if (imgFile && imgFile.files) {
			imgSrc = URL.createObjectURL(imgFile?.files[0]);
		}
	}
</script>

<h1 class="text-center">
	<input type="text" value="Invoice" class=" bg-transparent border-0 text-4xl font-bold text-center">
</h1>
<div class="flex flex-row justify-between items-start mb-6">
	<div class="w-44 h-44 block relative border">
		<label for="logo" class="hover:cursor-pointer w-full h-full">
			<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				Logo
			</div>
			{#if imgSrc}
				<img src={imgSrc} alt="Logo" class=" absolute top-0 left-0 w-full h-full object-cover">
			{/if}
		</label>

		<input type="file" id="logo" bind:this={imgFile} on:change={handleChange} class="hidden">
	</div>
	<div class="grid grid-cols-1 gap-4">
		<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
			<div class="input-group-shim">#</div>
			<input type="text" placeholder="0001" />
		</div>
		<input type="text" placeholder="Due Date" />
	</div>
</div>
