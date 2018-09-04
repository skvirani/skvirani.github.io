$(document).ready(function(){
  //add smooth scrolling to all links with class="smoothScroll"
  $("a.smoothScroll").on('click', function(event){
    //check if this.hash has a value
    if( this.hash != "") {
      event.preventDefault();
      //store hash
      var hash = this.hash;
      // this.hash.addClass('activeNav');
      //use jQuery animate() method
      $('html, body').animate({ scrollTop:$(hash).offset().top}, 800, function(){
        window.location.hash = hash;
        // this.addClass('activeNav');
      });
      // $("a.smoothScroll").addClass('activeNav');
    } //end if
  });
});
