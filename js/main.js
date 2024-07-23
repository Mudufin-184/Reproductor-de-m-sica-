document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("audio");
    const playPauseBtn = document.querySelector(".play-pause");
    const progressBar = document.querySelector(".progress-bar .progress");
    const prevBtn = document.querySelector(".control-btn-left");
    const nextBtn = document.querySelector(".control-btn");
    const favoriteBtn = document.querySelector(".control-favorite");
    const randomBtn = document.querySelector(".control-aletorio");
    const songTitle = document.getElementById("song-title");
    const artistName = document.getElementById("artist-name");
    const nextSong = document.getElementById("next-song");

    let isPlaying = false;

    // Update audio source based on URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const song = urlParams.get("song");

    if (song) {
        audio.src = song;
        audio.play();
        playPauseBtn.innerHTML = '<i class="bi bi-pause-circle"></i>';

        // Example song info (You might want to dynamically set this as well)
        songTitle.textContent = "Updated Song Title"; // Replace with dynamic info if available
        artistName.textContent = "Updated Artist Name"; // Replace with dynamic info if available
        nextSong.textContent = "Updated Next Song"; // Replace with dynamic info if available
    }

    // Toggle play/pause
    playPauseBtn.addEventListener("click", () => {
        if (isPlaying) {
            audio.pause();
            playPauseBtn.innerHTML = '<i class="bi bi-play-circle"></i>';
        } else {
            audio.play();
            playPauseBtn.innerHTML = '<i class="bi bi-pause-circle"></i>';
        }
        isPlaying = !isPlaying;
    });

    // Update progress bar
    audio.addEventListener("timeupdate", () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = progress + "%";
    });

    // Jump to specific time in the song
    progressBar.addEventListener("click", (e) => {
        const percent = e.offsetX / progressBar.offsetWidth;
        audio.currentTime = percent * audio.duration;
    });

    // Next and Previous track (stub functions)
    nextBtn.addEventListener("click", () => {
        // Logic for next song
    });

    prevBtn.addEventListener("click", () => {
        // Logic for previous song
    });

    // Favorite and random (stub functions)
    favoriteBtn.addEventListener("click", () => {
        // Logic for favorite song
    });

    randomBtn.addEventListener("click", () => {
        // Logic for shuffle
    });
});
