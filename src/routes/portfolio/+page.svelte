<script>
	import Icon from '@iconify/svelte';
	import Tile from './components/Tile.svelte';
	import PortfolioProject from './components/PortfolioProject.svelte';
</script>

<h1 class="font-black text-white text-5xl text-center mt-5">PORTFOLIO</h1>
<div class="border-t border-gray-300 my-8 mx-2" />

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
	<div slot="expanded">
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
	<div slot="expanded">
		<Tile class="mt-10 pb-10">
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
		<Tile>
			<h1 class="text-4xl text-white font-bold">Demos</h1>
			<div class="border-t border-gray-300 my-3" />
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
		</Tile>
	</div>
</PortfolioProject>

<PortfolioProject
	title="IntelliTerm"
	description="IntelliTect Internal Hackathon"
	projectType="Website"
	icon="teenyicons:terminal-solid"
	bg="bg-neutral-900"
	href="https://github.com/IntelliTect/IntellitectTerminal"
>
	<Icon icon="logos:c-sharp" class="text-4xl text-white" />
	<Icon icon="logos:typescript-icon" class="text-4xl text-white" />
	<Icon icon="logos:dotnet" class="text-4xl text-white" />
	<Icon icon="devicon:azure" class="text-4xl text-white" />
	<div slot="expanded">
		<Tile class="mt-10 pb-10">
			<h1 class="text-4xl text-white font-bold">About</h1>
			<div class="border-t border-gray-300 my-3" />
			<p class="text-white text-xl leading-loose">
				IntelliTerm or IntelliTerminal, or even Intellitect Terminal was a project I created for a
				24 hour internal hackathon for interns at IntelliTect. The prompt for the hackathon was to
				create something the company could put on the website to draw people in.
				<br />
				<br />
				My team consisting of myself and one other intern decided to replicate Google Foobar, which is
				a secret pop-up challenge that Google puts on their website for people to find, that asks them
				to do coding challenges in order to get an interview with Google. We decided to create a terminal
				that would pop up on the website, and ask the user to do coding challenges in order to get an
				interview with IntelliTect. Our project won the hackathon.
			</p>
		</Tile>
		<Tile class="mt-10 pb-10">
			<h1 class="text-4xl text-white font-bold">My Role</h1>
			<div class="border-t border-gray-300 my-3" />
			<p class="text-white text-xl leading-loose">
				I was tasked with handling the entire front-end of the project. My teammate was very
				familiar with .NET, especially using Coalesce, which is software IntelliTect created for
				.NET for web development with Vue. We quickly realized there was no great JS libraries to
				create a terminal, and began to use one that essentially was just a text stream, which
				required me to write a wrapper API around it to handle commands and such. I also created the
				entire UI for the terminal, and the website itself.
			</p>
		</Tile>
		<Tile>
			<h1 class="text-4xl text-white font-bold">Back End</h1>
			<div class="border-t border-gray-300 my-3" />
			<p class="text-white text-xl leading-loose">
				We used .NET coupled with Coalesce, and hosted it on Azure. The back-end was relatively
				simple, and tracked a users progress in the coding challenges. One difficult area of the
				backend was the fact that we had to run python code that the users uploaded, and we had to
				do it in a safe way. For the purpose of the hackathon, we decided to just run the code
				locally.
			</p>
		</Tile>
		<Tile>
			<h1 class="text-4xl text-white font-bold">Front End</h1>
			<div class="border-t border-gray-300 my-3" />
			<p class="text-white text-xl leading-loose">
				We used raw TypeScript for the front end, with a wrapper API I created around XTerm. The
				front end mimics a bash termninal and recognizes most bash commands and bash hotkeys.
			</p>
		</Tile>
		<Tile>
			<h1 class="text-4xl text-white font-bold">UI Snippet</h1>
			<div class="border-t border-gray-300 my-3" />
			<img src="src/lib/assets/intelliterm-ui.png" alt="IntelliTerm UI" />
		</Tile>
	</div>
</PortfolioProject>

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
