$(function() {
   let sidebar = $(".sidebar");
   let body = $("body");

   $(".burger-btn, .sidebar-toggler").click(function(e) {
      e.preventDefault()
      sidebar.toggleClass("active");
      if (sidebar.hasClass("active")) {
         body.css("overflowY","hidden")
         body.append("<div class='sidebar-backdrop'></div>");
      } else {
         body.css("overflowY","auto");
         $(".sidebar-backdrop").remove();
      }
   });

   $(window).resize(function() {
      if ($(window).width() > 1199) {
         $(".sidebar").removeClass("active");
      }
   });

   $(".menu-link").click(function() {
      $(".menu-item").removeClass("active");
      $(this).parent(".menu-item").addClass("active");
   });



});