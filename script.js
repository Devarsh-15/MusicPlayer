console.log("Welcome");

let songIndex = 0;
let audio = new Audio("songs/song1.mp3.mp3");
let playsong = document.getElementById("playSong");
let progressbar = document.getElementById("progressbar");
let playThisSong = document.getElementsByClassName("playThisSong");
let songItem = Array.from(document.getElementsByClassName("songItem"));

songs = [
  {
    songName: "Khairiyat",
    path: "songs/song1.mp3.mp3",
    coverpath: "covers/song1_cover.jpg",
  },
  {
    songName: "Shaam Gulabi",
    path: "songs/song2.mp3.mp3",
    coverpath: "covers/song2_cover.jpg",
  },
  {
    songName: "Tenu Sang Rakhna",
    path: "songs/song_3.mp3.mp3",
    coverpath: "covers/song3_cover.jpg",
  },
  {
    songName: "Pinkly Pom",
    path: "songs/song_4.mp3.mp3",
    coverpath: "covers/song4_cover.jpg",
  },
  {
    songName: "Ishq",
    path: "songs/song_5.mp3.mp3",
    coverpath: "covers/song5_cover.jpg",
  },
  {
    songName: "Qurban Hua",
    path: "songs/song_6.mp3.mp3",
    coverpath: "covers/song6_cover.jpg",
  },
  {
    songName: "Meri Banogi Kya",
    path: "songs/song_7.mp3.mp3",
    coverpath: "covers/song7_cover.jpg",
  },
  {
    songName: "Ishq Hai",
    path: "songs/song_8.mp3.mp3",
    coverpath: "covers/song8_cover.jpg",
  },
];

songItem.forEach((elements, i) => {
  // console.log(elements, i);
  elements.querySelector("img").src[0] = songs[i].path;
  elements.querySelector(".songName").innerText = songs[i].songName;
});

playsong.addEventListener("click", function () {
  if (audio.paused || audio.currentTime <= 0) {
    audio.play();
    playsong.classList.remove("fa-circle-play");
    playsong.classList.add("fa-circle-pause");
  } else {
    audio.pause();
    playsong.classList.remove("fa-circle-pause");
    playsong.classList.add("fa-circle-play");
  }
});

audio.addEventListener("timeupdate", function () {
  //   console.log(audio.currentTime);
  let progress = (audio.currentTime / audio.duration) * 100;
  progressbar.value = progress;
});

progressbar.addEventListener("change", () => {
  audio.currentTime = (progressbar.value * audio.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("playThisSong")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};

Array.from(playThisSong).forEach((element) => {
  element.addEventListener("click", (e) => {
    // console.log(e.target);
    makeAllPlays();
    index = parseInt(e.target.id);
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause");
    audio.src = `songs/song_${index + 1}.mp3.mp3`;
    audio.currentTime = 0;
    audio.play();
    playsong.classList.remove("fa-circle-play");
    playsong.classList.add("fa-circle-pause");
  });
});

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 7) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audio.src = `songs/song_${songIndex + 1}.mp3.mp3`;
  audio.currentTime = 0;
  audio.play();
  playsong.classList.remove("fa-circle-play");
  playsong.classList.add("fa-circle-pause");
  // makeAllPlays();
  // document.getElementById(`playThisSong${songIndex}`).classList.remove(
  //   "fa-circle-play"
  // );
  // document.getElementById(`playThisSong${songIndex}`).classList.add(
  //   "fa-circle-pause"
  // );
});
document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 7;
  } else {
    songIndex -= 1;
  }
  audio.src = `songs/song_${songIndex + 1}.mp3.mp3`;
  audio.currentTime = 0;
  audio.play();
  playsong.classList.remove("fa-circle-play");
  playsong.classList.add("fa-circle-pause");
  // makeAllPlays();
  // document.getElementById(`playThisSong${songIndex}`).classList.remove(
  //   "fa-circle-play"
  // );
  // document.getElementById(`playThisSong${songIndex}`).classList.add(
  //   "fa-circle-pause"
  // );
});
