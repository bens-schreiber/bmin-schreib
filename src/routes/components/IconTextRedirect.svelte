<script lang="ts">
    import Icon from '@iconify/svelte';
     export let icon: string;
     export let text: string;
    export let redirect: string;

    const isUrl: Boolean = redirect.startsWith('http');

    // If redirect is not a URL, use a mailto link
    function onClick() {
        window.open( !isUrl ? "mailto:" + redirect : redirect, '_blank');
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
    class="flex flex-row items-center text-white m-3 p-4 shadow-lg bg-bg-secondary"
>
    <Icon class="w-10 h-10" icon={icon} color="white"/>
    <span class="text-2xl ml-5">{text}</span>
</div>