<script lang="ts">
	export let heading: string;
	export let subheading: string;
</script>

<div
	class="flex flex-col items-center justify-center m-3 p-4 shadow-lg text-white text-center"
>
	<slot/>
	<h1 class="text-xl mt-5 font-bold">{heading}</h1>
	<h2 class="text-lg mt-2 font-light">{subheading}</h2>
</div>
