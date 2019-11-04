/* menu bar transition */
$('.span-bars').click(function(){
    $(this).toggleClass('rotate');
    
    $('#bars_1').toggleClass('rotate-1');
    $('#bars_3').toggleClass('rotate-2');
    $('#bars_2').toggleClass('rotate-3');
});

/* tab active toggle class */
const listItems = document.querySelectorAll('.nav-item');const tabContentItems = document.querySelectorAll('.tab-items');

function selectItem(e){
    listItems.forEach(item => item.classList.remove('active')); 

    this.classList.add('active');
    removeDisplay();

    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('display');
}

function removeDisplay(){
    tabContentItems.forEach(item => item.classList.remove('display')); 
}
    

listItems.forEach(item => item.addEventListener('click', selectItem));

