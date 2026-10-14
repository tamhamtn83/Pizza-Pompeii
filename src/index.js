//import function load pages!!
import loadhome from "./home.js";
import loadabout from "./about.js";
import loadmenu from "./menu.js";

//CSS
import "./style.css"

const content = document.getElementById("content");
const home_btn = document.getElementById("home");
const about_btn = document.getElementById("about");
const menu_btn = document.getElementById("menu");

loadhome();
home_btn.onclick = function(){
    content.replaceChildren();
    loadhome();
}

about_btn.onclick = function(){
    content.replaceChildren();
    loadabout();
}
menu_btn.onclick = function(){
    content.replaceChildren();
    loadmenu();
}
const explore = document.getElementById("explore");
explore.onclick = function(){
    loadmenu();
}

