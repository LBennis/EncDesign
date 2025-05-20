
// App Header Button Action
$(document).ready(function() {
   
   $(document).on('click', '.app-button', function () {
    $(".app-header").toggleClass("active");
   });
        
});


   // Handle clicks outside the sidebar to close it
   $(document).on('click', function(e) {
      const $sidebar = $('#tab-active');
      const $appHeader = $('.app-header');
      
      // If click is outside both sidebar and overlay, close the sidebar
      if (!$(e.target).closest('#tab-active, .overlay-content-wrapper').length) {
         $sidebar.removeClass('active');
      }
      
      // If click is outside app header and dropdown, close the dropdown
      if (!$(e.target).closest('.app-header, .dropdown-wrapper').length) {
         $appHeader.removeClass('active');
      }
   });