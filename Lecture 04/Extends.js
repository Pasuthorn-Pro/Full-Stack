class Media {
    constructor(info) {
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}

class Song extends Media {
    constructor(songData) {
        super(songData);
        this.artist = songData.artist;
    }
}

const mySong = new Song({
    artist: 'Artic Monkeys',
    name: 'I Wanna be yours',
    publishDate: 2013
});

console.log(mySong);