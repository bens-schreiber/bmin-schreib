<script lang="ts">
	import Icon from '@iconify/svelte';

	const pdfUrl = new URL('/src/lib/assets/BenjaminSchreiberResume.pdf', import.meta.url).href;

	// Function to download a pdf from lib/assets
	const downloadPDF = () => {
		const link = document.createElement('a');
		link.href = pdfUrl;
		link.download = 'BenjaminSchreiberResume.pdf';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};
</script>

<!-- Circular button -->
<div class="fixed bottom-4 right-4 z-10">
	<button
		on:click={downloadPDF}
		class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-md"
	>
		<Icon class="h-8 w-8" icon="mdi:download" />
	</button>
</div>
