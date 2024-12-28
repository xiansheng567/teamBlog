let playButton = document.getElementById("play");
let Audio = document.getElementById("audio");
let controlButton = document.getElementById("controls");
let prevButton=document.getElementById("prev");
let nextButton=document.getElementById("next");
//滚动区域高度
let ulDom = document.querySelector(".lyric-container ul");
let ulDomH = document.querySelector(".lyric-container ul").clientHeight;
const containerH = document.querySelector(".lyric-container").clientHeight;
let maxOffset;
let currentSongIndex = 0;

let lrc = '';
let songs = [
    {
        song: "../src/music/晚餐歌.mp3",
        Lyrics: "../src/music/晩餐歌 (弾き語りver) - tuki..lrc",
        title: "晚餐歌(弾き語りver)",
        author: "tuki..",
        album: "晩餐歌 (弾き語りver)",
        img: "../src/music/晚餐歌.jpg"
    },
    {
        song: "../src/music/サターン (土星).mp3",
        Lyrics: "../src/music/サターン - ずっと真夜中でいいのに。.lrc",
        title: "サターン",
        author: "ずっと真夜中でいいのに。",
        album: "サターン",
        img: "../src/music/サターン.jpg"
    },
    {
        song: "../src/music/秒針を噛む.mp3",
        Lyrics: "../src/music/秒針を噛む - ずっと真夜中でいいのに。.lrc",
        title: "秒針を噛む",
        author: "ずっと真夜中でいいのに。",
        album: "秒針を噛む",
        img: "../src/music/秒針を噛む.jpg"
    }
];
var root = document.documentElement;
const cdBox=document.getElementById("cdBox");
const title=document.getElementById("title");
const info=document.getElementById("info");
function updateInfo(currentSongIndex){
    root.style.setProperty('--bg-image', `url(${songs[currentSongIndex].img})`);
    title.textContent = songs[currentSongIndex].title;
    let spans=info.querySelectorAll("span");
    spans[0].textContent = songs[currentSongIndex].author;
    spans[1].textContent = songs[currentSongIndex].album;
}

//更具索引换歌
function changeSong(index) {
    currentSongIndex = index;
    getLry(currentSongIndex);
    Audio.pause();
    Audio.src = songs[currentSongIndex].song;
    Audio.play();
    updateInfo(currentSongIndex);
    playButton.classList.add("active");
}


prevButton.addEventListener("click", function() {
    if (currentSongIndex > 0) {
        currentSongIndex--;
        getLry(currentSongIndex);
        Audio.pause();
        Audio.src = songs[currentSongIndex].song;
        Audio.play();
        updateInfo(currentSongIndex);
        playButton.classList.add("active");
    }else{
        alert("已经是第一首了！");
    }
});
nextButton.addEventListener("click", function() {
    if (currentSongIndex < songs.length - 1) {
        currentSongIndex++;
        getLry(currentSongIndex);
        Audio.pause();
        Audio.src = songs[currentSongIndex].song;
        Audio.play();
        playButton.classList.add("active");
        updateInfo(currentSongIndex);
    }else{
        alert("已经是最后一首了！");
    }
});


playButton.addEventListener("click", function() {
    let flag = Array.from(controlButton.classList).some(function(item) {
        return item === "active";
    });
    if (flag) {
        cdBox.classList.remove("active");
        controlButton.classList.remove("active");
        Audio.pause();
        playButton.classList.remove("active");
    } else {
        cdBox.classList.add("active");
        controlButton.classList.add("active");
        Audio.play();
        playButton.classList.add("active");
    }
});
getLry(currentSongIndex);
function getLry(currentSongIndex){
    fetch(songs[currentSongIndex].Lyrics).then(response=>{
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        return response.text();
    }).then(data=>{
        lrc = data;
        showLrc();
        ulDomH = document.querySelector(".lyric-container ul").clientHeight;
        maxOffset = ulDomH - containerH;
    });
}


    // 获取时间和歌词
function getLrcObj(str) {
    const arr = str.split(']');
    return {
      time: formateTime(arr[0].substring(1)),
      word: arr[1],
    };
  }
  // 把时间转化成秒
function formateTime(str) {
  const arr = str.split(':');
  return +arr[0] * 60 + +arr[1];
}

function getLrc(str) {
  const strArr = str.split('\n');
  let arr = [];
  for (let i = 0; i < strArr.length; i++) {
    let obj = getLrcObj(strArr[i]);
    arr.push(obj);
  }
  return arr;
}

let lrcArr = [];
function showLrc() {
  lrcArr=[];  
  document.getElementById('lyrics').innerHTML = ''; 
  const fragment = document.createDocumentFragment();
  lrcArr = getLrc(lrc);
  console.log(lrc);
  for (let i = 0; i < lrcArr.length; i++) {
    li = document.createElement('li');
    li.textContent = lrcArr[i].word;//歌词
    fragment.appendChild(li);
  }
  document.getElementById('lyrics').appendChild(fragment);
}

function getArrIndex() {
    const currentTime = Audio.currentTime;
    let index = lrcArr.findIndex(function (item) {
      return item.time > currentTime
    })
    if (index == -1) {
      return lrcArr.length - 1;
    }
    return index - 1;
}
    //实时获取歌曲播放进度
    function setLrc() {
      setProgress();//设置进度条
      const nowIndex = getArrIndex();
      const allLiHeight = nowIndex * 50;
      const half = containerH / 2; // 容器的一半高度
      // 移动多少
      let offset = allLiHeight- half;
      if (offset < 0) {
        offset = 0;
      }
      if (offset > maxOffset) {
        offset = maxOffset;
      }
      //滚动歌词
      ulDom.style.transform = `translateY(-${offset}px)`;

      let li = document.querySelector('.on');
      if (li) {
        li.classList.remove('on');
      }
      //设置 当前歌词高亮
      li = ulDom.children[nowIndex];

      if (li) {
        li.classList.add('on');
      }
    }

Audio.addEventListener('timeupdate', setLrc);
const slider = document.getElementById('seek-bar');

slider.oninput = function () {
  let duration = Audio.duration;
  Audio.currentTime = this.value / 100 * duration;
}
function setProgress() {
    let duration = Audio.duration;
    const currentTime = Audio.currentTime;
    let val = parseInt(currentTime / duration * 100);
    slider.value = val;
    slider.style.setProperty('--slider-percent', val + '%');
  }