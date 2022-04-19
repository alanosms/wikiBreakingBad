let tbody = document.getElementById("tbody");
let td_id,
  td_name,
  td_birthday,
  td_nickname,
  td_status,
  td_portrayed,
  td_img,
  img;

createTable("https://breakingbadapi.com/api/characters?limit=10&offset=0");

function requestApi(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return JSON.parse(request.responseText);
}

function createTable(url) {
  characters = requestApi(url);
  for (var c in characters) {
    let tr = tbody.insertRow();
    td_id = tr.insertCell();
    td_name = tr.insertCell();
    td_birthday = tr.insertCell();
    td_nickname = tr.insertCell();
    td_status = tr.insertCell();
    td_portrayed = tr.insertCell();
    td_img = tr.insertCell();
    img = document.createElement("img");

    img.src = characters[c].img;
    td_id.innerHTML = characters[c].char_id;
    td_name.innerHTML = characters[c].name;
    td_birthday.innerHTML = characters[c].birthday;
    td_nickname.innerHTML = characters[c].nickname;
    td_status.innerHTML = characters[c].status;
    td_portrayed.innerHTML = characters[c].portrayed;
    td_img.appendChild(img);
  }
}

