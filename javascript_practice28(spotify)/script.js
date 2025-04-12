console.log("Let's write JavaScript...");

async function getSongs() {
    // Manually list your song files if not served dynamically
    const songFiles = ['ChalChaiyaChaiya.mp3', 'Challa.mp3', 'Dil Haara Song.mp3', 'Manzar Hai Yeh Naya.mp3', 'Ranjha .mp3', 'ROCKSTAR .mp3', 'Tera Chehra .mp3', 'Teri Deewani .mp3', 'Tum Se Hi.mp3'];
    return songFiles;
}

async function main() {
    const songs = await getSongs();
    console.log("Songs:", songs);

    const songul = document.querySelector(".songlist ul");

    for (const song of songs) {
        songul.innerHTML += `  <li>
                            <div class="songcard">
                                <div style="width: 25%;"><img class="" src="images/music.svg" alt=""></div>
                                
                                <div style="width: 50%;" class="info">
                                    <div> ${song}</div>
                                    <div style="margin-top: 3px;">artist</div>
                                   
                                </div>
                                <div style="width:16%;"> <img  class="playbutton" src="images/playbutton.svg" alt=""></div>
                            </div>
                        </li>`;

                         
    }

    // Play the first song
    const audio = new Audio(`assets/${songs[0]}`);
    audio.play();
}

main();
