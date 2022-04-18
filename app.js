const musicItems = [
    {
        "id": "grown",
        "name": "grown",
        "releaseMonth": "1",
        "releaseYear": "2022",
        "runtime": "2:05",
        "type": "single",
        "stream": "https://gothreau.fanlink.to/grown"
    },
    {
        "id": "leave-you-alone",
        "name": "leave you alone",
        "releaseMonth": "12",
        "releaseYear": "2021",
        "runtime": "2:40",
        "type": "single",
        "stream": "https://open.spotify.com/album/2CnKE4acournZtJ9Qh9vp4?si=TqZnYRldQuqhl_biz6mFkw"
    },
    {
        "id": "golden-hour",
        "name": "Golden Hour",
        "releaseMonth": "8",
        "releaseYear": "2020",
        "runtime": "20:13",
        "type": "project",
        "stream": "https://open.spotify.com/album/7ykrCsXPbp1DqM71Ct5kpc?si=oj6y1i7EQ1O2xoZbFEWYGQ"
    },
    {
        "id": "isolate",
        "name": "Isolate",
        "releaseMonth": "11",
        "releaseYear": "2019",
        "runtime": "24:31",
        "type": "project",
        "stream": "https://open.spotify.com/album/5dyHSePYz5Rsniy5Cyl8fl?si=6CNmwcH6RnCSxFOyIs7RPA"
    },
    {
        "id": "sakura",
        "name": "Sakura",
        "releaseMonth": "4",
        "releaseYear": "2019",
        "runtime": "14:59",
        "type": "project",
        "stream": ""
    },
    {
        "id": "pink-november-2",
        "name": "Pink November 2",
        "releaseMonth": "11",
        "releaseYear": "2018",
        "runtime": "23:47",
        "type": "project",
        "stream": "https://open.spotify.com/album/6Mu80yTLoEQH7IpYrPw7h9?si=fxSYVMiWQxanGZOtUypBfA"
    },
    {
        "id": "gambit",
        "name": "Gambit",
        "releaseMonth": "6",
        "releaseYear": "2018",
        "runtime": "28:18",
        "type": "project",
        "stream": "https://open.spotify.com/album/3bPDNHYCig60TMxG1vIIFJ?si=EadXQXckQYWa4GqC7l-PBA"
    },
    {
        "id": "pink-november",
        "name": "Pink November",
        "releaseMonth": "11",
        "releaseYear": "2017",
        "runtime": "15:24",
        "type": "project",
        "stream": ""
    },
    {
        "id": "cyclical",
        "name": "Cyclical",
        "releaseMonth": "6",
        "releaseYear": "2017",
        "runtime": "22:36",
        "type": "project",
        "stream": "https://www.youtube.com/watch?v=Xsg-iYj5rQ4&ab_channel=Gothreau"
    }

]

var months = new Map();
months.set("1", "january");
months.set("2", "february");
months.set("3", "march");
months.set("4", "april");
months.set("5", "may");
months.set("6", "june");
months.set("7", "july");
months.set("8", "august");
months.set("9", "september");
months.set("10", "october");
months.set("11", "november");
months.set("12", "december");


const musicContainer = document.getElementById("music__container");

musicItems.forEach(function (project) {
    if (project.type === "single") {
      // let single = document.createElement('div');
      // single.classList.
        musicContainer.innerHTML += `
        <div class="music-item single">
            <div class="music-item-inner">
                <div class="music-item-front">
                    <img src="assets/artworks/${project.id}-cover.jpg" style="width:100%; height:100%">
                </div>  
                <div class="music-item-back">
                    <img src="assets/artworks/${project.id}-cover.jpg" style="width:100%; height:100%">
                    <div class="music-item-back-title"> 
                        <h1>${project.name}</h1>
                    <div>
                    <h2>${months.get(project.releaseMonth).substring(0,3)} ${project.releaseYear}</h2>
                    <div class="button_stream button">
                        <a href="${project.stream}" target="_blank">stream now</a>
                    </div>  
                </div>
            </div>
        </div>
        `;
    } else if (project.type === "project") {
        musicContainer.innerHTML += `
        <div class="music-item project">
            <div class="music-item-inner">
                <div class="music-item-front">
                    <img src="assets/artworks/${project.id}-cover.jpg" style="width:100%; height:100%">
                </div>  
                <div class="music-item-back">
                    <img src="assets/artworks/${project.id}-cover.jpg" style="width:100%; height:100%">
                    <div class="music-item-back-title"> 
                        <h1>${project.name}</h1>
                    <div>
                    <h2>${months.get(project.releaseMonth).substring(0,3)} ${project.releaseYear}</h2>
                    <div class="button_stream button">
                        <a href="${project.stream}" target="_blank">stream now</a>
                    </div>
                    <div class="button_info button">
                        <a href="${project.stream}" target="_blank">MORE INFO</a>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
})