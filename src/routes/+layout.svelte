<!-- 
    layout is that applies itself to everything within the same
    directory. This is where you can add global styles, scripts, etc.

    <slot /> is where the content of the page will be injected
-->
<script>
    import "../styles/tailwind.css";
</script>

<style global>
    :global(body) {
        background-color: #282c34;
    }
</style>

<slot />