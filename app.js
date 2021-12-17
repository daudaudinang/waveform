var wavesurfer = WaveSurfer.create({
  container: "#waveform", //Container chứa wave
  height:120, // Chiều cao của cả thanh wave bar, mặc định: 128
  barRadius: 0, // Bo góc thanh bar
  autoCenter: true,
  backgroundColor: "rgba(0,0,0,0)", // Màu nền
  barGap: 3, // Khoảng cách giữa 2 cột sóng
  barHeight: 1, // Chiều cao cột sóng
  barWidth: 1, // Chiều rộng cột sóng
  cursorColor: "rgba(0,0,0,0)", //Màu con trỏ edge
  hideScrollbar: true, // Ẩn thanh cuộn
  // interact: false, // Có cho người dùng tương tác với thanh wave không? Hay chỉ cho xem thôi. mặc định là true
  backend: "MediaElement", //Set video player
  mediaType: "video", // Setup mediatype cho backend
  // mediaControls: true, // Setup = true để sử dụng controls mặc đỊnh của video element backend, mặc định là false
  partialRender: true, // Sử dụng peakCache để cải thiện tốc độ render
  pixelRatio: 1,
  progressColor: "rgb(31,159,252)", // Set màu proccess thành xanh
  waveColor: "#c4c4c4", // Set màu sóng thành xám
  responsive: true, // Resize wave khi container chứa nó thay đổi kích cỡ
  scrollParent: true, // Set = true để wave tự chạy chứ k đứng im một chỗ
});

wavesurfer.load("nnta.mp4");

wavesurfer.on("ready", function () {
  const video = document.querySelector("#waveform video");
  const playBtn = document.querySelector(".play-btn");

  playBtn.className = "far fa-play-circle play-btn";
  playBtn.onclick = () => {
    if (playBtn.className === "far fa-play-circle play-btn") {
        video.play();
        playBtn.className = "far fa-pause-circle play-btn";
    } else if (playBtn.className === "far fa-pause-circle play-btn") {
        video.pause();
        playBtn.className = "far fa-play-circle play-btn";
    }
  }
});
