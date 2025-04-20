
console.log("Let's write JavaScript...");

let currentsong = new Audio();   


async function getSongs() {
    const songFiles = [
        'ChalChaiyaChaiya.mp3',
        'Challa.mp3',
        'Dil Haara Song.mp3',
        'Manzar Hai Yeh Naya.mp3',
        'Ranjha .mp3',
        'ROCKSTAR .mp3',
        'Tera Chehra .mp3',
        'Teri Deewani .mp3',
        'Tum Se Hi.mp3'
    ];
    return songFiles;
}

async function main() {
    const songs = await getSongs();
    const songul = document.querySelector(".songlist ul");
    const play = document.querySelector(".play"); // ✅ Moved up so it's available for playMusic()

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    }
    

    let currentIndex = 0;
    const playMusic = (index,pause=false) => {
     
        currentIndex = index;
        

        const cleanedTrack = songs[index].trim();
        console.log("Trying to play:", `assets/${cleanedTrack}`);
        currentsong.src = `assets/${cleanedTrack}`;
        

        if (!pause) {
          
                currentsong.play().catch(err => console.error("Play error:", err));
                play.src = "images/pause.svg";
            }
        else {
            play.src = "images/play.svg"; // show play icon when paused
        }

          document.querySelector(".duration1").innerHTML="00:00"
    document.querySelector(".duration2").innerHTML="00:00"

   
    };
   
  

    // Generate song list
    for (const song of songs) {
        songul.innerHTML += `<li>
            <div class="songcard">
                <div style="width: 25%;"><img src="images/music.svg" alt=""></div>
                <div style="width: 50%; display: flex; justify-content: center; flex-direction: column; align-items: center;" class="info">
                    <div>${song}</div>
                    <div>artist</div>
                </div>
                <div style="width: 10%;"><img class="playbutton" src="images/playbutton.svg" alt=""></div>
            </div>
        </li>`;
    }

    // Attach click listener to each song
    Array.from(document.querySelectorAll(".songlist li")).forEach((e,index) => {
        e.addEventListener("click", () => {
            // const trackName = e.querySelector(".info").firstElementChild.innerHTML;
            playMusic(index);
        });
    });

    // ✅ Fix play button toggle
    play.addEventListener("click", () => {
        if (currentsong.paused) {
            currentsong.play();
            play.src = "images/pause.svg";
        } else {
            currentsong.pause();
            play.src = "images/play.svg";
        }
    });

    currentsong.addEventListener("ended", () => {
        currentIndex = (currentIndex + 1) % songs.length;
        playMusic(currentIndex);
    });



    const seekbar = document.querySelector(".seekbar");

    seekbar.addEventListener("click", (e) => {
        const rect = seekbar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const percentage = clickX / width;
    
        currentsong.currentTime = percentage * currentsong.duration;
    });

    // Update total duration when metadata is loaded

currentsong.addEventListener("loadedmetadata", () => {
    document.querySelector(".duration2").innerHTML = formatTime(currentsong.duration);
});

// Update current time while playing
currentsong.addEventListener("timeupdate", () => {
    document.querySelector(".duration1").innerHTML = formatTime(currentsong.currentTime);
    document.querySelector(".circle1").style.left=((currentsong.currentTime/currentsong.duration)*100 ) +"%";
});
playMusic(0,true)







}

main();

