function songs(arr) {

    class Song {
        typeList;
        name;
        time;

        constructor (typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let num = arr.shift();

    let songsData = [];

    for (let i = 0; i < num; i++ ) {
        let currentSong = arr.shift();
        let tokens = currentSong.split(`_`);
        let typeList = tokens[0];
        let name = tokens[1];
        let time = tokens[2];

        let songs = new Song (typeList, name, time);

        songsData.push(songs);

    }

    let songtype = arr.shift();

    if (songtype == "all") {
        songsData.forEach((i) => console.log(i.name));
    } else {
        let filtered = songsData.filter((i) => i.typeList === songtype);
        filtered.forEach((i) => console.log(i.name));
    }

}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])