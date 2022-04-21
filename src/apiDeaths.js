var url = "https://breakingbadapi.com/api/death";

function requestDeaths(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return JSON.parse(request.responseText);
}

deaths = requestDeaths(url);
deaths.forEach((element) => {
    let row = tbody.insertRow();
    let td_death = row.insertCell();
    let td_cause = row.insertCell();
    let td_responsible = row.insertCell();
   
    td_death.innerHTML = element.death;
    td_cause.innerHTML = element.cause;
    td_responsible.innerHTML = element.responsible;
});

