<script lang="ts">
	import '../styles/tailwind.css';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import NavBar from './components/NavBar.svelte';
	import Contact from './contact/components/Contact.svelte';
	$: innerWidth = 0;
	$: loading = true;

	onMount(() => {
		document.title = 'Benjamin Schreiber';

		// timeout seems to fix jittery page transitions
		if (loading) {
			setTimeout(() => {
				// if the innerWidth is greater than 768px, route off of the /contact page if on it
				if (innerWidth > 768 && $page.url.pathname === '/contact') {
					window.location.href = '/resume';
				}
				loading = false;
			}, 10);
		}
	});
</script>

<svelte:window bind:innerWidth />

<!--
	For the desktop version, the navbar/contact component is used on every page, so
	we a grid with a fixed NavBar and Contact.
-->

{#if loading}
	<div />
{:else if $page.url.pathname == '/pushapp'}
	<slot />
{:else if innerWidth > 768}
	<div class="flex">
		<span class="">
			<span class="fixed">
				<NavBar />
				<Contact />
			</span>
		</span>
		<span class="ml-[26rem] grow">
			<div class="mx-5">
				<slot />
			</div>
		</span>
	</div>
{:else}
	<NavBar />
	<slot />
{/if}

<style global lang="postcss">
	:global(body) {
		background-color: theme('colors.bg-primary');
	}
</style>
