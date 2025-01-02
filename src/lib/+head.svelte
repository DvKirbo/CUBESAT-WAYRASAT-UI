<div>
    <slot></slot>
    <script>
        import { onMount } from 'svelte';
        onMount(() => {
        document.title = 'SvelteKit';
        });
    </script>
</div>