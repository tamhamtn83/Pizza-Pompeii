
import loadMenu from "./menu.js";
import restaurantImage from "./image/restaurant.jpg";

function loadhome() {
    const content = document.getElementById("content");
    const body = document.querySelector("body")
    body.style.backgroundImage = `url("${restaurantImage}")`;
    content.innerHTML=` <div class="main">
            <div></div>
            <div class="main-content">
                <h1> Pizza Pompeii</h1>
                <p> A refined local Pizza in Times City, where quality meet excellence</p>
                <div class="buttons">
                    <button id="explore">Explore Menu</button>
                </div>
            </div>
        </div>`
    const explore = document.getElementById("explore");
    explore.addEventListener('click',loadMenu);

}
export default loadhome;