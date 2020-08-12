function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function () {
    this.plugins.forEach(plugin => {
        plugin.run(this);
    });
};

MediaPlayer.prototype.play = function () {
    this.media.play();
    //document.getElementById('butt_Play').innerHTML = 'Pause';
};

MediaPlayer.prototype.pause = function () {
    this.media.pause();
    //document.getElementById('butt_Play').innerHTML = 'Play';
};

MediaPlayer.prototype.togglePlay = function () {
    this.media.paused ? this.play() : this.pause();
};

MediaPlayer.prototype.mute = function () {
    this.media.muted = true;
    //document.getElementById('butt_Mute').innerHTML = 'Unmute';
};

MediaPlayer.prototype.unmute = function () {
    this.media.muted = false;
    //document.getElementById('butt_Mute').innerHTML = 'Mute';
};

MediaPlayer.prototype.toggleSound = function () {
    this.media.muted ? this.unmute() : this.mute();
};

export default MediaPlayer;