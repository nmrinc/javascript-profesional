class MediaPlayer {
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];

        this._initPlugins();
    }
    _initPlugins() {
        const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,
            get muted() {
                return this.media.muted;
            },
            set muted(value) {
                this.media.muted = value;
            },
        };

        this.plugins.forEach(plugin => {
            plugin.run(player);
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