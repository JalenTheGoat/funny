const container = document.getElementById("special-button-container");
const button = document.getElementById("special-button");
const image = document.getElementById("meme")
const actual_image = document.getElementById("meme-image")


button.addEventListener("click", moveButtonRandomly);


function moveButtonRandomly() {
    const all = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtwAqb34_kEYFvmbLL8HmZSlZw0fQ0BlTN1i5GxeUkHw&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGSugTaQbM5dP-TH-FeVKjhwjfvNrInRyMq_-7g33Epw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZthE9JCIQKyFrQUKjsF2YnRFO9gwTTT2cuLwxuEBCDQ&s=10","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk3yIkm_32-vPdxudi7C1TD4F7L8y9AQhKMdrtr9pjAMKLBWylyqyBby8&s=10","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrguAb7TcLh0-zUwGccP6VYRlJINCODjDI_JvXAMBaVg&s=10","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYuWGffbu0HVpyNVqXQX7d7nN-_GyLY_O8Xkc0lLx-OQ&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv4fvZ0uAuOUwoTOHZhoYeRV8vgv3txAPWj7YuYFrlbQ&s=10","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNt2_V_2XPHT3S3QYcHTGO-rpAhHHZUwXQtyIjQZZ0Hg&s=10"]
    let pic = all[Math.floor(Math.random()
        * all.length)]
console.log(pic)
    actual_image.src = pic;
    // Restart the image animation.
    image.classList.remove("fade-out")
    void image.offsetWidth;
    image.classList.add("fade-out");


    // Calculate the available space inside the container.
    const maxX = container.clientWidth-button.offsetWidth;
    const maxY = container.clientHeight-button.offsetHeight;


    // Generate a random position.
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);


    // Move the button to the new position.
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}