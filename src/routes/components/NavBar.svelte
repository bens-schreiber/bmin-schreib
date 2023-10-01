<script>
	import { page } from '$app/stores';
</script>

<nav class="flex" style="max-width: 800px;">
	<a
		href="home"
		class="w-1/3 {$page.url.pathname === '/home'
			? 'bg-bg-primary'
			: 'bg-bg-tertiary'} px-8 py-3 border-r border-r-slate-900 text-center text-white font-medium text-sm"
	>
		CONTACT
	</a>
	<a
		href="resume"
		class="w-1/3 {$page.url.pathname === '/resume'
			? 'bg-bg-primary'
			: 'bg-bg-tertiary'} px-8 py-3 border-r border-r-slate-900 text-center text-white font-medium text-sm"
	>
		RESUME
	</a>
	<a
		href="portfolio"
		class="w-1/3 {$page.url.pathname === '/portfolio'
			? 'bg-bg-primary'
			: 'bg-bg-tertiary'} px-8 py-3 text-center text-white font-medium text-sm"
	>
		WORK
	</a>
</nav>
