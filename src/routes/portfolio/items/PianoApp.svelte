<script>
    import Tile from '../components/Tile.svelte';
    import Icon from '@iconify/svelte';
    import PortfolioProject from '../components/PortfolioProject.svelte';
</script>

<PortfolioProject
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
	<div slot="expanded">
		<Tile class="mt-10 pb-10">
			<h1 class="text-4xl text-white font-bold">About</h1>
			<div class="border-t border-gray-300 my-3" />
			<p class="text-white text-xl leading-loose">
				1ON1 Piano was the project I mainly worked on during my year and a half internship at
				IntelliTect. 1ON1 Piano is a mobile app utilziing a flutter frontend that allows users to
				remotely stream their piano playing to a teacher, over a WebRTC connection, sending MIDI
				signals to the teachers piano, instead of just audio.
			</p>
		</Tile>
		<Tile class="mt-10 pb-10">
			<h1 class="text-4xl text-white font-bold">My Role</h1>
			<div class="border-t border-gray-300 my-3" />
			<p class="text-white text-xl leading-loose">
				During my time on the project, I worked on a variety of tasks with elevating privileges as
				my internship went on. I initially worked on the front end, tackling small board items and
				bug fixes. My team initially consisted of only 3 people, a senior developer, myself, and a
				project manager.
				<br />
				<br />
				My first large task was to implement a file sharing system, allowing teachers to send files to
				students, and vice versa. The client described this as putting "Dropbox" into the app. Over the
				first summer of my internship, I created the File Sharing Library, utilizing Azure Blob Storage,
				and implemented the front end for the file sharing system.
				<br />
				<br />
				After the first summer, I decided that I wanted to continue working for IntelliTect while at
				college, and was allowed to work remote. During this time, the senior developer on the project
				left, and I was given the opportunity to take over the project. I ran the weekly standups with
				the client, and implemented several new patches and features to production.
				<br />
				<br />
				Finally, during my last summer at IntelliTect, I was given the opportunity to onboard and train
				several developers on the project, and onto the framework Flutter itself. While doing this, I
				also lead the charge in rebasing the entire codebase of the front-end app, from deprecated Flutter
				libraries. I implemented Riverpod state management, GoRouter navigation, and utilized a Feature-First
				folder structure. While changing the entire codebase, I decided to also rewrite the front-end
				to back-end WebRTC communication layer, which fixed ongoing latency and connection issues in
				the app, and cleared up a very foggy area of the code we actively avoided touching.
				<br />
				<br />
				By the end of the summer, I had successfully onboarded 2 new developers onto the project, and
				had completely rewritten the front-end of the app.
			</p>
		</Tile>
		<Tile>
			<h1 class="text-4xl text-white font-bold">Concluding Thoughts</h1>
			<div class="border-t border-gray-300 my-3" />
			<p class="text-white text-xl leading-loose">
				My time working at IntelliTect on the 1ON1 Piano project was the most impactful experience I
				have had in my career so far. As an 18 year old just graduating highschool, I was thrown
				into an environment where I was expected to learn and grow at a rapid pace, and ended up
				taking over the entire project for the company after only two months.
			</p>
		</Tile>
	</div>
</PortfolioProject>