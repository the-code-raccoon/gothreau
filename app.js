const musicItems = [
    {
        "id": "grown",
        "name": "grown",
        "releaseMonth": "1",
        "releaseYear": "2022",
        "artwork": "assets/artworks/grown-cover.jpg",
        "runtime": "2:05",
        "type": "single"
    },
    {
        "id": "leave-you-alone",
        "name": "leave you alone",
        "releaseMonth": "12",
        "releaseYear": "2021",
        "artwork": "assets/artworks/lya-cover.jpg",
        "runtime": "2:40",
        "type": "single"
    },
    {
        "id": "golden-hour",
        "name": "Golden Hour",
        "releaseMonth": "8",
        "releaseYear": "2020",
        "artwork": "assets/artworks/golden-hour-cover.jpg",
        "runtime": "20:13",
        "type": "project"
    },
    {
        "id": "isolate",
        "name": "Isolate",
        "releaseMonth": "11",
        "releaseYear": "2019",
        "artwork": "assets/artworks/isolate-cover.jpg",
        "runtime": "24:31",
        "type": "project"
    },
    {
        "id": "sakura",
        "name": "Sakura",
        "releaseMonth": "4",
        "releaseYear": "2019",
        "artwork": "assets/artworks/sakura-cover.jpg",
        "runtime": "14:59",
        "type": "project"
    },
    {
        "id": "pink-november-2",
        "name": "Pink November 2",
        "releaseMonth": "11",
        "releaseYear": "2018",
        "artwork": "assets/artworks/pink-november-2-cover.jpg",
        "runtime": "23:47",
        "type": "project"
    },
    {
        "id": "gambit",
        "name": "Gambit",
        "releaseMonth": "6",
        "releaseYear": "2018",
        "artwork": "assets/artworks/gambit-cover.jpg",
        "runtime": "28:18",
        "type": "project"
    },
    {
        "id": "pink-november",
        "name": "Pink November",
        "releaseMonth": "11",
        "releaseYear": "2017",
        "artwork": "assets/artworks/pink-november-cover.jpg",
        "runtime": "15:24",
        "type": "project"
    },
    {
        "id": "cyclical",
        "name": "Cyclical",
        "releaseMonth": "6",
        "releaseYear": "2017",
        "artwork": "assets/artworks/cyclical-cover.jpg",
        "runtime": "22:36",
        "type": "project"
    }

]

console.log(musicItemsGrown[4].id);
console.log("ass");

var musicContainer = document.getElementById("music__conainter");

musicItems.forEach(function (project) {
    musicContainer.innerHTML = `
    <div class="music-item "` + project.type + `">
    ` + ` 
    `;
})