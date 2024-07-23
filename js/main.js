const songs = [
    {
        artist: 'AC DC',
        songName: 'Thunderstruck',
        songPath: 'music/AC DC  Thunderstruck (Official Video).mp3',
        imagePath: 'images/AC DC  Thunderstruck (Official Video).jpg'
    },
    {
        artist: 'AC DC',
        songName: 'Back In Black',
        songPath: 'music/AC DC  Back In Black (Live At River Plate, December 2009).mp3',
        imagePath: 'images/AC  DC  ROCK.png'
    },
    {
        artist: 'Led Zeppelin',
        songName: 'Stairway to Heaven',
        songPath: 'music/Led Zeppelin - Stairway to Heaven.mp3',
        imagePath: 'images/Led Zeppelin - Stairway to Heaven.jpg'
    },
    {
        artist: 'Queen',
        songName: 'Bohemian Rhapsody',
        songPath: 'music/Queen - Bohemian Rhapsody.mp3',
        imagePath: 'images/Queen - Bohemian Rhapsody.jpg'
    },
    {
        artist: 'The Beatles',
        songName: 'Hey Jude',
        songPath: 'music/The Beatles - Hey Jude.mp3',
        imagePath: 'images/The Beatles - Hey Jude.jpg'
    }
];


document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('song-list')) {
        loadSongs();
    } else if (document.getElementById('audio-player')) {
        loadPlayer();
    }
});

function loadSongs() {
    const songList = document.getElementById('song-list');
    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${song.imagePath}" alt="Song Image">
            <div>
                <h4>${song.artist}</h4>
                <p>${song.songName}</p>
            </div>
        `;
        li.onclick = () => selectSong(index);
        songList.appendChild(li);
    });
}

function selectSong(index) {
    const song = songs[index];
    sessionStorage.setItem('selectedSong', JSON.stringify(song));
    window.location.href = 'player.html';
}

function loadPlayer() {
    const song = JSON.parse(sessionStorage.getItem('selectedSong'));
    if (song) {
        document.getElementById('song-image').src = song.imagePath;
        document.getElementById('artist-name').innerText = song.artist;
        document.getElementById('song-name').innerText = song.songName;
        document.getElementById('audio-player').src = song.songPath;
    }
}
