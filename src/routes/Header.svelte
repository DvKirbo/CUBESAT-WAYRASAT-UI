<script>
    import mapIcon from '../lib/icons/mapIcon.svg'
    import LayerIcon from '../lib/icons/LayerIcon.svg'
</script>

<div class="header">
    <a href="/">
    <div class="header-button">
        <img src={LayerIcon} alt="mapIcon" width="60px" height="60px">
        <h3>Sensores y Operaciones</h3>
    </div>
    </a>
    <a href="/mapa">
        <div class="header-button">
            <img src={mapIcon} alt="mapIcon" width="60px" height="60px">
            <h3>Posicion y direccion</h3>
        </div>
    </a>
</div>

<style>
    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        gap: 100px;
        width: 100%;
        height: 10vh;
        background-color: black;
        z-index: 100;
    }
    .header-button {
        display: flex;
        width:auto;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
    h3{
        font-weight: lighter;
        font-size: 16px;

    }
</style>