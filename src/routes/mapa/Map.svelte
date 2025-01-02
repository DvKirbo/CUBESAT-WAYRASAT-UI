<script>
  import { onMount } from "svelte";
  import map_styles from "./map_styles";
  import { drag } from "d3";

    let container;
    let marker;
    let dataMap = {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    };
    onMount(() => {
        const map = new google.maps.Map(container,{
            center: dataMap.center,
            zoom: dataMap.zoom,
            styles: map_styles,
        });
        marker = new google.maps.Marker({
            position: dataMap.center,
            map: map,
            draggable: true,
        });

        marker.addListener("dragend", () => {
            const position = marker.getPosition();
            console.log(position.lat(), position.lng());
        });

    });
</script>

<h1>Mapa</h1>
<div bind:this={container}></div>


<style>
    div {
        width: 100%;
        height: 600px;
        border-radius: 20px;
        overflow: hidden; /* Asegura que el contenido del mapa no sobresalga de los bordes redondeados */
    }
</style>
