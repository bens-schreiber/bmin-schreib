<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const invite = urlParams.get('invite');
		window.location.href = 'com.bminschreib.thepushapp://?invite=' + invite;
	});
</script>
