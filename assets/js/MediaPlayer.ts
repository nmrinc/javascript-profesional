class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>

    constructor(config: { el: HTMLMediaElement; plugins: any[]; }) {
        this.media = config.el;
        this.plugins = config.plugins || [];

        this.initPlugins();
    }
    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    play() {
        this.media.play();
        //document.getElementById('butt_Play').innerHTML = 'Pause';
    }

    pause() {
        this.media.pause();
        //document.getElementById('butt_Play').innerHTML = 'Play';
    }

    togglePlay() {
        this.media.paused ? this.play() : this.pause();
    }
    
    mute() {
        this.media.muted = true;
        //document.getElementById('butt_Mute').innerHTML = 'Unmute';
    }

    unmute() {
        this.media.muted = false;
        //document.getElementById('butt_Mute').innerHTML = 'Mute';
    }
    
    toggleSound() {
        this.media.muted ? this.unmute() : this.mute();
    }
}








export default MediaPlayer;