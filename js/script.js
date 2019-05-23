

$(".custom-select2").each(function() {
  var classes = $(this).attr("class"),
      id      = $(this).attr("id"),
      name    = $(this).attr("name");
  var template =  '<div class="' + classes + '">';
      template += '<span class="custom-select2-trigger">' + $(this).attr("name") + '</span>';
      template += '<div class="custom-options">';
      $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
      });
  template += '</div></div>';
  
  $(this).wrap('<div class="custom-select2-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".custom-option:first-of-type").hover(function() {
  $(this).parents(".custom-options").addClass("option-hover");
}, function() {
  $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select2-trigger").on("click", function() {
  $('html').one('click',function() {
    $(".custom-select2").removeClass("opened");
  });
  $(this).parents(".custom-select2").toggleClass("opened");
  event.stopPropagation();
});
$(".custom-option").on("click", function() {
  $(this).parents(".custom-select2-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-select2").removeClass("opened");
  $(this).parents(".custom-select2").find(".custom-select2-trigger").text( '' + $(this).text());
});

$('.slider_quem').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false
});

 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  arrows: true,
  focusOnSelect: true
});

$('.lojas_slider').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});

$('.mobile_linha').slick({
  dots: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
				

$(".hamburger").click(function()
{
    $(".navigation").toggleClass("open_menu");
});

$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));

  $('li.nav-item a').removeClass('active');
  $(this).addClass('active');
  if( target.length ) {
      
      event.preventDefault();
      var top = (target.offset().top) - 140;
      $('html, body').stop().animate({
          scrollTop: top
      }, 1000);
  }
});   

AOS.init();

var maxHeight = 0;

$(".dentro_produto h3").each(function(){
   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
});
var meuHeight = parseInt(40);
maxHeight = meuHeight + maxHeight;
$(".dentro_produto h3").height(maxHeight);