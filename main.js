const btnPlay = document.getElementById('play');
const btnPlayVai = document.getElementById('play-vai');
const btnPlayVol = document.getElementById('play-volta');

const audio = document.getElementById('audio');
const audioTitulo = document.getElementById('audio-titulo');

const statusSom = document.getElementById('status-som');

let status = true;
let capitulo = 1;


const playlist = [
  'Esteban - Carta aos Desinteressados',
  'O Terno - Morto',
  'Maneva - Pisando Descalço',
  'Jorge Ben Jor - O Telefone Tocou Novamente',
  'Cartola-Preciso Me Encontrar',
  'Jorge Ben - Chove Chuva',
  'Martinho Da Vila - Disritmia',
  'Tim Maia - Ela Partiu',
  'Tim Maia - Azul Da Cor Do Mar',
  'Gal Costa - Lágrimas Negras',
  'Rodrido - O Lado Vazio do Sofá',
  'Scalene - Furta-Cor',
  'Demonios Da Garoa - Trem das onze',
];

function start() {
    btnPlay.classList.remove('bi-play-circle-fill');
    btnPlay.classList.add('bi-pause-circle-fill');
    audio.play();
}

function stop() {
    btnPlay.classList.remove('bi-pause-circle-fill');
    btnPlay.classList.add('bi-play-circle-fill');
    audio.pause();
}

function mudarAudioTitulo() {
    const arquivoMP3 = playlist[capitulo - 1];
    audio.src = `./playlist/${arquivoMP3}.mp3`;
    audioTitulo.innerText = `${arquivoMP3}`;
    statusSom.play();
    start()
}

btnPlay.addEventListener('click', () => {
    status = !status;

    if (status) {
        statusSom.pause();
        stop()
    } else {
        statusSom.play();
        start()
    }
});

function proximaMusica() {
    capitulo = capitulo + 1;
    if (capitulo > playlist.length) {
        capitulo = 1;
        mudarAudioTitulo();
    } else {
        mudarAudioTitulo();
    }
}


btnPlayVai.addEventListener('click', () => {
    proximaMusica()
});

btnPlayVol.addEventListener('click', () => {
    capitulo = capitulo - 1;
    if (capitulo < 1) {
        capitulo = playlist.length;
        mudarAudioTitulo();
    } else {
        mudarAudioTitulo();
    }
});

audio.addEventListener('ended', () => {
    proximaMusica();
});