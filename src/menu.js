//import picture:
import fourCheese from "./image/four-cheese.jpg";
import hollywood_salmon from "./image/hollywood-salmon.jpg";
import margherita from "./image/margherita.jpg";
import salmon_avocado from "./image/salmon-avocado.jpg";
import salmon_teri from "./image/salmon-teriyaki.jpg";
import crab from "./image/crab.jpg";
import wallpaper from "./image/pizzawall.jpg";

function loadmenu() {
     const content = document.getElementById("content");
     const body = document.querySelector("body")
     body.style.backgroundImage = `url("${wallpaper}")`;
     content.innerHTML=`<div class="menu_section">
            <h1>Menu</h1>
            <div class="menu_grid">
                <div class="grid_item">
                    <img src="${fourCheese}">
                    <h2>Four-Cheese</h2>
                </div>
                <div class="grid_item">
                    <img src="${hollywood_salmon}">
                    <h2>Hollywood Salmon</h2>
                </div>
                <div class="grid_item">
                    <img src="${margherita}">
                    <h2>Margherita</h2>
                </div>
                <div class="grid_item">
                    <img src="${salmon_avocado}">
                    <h2>Salmon Avocado</h2>
                </div>
                <div class="grid_item">
                    <img src="${salmon_teri}">
                    <h2>Salmon Teriyaki</h2>
                </div>
                <div class="grid_item">
                    <img src="${crab}">
                    <h2>Crab sphaghetti</h2>
                </div>
            </div>
        </div>`;
}
export default loadmenu;