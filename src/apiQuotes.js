let tbody = document.getElementById("tbody");
function requestQuotes(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return JSON.parse(request.responseText);
}

function showQuotes(author) {

  if (author === "Jesse Pinkman") {
    url = "https://breakingbadapi.com/api/quote?author=Jesse+Pinkman";
  } else if (author === "Walter White") {
    url = "https://breakingbadapi.com/api/quote?author=Walter+White";
  }
    else if(author === "Skyler White"){
      url = "https://breakingbadapi.com/api/quote?author=Skyler+White";
    }
    else if(author === "Mike Ehrmantraut"){
      url = "https://breakingbadapi.com/api/quote?author=Mike+Ehrmantraut";
    }
    else if(author === "Saul Goodman"){
      url = "https://breakingbadapi.com/api/quote?author=Saul+Goodman";
    }
    else if(author === "Gustavo Fring"){
      url = "https://breakingbadapi.com/api/quote?author=Gus+Fring"
    }
    
    rowCountQuotes = document.getElementById('table').rows.length - 1;
      if (rowCountQuotes > 1){
        clearTable();
      }
  quotes = requestQuotes(url);
  quotes.forEach((element) => {

    let tr = tbody.insertRow();
    let td_id_quote = tr.insertCell();
    let td_quote = tr.insertCell();

    img = document.createElement("img");

    td_id_quote.innerHTML = element.quote_id;
    td_quote.innerHTML = element.quote;

    }
  )
}

function clearTable() {
  quotes.forEach(element => { 
    let rowCountQuotes = document.getElementById('table').rows.length - 1;
      if (rowCountQuotes > 1){
        quotes.forEach(element => {
          document.getElementById("table").deleteRow(1);
        });
      }
});
}  
