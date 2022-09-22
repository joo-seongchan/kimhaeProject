(function () {
  const btn1 = $(".button");
  const subTitleWrap = $(".subTitleWrap");

  subTitleWrap.each(function (index, item) {
    $(item).on("click", function () {
      if (!$(this).next(".boxWrap").is(".boxOpen")) {
        $(this).next(".boxWrap").addClass("boxOpen");
        $(this).children(".arrow_2").addClass("turn");
      } else {
        $(this).next(".boxWrap").removeClass("boxOpen");
        $(this).children(".arrow_2").removeClass("turn");
      }
      if ($(".boxWrap").length === $(".boxWrap.boxOpen").length) {
        btn1.addClass("open").text("전체닫기");
      }
    });
  });

  btn1.on("click", function () {
    if (!$(this).is(".open")) {
      $(this).addClass("open").text("전체닫기");
      subTitleWrap.each(function (index, item) {
        $(this).next(".boxWrap").addClass("boxOpen");
        $(this).children(".arrow_2").addClass("turn");
      });
    } else {
      $(this).removeClass("open").text("전체열기");
      subTitleWrap.each(function (index, item) {
        $(this).next(".boxWrap").removeClass("boxOpen");
        $(this).children(".arrow_2").removeClass("turn");
      });
    }
  });

  const btn3 = $(".button_3");
  const subTitleWrap3 = $(".subTitleBox_3");

  subTitleWrap3.each(function (index, item) {
    $(item).on("click", function () {
      if (!$(this).next(".conBoxWrap_3").is(".boxOpen")) {
        $(this).next(".conBoxWrap_3").addClass("boxOpen");
        $(this).children(".arrow_3").addClass("turn");
      } else {
        $(this).next(".conBoxWrap_3").removeClass("boxOpen");
        $(this).children(".arrow_3").removeClass("turn");
      }
      if ($(".conBoxWrap_3").length === $(".conBoxWrap_3.boxOpen").length) {
        btn3.addClass("open").text("전체닫기");
      }
    });
  });

  btn3.on("click", function () {
    if (!$(this).is(".open")) {
      $(this).addClass("open").text("전체닫기");
      subTitleWrap3.each(function (index, item) {
        $(this).next(".conBoxWrap_3").addClass("boxOpen");
        $(this).children(".arrow_3").addClass("turn");
      });
    } else {
      $(this).removeClass("open").text("전체열기");
      subTitleWrap3.each(function (index, item) {
        $(this).next(".conBoxWrap_3").removeClass("boxOpen");
        $(this).children(".arrow_3").removeClass("turn");
      });
    }
  });
})();
