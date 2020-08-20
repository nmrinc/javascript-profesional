import MediaPlayer from './../MediaPlayer'

class AutoPause {

    private treshold: number;
    private isVisible: boolean;
    player: MediaPlayer;

    constructor(){
        this.treshold = 0.25;
        this.isVisible = true;
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }

    run(player: MediaPlayer) {
        this.player = player;

        const observer = new IntersectionObserver(this.handleIntersection, { threshold: this.treshold })
        observer.observe(this.player.media)

        document.addEventListener('visibilitychange', this.handleVisibilityChange)
    }

    private handleIntersection(entries: IntersectionObserverEntry[]) {
        const entry = entries[0];
        this.isVisible = entry.intersectionRatio >= this.treshold;

        this.isVisible ? this.player.play() : this.player.pause();

        //console.log(entry);
    }

    private handleVisibilityChange() {
        const isFocused = document.visibilityState === 'visible';
        
        isFocused && this.isVisible ? this.player.play() : this.player.pause();
    }
}

export default AutoPause;