<script>
    import * as d3 from 'd3';
    export let data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 10];
    export let width = 680;
    export let height = 400;
    export let marginTop = 10;
    export let marginBottom = 40;
    export let marginLeft = 40;
    export let marginRight = 20;
    export let description = "wasa";

    $: x = d3.scaleLinear([0, data.length-1], [marginLeft, width-marginRight]);
    $: y = d3.scaleLinear(d3.extent(data), [height-marginBottom, marginTop]);
    $: line = d3.line().x((d,i) => x(i)).y(d => y(d));

    let gx;
    let gy;

    $:d3.select(gy).call(d3.axisLeft(y));
    $:d3.select(gx).call(d3.axisBottom(x));
</script>

<!-- adding chart visualization -->
 <svg width={width} height={height}>
    <!-- x axis -->
    <!-- <g bind:this={gx} transform={`translate(0, ${height-marginBottom})`}></g> -->
    <!-- y axis -->
    <g bind:this={gy} transform={`translate(${marginLeft}, 0)`}></g>
    <!-- line -->
    <path d={line(data)} fill="none" stroke="blue"></path>
    <!-- data points -->
     <g stroke-width="1.5">
        {#if data.length <= 30}
            {#each data as d, i}
            <circle cx={x(i)} cy={y(d)} r="3" fill="white"></circle>
            {/each}
        {/if}
     </g>
    <!-- unit marks -->
    <!-- {#each Array.from({ length: y.domain()[1] - y.domain()[0] - 1 }, (_, i) => i + y.domain()[0] + 1) as unit}
        <text x={marginLeft - 15} y={y(unit)} text-anchor="end" fill="white">{unit}</text>
    {/each} -->
    <!-- add border white to the line chart -->
    <rect x={marginLeft} y={marginTop} width={width-marginLeft-marginRight} height={height-marginTop-marginBottom} fill="none" stroke="white"></rect>
    <!-- label for x axis -->
    <text x={width/2} y={height} text-anchor="middle" fill="white">{description}</text>
 </svg>