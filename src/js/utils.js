// (function (window, $) {
//   window.stopPropagation = function (el, event) {
//     $(el).on(event, function (e) {
//       e.stopPropagation();
//     });
//   };
//
//   window.slideToogle = function (el, className) {
//
//     $(el).on('click', function () {
//       let currentData = $(this).data("for");
//       $(className).not(className + "." + currentData).slideUp();
//       $(className + "." + currentData).slideToggle();
//     });
//   };
//
//   window.toggleWIthActive = function (clickDiv, showDiv) {
//
//     $(clickDiv).on('click', function () {
//       const next = $(this).next('ul');
//       $(showDiv).not(next).slideUp(500);
//       next.slideToggle(500);
//
//       $(this).addClass('active');
//       $(clickDiv).not(this).removeClass('active');
//     });
//   };
//
//   window.onlyToggle = function (clickDiv, showDiv) {
//
//     $(clickDiv).on('click', function () {
//       const next = $(this).next('ul');
//       $(showDiv).not(next).slideUp(500);
//       next.slideToggle(500);
//     });
//   }
//
// })(window, jQuery);