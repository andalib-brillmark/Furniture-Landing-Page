// Mobile menu

let clickCount = 0;
document.querySelector('.navbar__mobile-button').addEventListener('click', function() {
    console.log('clicked');
    clickCount++;
    document.querySelector('#mobile-menu').classList.toggle('navbar__mobile-menu--active');
    document.querySelector('#mobile-menu').classList.toggle('navbar__mobile-menu--inactive');
});

// Window Resize
window.addEventListener("resize", function (e) {
    let width = window.innerWidth;
    console.log(width);

    if(width >= 768)
    {
        document.querySelector("#mobile-menu").classList.remove("navbar__mobile-menu--active");
        document.querySelector("#mobile-menu").classList.add("navbar__mobile-menu--inactive");
    }
    else if(clickCount % 2 == 1) // if the mobile view was active
    {
        document.querySelector("#mobile-menu").classList.remove("navbar__mobile-menu--inactive");
        document.querySelector("#mobile-menu").classList.add("navbar__mobile-menu--active");
    }
    else
    {
        document.querySelector("#mobile-menu").classList.remove("navbar__mobile-menu--active");
        document.querySelector("#mobile-menu").classList.add("navbar__mobile-menu--inactive");
    }
});