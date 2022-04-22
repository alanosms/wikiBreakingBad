let tbody = document.getElementById("tbody");

createTable("https://breakingbadapi.com/api/characters?limit=10&offset=0");

function requestApi(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return JSON.parse(request.responseText);
}

function createTable(url) {
  characters = requestApi(url);
  characters.forEach(element => {
    let tr = tbody.insertRow();
    let td_id = tr.insertCell();
    let td_name = tr.insertCell();
    let td_birthday = tr.insertCell();
    let td_nickname = tr.insertCell();
    let td_status = tr.insertCell();
    let td_portrayed = tr.insertCell();
    let td_img = tr.insertCell();
    img = document.createElement("img");

    img.src = element.img;
    td_id.innerHTML = element.char_id;
    td_name.innerHTML = element.name;
    td_birthday.innerHTML = element.birthday;
    td_nickname.innerHTML = element.nickname;
    td_status.innerHTML = element.status;
    td_portrayed.innerHTML = element.portrayed;
    td_img.appendChild(img);
  });

}

