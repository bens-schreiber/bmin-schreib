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

<div class="md:grid md:grid-cols-2">
	<SVGTile heading="Software Developer Intern" subheading="06/2022 - 10/2023">
		<img src={intellitectUrl} alt="IntelliTect logo" class="h-24" />
	</SVGTile>

	<SVGTile heading="Washington State University" subheading="BS Computer Science - Graduating 2026">
		<img src={wsuUrl} alt="WSU logo" class="h-32" />
	</SVGTile>
</div>

<!-- PROGRAMMING LANGUAGES -->
<h1 class="font-black text-white text-5xl text-center mt-12">LANGUAGES</h1>
<div class="border-t border-gray-300 my-8 mx-2" />

<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
	<LogoIconifyTile
		heading="Dart (Flutter)"
		subheading="Riverpod, GoRouter, GetX"
		icon="logos:dart"
	/>

	<LogoIconifyTile heading="Python" subheading="Django, PyMongo" icon="logos:python" />

	<LogoIconifyTile heading="C#" subheading=".NET " icon="devicon:csharp" />

	<LogoIconifyTile heading="TS / JS" subheading="Svelte, React" icon="logos:typescript-icon" />

	<LogoIconifyTile heading="Java" subheading="JavaFX, JettyServer, Gradle" icon="logos:java" />

	<LogoIconifyTile heading="Golang" subheading="Gin, GORM" icon="skill-icons:golang" />

	<span class="col-span-2 md:col-span-3">
		<LogoIconifyTile
			heading="C / C++"
			subheading="WSU Computer Science, RayLib"
			icon="logos:c-plusplus"
		/>
	</span>
</div>

<!-- DATABASES -->
<h1 class="font-black text-white text-5xl text-center mt-12">DATABASES</h1>
<div class="border-t border-gray-300 my-8 mx-2" />

<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
	<LogoIconifyTile heading="MongoDB" subheading="PyMongo, Djongo" icon="skill-icons:mongodb" />

	<LogoIconifyTile heading="PostgreSQL" subheading="Django" icon="logos:postgresql" />

	<span class="col-span-2 md:col-span-1">
		<LogoIconifyTile
			heading="MySQL"
			subheading=".NET Entity Framework, GORM"
			icon="devicon:mysql"
		/>
	</span>
</div>

<!-- CLOUD RELATED PROGRAMMING SKILLS -->
<h1 class="font-black text-white text-5xl text-center mt-12">CLOUD SKILLS</h1>
<div class="border-t border-gray-300 my-8 mx-2" />

<div class="grid grid-cols-2 md:grid-cols-3 gap-0">
	<span class="col-span-2 md:col-span-1">
		<LogoIconifyTile
			heading="Azure"
			subheading="Web Apps, Databases, Blob Storage, Telemetry, SignalR"
			icon="devicon:azure"
		/>
	</span>

	<LogoIconifyTile heading="GitHub" subheading="CI/CD, Actions" icon="logos:github-icon" />

	<LogoIconifyTile
		heading="Docker"
		subheading="Containerization, Dev Environments"
		icon="logos:docker-icon"
	/>
</div>

<!-- ACHIEVEMENTS, AWARDS -->
<h1 class="font-black text-white text-5xl text-center mt-12">ACCOLADES</h1>
<div class="border-t border-gray-300 my-8 mx-2" />

<div class="md:grid md:grid-cols-2">
	<span class="col-span-2">
		<SVGTile heading="3rd in the United States" subheading="Coding and Programming 2021">
			<img src={fblaUrl} alt="FBLA logo" class="h-72" />
		</SVGTile>
	</span>

	<SVGTile heading="Triangle STEM Fraternity" subheading="WSU Chapter Founder and Vice President">
		<img src={coaUrl} alt="COA logo" class="h-72" />
	</SVGTile>

	<SVGTile heading="Washington State Champion" subheading="Coding and Programming 2021">
		<img src={fblaUrl} alt="FBLA logo" class="h-72" />
	</SVGTile>

	<SVGTile heading="Washington State Champion" subheading="Website Design 2022">
		<img src={fblaUrl} alt="FBLA logo" class="h-72" />
	</SVGTile>

	<SVGTile heading="IntelliTect Scholar" subheading="2022 Overall Winner">
		<img src={intellitectUrl} alt="IntelliTect logo" class="h-24" />
	</SVGTile>
</div>
