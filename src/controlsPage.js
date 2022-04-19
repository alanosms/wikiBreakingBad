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
    if (numberPage.innerHTML < 6){
    numberPage.innerHTML++;
    offset = offset + 10;
    createTable('https://breakingbadapi.com/api/characters?limit=10&offset='+offset);
    }
}
function goToFirst(){
    alert('COOMING SOON');
    numberPage.innerHTML = 1;
    offset = 0;
    var link = 'https://breakingbadapi.com/api/characters?limit=10&offset='+offset;
}
function goToLast(){
    alert('COOMING SOON');
    offset = 60;
    numberPage.innerHTML = 6;
    var link = 'https://breakingbadapi.com/api/characters?limit=15&offset='+offset;
}
function prevPage(){
    alert('COOMING SOON');
    if (numberPage.innerHTML > 1){
        numberPage.innerHTML--;
        offset = offset - 10;
        }
}
