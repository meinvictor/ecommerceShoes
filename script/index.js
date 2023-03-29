$(document).ready(function () {
  //  SIDE NAVIGATION
  $("#sidebar ul a").click(function () {
    let elementClick = $(this).attr("href");
    let destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate(
      { scrollTop: destination },
      800
    );
    return false;
  });
  $("#sidebar ul a li").on("click", function () {
    $("#sidebar ul a li").removeClass("activeSide");
    $(this).addClass("activeSide");
  });

  // TYPE CHANGE
  $(".sneackerShortImg").addClass("animate__animated animate__zoomIn");
  $(".sneackersShortName").addClass("animate__animated animate__zoomIn");
  $(".type a span.womanType").click(function (e) {
    e.preventDefault();
    $("#shortPageMan").hide();
    $("#shortPageWoman").show();
    $(".type a span.mensType").removeClass("active");
    $(".type a span.womanType").addClass("active");
  });
  $(".type a span.mensType").click(function (e) {
    e.preventDefault();
    $("#shortPageMan").show();
    $("#shortPageWoman").hide();
    $(".type a span.womanType").removeClass("active");
    $(".type a span.mensType").addClass("active");
  });

  // OFFSET ANIMATIONS
  $(function () {
    $(window).scroll(function () {
      // show sneackers
      let feuturedOffset = $(".findOutBtn").offset().top;
      if ($(window).scrollTop() > feuturedOffset) {
        $('.sneacker').css('display', 'block').addClass('animate__animated animate__zoomIn');
      }
      // end of show sneackers

      // change sidebar buttons

      // trend and home button
      let sidebarOffsetTrend = $('.trend').offset().top;
      if ($(window).scrollTop() > sidebarOffsetTrend) { 
        $('.sidebarHome').removeClass('activeSide');
        $('.sidebarTrending').addClass('activeSide');
      }
      else {
        $('.sidebarHome').addClass('activeSide');
        $('.sidebarTrending').removeClass('activeSide');
      }

      // feutured and comments button
      let sidebarOffsetFeautured = $('#featured').offset().top;
      if ($(window).scrollTop() > sidebarOffsetFeautured) { 
        $('.sidebarTrending').removeClass('activeSide');
        $('.sidebarFeautured').addClass('activeSide');
      }
      else {
        $('.sidebarTrending').addClass('activeSide');
        $('.sidebarFeautured').removeClass('activeSide');
      }
      
    });
  });
});
