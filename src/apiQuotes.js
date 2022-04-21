
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
  quotes = requestQuotes(url);
  quotes.forEach((element) => {
      var createP=document.createElement("p");
      createP.classList.add('content');
      createP.appendChild(document.createTextNode(element.quote));
      document.body.appendChild(createP);
    }
  )
}
