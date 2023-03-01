const image = document.querySelector("#music_image");
const card = document.querySelector(".card");
const title = document.querySelector("#music_title");
const singer = document.querySelector("#singer");
const time_control = document.querySelector("#time_control");
const time = document.querySelector("#time");
const prev = document.querySelector("#controls #prev");
const play = document.querySelector("#controls #play");
const next = document.querySelector("#controls #next");
const menu = document.querySelector("#menu");
const audio = document.querySelector("#audio");




class MusicPlayer{
    constructor(musicList){
        this.musicList=musicList;
        this.index=0;
    }

    getMusic() {
        return this.musicList[this.index]
    }

    previous() {
        if(this.index>0) {
            this.index--;
        }
        else{
            this.index = this.musicList.length-1;
        }
    }

    next() {
        if(this.index < (this.musicList.length-1)){
            this.index++;
        }
        else{
            this.index=0;
        }
    }
}

class Music{
    constructor(title, singer, image, file){
        this.title=title;
        this.singer=singer;
        this.image=image;
        this.file=file;
    }
}

const musicList = [
    new Music("Boşver", "Nilüfer","1.jpeg","1.mp3"),    
    new Music("Bu da Geçer mi Sevgilim", "Yalın","2.jpeg","2.mp3"),    
    new Music("Aramızda Uçurumlar", "Suat Suna","3.jpeg","3.mp3")
]


const player = new MusicPlayer(musicList);

window.addEventListener("load", () =>{
    let music = player.getMusic();
    displayMusic(music);
})

prev.addEventListener("click", () =>{
    player.previous();
    let music = player.getMusic();
    displayMusic(music);
    if(play.classList.contains("fa-circle-play")){
        audio.pause();
    }
    else{
        audio.play();
    }
})

next.addEventListener("click", () =>{
    player.next();
    let music = player.getMusic();
    displayMusic(music);
    if(play.classList.contains("fa-circle-play")){
        audio.pause();
    }
    else{
        audio.play();
    }
})

play.addEventListener("click", () =>{
    if(play.classList.contains("fa-circle-play")){
        play.classList.remove("fa-circle-play");
        play.classList.add("fa-pause");
        audio.play();
    }
    else{
        play.classList.add("fa-circle-play");
        play.classList.remove("fa-pause");
        audio.pause();
    }
})

function displayMusic(music){
    title.innerText = music.title;
    singer.innerHTML = music.singer;
    image.src = "img/" + music.image;
    audio.src = "mp3/" + music.file;
}
