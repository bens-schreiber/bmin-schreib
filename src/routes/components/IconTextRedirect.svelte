<script lang="ts">
    import Icon from '@iconify/svelte';
     export let icon: string;
     export let text: string;
    export let redirect: string;

    const isUrl: Boolean = redirect.startsWith('http');

    // If redirect is not a URL, copy it to the clipboard and notify the user it was copied
    function onClick() {
        if (!isUrl) {
            navigator.clipboard.writeText(redirect);
            alert('Copied to clipboard!');
            return;
        }
        window.open(redirect, '_blank');
    }

    function onKeyDown(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            onClick();
        }
    }
</script>

<div 
    tabindex=0 
    role="button" 
    on:click={onClick} 
    on:keydown={onKeyDown}
    class="flex flex-row items-center text-white m-3 p-4 shadow-lg bg-bg-secondary bg-opacity-40"
>
    <Icon class="w-10 h-10" icon={icon} color="white"/>
    <span class="text-2xl ml-5">{text}</span>
    {#if !isUrl}
        <Icon class="w-10 h-10 ml-auto" icon="ph:copy" color="rgba(0,0,0,0.2)"/>
    {/if}
</div>