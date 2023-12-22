let wavesurfer = WaveSurfer.create({
    container: "#audiowave",
    waveColor: "#525252",
    progressColor: "#262828",
    height: 150,
    responsive: true,
    hideScrollbar: true,
    cursorColor: "#5d5b5b",
    cursorWidth: 2,
    barWidth: 5,
    barGap: 1.5,
    skipLength: 5
});

wavesurfer.load("https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3");// шось не баче трек сам

$(".btn-toggle-pause").on("click", function() {
    wavesurfer.playPause();
});

$(".btn-backward").on("click", function() {
    wavesurfer.skipBackward();
});

$(".btn-forward").on("click", function() {
    wavesurfer.skipForward();
});

$(".btn-toggle-mute").on("click", function() {
    wavesurfer.toggleMute();
});

$(".btn-stop").on("click", function() {
    wavesurfer.stop();
});
