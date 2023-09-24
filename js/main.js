const audio = document.querySelector('.audio-player__sounds > audio');
const playerBg = document.querySelector('.audio-player__bg img');
const songPic = document.querySelector('.audio-player__pic img');
const songName = document.querySelector('.song-name__song');
const songerName = document.querySelector('.song-name__songer');
const buttonPlay = document.querySelector('.buttons-play');
const buttonPrev = document.querySelector('.buttons-prev')
const buttonNextSong = document.querySelector('.buttons-next');
const totalTime = document.querySelector('.time-total')
const actualTime = document.querySelector('.time-actual');
const progressBarMain = document.querySelector('.progress-audio__bar')
const progressBar = document.querySelector('.progress-audio__bar > div')
let songNum = 0;
let isPlaying = false;
let songs = [
    {
        songerName: 'Chris Cornell',
        songName: 'You know my name',
        songPath: 'Chris_Cornell_-_You_know_my_name.mp3',
        songPic: 'img-1-small.webp',
        songPicBg: 'img-1.webp',
    },
    {
        songerName: 'Jack White & Alicia Keys',
        songName: 'Another Way To Die',
        songPath: 'Jack_White_-_Alicia_Keys_-_Ice_Mc_-_Another_Way_To_Die.mp3',
        songPic: 'img-2-small.webp',
        songPicBg: 'img-2.webp',
    },
    {
        songerName: 'Adele Adele',
        songName: 'Skyfall',
        songPath: 'Adele_Adele_-_Skyfall.mp3',
        songPic: 'img-3-small.webp',
        songPicBg: 'img-3.webp',
    },
    {
        songerName: 'Sam Smith',
        songName: "Writing's On The Wall",
        songPath: "Sam_Smith_–_Writing's_On_The_Wall.mp3",
        songPic: 'img-4-small.png',
        songPicBg: 'img-4.png',
    },
    {
        songerName: 'Billie Eilish',
        songName: 'No Time To Die',
        songPath: 'Billie_Eilish_-_No_Time_To_Die.mp3',
        songPic: 'img-5-small.png',
        songPicBg: 'img-5.webp',
    }
]


function initialization() {
    songPic.src = `img/${songs[songNum].songPic}`;
    playerBg.src = `img/${songs[songNum].songPicBg}`;
    songName.innerHTML = songs[songNum].songName;
    songerName.innerHTML = songs[songNum].songerName;
    audio.src = `source/${songs[songNum].songPath}`
    fullTimeSong()
}
initialization()
function prevSong() {
    if(songNum === 0) {
        stopSong();
        songNum = songs.length -1;
        initialization();
        playSong();
    } else if(songNum !== 0) {
        stopSong();
        songNum--;
        initialization();
        playSong();
    }
}
function nextSong() {
    if(songNum === songs.length -1) {
        stopSong();
        songNum = 0;
        initialization();
        playSong();
    } else if(songNum !== songs.length -1) {
        stopSong();
        songNum++;
        initialization();
        playSong();
    }
}
function playSong() {
    audio.play();
    buttonPlay.classList.add('active-song');
    isPlaying = true;
}
function stopSong() {
    audio.pause();
    buttonPlay.classList.remove('active-song');
    isPlaying = false;
}
function progress(e) {
    const fullTime = e.srcElement.duration;
    const currentTime = e.srcElement.currentTime;
    const barPercent = (currentTime / fullTime) * 100;
    progressBar.style.width = `${barPercent}%`
    let minutes = Math.floor(currentTime / 60);
    let seconds = Math.floor(currentTime % 60);
    actualTime.textContent = `0${minutes}:${seconds < 10 ? '0':''}${seconds}`
}
function setBar(e) {
    const width = progressBarMain.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration
}
function fullTimeSong() {
    audio.addEventListener('loadedmetadata', function () {
        const duration = audio.duration;
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        totalTime.textContent = `0${minutes}:${seconds < 10 ? '0':''}${seconds}`
    })
}
function moveMouse() {
    let isMousePassed = false
    progressBarMain.addEventListener('mousedown', function(e) {
        if(e.button === 0) {
            isMousePassed = true
        }
    })
    progressBarMain.addEventListener('mouseup', function() {
        if(isMousePassed) {
            isMousePassed = false;
        }
    })
    progressBarMain.addEventListener('mousemove', function(e) {
        if(isMousePassed) {
            const width = progressBarMain.clientWidth;
            let posX = e.offsetX;
            const duration = audio.duration;
            audio.currentTime = (posX / width) * duration
        }
    })
}


buttonPlay.addEventListener('click', function() {
    if(!isPlaying) {
        playSong()
    } else {
       stopSong();
    }
})
buttonPrev.addEventListener('click', prevSong)
buttonNextSong.addEventListener('click', nextSong)
audio.addEventListener('timeupdate', progress)
progressBarMain.addEventListener('click', setBar)
moveMouse()
