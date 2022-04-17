
// Slider settings

$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img class="arrow" src="icon/arrow_left.png" alt=""></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img class="arrow" src="icon/arrow_right.png" alt=""></img></button>',
        responsive: [
          {
            breakpoint: 968,
            settings: {
                arrows: false,
                infinite: true,
                dots: true,
                dotsClass: 'slick-dots'
            }
          }
        ]   
    });
  
    // $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function(){
    //   $(this)
    //     .addClass('catalog__class_active').siblings().removeClass('catalog__class_active')
    //     .closest('div.container').find('div.content').removeClass('catalog__class_active').eq($(this).index()).addClass('catalog__class_active')

    // });


    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.content').removeClass('content_active').eq($(this).index()).addClass('content_active');
    });
});

