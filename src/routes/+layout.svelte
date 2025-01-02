<script>
    import Header from './Header.svelte';
    import '../app.css';
</script>

<div class="app" id="app">
    <Header />
    <div id="stuff"></div>
    <slot></slot>
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        width: 100%;
        position:relative;
        height: 100vh;
    }
    #stuff {
        width: 100%;
        height: 100px;
    }
</style>