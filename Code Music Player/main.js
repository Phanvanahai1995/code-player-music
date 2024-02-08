/*
1. Render songs
2. Scroll top
3. Play/ pause / seek
4. CD rotate
5. Nex / pev
6. Ran dom
7. Next/ Repeat when ended
8. Active song
9. Scroll active song into view
10. Play song when click



*/

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const cd = $(".image");

const playList = $(".play-list");
const heading = $(".title");
const musicImg = $(".image");
const audio = $("#audio");
const playBtn = $(".btn-play");
const player = $(".container");

const timePlay = $("#range");
const nextBtn = $(".btn-forward");
const preBtn = $(".btn-back");

const ranDomBtn = $(".btn-auto");

const app = {
  currentIndex: 0,
  isPlaying: false,
  songs: [
    {
      name: "Đi để trở về",
      singer: "Sobin Hoàng Sơn",
      path: "./music/Di-De-Tro-Ve-SOOBIN.mp3",
      img: "./img/01.jpg",
    },

    {
      name: "Tết này con sẽ về",
      singer: "Bùi Công Nam",
      path: "./music/Tet-Nay-Con-Se-Ve-Bui-Cong-Nam.mp3",
      img: "./img/02.jpg",
    },

    {
      name: "Đón Xuân",
      singer: "Only C",
      path: "./music/Don-Xuan-OnlyC.mp3",
      img: "./img/03.jpg",
    },

    {
      name: "Tuổi gì mà chả thích lì xì",
      singer: "Bích Phương",
      path: "./music/Tuoi-Gi-Ma-Chang-Thich-Li-Xi-Bich-Phuong-Binh-Gold.mp3",
      img: "./img/04.jpg",
    },

    {
      name: "Chuyện cũ bỏ qua",
      singer: "Trúc Nhân",
      path: "./music/Chuyen-Cu-Bo-Qua-3-Truc-Nhan-Ricky-Star.mp3",
      img: "./img/05.jpg",
    },

    {
      name: "Đi để trở về 2",
      singer: "Sobin Hoàng Sơn",
      path: "./music/Chuyen-Di-Cua-Nam-Di-De-Tro-Ve-2-SOOBIN.mp3",
      img: "./img/06.jpg",
    },

    {
      name: "Như anh đã thấy em",
      singer: "Phúc XP",
      path: "./music/Nhu-Anh-Da-Thay-Em-PhucXP-Freak-D.mp3",
      img: "./img/07.jpg",
    },

    {
      name: "Thì thôi",
      singer: "Reddy",
      path: "./music/Thi-Thoi-Reddy.mp3",
      img: "./img/08.jpg",
    },

    {
      name: "Chờ đợi có đáng sợ",
      singer: "Andiez",
      path: "./music/Cho-Doi-Co-Dang-So-Piano-Verison-Andiez.mp3",
      img: "./img/09.jpg",
    },
  ],

  render: function () {
    const html = this.songs.map((song) => {
      return `
        <div class="play-list__item">
            <img src="${song.img}" alt="" class="play-list__img">
            <div class="play-list__title">
                <h3 class="play-list__heading">${song.name}</h3>
                <h4 class="play-list__sub-heading">${song.singer}</h4>
            </div >
            <div class="play-download"><a href="" class="play-link"><i class="fa-solid fa-ellipsis"></i></a></div>
        </div>
        `;
    });
    playList.innerHTML = html.join("");
  },

  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },

  handleEvents: function () {
    // Xử lý CD quay / dừng
    const musicImage = musicImg.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000,
      iterations: Infinity,
    });

    musicImage.pause();
    // Xử lý phóng to thu nhỏ CD
    const _this = this;

    const cdWidth = cd.offsetWidth;
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;
      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };

    // Xử lý khi click play

    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    // Khi song được play
    audio.onplay = function () {
      _this.isPlaying = true;
      player.classList.add("playing");
      musicImage.play();
    };

    // Khi song pause
    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
      musicImage.pause();
    };

    // Khi tiến độ bài hát hay đổi
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const timePlayPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        timePlay.value = timePlayPercent;
      }
    };

    // Xử lý khi tua song
    timePlay.onchange = function (e) {
      const seekTime = (e.target.value * audio.duration) / 100;
      audio.currentTime = seekTime;
    };

    // Khi next song
    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.randomSong();
      } else {
        _this.nextSong();
      }

      audio.play();
    };

    // Khi pre song
    preBtn.onclick = function () {
      if (_this.isRandom) {
        _this.randomSong();
      } else {
        _this.preSong();
      }
      audio.play();
    };

    // Khi random
    ranDomBtn.onclick = function (e) {
      _this.isRandom = !_this.isRandom;
      ranDomBtn.classList.toggle("btn-random_active", _this.isRandom);
    };
  },

  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    musicImg.src = `${this.currentSong.img}`;
    audio.src = `${this.currentSong.path}`;
  },

  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },

  preSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },

  randomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * app.songs.length);
    } while (newIndex === this.currentIndex);
    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },

  start: function () {
    //định nghĩa các thuộc tính cho object
    this.defineProperties();
    //Lắng nghe và xử lý các sự kiện (DOM events)
    this.handleEvents();
    // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    this.loadCurrentSong();
    // Render playlist
    this.render();
  },
};

app.start();
