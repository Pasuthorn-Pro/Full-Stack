class Song {
    constructor() {
        this.title;
        this.author;
    }

    play() {
        console.log("Song playing!");
    }

    stop() {
        console.log("Stopping!");
    }
}

const mySong = new Song();
mySong.stop();