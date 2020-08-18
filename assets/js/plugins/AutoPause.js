class AutoPause {
    constructor(){
        this.treshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this);
    }

    run(player) {
        this.player = player;
        const observer = new IntersectionObserver(this.handleIntersection, { threshold: this.treshold })
        observer.observe(this.player.media)
    }

    handleIntersection(entries) {
        const entry = entries[0];
        const isVisible = entry.intersectionRatio >= this.treshold;

        isVisible ? this.player.play() : this.player.pause();

        //console.log(entry);
    }
}

export default AutoPause;