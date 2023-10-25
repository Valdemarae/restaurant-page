const appendContact = function () {
  const content = document.querySelector(".content");
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.textContent = "Contact";
  const para = document.createElement("p");
  para.textContent = "My number is +23423423423847234";
  const photo = document.createElement("img");
  photo.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMCFnr7Aq6iMDtmYebSo6iD_MQ2_8lbXGolw&usqp=CAU";
  div.appendChild(h1);
  div.appendChild(para);
  div.appendChild(photo);
  content.appendChild(div);
}

export { appendContact };