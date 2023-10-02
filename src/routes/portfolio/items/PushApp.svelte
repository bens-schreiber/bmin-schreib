<script>
    import Tile from '../components/Tile.svelte';
    import Icon from '@iconify/svelte';
    import PortfolioProject from '../components/PortfolioProject.svelte';
	const logoUrl = new URL('/src/lib/assets/puapp-logo.png', import.meta.url).href;
</script>

<PortfolioProject
	title="PushApp"
	description="Fitness Passion Project"
	projectType="Mobile App"
	img="src/lib/assets/puapp-logo.png"
	bg="bg-orange-400"
	href="https://github.com/bens-schreiber/pushapp-2023"
>
	<Icon icon="logos:flutter" class="text-4xl text-white" />
	<Icon icon="logos:python" class="text-4xl text-white" />
	<Icon icon="logos:django-icon" class="text-4xl text-white" />
	<Icon icon="logos:postgresql" class="text-4xl text-white" />
	<Icon icon="devicon:azure" class="text-4xl text-white" />
	<div slot="expanded" class="md:grid md:grid-cols-2">
		<Tile class="mt-10 pb-10">
			<h1 class="text-4xl text-white font-bold">About</h1>
			<div class="border-t border-gray-300 my-3" />
			<p class="text-white text-xl leading-loose">
				PushApp is a fitness app I began making in my free time, with the goal of publishing my own
				app on the App Store. The app is akin to BeReal, where users group in a PushUp group, and
				are sent a "Pushup Token" via push notifications that indicates what user in the group needs
				to do pushups. The app is a kind of social challenge, where you are required to do the
				pushups whenever you see the push notification, and must send a picture of yourself doing it
				in order to pass the token on to another random user.
			</p>
		</Tile>
		<Tile class="mt-10 pb-10">
			<h1 class="text-4xl text-white font-bold">My Role</h1>
			<div class="border-t border-gray-300 my-3" />
			<p class="text-white text-xl leading-loose">
				After my internship with IntelliTect, I wanted to employ the knowledge I learned, from the
				sector of Software Development (as my tech stack is very similiar to the professional stack
				I learned with IntelliTect), but also expand on my team participation and leadership
				experience. With this goal in mind, I recruited my roomate, who had no prior experience in
				software development, and began acting as both a Senior Developer and Project Manager for
				the project.
			</p>
		</Tile>
		<Tile>
			<h1 class="text-4xl text-white font-bold">Back End</h1>
			<div class="border-t border-gray-300 my-3" />
			<p class="text-white text-xl leading-loose">
				I wanted to go for a lighter tech stack for the backend then my previous project utilizing
				.NET, and decided to go with Django. The Django back-end works with a PostgreSQL database,
				and is hosted on Azure. I utilized Swagger to document the API, and utilized Google's OAuth
				API to create user accounts. Then, for local development, I created a Docker environment to
				host the database.
			</p>
		</Tile>
		<Tile>
			<h1 class="text-4xl text-white font-bold">Front End</h1>
			<div class="border-t border-gray-300 my-3" />
			<p class="text-white text-xl leading-loose">
				I decided to go with Flutter for the front end, which is a framework I have had a lot of
				experience with. I utilized Riverpod for state management, and GoRouter for navigation. The
				API to interact with the back-end was generated from the openapi swagger schema that the
				backend generates.
			</p>
		</Tile>
	</div>
</PortfolioProject>