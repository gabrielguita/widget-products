//main js file

var $j = jQuery.noConflict();

// - - - - - - - - - - - - -- - - - - -
// - - - - - - main slider  - - - - - -
// - - - - - - - - - - - - -- - - - - -
var mainSlider= $j("ul.bxslider").bxSlider({
  mode: 'fade',
     speed:1000,
     pager:false,
     nextText:'',
     prevText:'',
     infiniteLoop:false,
     controls : false,
     hideControlOnEnd:true,
     onSlideBefore:function($slideElement, oldIndex, newIndex){
       changeThumb(sliderThumb,newIndex);

     }

   });

   // - - - - - - - - - - - - -- - - - - -
   // - - - - - - thumbnails slider  - - - - - -
   // - - - - - - - - - - - - -- - - - - -
   var sliderThumb=$j("ul.bxslider-pager").bxSlider({
     mode: 'vertical',
     minSlides: 4,
     maxSlides: 4,
     slideWidth: 156,
     slideMargin: 12,
     moveSlides: 1,
     pager:false,
     speed:1000,
     infiniteLoop:false,
     hideControlOnEnd:true,
     nextText:'<span></span>',
     prevText:'<span></span>',
     onSlideBefore:function($slideElement, oldIndex, newIndex){
     }
   });

   linkSliders(mainSlider, sliderThumb);

   if($j(".bxslider-pager li").length<5){
     $j(".bxslider-pager .bx-next").hide();
   }


   $j(".slider-container .details").on({
       mouseenter: function (e) {
           var sizeCont = $j(this).find('.size');
           sizeCont.addClass('show');
           e.preventDefault();
       },
       mouseleave: function (e) {
           var sizeCont = $j(this).find('.size');
           sizeCont.removeClass('show');
           e.preventDefault();
       }
   });


function linkSliders(bigS,thumbS){
 $j(".bxslider-pager").on("click","a",function(event){
   event.preventDefault();
   var newIndex=$j(this).parent().attr("data-slideIndex");

     $j(bigS).each(function() {
        bigS.goToSlide(newIndex);
      });
 });
}


function changeThumb(slider,newIndex){

  var $thumbS=$j(".bxslider-pager");
  $thumbS.find('.active').removeClass("active");
  $thumbS.find('li[data-slideIndex="'+newIndex+'"]').addClass("active");

  if(slider.getSlideCount()-newIndex>=4)slider.goToSlide(newIndex);
  else slider.goToSlide(slider.getSlideCount()-4);

}
