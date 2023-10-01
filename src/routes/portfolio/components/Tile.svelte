<script lang="ts">
	// You have to this because class is a reserved keyword in JavaScript
	let className: string = "";
	export { className as class };
</script>

<div class="shadow-lg p-4 m-1 {className}">
	<slot />
</div>
