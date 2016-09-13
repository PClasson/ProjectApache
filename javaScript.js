$.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php', function (data) {
    if (data.status == 1) {
        var stad = data.result.toronto.name
        var address = data.result.toronto.address
        var tel = data.result.toronto.phone
        var canada = stad + address + tel;
        $('tab-1').html(canada);
    } else {
        alert(data.message);
        }
    }
);

$(document).ready(function(){
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })
})

var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}