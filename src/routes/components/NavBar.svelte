<script lang="ts">
	// Ideally I could just check the $page.url.pathname, but it is
	// really buggy and doesn't update properly, so, I'm just using a bunch of vars :D
	$: contactSelected = false;
	$: resumeSelected = false;
	$: workSelected = false;

	function bgColor(selected: boolean): string {
		return selected ? 'bg-bg-primary' : 'bg-bg-secondary';
	}
</script>

<nav class="flex">
	<a
		href="contact"
		class=" {bgColor(
			contactSelected
		)} md:hidden grow px-8 py-3 border-r border-r-slate-900 text-center text-white font-medium text-sm"
		on:click={() => {
			contactSelected = true;
			resumeSelected = false;
			workSelected = false;
		}}
	>
		CONTACT
	</a>
	<a
		href="resume"
		class="{bgColor(
			resumeSelected
		)} grow px-8 py-3 border-r border-r-slate-900 text-center text-white font-medium text-sm"
		on:click={() => {
			contactSelected = false;
			resumeSelected = true;
			workSelected = false;
		}}
	>
		RESUME
	</a>
	<a
		href="portfolio"
		class="{bgColor(workSelected)} grow px-8 py-3 text-center text-white font-medium text-sm"
		on:click={() => {
			contactSelected = false;
			resumeSelected = false;
			workSelected = true;
		}}
	>
		WORK
	</a>
</nav>
