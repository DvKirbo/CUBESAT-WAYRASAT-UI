<script>
	import CircleProgressBar from './CircleProgressBar.svelte'
	import batteryIcon from '../lib/icons/batteryIcon.svg';
    import voltageIcon from '../lib/icons/voltageIcon.svg';
    import LineChart from './LineChart.svelte';
	//const progress = Math.random()

    function generateRandomArray(length) {
        return Array.from({ length }, () => Math.random());
    }

    const array1 = generateRandomArray(50);
    const array2 = generateRandomArray(20);
    const array3 = generateRandomArray(50);

    const batteryData = {
        progress: Math.random(),
        icon : batteryIcon,
        description: "Nivel de la bateria"
    }

    const VoltageData = {
        progress: Math.random(),
        icon : voltageIcon,
        description: "Voltaje de la bateria"
    }
</script>
<div class="sensor-container">
    <div class = "circular-container">
        <div class="sensor">
            <CircleProgressBar 
            progress={batteryData.progress}
            description={batteryData.description}
            icon={batteryData.icon}
            />
            <p>{batteryData.description}</p>
        </div>
        <div class="sensor">
            <CircleProgressBar 
            progress={VoltageData.progress}
            description={VoltageData.description}
            icon={VoltageData.icon}
            />
            <p>{batteryData.description}</p>
        </div>
    </div>
    <div class="graphics-sensor">
        <LineChart data={array1} width={500} description={'temperatura'} />
        <LineChart data={array2} width={500} description={'presion atmosferica'}/>
        <LineChart data={array3} width={500} description={'calidad del aire'}/>
    </div>
</div>
    
<style>
    .sensor{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        margin: 20px;
    }
    .circular-container{
        display: flex;
        justify-content: space-evenly;
    }
    .sensor-container{
        display: flex;
        width: 100%;
        flex-direction: column;
    }
    .graphics-sensor{
        display: flex;
        justify-content: space-evenly;
        margin-top: 20px;
    }
</style>