$(document).ready(function(){

    //sidenav initialise
    $('.sidenav').sidenav({
        'draggable' : false,
        'inDuration' : 600,
        'outDuration' : 600,
        'closeOnClick': true
    });

    //alert box
    $('#alert_close').click(function(){
        
        $('#alert_box').fadeOut("slow", function(){

        });
    });

    //flotting action buttons initialise
    $('.fixed-action-btn').floatingActionButton();

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
      });

    //modal initialise
    $('.modal').modal();

    //materialboxed for image view
    $('.materialboxed').materialbox();

    //tooltiped initailise
    $('.tooltipped').tooltip();


    //select dans les formulaires
    $('select').formSelect();

    //AOS Initialize 
    AOS.init({
        offset: 50,
        duration: 500,
        delay: 300,
        easing: 'ease-in-sine',
        once: true,
    });

    AOS.refresh();
  
});

function toggleReply(id){

    console.log(id);

    var x = document.getElementById('reply-form-'+id);

    if (x.style.display === "none") {

        x.style.display = "block";
    } 
    else{

        x.style.display = "none";
    }
}



