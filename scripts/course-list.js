$(function() {
   $(".edit-btn").click(function(e) {
      e.preventDefault();
      $(this).next(".status-indicator").toggleClass("active")
   });

   hide = true;
   $("body").on("click", function () {
      if (hide) $('.extra-settings-list-box').removeClass('active');
      hide = true;
   });

   $("body").on('click', '.extra-settings-btn', function () {

      var self = $(this);

      if (self.next().hasClass('active')) {
         $('.extra-settings-list-box').removeClass('active');
      }

      $('.extra-settings-list-box').removeClass('active');

      self.next().toggleClass('active');
      hide = false;
   });

   $(".status-btn").click(function() {
      $(this).parents(".extra-settings").siblings(".status-indicator").toggleClass("active");
   });
});