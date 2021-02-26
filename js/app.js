$(".plant").click(function() {
    $(".rinbox").toggleClass("rinbox_active");
});

$(".hamburger").click(function() {
    $(".hamburger").toggleClass("is-active");
});

$(document).ready(function() {
    //rugs overview
    $(".home_works").click(function() {
          
        $("body,html").animate({
            scrollTop: $(".work").offset().top
        -125}, 800);
    });

  
    //rugs overview
    $(".rugs_overview").click(function() {
          
        $("body,html").animate({
            scrollTop: $("#rugs_overview-div").offset().top
        -125}, 800);
    });

    //rugs problems
    $(".rugs_problems").click(function() {
          
        $("body,html").animate({
            scrollTop: $("#rugs_problems-div").offset().top
            -125}, 800);
    });

    //rugs users
    $(".rugs_users").click(function() {
        $("body,html").animate({
            scrollTop: $("#rugs_users-div").offset().top
            -125}, 800);
    });

    //rugs roles
    $(".rugs_roles").click(function() {
        $("body,html").animate({
            scrollTop: $("#rugs_roles-div").offset().top
            -125}, 800);
    });

    //rugs catalog
    $(".rugs_catalog").click(function() {
        $("body,html").animate({
            scrollTop: $("#rugs_catalog-div").offset().top
            -125}, 800);
    });

    //rugs full
    $(".rugs_full").click(function() {
        $("body,html").animate({
            scrollTop: $("#rugs_full-div").offset().top
            -125}, 800);
    });

    //rugs 101
    $(".rugs_101").click(function() {
        $("body,html").animate({
            scrollTop: $("#rugs_101-div").offset().top
            -125}, 800);
    });

    //rugs misc
    $(".rugs_misc").click(function() {
        $("body,html").animate({
            scrollTop: $("#rugs_misc-div").offset().top
            -125}, 800);
    });


    //HEALCO
    //healco healco
    $(".healco_healco").click(function() {
        $("body,html").animate({
            scrollTop: $("#healco_healco-div").offset().top
            -125}, 800);
    });

    //healco full
    $(".healco_full").click(function() {
        $("body,html").animate({
            scrollTop: $("#healco_full-div").offset().top
            -125}, 800);
    });

    //healco problems
    $(".healco_problems").click(function() {
        $("body,html").animate({
            scrollTop: $("#healco_problems-div").offset().top
            -125}, 800);
    });

    //healco users
    // $(".healco_users").click(function() {
    //     $("body,html").animate({
    //         scrollTop: $("#healco_users-div").offset().top
    //     -50}, 800);
    // });

    //healco roles
    $(".healco_roles").click(function() {
        $("body,html").animate({
            scrollTop: $("#healco_roles-div").offset().top
            -125}, 800);
    });

    //healco process
    $(".healco_process").click(function() {
        $("body,html").animate({
            scrollTop: $("#healco_process-div").offset().top
            -125}, 800);
    });

    //healco misc
    $(".healco_misc").click(function() {
        $("body,html").animate({
            scrollTop: $("#healco_misc-div").offset().top
            -125}, 800);
    });

    //Data Dove
    //datadove full
    $(".datadove_full").click(function() {
        $("body,html").animate({
            scrollTop: $("#datadove_full-div").offset().top
            -125}, 800);
    });

    //datadove roles
    $(".datadove_tasks").click(function() {
        $("body,html").animate({
            scrollTop: $("#datadove_tasks-div").offset().top
            -125}, 800);
    });

    //datadove process
    $(".datadove_logo").click(function() {
        $("body,html").animate({
            scrollTop: $("#datadove_logo-div").offset().top
            -125}, 800);
    });

    //datadove misc
    $(".datadove_website").click(function() {
        $("body,html").animate({
            scrollTop: $("#datadove_website-div").offset().top
            -125}, 800);
    });

    
});

function toggleMenu() {
    var element = document.getElementById("nav_slide");
    element.classList.toggle("show-nav_slide");
}

function activeBurger() {
    // var element = document.getElementById("hambutton");
    // element.classList.toggle("is-active");
    var home = document.getElementById("slide_work");
    home.classList.toggle("fadeIn");
    home.style.animationDelay = ".3s";

    var works = document.getElementById("slide_about");
    works.classList.toggle("fadeIn");
    works.style.animationDelay = ".4s";

    var about = document.getElementById("slide_contact");
    about.classList.toggle("fadeIn");
    about.style.animationDelay = ".5s";
}


$(window).scroll(function() {
    var position = $(this).scrollTop();

    $('.section').each(function() {
        var target = $(this).offset().top;
        var id = $(this).attr('id');

        if (position >= target) {
            $('#navigation > ul > li > a').removeClass('active');
            $('#navigation > ul > li > a[href=#' + id + ']').addClass('active');
        }
    });
});

const sections = document.querySelectorAll(".side_section");
const navLi = document.querySelectorAll(".sidenav ul li");

window.addEventListener("scroll", ()=> {
    let current = "";
    console.log(pageYOffset);
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute("id");
        }
    })
    navLi.forEach( li => {
        li.classList.remove("active");
        if(li.classList.contains(current)){
            li.classList.add("active");
        }
    })
})