<script>
	import Tile from '../components/Tile.svelte';
	import Icon from '@iconify/svelte';
	import PortfolioProject from '../components/PortfolioProject.svelte';
	const logoUrl = new URL('/src/lib/assets/1on1-logo.webp', import.meta.url).href;
</script>

<PortfolioProject
	title="1ON1 Piano"
	description="IntelliTect Internship (2022-2023)"
	projectType="Multi-Platform App"
	img={logoUrl}
	bg="bg-neutral-700"
>
	<Icon icon="logos:flutter" class="text-4xl text-white" />
	<Icon icon="logos:webrtc" class="text-4xl text-white" />
	<Icon icon="logos:dotnet" class="text-4xl text-white" />
	<Icon icon="devicon-plain:microsoftsqlserver-wordmark" class="text-4xl text-white" />
	<Icon icon="devicon:azure" class="text-4xl text-white" />
	<div slot="expanded">
		<Tile class="mt-10 pb-10">
			<h1 class="text-4xl text-white font-bold">About</h1>
			<div class="border-t border-gray-300 my-3" />
			<p class="text-white text-xl leading-loose">
				1ON1 Piano was the project I worked on for the first two years I interned at IntelliTect.
				1ON1 Piano (At the time of my internship) is a video conferencing app that allows teachers
				and students to play on each others piano keyboards in real time via bluetooth or wired MIDI
				devices.
			</p>
		</Tile>
		<Tile class="mt-10 pb-10">
			<h1 class="text-4xl text-white font-bold">My Role</h1>
			<div class="border-t border-gray-300 my-3" />
			<p class="text-white text-xl leading-loose">
				During my time on the project, I worked on a variety of tasks with elevating privileges as
				my internship went on. I began by tackling small board items and bug fixes. My team
				initially consisted of only 3 people, a senior developer, myself, and a project manager.
				<br />
				<br />
				My first large task was to implement a file sharing system, allowing teachers to send files to
				students, and vice versa. The client described this as putting "Dropbox" into the app. Over the
				first summer of my internship, I created the File Sharing Library, utilizing Azure Blob Storage,
				and implemented the front end for the file sharing system.
				<br />
				<br />
				After the first summer, I began working remote with IntelliTect and became the sole developer
				on the 1ON1 Piano Project. I ran the weekly standups with the client, and implemented several
				new patches and features to production.
				<br />
				<br />
				During the summer of 2023 I was given the opportunity to onboard and train several developers
				on the project, and onto the framework Flutter itself. While doing this, I also lead the charge
				in rebasing the entire codebase of the front-end app, from deprecated Flutter libraries. I implemented
				Riverpod state management, GoRouter navigation, and followed the Flutter communities best practices.
				While changing the entire codebase, I decided to also rewrite the front-end to back-end WebRTC
				communication layer, which completely fixed ongoing latency and connection issues in the app.
				<br />
				<br />
				By the end of the summer, I had completely remade the app from the ground up, and trained new
				developers in Flutter.
			</p>
		</Tile>
	</div>
</PortfolioProject>
