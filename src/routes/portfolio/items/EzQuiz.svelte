<script>
	import Tile from '../components/Tile.svelte';
	import Icon from '@iconify/svelte';
	import PortfolioProject from '../components/PortfolioProject.svelte';
	const logoUrl = new URL('/src/lib/assets/ezquiz-logo.png', import.meta.url).href;
	const demo1Url = new URL('/src/lib/assets/ezquiz-demo1.mp4', import.meta.url).href;
	const demo2Url = new URL('/src/lib/assets/ezquiz-demo2.mp4', import.meta.url).href;
</script>

<PortfolioProject
	title="EzQuiz"
	description="FBLA Coding & Programming"
	projectType="Desktop Software"
	img={logoUrl}
	bg="bg-blue-800"
	href="https://github.com/bens-schreiber/ezquiz-frontend"
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
				EzQuiz was the first ever software project I had worked on, as a 17 year old junior in
				highschool, who knew nothing about programming or version control. Given the general
				guidance of "you should use a RESTful API", I spent around 6 months developing EzQuiz.
				<br />
				<br />
				EzQuiz was created for the FBLA 2021 Coding & Programming competition, which had the prompt of
				"Create desktop software to administer a 50 question quiz about FBLA". I thought that this prompt
				was boring, so I decided to expand on it, and instead create software capable of administering
				custom quizzes to users via hosting it on Google Cloud. Users could create their own quizzes
				via my in-app QuizBuilder, or upload excel sheets following a format my program could recognize.
				<br />
				<br />
				This project ended up taking first in Washington State, and then
				<strong>3rd in the United States at the FBLA National Leadership Conference.</strong>
			</p>
		</Tile>
		<Tile class="md:col-span-2">
			<h1 class="text-4xl text-white font-bold">Features</h1>
			<div class="border-t border-gray-300 my-3" />
			<ul class="text-white text-xl list-disc list-inside">
				<li>Host Quizzes over network</li>
				<li>Create quizzes via Excel or the QuizBuilder</li>
				<li>Quiz admin toggle-able calculator, notepad, drawing pad</li>
				<li>Quiz timer</li>
				<li>Quiz results and analytics</li>
				<li>See quizzes taken and your scores, who has taken your quizzes and their scores</li>
				<li>Secure environment, detects cheating and locks the computer in quiz-mode</li>
				<li>User Accounts and Authentication</li>
			</ul>
		</Tile>
		<Tile>
			<h1 class="text-4xl text-white font-bold">Back End</h1>
			<div class="border-t border-gray-300 my-3" />
			<p class="text-white text-xl leading-loose">
				I wrote the backend in Java, using a pure bare-bones RESTful API called JettyServer, (being
				my first ever project, I did not know about ORMs, and wrote everything from scratch, even
				serializers).
				<br />
				<br />
				Backend authentication was done completely in Java with no external libraries. I created my own
				token pool system which would assign access via a cached GUID, and assign it to a user account
				which was stored hashed and salted in the database. Looking back, there were many flaws with
				this approach, but it was a great learning experience.
				<br />
				<br />
				I utilized Gradle for dependency management, and MySQL for the database. I hosted the back end
				on Google Cloud, and utilized Docker to containerize the application.
			</p>
		</Tile>
		<Tile>
			<h1 class="text-4xl text-white font-bold">Front End</h1>
			<div class="border-t border-gray-300 my-3" />
			<p class="text-white text-xl leading-loose">
				The front end was written with JavaFX, utilizing their SceneBuilder to quickly make the UI.
				SceneBuilder only created what fxml files which resembled barebones HTML and CSS, so all
				styling was done by myself. To connect to the backend, I wrote my own API client in Java, as
				I found it an interesting challenge and a great way to learn Object Oriented Programming (I
				was very torn up when I later learned about Swagger and other tools which writes this API
				layer for you).
				<br />
				<br />
				Being in Java, I learned and utilized the elements of reusable object oriented software, extending
				my knowledge to interfaces, builders, factories, abstract classes, singletons, observers, iterators,
				as well as the Java Streams API.
			</p>
		</Tile>
		<Tile class="md:col-span-2">
			<h1 class="text-4xl text-white font-bold">Demos</h1>
			<div class="border-t border-gray-300 my-3" />
			<div class="md:grid md:grid-cols-2 md:gap-10">
				<video class="w-full" controls poster={logoUrl} src={demo2Url}>
					<track kind="captions" srclang="en" label="English" />
				</video>
				<video class="w-full mt-5" controls poster={logoUrl} src={demo1Url}>
					<track kind="captions" srclang="en" label="English" />
				</video>
			</div>
		</Tile>
	</div>
</PortfolioProject>
