import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads';

const video = document.querySelector('video');
const player = new MediaPlayer({
    el: video,
    plugins: [
        new AutoPlay(),
        new AutoPause(),
        new Ads()
    ]
});

const butt_Play: HTMLElement = document.getElementById('butt_Play');
butt_Play.onclick = () => player.togglePlay();

const butt_Mute: HTMLElement = document.getElementById('butt_Mute');
butt_Mute.onclick = () => player.toggleSound();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.error(error.message);
    });
}