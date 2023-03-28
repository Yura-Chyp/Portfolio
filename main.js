const list = document.querySelectorAll('.list');
function activeLink (){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click',activeLink));

MenuBar.oclick = function(){
    wrapp.style.display = 'none';
    particl.style.display = 'none';
}
