<!-- 
    layout that applies itself to everything within the same
    directory. This is where you can add global styles, scripts, etc.

    <slot /> is where the content of the page will be injected
-->
<script>
	import '../styles/tailwind.css';
	import { onMount } from 'svelte';

	onMount(() => {
		document.title = 'Benjamin Schreiber';
	});
</script>

<slot />

<style global lang="postcss">
	:global(body) {
		background-color: theme('colors.bg-primary');
	}
</style>
