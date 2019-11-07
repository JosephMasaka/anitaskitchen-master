/* menu bar transition */
$('.span-bars').click(function(){
    $(this).toggleClass('rotate');
    
    $('#bars_1').toggleClass('rotate-1');
    $('#bars_3').toggleClass('rotate-2');
    $('#bars_2').toggleClass('rotate-3');
});

/* tab active toggle class */

const listItems = document.querySelectorAll('.nav-item');const tabContentItems = document.querySelectorAll('.tab-items');

$(document).ready(function(){
    listItems.forEach(item => item.classList.add('active'));
    listItems.forEach(item => item.classList.remove('active')); 
});


function selectItem(e){
    listItems.forEach(item => item.classList.remove('active')); 

    removeDisplay();
    this.classList.add('active');

    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('display');
}

function removeDisplay(){
    tabContentItems.forEach(item => item.classList.remove('display')); 
}
    

listItems.forEach(item => item.addEventListener('click', selectItem));

/* owl carousel */
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})

