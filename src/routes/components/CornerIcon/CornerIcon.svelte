<script lang="ts">
	import SvgBackwards from './SvgBackwards.svelte';
	import SvgForwards from './SvgForwards.svelte';

	$: clicked = false;

	function waitOneSecond(): Promise<void> {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve();
			}, 1000);
		});
	}

	async function onClick() {
		clicked = true;
		await waitOneSecond();
		window.location.href = "resume";
	}
</script>

<button class="absolute top-0 right-0 h-32" on:click={onClick}>
	{#if clicked}
		<SvgBackwards />
	{:else}
		<SvgForwards />
	{/if}
</button>
