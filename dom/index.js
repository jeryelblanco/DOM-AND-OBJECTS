const movies = [
{
    title: "Back to The Future",
    image: "https://images.squarespace-cdn.com/content/5c62c09c4d546e27dc1016c7/1556601485984-3DTSI22OZXMHROZRBNBD/bttf3.jpg",
    year: 1985
},
{
    title: "Star Wars IV",
    image: "https://static.wikia.nocookie.net/dvd/images/9/97/Star_Wars_%28DVD%29.JPG",
    year: 1977
},
{
    title: "Legally Blonde",
    image: "https://m.media-amazon.com/images/M/MV5BNTEyNjUwMTkxMV5BMl5BanBnXkFtZTcwNjk0NDk0NA@@._V1_.jpg",
    year: 2001
},
{
    title: "Shottas",
    image: "https://upload.wikimedia.org/wikipedia/en/c/cc/Shottas2002Film.jpg",
    year: 2002
},
{
    title: "Fast & Furious",
    image: "https://images.moviesanywhere.com/0d8385198e30c6ac086b643c6a13ab50/0baff3aa-3327-4e33-9546-600bea206acf.jpg",
    year: 2006
},
{
    title: "Terminator 3",
    image: "https://www.rifftrax.com/sites/default/files/Terminator3WebPoster.jpg",
    year: 2003
}
]


movies.forEach(movie => {
    const div = document.createElement("div")
    document.body.append(div);
    let title = document.createElement("h1")
    let img = document.createElement("img")
    let year = document.createElement("h2")
    title.innerText = movie.title
    img.src = movie.image
    year.innerText = movie.year
    div.append(title, img, year)
    img.style.height = "300px"
    //div.style.display = "block"
    // div.style.marginLeft = "auto"
    // div.style.marginRight = "auto"
    //div.style.width = "25%"
    div.style.float = "left"
    //div.style.margin = "5%"
    div.style.width = "300px"
    div.style.height = "500px"
    div.style.margin = "2.5%"
    title.style.textAlign = "center"
    year.style.textAlign = "center"
    img.style.marginLeft = "15%"
    



   // div.style.marginLeft = "50%"
    // div.style.display = "flex"
    // div.style.justifyContent = "center"
    // div.style.flexWrap = "wrap"
})