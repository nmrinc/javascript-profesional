interface ConfigParams {
    el: HTMLMediaElement;
    plugins?: Array<any>;
}

class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;
    container: HTMLElement;

    constructor(config: ConfigParams) {
        this.media = config.el;
        this.plugins = config.plugins;

        this.initPlayer();
        this.initPlugins();
    }

    private initPlayer() {
        this.container = document.createElement('div');
        this.container.style.position = 'relative';
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    }

    private initPlugins() {
        if (!this.plugins || !Array.isArray(this.plugins)) {
            return;
        } else {
            this.plugins.forEach(plugin => {
                plugin.run(this);
            });
        }
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