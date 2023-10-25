import './style.css';
import  { appendMain } from './mainpage';
import  { appendMenu } from './menu';
import  { appendContact } from './contact';

const body = document.querySelector("body");
const content = document.querySelector(".content");
appendMain();

const button1 = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");

button1.textContent = "Main";
button2.textContent = "Menu";
button3.textContent = "Contact";

body.prepend(button1);
body.prepend(button2);
body.prepend(button3);






button1.addEventListener("click", () => {content.removeChild(content.lastChild);appendMain()});
button2.addEventListener("click", () => {content.removeChild(content.lastChild);appendMenu()});
button3.addEventListener("click", () => {content.removeChild(content.lastChild);appendContact()});