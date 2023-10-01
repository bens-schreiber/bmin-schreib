<script>
	import '../styles/tailwind.css';
	import { onMount } from 'svelte';
	import NavBar from './components/NavBar.svelte';

	onMount(() => {
		document.title = 'Benjamin Schreiber';
	});
</script>


<NavBar/>
<slot />

<style global lang="postcss">
	:global(body) {
		background-color: theme('colors.bg-primary');
	}
</style>
