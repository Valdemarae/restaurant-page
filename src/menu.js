import './menu.css';

const appendMenu = function () {
  const content = document.querySelector(".content");
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.textContent = "Menu";
  const meal1 = document.createElement("div");
  const meal1h2 = document.createElement("h2");
  meal1h2.textContent = "Burger";
  const meal1img = document.createElement("img");
  meal1img.classList.add("menu");
  meal1img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSezGOjtXxblkbMGnnMaf5S8kGkAb5cWJubdQ&usqp=CAU";
  const meal2 = document.createElement("div");
  const meal2h2 = document.createElement("h2");
  meal2h2.textContent = "Pasta";
  const meal2img = document.createElement("img");
  meal2img.classList.add("menu");
  meal2img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxxhAv-HTf1AUxd9C7gK4PATRYLkl2dNGh-w&usqp=CAU";
  meal1.appendChild(meal1h2);
  meal1.appendChild(meal1img);
  meal2.appendChild(meal2h2);
  meal2.appendChild(meal2img);
  div.appendChild(h1);
  div.appendChild(meal1);
  div.appendChild(meal2);
  content.appendChild(div);
}

export { appendMenu };