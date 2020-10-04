$('#toProjects').hover(
    function(){
        $(this).toggleClass('btn-outline-light');
        $(this).toggleClass('btn-outline-*');
        $("#downArrow1").toggleClass('hovered');
    },
    function(){
        $(this).toggleClass('btn-outline-*');
        $(this).toggleClass('btn-outline-light');
        $("#downArrow1").toggleClass('hovered');
    }
)

$('#toAbout').hover(
    function(){
        $(this).toggleClass('btn-outline-light');
        $(this).toggleClass('btn-outline-*');
        $("#downArrow2").toggleClass('hovered');
    },
    function(){
        $(this).toggleClass('btn-outline-*');
        $(this).toggleClass('btn-outline-light');
        $("#downArrow2").toggleClass('hovered');
    }
)

// $(window).scroll(function() {
//     var y = $(window).scrollTop();
//     if (y > 0) {
//         $("#mainNavbar").addClass('--not-top');
//     } else {
//         $("#mainNavbar").removeClass('--not-top');
//     }
// });

$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

$("#downArrow1").hover(
    function() {
        $(this).toggleClass('hovered');
        $('#toProjects').toggleClass('btn-outline-light');
        $('#toProjects').toggleClass('btn-outline-*');
        $("#toProjects").toggleClass('hovered');
    },
    function() {
        $(this).toggleClass('hovered');
        $("#toProjects").toggleClass('btn-outline-*');
        $("#toProjects").toggleClass('btn-outline-light');
        $("#toProjects").toggleClass('hovered');
    }

)

$("#downArrow2").hover(
    function() {
        $(this).toggleClass('hovered');
        $('#toAbout').toggleClass('btn-outline-*');
        $("#toAbout").toggleClass('hovered');
    },
    function() {
        $(this).toggleClass('hovered');
        $("#toAbout").toggleClass('btn-outline-*');
        $("#toAbout").toggleClass('hovered');
    }

)

document.querySelectorAll('.smoothScroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
