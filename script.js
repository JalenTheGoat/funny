const container = document.getElementById("special-button-container");
const button = document.getElementById("special-button");
const image = document.getElementById("meme")
const actual_image = document.getElementById("meme-image")


button.addEventListener("click", moveButtonRandomly);


function moveButtonRandomly() {
    const all = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Ei8o4qDzRDBO-cNQ7CS3fXFNZEw2wSfocz2lvAosS81IB8BGP6RlNHmV&s=10",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuhdVTJrJwCTbESGbNxykEJv8PfV5Vz1VOzffXO4ZhSMkoPBWVT0JyG8l3&s=10",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZthE9JCIQKyFrQUKjsF2YnRFO9gwTTT2cuLwxuEBCDQ&s=10",
         "https://media.istockphoto.com/id/618949520/photo/happiest-dog-in-the-world.jpg?s=612x612&w=0&k=20&c=9FPQ3Wz-Itg-jW1yTlo9Uhf8rLkH6UjSLOPok_mVBwI=",
         "https://dbw3zep4prcju.cloudfront.net/animal/1e366795-1fbd-4b7a-8193-046c81007a9c/image/ac1571d9-b097-4c83-bd10-dc870753702e.jpg?versionId=GEqptNIJsqjbl0wr0v5kHGpj00uAcMIq",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJP24Uj8qMaZqV9RROI0mg2Nu0t3gW8P0hTKZkavSBoIozdu4aDy7r_E1&s=10",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFhx4T_JK4hvU7Kc4MDZwV0Ra3Auroc6DayRM4xv8nxQ&s=10",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNt2_V_2XPHT3S3QYcHTGO-rpAhHHZUwXQtyIjQZZ0Hg&s=10"
        ]
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