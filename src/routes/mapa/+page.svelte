<script>
    import Map from './Map.svelte';
</script>

<svelte:head>
    <title>Mapa</title>
    <script src="https://maps.googleapis.com/maps/api/js?key=your_api_key&libraries=places&v=weekly&callback=initMap" async defer></script>
</svelte:head>


<Map />