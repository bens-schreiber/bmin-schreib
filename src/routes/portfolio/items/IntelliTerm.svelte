<script>
    import Tile from '../components/Tile.svelte';
    import Icon from '@iconify/svelte';
    import PortfolioProject from '../components/PortfolioProject.svelte';
</script>

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