<script lang="ts">
	import '../styles/tailwind.css';
	import {page} from '$app/stores';
	import { onMount } from 'svelte';
	import NavBar from './components/NavBar.svelte';
	import Contact from './contact/components/Contact.svelte';

	onMount(() => {
		document.title = 'Benjamin Schreiber';
	});

	// Tailwind media queries are being strange in this case, so I am resorting
	// to binding the innerWidth and innerHeight of the window
	$: innerWidth = 0;
	$: innerHeight = 0;

	// if the innerWidth is greater than 768px, route off of the /contact page if on it
	$: if (innerWidth > 768 && $page.url.pathname === "/contact") {
		window.location.href = "/resume"
	}
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<!--
	For the desktop version, the navbar/contact component is used on every page, so
	we a grid with a fixed NavBar and Contact.
-->
{#if innerWidth > 768}
	<div class="flex">
		<span class="">
			<span class="fixed">
				<NavBar />
				<Contact />
			</span>
		</span>
		<span class="ml-[26rem] grow">
			<slot />
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
