const next = document.getElementById('next');
const prev = document.getElementById('prev');
const last = document.getElementById('last');
const first = document.getElementById('first');
numberPage = document.getElementById('pageNumber');

next.addEventListener('click', nextPage);
first.addEventListener('click', goToFirst);
last.addEventListener('click', goToLast);
prev.addEventListener('click', prevPage);

    var offset = 0;

function nextPage(){
    if (numberPage.innerHTML < 7){
    numberPage.innerHTML++;
    offset = offset + 10;
    clearTable();
   createTable('https://breakingbadapi.com/api/characters?limit=10&offset='+offset);
    }
}
function goToFirst(){
    numberPage.innerHTML = 1;
    offset = 0;
    var link = 'https://breakingbadapi.com/api/characters?limit=10&offset='+offset;
    clearTable();
    createTable(link);
}
function goToLast(){
    offset = 60;
    numberPage.innerHTML = 7;
    var link = 'https://breakingbadapi.com/api/characters?limit=10&offset='+offset;
    clearTable();
    createTable(link);
}
function prevPage(){
    if (numberPage.innerHTML > 1){
        numberPage.innerHTML--;
        offset = offset - 10;
        var link = 'https://breakingbadapi.com/api/characters?limit=10&offset='+offset;
        clearTable();
        createTable(link);
        }
}
function clearTable() {
    characters.forEach(element => { 
    document.getElementById("table").deleteRow(1);
});  
}
  

