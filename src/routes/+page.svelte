<script>
	import CornerIcon from './components/CornerIcon/CornerIcon.svelte';
	import IconTextRedirect from './components/IconTextRedirect.svelte';
</script>

<CornerIcon/>

<img
	height="500"
	class="flex justify-center max-h-full m-5"
	src="src/lib/assets/logo.svg"
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
