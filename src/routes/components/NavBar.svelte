<script lang="ts">
	import { page } from '$app/stores';

	$: contactSelected = false;
	$: resumeSelected = false;
	$: portfolioSelected = false;

	$: {
		contactSelected = $page.url.pathname === '/contact';
		resumeSelected = $page.url.pathname === '/resume';
		portfolioSelected = $page.url.pathname === '/portfolio';
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
		class="{bgColor(portfolioSelected)} grow px-8 py-3 text-center text-white font-medium text-sm"
	>
		PORTFOLIO
	</a>
</nav>
