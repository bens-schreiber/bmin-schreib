<script lang="ts">
	import SvgBackwards from './SvgBackwards.svelte';
	import SvgForwards from './SvgForwards.svelte';

	$: clicked = false;

	async function onClick() {
		clicked = true;
		await new Promise(resolve => {
			setTimeout(resolve, 500)
		});
		
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
