<script>
	import Tile from '../components/Tile.svelte';
	import Icon from '@iconify/svelte';
	import PortfolioProject from '../components/PortfolioProject.svelte';
	const raylibLogo = new URL('/src/lib/assets/raylib-logo.png', import.meta.url).href;
	const raylibNewtonPhysics = new URL('/src/lib/assets/newton-phys-demo.mov', import.meta.url).href;
	const raylibVectorFields = new URL('/src/lib/assets/vector-field-demo.mov', import.meta.url).href;
	const raylibMatrixRotation = new URL('/src/lib/assets/matrix-rotation-demo.mov', import.meta.url)
		.href;
	const raylibBVHRaycasting = new URL('/src/lib/assets/bvh-raycasting-demo.mp4', import.meta.url)
		.href;
</script>

<PortfolioProject
	title="Raylib Projects"
	description="Game Engines, Physics Simulations, and Math Visualizations"
	projectType="Desktop Software"
	img={raylibLogo}
	bg="bg-white"
>
	<Icon icon="logos:c" class="text-4xl text-white" />
	<Icon icon="vscode-icons:file-type-cpp3" class="text-4xl text-white" />
	<Icon icon="devicon:cmake" class="text-4xl text-white" />
	<Icon icon="logos:go" class="text-4xl text-white" />
	<div slot="expanded">
		<Tile class="mt-10 pb-10">
			<h1 class="text-4xl text-white font-bold">About</h1>
			<div class="border-t border-gray-300 my-3" />
			<p class="text-white text-xl leading-loose">
				RayLib is a wrapper for OpenGL that allows fast development of 2D and 3D games and
				simulations. Throughout my time at university, I have utilized Raylib to help understand and
				visualize concepts in Calculus, Differential Equations, Physics, Linear Algebra, Graph
				Theory, and more. RayLib provides only a small API over OpenGL, so the majority of the work
				is spent on mathematics, datastrucutures, and concurrency problems. These projects were
				developed in a variety of languages, including C, C++ and Golang.
			</p>
		</Tile>

		<Tile>
			<h1 class="text-4xl text-white font-bold">Raycasting, Bounding Volume Hierarchy</h1>
			<div class="border-t border-gray-300 my-3" />
			<a
				href="https://github.com/bens-schreiber/3D-BVH-Raycasting"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center justify-center space-x-2 mt-8 text-white underline"
			>
				<Icon icon="akar-icons:github-fill" class="text-2xl text-white" />
				<span class="text-white">View on Github</span>
			</a>
			<video class="w-full mt-5" controls poster={raylibLogo} src={raylibBVHRaycasting}>
				<track kind="captions" src="path/to/captions.vtt" label="English" />
			</video>
		</Tile>

		<Tile>
			<h1 class="text-4xl text-white font-bold">2D Vector Fields</h1>
			<div class="border-t border-gray-300 my-3" />
			<a
				href="https://github.com/bens-schreiber/raylib-vector-fields"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center justify-center space-x-2 mt-8 text-white underline"
			>
				<Icon icon="akar-icons:github-fill" class="text-2xl text-white" />
				<span class="text-white">View on Github</span>
			</a>
			<video class="w-full mt-5" controls poster={raylibLogo} src={raylibVectorFields}>
				<track kind="captions" src="path/to/captions.vtt" label="English" />
			</video>
		</Tile>

		<Tile>
			<h1 class="text-4xl text-white font-bold">3D Rotation Matrix</h1>
			<div class="border-t border-gray-300 my-3" />
			<a
				href="https://github.com/bens-schreiber/lin-alg-rotate-matrix-raylib"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center justify-center space-x-2 mt-8 text-white underline"
			>
				<Icon icon="akar-icons:github-fill" class="text-2xl text-white" />
				<span class="text-white">View on Github</span>
			</a>
			<video class="w-full mt-5" controls poster={raylibLogo} src={raylibMatrixRotation}>
				<track kind="captions" src="path/to/captions.vtt" label="English" />
			</video>
		</Tile>

		<Tile>
			<h1 class="text-4xl text-white font-bold">3D Newton Physics</h1>
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
			<video class="w-full mt-5" controls poster={raylibLogo} src={raylibNewtonPhysics}>
				<track kind="captions" src="path/to/captions.vtt" label="English" />
			</video>
		</Tile>
	</div>
</PortfolioProject>
