let fraseHtml = document.getElementById("frase");
let tbody = document.getElementById('tbody');
characters = requestApi("http://10.0.0.200:5500/teste.json");

function requestApi(url){
    let request = new XMLHttpRequest()
        request.open("GET", url, false)
        request.send()
        return JSON.parse(request.responseText)
}
for (var c in characters) {
    let tr = tbody.insertRow();
        let td_id = tr.insertCell();
        let td_name = tr.insertCell();
        let td_birthday = tr.insertCell();
        let td_nickname = tr.insertCell();
        let td_status = tr.insertCell();
        let td_portrayed = tr.insertCell();
        let td_img = tr.insertCell();
        let img = document.createElement('img');
        img.src = characters[c].img;
        td_id.innerHTML = characters[c].char_id;
        td_name.innerHTML = characters[c].name;
        td_birthday.innerHTML = characters[c].birthday;
        td_nickname.innerHTML = characters[c].nickname;
        td_status.innerHTML = characters[c].status;
        td_portrayed.innerHTML = characters[c].portrayed;
        td_img.appendChild(img);
        
}
