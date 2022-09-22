$(function () {
  $(".btn-share").click(function () {
    if ($(".btn-share").hasClass("on")) {
      $(".btn-share").removeClass("on");
      $(".share-box").removeClass("onBox");
    } else {
      $(".btn-share").addClass("on");
      $(".share-box").addClass("onBox");
    }
  });

  $("body").click(function (event) {
    if (
      !$(event.target).hasClass("btn-share") &&
      !$(event.target).hasClass("share-box")
    ) {
      console.log(event.target);
      $(".btn-share").removeClass("on");
      $(".share-box").removeClass("onBox");
    }
  });
});
