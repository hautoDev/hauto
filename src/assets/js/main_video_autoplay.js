window.addEventListener("DOMContentLoaded", () => {
  mainIntroVideoAutoplaySet();
});

function mainIntroVideoAutoplaySet() {
  const targetVideo01 = document.getElementById("target-play-video01");
  const targetVideo02 = document.getElementById("target-play-video02");

  // videoSwapPlaySet(targetVideo01, targetVideo02);

  // targetVideo01.addEventListener("timeupdate", (e) => {
  //   let currentTime = targetVideo01.currentTime;

  //   if (allTimeRage01 * 0.7 <= currentTime) {
  //     // console.log(작동);
  //     targetVideo02.play();
  //   }
  // });

  // targetVideo01.play();

  // targetVideo.addEventListener("loadedmetadata", (e) => {
  //   console.log("작동");
  //   console.log(e);
  //   console.log(targetVideo.duration);
  // });

  // targetVideo.addEventListener("ended", () => {
  //   targetVideo.currentTime = 0;
  //   // targetVideo.playbackRate = -1;
  //   // targetVideo.play();
  //   // console.log(targetVideo.currentTime);
  // });
  // // targetVideo.playbackRate = 2;
  // // targetVideo.defaultPlaybackRate = -1;
  // // targetVideo.currentTime = 0.8;
  // targetVideo.addEventListener("timeupdate", () => {
  //   // targetVideo.currentTime;
  //   console.log(targetVideo.currentTime);
  // });
  // // targetVideo.reverse();
  // // console.log(targetVideo.duration);
}

async function getAllTimeRage(targetVideo) {
  let allTimeRage = 0;
  await targetVideo.addEventListener("loadedmetadata", (e) => {
    allTimeRage = targetVideo.duration;
  });
  return allTimeRage;
}

async function videoSwapPlaySet(targetVideo01, targetVideo02) {
  let allTimeRage01 = 0;
  let allTimeRage02 = 0;

  await targetVideo01.addEventListener("loadedmetadata", (e) => {
    allTimeRage01 = targetVideo01.duration;
    // console.log(allTimeRage01);
  });

  await targetVideo02.addEventListener("loadedmetadata", (e) => {
    allTimeRage02 = targetVideo02.duration;
  });

  await targetVideo01.addEventListener("timeupdate", (e) => {
    let currentTime = targetVideo01.currentTime;
    // console.log(allTimeRage01);
    if (allTimeRage01 * 0.8 <= currentTime) {
      targetVideo02.play();
    }
  });

  targetVideo02.addEventListener("timeupdate", (e) => {
    let currentTime = targetVideo01.currentTime;

    if (allTimeRage02 * 0.8 <= currentTime) {
      // console.log(작동);
      targetVideo01.play();
    }
  });

  targetVideo01.play();
}
