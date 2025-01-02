<script>
  export let progress;
  export let icon;
  const angle = 360 * progress;
  
  // Adapt the logic according to the approach
  const background = `radial-gradient(black 65%, transparent 50%),
  conic-gradient(white 0deg ${angle}deg, black ${angle}deg 360deg)`;
  
  $: cssVarStyles = `--background:${background}`;
</script>

<style>
#progress-circle {
  background: var(--background);
  border-radius: 50%;
  width: 160px;
  height: 160px;
  transition: all 500ms ease-in;
  will-change: transform;
}
.sensor-info{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

<div id="progress-circle" style="{cssVarStyles}">
  <div class = "sensor-info">
    <img src={icon} alt="batteryIcon" width="80px" height="80px">
    <p>{(progress*100).toFixed(2)}%</p>
  </div>
</div>
