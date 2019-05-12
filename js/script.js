$(document).ready(function () {
    $('.sidebar a').click(function () {
        $('[class^=category-]').hide('fast','linear');
        var id = $(this).attr('id');
        if(id == 'all') {
             $('[class^=category-]').show('fast','linear');
        } else {
             $('.category-'+id).show('fast','linear');
        }
    });
});

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
  prevArrow: '<div class="arrow feat-prev">&larr;</div>',
        nextArrow: '<div class="arrow feat-next">&rarr;</div>',
  dots: true,
  arrows: true,
  focusOnSelect: true
});