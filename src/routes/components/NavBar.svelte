<script>
    import { page } from '$app/stores';
</script>

<nav class="flex justify-around" style="max-width: 800px;">
    <a
        href="home"
        class="w-1/3 {$page.url.pathname === '/home'
            ? 'bg-bg-primary'
            : 'bg-bg-tertiary'} px-8 py-3 border-r border-r-slate-900 text-center text-white font-bold"
    >
        CONTACT
    </a>
    <a
        href="resume"
        class="w-1/3 {$page.url.pathname === '/resume'
            ? 'bg-bg-primary'
            : 'bg-bg-tertiary'} px-8 py-3 border-r border-r-slate-900 text-center text-white font-bold"
    >
        RESUME
    </a>
    <a
        href="portfolio"
        class="w-1/3 {$page.url.pathname === '/portfolio'
            ? 'bg-bg-primary'
            : 'bg-bg-tertiary'} px-8 py-3 text-center text-white font-bold"
    >
        WORK
    </a>
</nav>