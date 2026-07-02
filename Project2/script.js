console.log("Let's write JavaScript");

let currentSong = new Audio();
let songs;
let play;

function secondsToMinutesSeconds(seconds) {

    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = Math.floor(seconds % 60);

    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
}

async function getSongs() {

    let a = await fetch("http://127.0.0.1:5500/Project2/songs/");
    let response = await a.text();

    let div = document.createElement("div");
    div.innerHTML = response;

    let as = div.getElementsByTagName("a");
    let songs = [];

    for (let i = 0; i < as.length; i++) {

        let element = as[i];

        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1]);
        }
    }

    return songs;
}

const playMusic = (track, pause = false) => {

    currentSong.src =
        "http://127.0.0.1:5500/Project2/songs/" + track;

    if (!pause) {
        currentSong.play();

        play.src =
            "https://img.icons8.com/ios-filled/50/ffffff/pause--v1.png";
    }
    else {
        play.src =
            "https://img.icons8.com/ios-filled/50/ffffff/play--v1.png";
    }

    document.querySelector(".songinfo").innerHTML =
        decodeURIComponent(track).replace(".mp3", "");

    document.querySelector(".songtime").innerHTML =
        "00:00 / 00:00";

    document.querySelectorAll(".songlist li").forEach(li => {
        li.classList.remove("active");
    });

    let activeSong =
        document.querySelector(`[data-track="${track}"]`);

    if (activeSong) {
        activeSong.classList.add("active");
    }
    document.querySelector(".circle").style.left = "0%";
    currentSong.currentTime = 0;
};

async function main() {

    songs = await getSongs();

    let songUL = document.querySelector(".songlist ul");

    songUL.innerHTML = "";

    for (const song of songs) {

        songUL.innerHTML += `
        <li data-track="${song}">
            <span class="musicicon">🎵</span>

            <span class="songname">
                ${decodeURIComponent(song).replace(".mp3", "")}
            </span>

            <span class="playicon">▶</span>
        </li>`;
    }

    play = document.getElementById("play");

    playMusic(songs[0], true);

    Array.from(
        document.querySelector(".songlist")
            .getElementsByTagName("li")
    ).forEach((e) => {

        e.addEventListener("click", () => {

            let track = e.dataset.track;

            playMusic(track);
        });

    });

    play.addEventListener("click", () => {

        if (!currentSong.src) return;

        if (currentSong.paused) {

            currentSong.play();

            play.src =
                "https://img.icons8.com/ios-filled/50/ffffff/pause--v1.png";

        } else {

            currentSong.pause();

            play.src =
                "https://img.icons8.com/ios-filled/50/ffffff/play--v1.png";
        }

    });

    document.getElementById("previous")
        .addEventListener("click", () => {

            let currentTrack =
                currentSong.src.split("/songs/")[1];

            let index = songs.indexOf(currentTrack);

            if (index > 0) {
                playMusic(songs[index - 1]);
            }

        });

    document.getElementById("next")
        .addEventListener("click", () => {

            let currentTrack =
                currentSong.src.split("/songs/")[1];

            let index = songs.indexOf(currentTrack);

            if (index < songs.length - 1) {
                playMusic(songs[index + 1]);
            }

        });

    //     currentSong.addEventListener("timeupdate", () => {

    //         document.querySelector(".songtime").innerHTML =
    //             `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`;

    //         // document.querySelector(".circle").style.left =
    //         //     (currentSong.currentTime / currentSong.duration) * 100 + "%";
    //         if (!isNaN(currentSong.duration)) {

    //     let percent =
    //         (currentSong.currentTime / currentSong.duration) * 100;

    //     document.querySelector(".circle").style.left =
    //         percent + "%";
    // }
    //     });

    currentSong.addEventListener("timeupdate", () => {

        document.querySelector(".songtime").innerHTML =
            `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`;

        if (
            currentSong.duration &&
            !isNaN(currentSong.duration)
        ) {

            let percent =
                (currentSong.currentTime / currentSong.duration) * 100;

            document.querySelector(".circle").style.left =
                percent + "%";
        }
    });

    // document.querySelector(".seekbar")
    //     .addEventListener("click", (e) => {

    //         let percent =
    //             (e.offsetX /
    //                 e.target.getBoundingClientRect().width) * 100;

    //         document.querySelector(".circle").style.left =
    //             percent + "%";

    //         currentSong.currentTime =
    //             (currentSong.duration * percent) / 100;
    //     });

    document.querySelector(".seekbar")
        .addEventListener("click", (e) => {

            let seekbar = e.currentTarget;

            let percent =
                (e.offsetX / seekbar.offsetWidth) * 100;

            currentSong.currentTime =
                (currentSong.duration * percent) / 100;

            document.querySelector(".circle").style.left =
                percent + "%";
        });

    currentSong.addEventListener("ended", () => {

        let currentTrack =
            currentSong.src.split("/songs/")[1];

        let index = songs.indexOf(currentTrack);

        if (index < songs.length - 1) {
            playMusic(songs[index + 1]);
        }
    });

    currentSong.addEventListener("loadeddata", () => {
        console.log("Audio Loaded Successfully");
    });

    currentSong.addEventListener("error", () => {
        console.log("Audio Error");
    });

    //Add an eventlistner for hamburger 
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").classList.toggle("show");
    })

    //Add an eventlistner to previous and next
    previous.addEventListener("click", () => {
        console.log("Previous clicked");

    })
    //Add an eventlistner to previous and next
    next.addEventListener("click", () => {
        console.log("next clicked");

    })

    //Add an event to volume
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e)=>{
        console.log('Setting volume to ' , e.target, e.target.value);
        currentSong.volume = parseInt(e.target.value) / 100;
    })
}

main();