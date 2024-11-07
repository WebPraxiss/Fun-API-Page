// API URLs
let url = "https://catfact.ninja/fact";
let url1 = "https://api.thecatapi.com/v1/images/search";
let url2 = "https://icanhazdadjoke.com/";

// Select the buttons and content areas
const catBtn = document.querySelector(".btn-cat");
const facts = document.querySelector(".facts");
const imageBtn = document.querySelector(".btn-dog");
const dogImage = document.querySelector(".image");
const jokesBtn = document.querySelector(".btn-jokes");
const jokes = document.querySelector(".dadjokes");

// Cat Facts Button Click
catBtn.addEventListener("click", async () => {
    // Button animation
    catBtn.classList.add("clicked");

    // Fetch and display cat fact
    let fact = await getFacts();
    facts.innerText = fact;
});

// Fetch Cat Facts
async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        console.log("Error fetching fact", e);
        return "Error fetching fact.";
    }
}

// Dog Images Button Click
imageBtn.addEventListener("click", async () => {
    // Button animation
    imageBtn.classList.add("clicked");

    // Fetch and display dog image
    let link = await getImage();
    dogImage.setAttribute("src", link);
    dogImage.style.display = "block";  // Make image visible
});

// Fetch Dog Image
async function getImage() {
    try {
        let res1 = await axios.get(url1);
        return res1.data[0].url;
    } catch (e) {
        console.log("Error fetching image", e);
        return "Error fetching image.";
    }
}

// Dad Jokes Button Click
jokesBtn.addEventListener("click", async () => {
    // Button animation
    jokesBtn.classList.add("clicked");

    // Fetch and display joke
    let joke = await getJokes();
    jokes.innerText = joke;
});

// Fetch Dad Joke
async function getJokes() {
    try {
        let configuration = { headers: { Accept: "application/json" } };
        let res3 = await axios.get(url2, configuration);
        return res3.data.joke;
    } catch (e) {
        console.log("Error fetching joke", e);
        return "Error fetching joke.";
    }
}
