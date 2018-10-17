//scroll back to top smoothly when .navbar-brand is pressed
$(function(){
    $(".navbar-brand").click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 1000); 
        return false; 
    });       
}) 

//Scrollspy keep updating #navbar
$("body").scrollspy({ target: "#navbar" }) 

// Add smooth scrolling to all menu links
$(document).ready(function(){
    // whenever user press any link
    $("a").on('click', function(event) {

        // Make sure this.hash is not empty before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            $('html, body').animate({
                // scrollTop: $(hash).offset().top
                scrollTop: $(hash).offset().top
            }, 1000, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    }); // End onclick function
}); // End document-ready function