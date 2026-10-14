import wallpaper from "./image/abtwall.jpg";
function loadabout(){
    const body = document.querySelector("body")
    body.style.backgroundImage = `url("${wallpaper}")`;
    const content = document.getElementById("content");
    
    const heading = document.createElement("h1");
    heading.textContent = "About Us";
    document.createElement("hr")

    const text = document.createElement("p");
    text.textContent = (" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam. Nulla bibendum vulputate ante, non malesuada eros lobortis euismod");
    text.classList.add("text");

    content.append(heading,text)
}
export default loadabout;