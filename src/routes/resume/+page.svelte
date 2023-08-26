<script>
	import Icon from '@iconify/svelte';
	import SVGTile from './components/SVGTile.svelte';
	import LogoIconifyTile from './components/LogoIconifyTile.svelte';
</script>

<h1 class="font-black text-white text-5xl text-center mt-5">BENJAMIN SCHREIBER</h1>

<SVGTile
	svg="src/lib/assets/IntelliTect_WhiteBlue-Box.svg"
	heading="Software Developer Intern"
	subheading="2022 - Present"
/>

<SVGTile
	svg="src/lib/assets/washington-state-cougars.svg"
	heading="Washington State University"
	subheading="Computer Science - 2026"
/>

<h1 class="font-black text-white text-5xl text-center mt-12">LANGUAGES</h1>

<div class="grid grid-cols-2 gap-4">
	<LogoIconifyTile
		heading="Dart (Flutter)"
		subheading="Riverpod, GoRouter, GetX"
		icon="logos:dart"
	/>

	<LogoIconifyTile heading="Python" subheading="Django, PyMongo (w/ MongoDB)" icon="logos:python" />

	<LogoIconifyTile heading="C#" subheading="ASP.NET Suite (w/ SQL)" icon="devicon:csharp" />

	<LogoIconifyTile heading="TS / JS" subheading="Svelte, React" icon="logos:typescript-icon" />

	<LogoIconifyTile heading="Java" subheading="JavaFX, JettyServer, Gradle" icon="logos:java" />

	<LogoIconifyTile heading="Golang" subheading="Gin, Gorm, Golang-Migrate" icon="devicon:go" />

	<span class="col-span-2">
		<LogoIconifyTile
			heading="C / C++"
			subheading="WSU Computer Science, RayLib"
			icon="logos:c-plusplus"
		/>
	</span>
</div>

<h1 class="font-black text-white text-5xl text-center mt-12">CLOUD SKILLS</h1>
<div class="grid grid-cols-2 gap-4">
	<LogoIconifyTile heading="Azure" subheading="Web Apps, BLOB Storage" icon="devicon:azure" />

	<LogoIconifyTile
		heading="GitHub"
		subheading="CI/CD, Pipelines, Actions"
		icon="logos:github-icon"
	/>

	<LogoIconifyTile
		heading="Docker"
		subheading="Containerization, Dev Environments"
		icon="logos:docker-icon"
	/>

	<LogoIconifyTile
		heading="CodeMagic"
		subheading="IOS / Android / MacOS Deployment"
		icon="simple-icons:codemagic"
	/>

	<span class="col-span-2"
		><LogoIconifyTile heading="Swagger" subheading="API Documentation" icon="logos:swagger" /></span
	>
</div>

<h1 class="font-black text-white text-5xl text-center mt-12">ACCOLADES</h1>

<SVGTile
	svg="src/lib/assets/IntelliTect_WhiteBlue-Box.svg"
	heading="IntelliTect Scholar"
	subheading="2022 Overall Winner"
/>

<SVGTile
	svg="src/lib/assets/COA.png"
	heading="Triangle STEM Fraternity"
	subheading="Vice President and Chapter Founder"
	customHeight={30}
/>

<SVGTile
	svg="src/lib/assets/FBLA.png"
	heading="Washington State Champion"
	subheading="Coding and Programming 2021"
	customHeight={30}
/>

<SVGTile
	svg="src/lib/assets/FBLA.png"
	heading="3rd in the United States"
	subheading="Coding and Programming 2021"
	customHeight={30}
/>

<SVGTile
	svg="src/lib/assets/FBLA.png"
	heading="State Champion"
	subheading="Website Design 2022"
	customHeight={30}
/>

