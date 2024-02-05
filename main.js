const artistsData = [
    {
        "name" : "Dua Lipa",
        "birthYear" : 1995,
        "country" : "United Kingdom",
        "genres" : ["Pop","Dance"],
        "hitSongs" : ["Don't Start Now", "New Rules"],
        "description" : "Dua Lipa is known for her captivating pop and dance music."
    },
    {
        "name" : "Katy Perry",
        "birthYear" : 1984,
        "country" : "United States",
        "genres" : ["Pop"],
        "hitSongs" : ["Firework", "Roar"],
        "description" : "Katy Perry is a global pop sensation with numerous char-topping hits."
    },
    {
        "name" : "Billie Eilish",
        "birthYear" : 2001,
        "country" : "United States",
        "genres" : ["Pop","Alternative"],
        "hitSongs" : ["Bad Guy", "Ocean Eyes"],
        "description" : "Billie Eilish is a young and influential artist known for her unique style and impactful lyrics."
    },
    {
        "name" : "Taylor Swift",
        "birthYear" : 1989,
        "country" : "United States",
        "genres" : ["Pop","Country"],
        "hitSongs" : ["Love Story", "Shake It Off"],
        "description" : "Taylor Swift is a versatile artist with a blend of pop and country influences."
    },
    {
        "name" : "Ariana Grande",
        "birthYear" : 1993,
        "country" : "United States",
        "genres" : ["Pop","R&B"],
        "hitSongs" : ["Thank U, Next", "7 Rings"],
        "description" : "Ariana Grande is recognized for her powerful voice and a mix of pop and R&B style."
    },
    {
        "name" : "Lana Del Rey",
        "birthYear" : 1985,
        "country" : "United States",
        "genres" : ["Indie Pop","Alternative"],
        "hitSongs" : ["Summertime Sadness", "Video Games"],
        "description" : "Lana Del Rey is known for her dreamy and cinematic approach to music."
    },
];

const artistContainer = document.getElementById("artistContainer");
const searchInput = document.getElementById("searchInput");

function generateArtistCard(artist) {
    const card = document.createElement("div");
    card.classList.add("artist-card");

    const details = document.createElement("div");
    details.innerHTML = `
        <h2>${artist.name}</h2>
        <p><strong>Birth Year:</strong> ${artist.birthYear}</p>
        <p><strong>Country:</strong> ${artist.country}</p>
        <p><strong>Genres:</strong> ${artist.genres.join(", ")}</p>
        <p><strong>Hit Songs:</strong> ${artist.hitSongs.join(", ")}</p>
        <p>${artist.description}</p>
    `;

    card.appendChild(details);

    artistContainer.appendChild(card);
}

function filterArtists(searchTerm) {
    artistContainer.innerHTML = "";

    const filteredArtists = artistsData.filter(artist =>
        artist.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    filteredArtists.forEach(generateArtistCard);
}

searchInput.addEventListener("input", function () {
    filterArtists(this.value);
});

// Initial rendering
artistsData.forEach(generateArtistCard);