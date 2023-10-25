const appendMain = function() {
  const content = document.querySelector(".content");
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.textContent = "Restaurant";
  const img = document.createElement("img");
  img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdgCI3pzgY2fyOkHQ4iQtl9QYWN1CfrW8Sfw&usqp=CAU";
  const para = document.createElement("p");
  para.textContent = "This restaurant is normal.";
  div.appendChild(h1);
  div.appendChild(img);
  div.appendChild(para);
  content.appendChild(div);
}

export { appendMain };