document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll("img");

    for (const image of images){
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(date => {
            image.src = date.message
            image.width = 100;
            image.height = 90
            ;
    })
    }
})