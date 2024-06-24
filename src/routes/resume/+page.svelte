<script>
	import SVGTile from './components/SVGTile.svelte';
	import LogoIconifyTile from './components/LogoIconifyTile.svelte';
	import FloatingDownloadButton from './components/FloatingDownloadButton.svelte';
	const intellitectUrl = new URL('/src/lib/assets/IntelliTect_WhiteBlue-Box.svg', import.meta.url)
		.href;
	const wsuUrl = new URL('/src/lib/assets/washington-state-cougars.svg', import.meta.url).href;
	const coaUrl = new URL('/src/lib/assets/COA.png', import.meta.url).href;
	const fblaUrl = new URL('/src/lib/assets/FBLA.png', import.meta.url).href;
</script>

<FloatingDownloadButton />

<!-- WORK EXPERIENCE-->
<h1 class="font-black text-white text-5xl text-center mt-5">EXPERIENCE</h1>
<div class="border-t border-gray-300 my-8 mx-2" />

<div class="md:grid md:grid-cols-2 gap-5">
	<SVGTile heading="Software Developer Intern" subheading="06/2022 - 10/2023">
		<img src={intellitectUrl} alt="IntelliTect logo" class="h-24" />
	</SVGTile>

	<SVGTile heading="Washington State University" subheading="BS Computer Science - Graduating 2026">
		<img src={wsuUrl} alt="WSU logo" class="h-32" />
	</SVGTile>
</div>

<!-- PROGRAMMING LANGUAGES -->
<h1 class="font-black text-white text-5xl text-center mt-12">CURRENT LANGUAGES</h1>
<div class="border-t border-gray-300 my-8 mx-2" />

<div class="grid grid-cols-2 md:grid-cols-3 gap-5">
	<LogoIconifyTile heading="C" subheading="RayLib, POSIX" icon="logos:c" like={true} />

	<LogoIconifyTile
		heading="C#"
		subheading=".NET, XUnit, Coalesce"
		icon="devicon:csharp"
		like={true}
		professional={true}
	/>

	<LogoIconifyTile heading="Python" subheading="PyTest, Django" icon="logos:python" like={true} />

	<LogoIconifyTile
		heading="Dart"
		subheading="Flutter, Riverpod, GoRouter"
		icon="logos:dart"
		professional={true}
	/>

	<LogoIconifyTile
		heading="Golang"
		subheading="Gin, Concurreny, Go Tests"
		icon="skill-icons:golang"
		like={true}
	/>

	<LogoIconifyTile
		heading="Typescript"
		subheading="Vue, Svelte, React, WebRTC"
		icon="logos:typescript-icon"
		professional={true}
	/>
</div>

<!-- CLOUD RELATED PROGRAMMING SKILLS -->
<h1 class="font-black text-white text-5xl text-center mt-12">CLOUD SKILLS</h1>
<div class="border-t border-gray-300 my-8 mx-2" />

<div class="grid grid-cols-2 md:grid-cols-3 gap-5">
	<span class="col-span-2 md:col-span-1">
		<LogoIconifyTile
			heading="Azure"
			subheading="Web Apps, SqlServer, SignalR, Blob Storage"
			icon="devicon:azure"
			professional={true}
		/>
	</span>

	<LogoIconifyTile
		heading="GitHub"
		subheading="CI/CD, Actions"
		icon="logos:github-icon"
		professional={true}
	/>

	<LogoIconifyTile
		heading="Docker"
		subheading="Containerization, Dev Environments"
		icon="logos:docker-icon"
	/>
</div>

<!-- ACHIEVEMENTS, AWARDS -->
<h1 class="font-black text-white text-5xl text-center mt-12">ACCOLADES</h1>
<div class="border-t border-gray-300 my-8 mx-2" />

<div class="md:grid md:grid-cols-2 gap-5">
	<span class="col-span-2">
		<SVGTile heading="3rd in the United States" subheading="Coding and Programming 2021">
			<img src={fblaUrl} alt="FBLA logo" class="h-72" />
		</SVGTile>
	</span>

	<SVGTile heading="Washington State Champion" subheading="Coding and Programming 2021">
		<img src={fblaUrl} alt="FBLA logo" class="h-72" />
	</SVGTile>

	<SVGTile heading="Washington State Champion" subheading="Website Design 2022">
		<img src={fblaUrl} alt="FBLA logo" class="h-72" />
	</SVGTile>

	<SVGTile heading="Triangle STEM Fraternity" subheading="WSU Chapter Founder and Vice President">
		<img src={coaUrl} alt="COA logo" class="h-72" />
	</SVGTile>

	<SVGTile heading="IntelliTect Scholar" subheading="2022 Overall Winner">
		<img src={intellitectUrl} alt="IntelliTect logo" class="h-24" />
	</SVGTile>
</div>
