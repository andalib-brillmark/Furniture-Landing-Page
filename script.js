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
    // console.log(width);

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


//////////// Desktop Sub Menu /////////////////
document.querySelector('.navbar__pc-menu--li').addEventListener('click', function(e) {
    document.querySelector('.navbar__pc-submenu--ul').classList.toggle('navbar__pc-submenu--active');
});

/////////////// Mobile Sub Menu ///////////////////////
document.querySelector('.navbar__mobile-menu--li').addEventListener('click', function(e) {
    console.log('clicked');
    document.querySelector('.navbar__mobile-submenu--ul').classList.toggle('navbar__mobile-submenu--active');
});


////////////////////// Product Collection Select //////////////////////////
// best-selling__active is for active button
// best-selling__inactive is for hiding slide

document.querySelectorAll('.best-selling__input button').forEach((button) => {
    button.addEventListener('click', function(e) {
        let slide = document.querySelectorAll('.best-selling__slider');
        console.log(slide);
        
        let current = 0;
        for(let i = 0; i < this.parentElement.children.length; i++)
        {
            this.parentElement.children[i].classList.remove('best-selling__active');

            if(this.parentElement.children[i] == this)
            {
                current = i;
            }
        }

        this.classList.add('best-selling__active'); // Button active
        for(let i = 0; i < slide.length; i++)
        {
            if(i !== current)
            {
                slide[i].classList.add('best-selling__inactive');
            }
            else
            {
                slide[current].classList.remove('best-selling__inactive');
                let id = `#bsp-slider${current + 1}`;
                new Splide(id, {
                    type       : 'loop',
                    perPage    : 4,
                    perMove    : 1,
                    pagination : false,
                    breakpoints: {
                        1136: {
                            perPage: 3,
                        },
                
                        872: {
                            perPage: 2,
                        },
            
                        515: {
                            perPage: 1,
                        }
                    }
                }).mount();
            }
            console.log(slide[i]);
        }

        console.log(this.innerHTML);
    });
}); 

// When the page is loaded
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
    new Splide('#bsp-slider1', {
        type       : 'loop',
        perPage    : 4,
        perMove    : 1,
        pagination : false,
        breakpoints: {
            1136: {
                perPage: 3,
            },
    
            872: {
                perPage: 2,
            },

            515: {
                perPage: 1,
            }
        }
    }).mount();
});
