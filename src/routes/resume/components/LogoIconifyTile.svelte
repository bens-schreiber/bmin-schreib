<script lang="ts">
	import Icon from '@iconify/svelte';
	export let heading: string;
	export let subheading: string = '';
	export let icon: string;
	export let like: boolean = false;
	export let professional: boolean = false;
	const chips = like || professional;
</script>

<div class="relative flex flex-col items-center justify-center shadow-md p-3">
	<Icon class="h-20 w-20 mt-16" {icon} width="50" height="50" />
	<h1 class="text-white text-center text-2xl mt-2 font-medium">{heading}</h1>
	<h2 class="text-white text-center">{subheading}</h2>

	{#if chips}
		<div class="absolute top-3 left-3 flex gap-1">
			{#if like}
				<div class="flex gap-1 bg-gray-600 rounded-full px-3 py-1 text-xs">
					<Icon icon="emojione:red-heart" class="h-4 w-4" />
					<strong class="text-white">LIKE</strong>
				</div>
			{/if}

			{#if professional}
				<div class="flex gap-1 bg-gray-600 rounded-full px-3 py-1 text-xs">
					<Icon icon="emojione:briefcase" class="h-4 w-4" />
					<strong class="text-white">INTELLITECT</strong>
				</div>
			{/if}
		</div>
	{/if}
</div>
