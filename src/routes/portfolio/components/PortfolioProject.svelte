<script lang="ts">
	import Icon from '@iconify/svelte';
	import Tile from './Tile.svelte';
	import { fly } from 'svelte/transition';
	export let title: string;
	export let description: string;
	export let projectType: string;
	export let img: string | undefined = undefined;
	export let icon: string | undefined = undefined;
	export let customHeight: number = 20;
	export let bg: string;
	export let href: string | undefined = undefined;
	$: expanded = false;
</script>

<Tile>
	<!--  IMAGE OR ICON -->
	<div
		class="relative h-16 mx-3 rounded flex items-center justify-center {bg}"
	>
		{#if icon}
			<Icon {icon} class="text-8xl text-white" />
		{/if}
		{#if img}
			<img src={img} alt={title} class="absolute h-{customHeight}" />
		{/if}
	</div>

	<!--  ICONS -->
	<div class="flex items-center justify-center mt-8 space-x-5">
		<slot />
	</div>

	<!--  TITLE DESCRIPTION TYPE -->
	<div class="flex flex-col items-center justify-center mt-8">
		<h1 class="text-4xl text-white text-center font-bold">{title}</h1>
		<h2 class="text-2xl text-white text-center">{description}</h2>
		<h3 class="text-xl text-white text-center font-light">{projectType}</h3>
		{#if href}
			<a
				{href}
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center justify-center space-x-2 mt-8 text-white underline"
			>
				<Icon icon="akar-icons:github-fill" class="text-2xl text-white" />
				<span class="text-white">View on Github</span>
			</a>
		{/if}
	</div>

	<!--  CLICK TO EXPAND BUTTON -->
	<div class="flex items-center justify-center mt-8 w-30">
		<button
			class="bg-bg-accent text-white py-2 px-4 rounded"
			on:click={() => {
				expanded = !expanded;
			}}
		>
			{expanded ? 'Click to Hide' : 'Click to Expand'}
		</button>
	</div>
</Tile>

<!--  EXPANDED CONTENT -->
{#if expanded}
	<slot name="expanded" />

	<!--  CLICK TO EXPAND BUTTON -->
	<div class="flex items-center justify-center mt-8 w-30">
		<button
			class="bg-bg-accent text-white py-2 px-4 rounded"
			on:click={() => {
				expanded = !expanded;
			}}
		>
			{expanded ? 'Click to Hide' : 'Click to Expand'}
		</button>
	</div>
{/if}

<div class="m-16 md:m-28"/>
