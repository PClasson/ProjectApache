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

function getOffice(office) {
    $.getJSON('http://ofcourse.oru.se/~IK2009/json/get_office.php', function (data) {
        if (data.status == 1) {
                $(data.result).each(function(index, value) {
                    if(office == 'orebro') {
                        console.log(value.orebro.name);
                        var name = value.orebro.name
                        var address = value.orebro.address
                        var tel = value.orebro.phone
                        var orebro = name + '<br/>' + address + '<br/>' + tel;
                        $('#tab2office').html(orebro);
                    }
                    else if(office == 'goteborg') {
                        console.log(value.goteborg.name);
                        var name = value.goteborg.name
                        var address = value.goteborg.address
                        var tel = value.goteborg.phone
                        var goteborg = name + '<br/>' + address + '<br/>' + tel;
                        $('#tab2office').html(goteborg);
                    }
                    else if(office == 'sheffield') {
                        console.log(value.sheffield.name);
                        var name = value.sheffield.name
                        var address = value.sheffield.address
                        var tel = value.sheffield.phone
                        var sheffield = name + '<br/>' + address + '<br/>' + tel;
                        $('#tab2office').html(sheffield);
                    }
                    else if(office == 'toronto') {
                        console.log(value.toronto.name);
                        var name = value.toronto.name
                        var address = value.toronto.address
                        var tel = value.toronto.phone
                        var toronto = name + '<br/>' + address + '<br/>' + tel;
                        $('#tab2office').html(toronto);
                    }
                    else if(office == 'snoqualmie') {
                        console.log(value.snoqualmie.name);
                        var name = value.snoqualmie.name
                        var address = value.snoqualmie.address
                        var tel = value.snoqualmie.phone
                        var snoqualmie = name + '<br/>' + address + '<br/>' + tel;
                        $('#tab2office').html(snoqualmie);
                    }
                });
        } else {
            alert(data.message);
        }
    }
)};
