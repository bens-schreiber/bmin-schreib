<script>
	import Icon from '@iconify/svelte';
	import PortfolioProjectHeader from './components/PortfolioProjectHeader.svelte';
</script>

<h1 class="font-black text-white text-5xl text-center mt-5">PORTFOLIO</h1>
<div class="border-t border-gray-300 my-8 mx-2" />

<PortfolioProjectHeader
	title="1ON1 Piano"
	description="IntelliTect Internship"
	projectType="Mobile App"
	img="src/lib/assets/1on1-logo.webp"
	bg="bg-neutral-700"
	marginTop={false}
>
	<Icon icon="logos:flutter" class="text-4xl text-white" />
	<Icon icon="logos:webrtc" class="text-4xl text-white" />
	<Icon icon="logos:dotnet" class="text-4xl text-white" />
	<Icon icon="logos:mysql" class="text-4xl text-white" />
	<Icon icon="devicon:azure" class="text-4xl text-white" />
</PortfolioProjectHeader>

<PortfolioProjectHeader
	title="PushApp"
	description="Fitness Passion Project"
	projectType="Mobile App"
	img="src/lib/assets/puapp-logo.png"
	bg="bg-orange-400"
>
	<Icon icon="logos:flutter" class="text-4xl text-white" />
	<Icon icon="logos:python" class="text-4xl text-white" />
	<Icon icon="logos:django-icon" class="text-4xl text-white" />
	<Icon icon="logos:postgresql" class="text-4xl text-white" />
	<Icon icon="devicon:azure" class="text-4xl text-white" />
</PortfolioProjectHeader>

<PortfolioProjectHeader
	title="EzQuiz"
	description="FBLA Coding & Programming"
	projectType="Desktop Software"
	img="src/lib/assets/ezquiz-logo.png"
	bg="bg-blue-800"
>
	<Icon icon="logos:java" class="text-4xl text-white" />
	<Icon icon="simple-icons:gradle" class="text-4xl text-white" />
	<Icon icon="logos:mysql" class="text-4xl text-white" />
	<Icon icon="logos:docker-icon" class="text-4xl text-white" />
	<Icon icon="logos:google-cloud" class="text-4xl text-white" />
</PortfolioProjectHeader>

<PortfolioProjectHeader
	title="IntelliTerm"
	description="IntelliTect Internal Hackathon"
	projectType="Website"
	icon="teenyicons:terminal-solid"
	bg="bg-neutral-900"
>
	<Icon icon="logos:c-sharp" class="text-4xl text-white" />
	<Icon icon="logos:typescript-icon" class="text-4xl text-white" />
	<Icon icon="logos:dotnet" class="text-4xl text-white" />
	<Icon icon="devicon:azure" class="text-4xl text-white" />
</PortfolioProjectHeader>

<PortfolioProjectHeader
	title="Raylib Projects"
	description="Calculus / Physics Simulators"
	projectType="Desktop Software"
	img="src/lib/assets/raylib-logo.png"
	bg="bg-white"
>
	<Icon icon="logos:c" class="text-4xl text-white" />
	<Icon icon="vscode-icons:file-type-cpp3" class="text-4xl text-white" />
	<Icon icon="devicon:cmake" class="text-4xl text-white" />
</PortfolioProjectHeader>
