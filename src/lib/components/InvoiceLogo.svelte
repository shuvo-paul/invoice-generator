<script lang="ts">
  import { onMount } from "svelte";

	let imgFile: HTMLInputElement;
	let imgSrc: string;

	const handleChange = () => {
		if (imgFile && imgFile.files) {
			// imgSrc = URL.createObjectURL(imgFile?.files[0]);

			const reader = new FileReader();

			reader.onload = (readerEvent) => {
				imgSrc = readerEvent?.target?.result as string;
				localStorage.setItem('logo', imgSrc);
			};

			reader.readAsDataURL(imgFile?.files[0]);
		}
	}

	onMount(() => {
		if (localStorage.getItem('logo')) {
			imgSrc = localStorage.getItem('logo') as string;
		}
	})
</script>

<div class="w-44 h-44 block relative border">
	<label for="logo" class="hover:cursor-pointer w-full h-full">
		<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
			Logo
		</div>
		{#if imgSrc}
			<div class=" absolute top-0 left-0 w-full h-full bg-white">
				<img src={imgSrc} alt="Logo" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-h-full object-cover">
			</div>
		{/if}
	</label>

	<input type="file" id="logo" bind:this={imgFile} on:change={handleChange} class="hidden">
</div>
