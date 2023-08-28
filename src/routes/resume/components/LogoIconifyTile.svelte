<script lang="ts">
	import Icon from '@iconify/svelte';
	export let heading: string;
	export let subheading: string;
	export let icon: string;
</script>

<div class="flex flex-col items-center justify-center shadow-lg p-3">
	<Icon class="h-20 w-20 mt-10" {icon} width="50" height="50" />
	<h1 class="text-white text-center text-2xl mt-2 font-medium">{heading}</h1>
	<h2 class="text-white text-center">{subheading}</h2>
</div>
