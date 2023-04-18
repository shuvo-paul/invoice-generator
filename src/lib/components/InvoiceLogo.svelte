<script lang="ts">
	import {logo} from '$lib/store';

	let imgFile: HTMLInputElement;

	const handleChange = () => {
		if (imgFile && imgFile.files) {
			const reader = new FileReader();

			reader.onload = (readerEvent) => {
				$logo = readerEvent?.target?.result as string;
			};

			reader.readAsDataURL(imgFile?.files[0]);
		}
	}
</script>

<div class="w-44 h-44 block relative border">
	<label for="logo" class="hover:cursor-pointer w-full h-full">
		<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
			Logo
		</div>
		{#if $logo}
			<div class=" absolute top-0 left-0 w-full h-full bg-white">
				<img src={$logo} alt="Logo" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-h-full object-cover">
			</div>
		{/if}
	</label>

	<input type="file" id="logo" bind:this={imgFile} on:change={handleChange} class="hidden">
</div>
