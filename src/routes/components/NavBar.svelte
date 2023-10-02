<script lang="ts">
	import { page } from '$app/stores';

	$: contactSelected = false;
	$: resumeSelected = false;
	$: workSelected = false;

	$: {
		contactSelected = $page.url.pathname === '/contact';
		resumeSelected = $page.url.pathname === '/resume';
		workSelected = $page.url.pathname === '/portfolio';
	}

	function bgColor(selected: boolean): string {
		return selected ? 'bg-bg-secondary' : 'bg-bg-primary';
	}
</script>

<nav class="flex">
	<a
		href="contact"
		class=" {bgColor(
			contactSelected
		)} md:hidden grow px-8 py-3 border-r-[1px] border-r-slate-500 text-center text-white font-medium text-sm"
	>
		CONTACT
	</a>
	<a
		href="resume"
		class="{bgColor(
			resumeSelected
		)} grow px-8 py-3 border-r-[1px] border-r-slate-500 text-center text-white font-medium text-sm"
	>
		RESUME
	</a>
	<a
		href="portfolio"
		class="{bgColor(workSelected)} grow px-8 py-3 text-center text-white font-medium text-sm"
	>
		WORK
	</a>
</nav>
