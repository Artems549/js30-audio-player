const audio = document.querySelector('.audio-player__sounds > audio');
const playerBg = document.querySelector('.audio-player__bg img');
const songPic = document.querySelector('.audio-player__pic img');
const songName = document.querySelector('.song-name__song');
const songerName = document.querySelector('.song-name__songer');
const buttonPlay = document.querySelector('.buttons-play');
const buttonPrev = document.querySelector('.buttons-prev')
const buttonNextSong = document.querySelector('.buttons-next')
let songNum = 0;
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
}
initialization()
function nextSong() {
    songNum++;
    audio.play()
}
buttonPrev.addEventListener('click', function() {
    audio.pause();
    songNum--
    initialization()
    audio.play()
})
buttonPlay.addEventListener('click', function() {
    audio.play()
})
buttonNextSong.addEventListener('click', function() {
    audio.pause();
    songNum++
    initialization()
    audio.play()
})