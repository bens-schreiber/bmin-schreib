<script>
    import Tile from '../components/Tile.svelte';
    import Icon from '@iconify/svelte';
    import PortfolioProject from '../components/PortfolioProject.svelte';
</script>

<PortfolioProject
	title="Raylib Projects"
	description="Calculus / Physics Simulators"
	projectType="Desktop Software"
	img="src/lib/assets/raylib-logo.png"
	bg="bg-white"
>
	<Icon icon="logos:c" class="text-4xl text-white" />
	<Icon icon="vscode-icons:file-type-cpp3" class="text-4xl text-white" />
	<Icon icon="devicon:cmake" class="text-4xl text-white" />
	<div slot="expanded">
		<Tile class="mt-10 pb-10">
			<h1 class="text-4xl text-white font-bold">About</h1>
			<div class="border-t border-gray-300 my-3" />
			<p class="text-white text-xl leading-loose">
				Raylib is a wrapper for OpenGL. I created a few projects to help me understand some concepts
				I was learning in Calculus 3, Linear Algebra and Physics. I would make a new project for
				each physics unit, such as newtonian laws and motion, creating an entire world from scratch
				to simulate the physics concepts. Most of these projects were made in a day or two, and
				employed the concepts I was learning in Calculus 3 and Linear Algebra to make the 3D world.
			</p>
		</Tile>

		<Tile>
			<h1 class="text-4xl text-white font-bold">Newton Physics Example</h1>
			<div class="border-t border-gray-300 my-3" />
			<a
				href="https://github.com/bens-schreiber/newtons-laws-raylib/tree/main"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center justify-center space-x-2 mt-8 text-white underline"
			>
				<Icon icon="akar-icons:github-fill" class="text-2xl text-white" />
				<span class="text-white">View on Github</span>
			</a>
			<video
				class="w-full mt-5"
				controls
				poster="src/lib/assets/raylib-logo.png"
				src="src/lib/assets/newton-phys-demo.mov"
			>
				<track kind="captions" src="path/to/captions.vtt" label="English" />
			</video>
		</Tile>
	</div>
</PortfolioProject>