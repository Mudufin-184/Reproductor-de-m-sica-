document.addEventListener('DOMContentLoaded', () => {
    const songs = [
        {
            artist: 'AC DC',
            songName: 'Rock or Bust',
            songPath: 'music/AC DC  Rock or Bust (Official Video).mp3',
            imagePath: 'images/AC DC  Rock or Bust (Official Video).jpg'
        },
        {
            artist: 'Billie Eilish',
            songName: 'When The Party’s Over',
            songPath: 'music/Billie Eilish when the party over (Traducida al Español).mp3',
            imagePath: 'images/Billie Eilish  when the partys over (Traducida al Español).jpg'
        },
        {
            artist: 'Benson Boone',
            songName: 'Beautiful Things',
            songPath: 'music/Benson Boone  Beautiful Things (Español  Lyrics)  video musical.mp3',
            imagePath: 'images/Benson Boone Beautiful Things.jpg' // Asegúrate de tener esta imagen en la carpeta images
        },
        {
            artist: 'Lewis Capaldi',
            songName: 'Someone You Loved',
            songPath: 'music/Someone You Loved  Lewis Capaldi Subtitulada Lyrics.mp3',
            imagePath: 'images/Someone You Loved  Lewis Capaldi.jpg'
        },
        {
            artist: 'AC DC',
            songName: 'Thunderstruck',
            songPath: 'music/AC DC  Thunderstruck (Official Video).mp3',
            imagePath: 'images/AC DC  Thunderstruck (Official Video).jpg'
        },
        {
            artist: 'Ember Island',
            songName: 'Umbrella',
            songPath: 'music/Ember Island Umbrella (Español).mp3',
            imagePath: 'images/maxresdefault.jpEmber Island  Umbrella.jpg'
        },
        {
            artist: 'AC DC',
            songName: 'Back In Black',
            songPath: 'music/AC DC  Back In Black (Live At River Plate, December 2009).mp3',
            imagePath: 'images/AC DC  Back In Black (Live At River Plate, December 2009).jpg'
        },
        {
            artist: 'AC DC',
            songName: 'For Those About To Rock',
            songPath: 'music/AC DC  For Those About To Rock (with lyrics).mp3',
            imagePath: 'images/AC DC For Those About To Rock (with lyrics).jpg'
        },
        {
            artist: 'Aidan Gallagher',
            songName: '4th Of July',
            songPath: 'music/4th Of July - Aidan Gallagher (Subtitulada al Español).mp3',
            imagePath: 'images/4th Of July - Aidan Gallagher (Subtitulada al Español).jpg'
        },
        {
            artist: 'AC DC',
            songName: 'Hells Bells',
            songPath: 'music/AC DC  Hells Bells (Official 4K Video).mp3',
            imagePath: 'images/AC DC  Hells Bells (Official 4K Video).jpg'
        },
        {
            artist: 'Banners',
            songName: 'Someone To You',
            songPath: 'music/Banners  Someone To You (sub. español).mp3',
            imagePath: 'images/BANNERS Someone To You (sub. español).png'
        },
        {
            artist: 'AC DC',
            songName: 'Let There Be Rock',
            songPath: 'music/AC DC  Let There Be Rock (Apollo Theatre, Glasgow, April 1978).mp3',
            imagePath: 'images/AC DC  Let There Be Rock (Apollo Theatre, Glasgow, April 1978).jpg'
        },
        {
            artist: 'Ed Sheeran',
            songName: 'Perfect',
            songPath: 'music/Ed Sheeran Perfect (Sub Español).mp3',
            imagePath: 'images/Ed Sheeran Perfect (Sub Español).png'
        },       
        {
            artist: 'AC DC',
            songName: 'ROCK',
            songPath: 'music/AC DC  ROCK.mp3',
            imagePath: 'images/AC  DC  ROCK.png'
        },
        {
            artist: 'Billie Eilish',
            songName: 'Bad Guy',
            songPath: 'music/BAD GUY BILLIE EILISH LETRA EN ESPAÑOL.mp3',
            imagePath: 'images/BAD GUY BILLIE EILISH LETRA EN ESPAÑOL.jpg'
        }, 
        {
            artist: 'AC DC',
            songName: 'You Shook Me All Night Long',
            songPath: 'music/AC DC  You Shook Me All Night Long (Official 4K Video).mp3',
            imagePath: 'images/AC DC  You Shook Me All Night Long (Official 4K Video).jpg'
        }
            
    ];

    function loadSongs() {
        const horizontalSongList = document.getElementById('horizontal-song-list');
        const verticalSongList = document.getElementById('vertical-song-list');
        songs.forEach((song, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${song.imagePath}" alt="Song Image">
                <div>
                    <h4>${song.artist}</h4>
                    <p>${song.songName}</p>
                </div>
            `;
            li.addEventListener('click', () => selectSong(index));
            horizontalSongList.appendChild(li.cloneNode(true));
            verticalSongList.appendChild(li);
        });
    }

    function selectSong(index) {
        const song = songs[index];
        sessionStorage.setItem('selectedSong', JSON.stringify(song));
        sessionStorage.setItem('playImmediately', true);
        window.location.href = 'player.html';
    }

    document.querySelectorAll('.followed-artists .artist').forEach((item, index) => {
        item.addEventListener('click', () => {
            sessionStorage.setItem('selectedSong', JSON.stringify(songs[index]));
            sessionStorage.setItem('playImmediately', true);
            window.location.href = 'player.html';
        });
    });

    loadSongs();
});
