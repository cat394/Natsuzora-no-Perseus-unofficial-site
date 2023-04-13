// オーディオ要素を取得
const audioElements = document.querySelectorAll("audio");

// 他のオーディオ要素を停止する関数
function stopOtherAudio(currentAudio) {
  audioElements.forEach((audio) => {
    if (audio !== currentAudio) {
      audio.pause();
      audio.currentTime = 0;
    }
  });
}

// オーディオ要素の再生イベントにリスナーを追加
audioElements.forEach((audio) => {
  audio.addEventListener("play", () => {
    stopOtherAudio(audio);
  });
});
