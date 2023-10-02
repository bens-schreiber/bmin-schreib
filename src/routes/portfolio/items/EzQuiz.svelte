<script>
	import Tile from '../components/Tile.svelte';
	import Icon from '@iconify/svelte';
	import PortfolioProject from '../components/PortfolioProject.svelte';
</script>

<PortfolioProject
	title="EzQuiz"
	description="FBLA Coding & Programming"
	projectType="Desktop Software"
	img="src/lib/assets/ezquiz-logo.png"
	bg="bg-blue-800"
	href="https://github.com/bens-schreiber/pushapp-2023"
>
	<Icon icon="logos:java" class="text-4xl text-white" />
	<Icon icon="simple-icons:gradle" class="text-4xl text-white" />
	<Icon icon="logos:mysql" class="text-4xl text-white" />
	<Icon icon="logos:docker-icon" class="text-4xl text-white" />
	<Icon icon="logos:google-cloud" class="text-4xl text-white" />
	<div slot="expanded" class="md:grid md:grid-cols-2">
		<Tile class="mt-10 pb-10 md:col-span-2">
			<h1 class="text-4xl text-white font-bold">About</h1>
			<div class="border-t border-gray-300 my-3" />
			<p class="text-white text-xl leading-loose">
				EzQuiz was the first ever software that I developed, as a 17 year old junior in highschool.
				EzQuiz was created specifically for the FBLA 2021 Coding & Programming competition, which
				had the prompt of "Create desktop software to administer a 50 question quiz about FBLA". I
				thought that this prompt was boring, so I decided to expand on it, and instead create
				software capable of administering custom quizzes to users via hosting it on Google Cloud.
				Users could create their own quizzes via my in-app QuizBuilder, or upload excel sheets
				following a format my program could recognize.
				<br />
				<br />
				This project ended up taking first in Washington State, and then 3rd in the nation at the FBLA
				National Leadership Conference.
			</p>
		</Tile>
		<Tile>
			<h1 class="text-4xl text-white font-bold">Back End</h1>
			<div class="border-t border-gray-300 my-3" />
			<p class="text-white text-xl leading-loose">
				I decided to go with Java for the back end, as it was the language I was most familiar with
				at the time. I utilized Gradle for dependency management, and MySQL for the database. I
				hosted the back end on Google Cloud, and utilized Docker to containerize the application.
				The back-end was entirely made of a JettyServer REST API. I created fully custom user
				authentication for the app, which was maintained via JWT tokens.
			</p>
		</Tile>
		<Tile>
			<h1 class="text-4xl text-white font-bold">Front End</h1>
			<div class="border-t border-gray-300 my-3" />
			<p class="text-white text-xl leading-loose">
				I used JavaFX for the front end, which was a framework I had never used before. I utilized
				SceneBuilder and CSS to create the UI, and created my own HTTP client to interact with the
				back end.
			</p>
		</Tile>
		<Tile class="md:col-span-2">
			<h1 class="text-4xl text-white font-bold">Demos</h1>
			<div class="border-t border-gray-300 my-3" />
			<div class="md:grid md:grid-cols-2 md:gap-10">
				<video
					class="w-full"
					controls
					poster="src/lib/assets/ezquiz-logo.png"
					src="src/lib/assets/ezquiz-demo2.mp4"
				>
					<track kind="captions" srclang="en" label="English" />
				</video>
				<video
					class="w-full mt-5"
					controls
					poster="src/lib/assets/ezquiz-logo.png"
					src="src/lib/assets/ezquiz-demo1.mp4"
				>
					<track kind="captions" srclang="en" label="English" />
				</video>
			</div>
		</Tile>
	</div>
</PortfolioProject>
