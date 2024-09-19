///////////////// Mobile menu ///////////////////////

let clickCount = 0;
document.querySelector('.navbar__mobile-button').addEventListener('click', function() {
    console.log('clicked');
    clickCount++;
    document.querySelector('.navbar__mobile-menu').classList.toggle('navbar__mobile-menu--active');
    document.querySelector('.navbar__mobile-menu').classList.toggle('navbar__mobile-menu--inactive');
});

// jQuery
// $(document).ready(function() {
//     $('.navbar__mobile-button').click(function() {
//         clickCount++;
//         $('.navbar__menu-div').slideToggle(500);
//     });
// });

/////////////// Window Resize ///////////////////////
window.addEventListener("resize", function (e) {
    let width = window.innerWidth;
    console.log(width);

    if(width >= 768)
    {
        document.querySelector(".navbar__mobile-menu").classList.remove("navbar__mobile-menu--active");
        document.querySelector(".navbar__mobile-menu").classList.add("navbar__mobile-menu--inactive");
    }
    else if(clickCount % 2 == 1) // if the mobile view was active
    {
        document.querySelector(".navbar__mobile-menu").classList.remove("navbar__mobile-menu--inactive");
        document.querySelector(".navbar__mobile-menu").classList.add("navbar__mobile-menu--active");
    }
    else
    {
        document.querySelector(".navbar__mobile-menu").classList.remove("navbar__mobile-menu--active");
        document.querySelector(".navbar__mobile-menu").classList.add("navbar__mobile-menu--inactive");
    }
});


////////////////////// Product Select //////////////////////////
document.querySelector('.best-selling__input').addEventListener('change', function(e) {
    console.log('changed');
});


document.addEventListener("DOMContentLoaded", function (e) {
    /////////////// Testimonials Slider ///////////////////////
    new Splide('#testimonials_slider', {
        type       : 'loop',
        perPage    : 3,
        perMove    : 1,
        pagination : false,
        breakpoints: {
            990: {
                perPage: 2,
            },
    
            768: {
                perPage: 1,
            }
        }
    }).mount();

    //////////////////////// Best Products Slider //////////////////////////
    new Splide('#products_slider', {
        type       : 'loop',
        perPage    : 4,
        perMove    : 1,
        pagination : false,
        breakpoints: {
            990: {
                perPage: 2,
            },
    
            768: {
                perPage: 2,
            }
        }
    }).mount();
});
