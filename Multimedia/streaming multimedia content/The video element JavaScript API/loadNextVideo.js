let myVideo;
      let currentVideo = 0;
      let sources = [
        "https://mainline.i3s.unice.fr/mooc/samuraiPizzacat.mp4",
        "http://www.archive.org/download/AnimatedMechanicalArtPiecesAtMit/P1120973_512kb.mp4"
        ];
// Set the src of the video to the next URL in the playlist
// If at the end we start again from beginning (the modulo
// source.length does that)
      function loadNextVideo() {
        myVideo.src = sources[currentVideo % sources.length]
        myVideo.load();
        currentVideo++;
      }
// ecouteur
    function loadAndplayNextVideo() {
      console.log("On joue " + sources[currentVideo % sources.length])
      loadNextVideo();
      myVideo.play();
    }
// Called when the page is loaded
    function init() {
// get the video element using the Selector API
    myVideo = document.querySelector("#myVideo");
// Defines a callback function called each time a video ended
    myVideo.addEventListener('ended', loadAndplayNextVideo, false);
// Loads the first video when the page is loaded
    loadNextVideo();
    }