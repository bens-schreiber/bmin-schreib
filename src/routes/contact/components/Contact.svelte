<script>
	import IconTextRedirect from './IconTextRedirect.svelte';
	const logoUrl = new URL('/src/lib/assets/logo.svg', import.meta.url).href;
</script>

<img
	class="m-5 md:-mb-5 md:h-96"
	src={logoUrl}
	alt="Logo"
/>
<IconTextRedirect
	icon={'devicon:linkedin'}
	text={'Ben Schreiber'}
	redirect={'https://www.linkedin.com/in/benjamin-schreiber-a14aa219a/'}
/>
<IconTextRedirect
	icon={'bi:github'}
	text={'bens-schreiber'}
	redirect={'https://github.com/bens-schreiber'}
/>
<IconTextRedirect
	icon={'logos:google-gmail'}
	text={'bpschreiber2003'}
	redirect={'bpschreiber2003@gmail.com'}
/>
