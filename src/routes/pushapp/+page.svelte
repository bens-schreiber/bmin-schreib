<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const invite = urlParams.get('invite');
		window.location.href = 'com.bmin-schreib.thepushapp://invite?=' + invite;
	});
</script>
