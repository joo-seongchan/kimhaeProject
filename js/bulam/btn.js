(function () {
  const btn1 = document.querySelector(".button");
  const boxEl = document.querySelectorAll(".boxWrap");
  const arrowEl = document.querySelectorAll(".arrow_2");

  const btnClick = () => {
    btn1.classList.toggle("open");

    if (btn1.innerHTML === "전체닫기") {
      btn1.innerHTML = "전체열기";
      for (var i = 0; i < boxEl.length; i++) {
        if (boxEl[i].classList.contains("boxOpen") === true) {
          boxEl[i].classList.remove("boxOpen");
          arrowEl[i].classList.remove("turn");
        }
      }
    } else {
      btn1.innerHTML = "전체닫기";
      for (var i = 0; i < boxEl.length; i++) {
        if (boxEl[i].classList.contains("boxOpen") === false) {
          boxEl[i].classList.add("boxOpen");
          arrowEl[i].classList.add("turn");
        }
      }
    }
  };

  btn1.addEventListener("click", btnClick);

  const arrowClick0 = () => {
    if (arrowEl[0].classList.contains("turn") === true) {
      arrowEl[0].classList.remove("turn");
      boxEl[0].classList.remove("boxOpen");
    } else {
      arrowEl[0].classList.add("turn");
      boxEl[0].classList.add("boxOpen");
    }

    let count = 0;
    for (var i = 0; i < arrowEl.length; i++) {
      if (arrowEl[i].classList.contains("turn") === true) {
        count++;
      }
    }

    if (count === arrowEl.length) {
      btn1.innerHTML = "전체닫기";
      btn1.classList.add("open");
    } else {
      btn1.innerHTML = "전체열기";
      btn1.classList.remove("open");
      count = 0;
    }
  };

  arrowEl[0].addEventListener("click", arrowClick0);

  const arrowClick1 = () => {
    if (arrowEl[1].classList.contains("turn") === true) {
      arrowEl[1].classList.remove("turn");
      boxEl[1].classList.remove("boxOpen");
    } else {
      arrowEl[1].classList.add("turn");
      boxEl[1].classList.add("boxOpen");
    }

    let count = 0;
    for (var i = 0; i < arrowEl.length; i++) {
      if (arrowEl[i].classList.contains("turn") === true) {
        count++;
      }
    }

    if (count === arrowEl.length) {
      btn1.innerHTML = "전체닫기";
      btn1.classList.add("open");
    } else {
      btn1.innerHTML = "전체열기";
      btn1.classList.remove("open");
      count = 0;
    }
  };

  arrowEl[1].addEventListener("click", arrowClick1);

  const arrowClick2 = () => {
    if (arrowEl[2].classList.contains("turn") === true) {
      arrowEl[2].classList.remove("turn");
      boxEl[2].classList.remove("boxOpen");
    } else {
      arrowEl[2].classList.add("turn");
      boxEl[2].classList.add("boxOpen");
    }

    let count = 0;
    for (var i = 0; i < arrowEl.length; i++) {
      if (arrowEl[i].classList.contains("turn") === true) {
        count++;
      }
    }

    if (count === arrowEl.length) {
      btn1.innerHTML = "전체닫기";
      btn1.classList.add("open");
    } else {
      btn1.innerHTML = "전체열기";
      btn1.classList.remove("open");
      count = 0;
    }
  };

  arrowEl[2].addEventListener("click", arrowClick2);

  // section2 end

  const btn2 = document.querySelector(".button_3");
  const boxEl2 = document.querySelectorAll(".conBoxWrap_3");
  const arrowEl2 = document.querySelectorAll(".arrow_3");

  const btnClick2 = () => {
    btn2.classList.toggle("open");

    if (btn2.innerHTML === "전체닫기") {
      btn2.innerHTML = "전체열기";
      for (var i = 0; i < boxEl2.length; i++) {
        if (boxEl2[i].classList.contains("boxOpen") === true) {
          boxEl2[i].classList.remove("boxOpen");
          arrowEl2[i].classList.remove("turn");
        }
      }
    } else {
      btn2.innerHTML = "전체닫기";
      for (var i = 0; i < boxEl2.length; i++) {
        if (boxEl2[i].classList.contains("boxOpen") === false) {
          boxEl2[i].classList.add("boxOpen");
          arrowEl2[i].classList.add("turn");
        }
      }
    }
  };

  btn2.addEventListener("click", btnClick2);

  const arrowClick3 = () => {
    if (arrowEl2[0].classList.contains("turn") === true) {
      arrowEl2[0].classList.remove("turn");
      boxEl2[0].classList.remove("boxOpen");
    } else {
      arrowEl2[0].classList.add("turn");
      boxEl2[0].classList.add("boxOpen");
    }

    let count = 0;
    for (var i = 0; i < arrowEl2.length; i++) {
      if (arrowEl2[i].classList.contains("turn") === true) {
        count++;
      }
    }

    if (count === arrowEl2.length) {
      btn2.innerHTML = "전체닫기";
      btn2.classList.add("open");
    } else {
      btn2.innerHTML = "전체열기";
      btn2.classList.remove("open");
      count = 0;
    }
  };

  arrowEl2[0].addEventListener("click", arrowClick3);

  const arrowClick4 = () => {
    if (arrowEl2[1].classList.contains("turn") === true) {
      arrowEl2[1].classList.remove("turn");
      boxEl2[1].classList.remove("boxOpen");
    } else {
      arrowEl2[1].classList.add("turn");
      boxEl2[1].classList.add("boxOpen");
    }

    let count = 0;
    for (var i = 0; i < arrowEl2.length; i++) {
      if (arrowEl2[i].classList.contains("turn") === true) {
        count++;
      }
    }

    if (count === arrowEl2.length) {
      btn2.innerHTML = "전체닫기";
      btn2.classList.add("open");
    } else {
      btn2.innerHTML = "전체열기";
      btn2.classList.remove("open");
      count = 0;
    }
  };

  arrowEl2[1].addEventListener("click", arrowClick4);

  const arrowClick5 = () => {
    if (arrowEl2[2].classList.contains("turn") === true) {
      arrowEl2[2].classList.remove("turn");
      boxEl2[2].classList.remove("boxOpen");
    } else {
      arrowEl2[2].classList.add("turn");
      boxEl2[2].classList.add("boxOpen");
    }

    let count = 0;
    for (var i = 0; i < arrowEl2.length; i++) {
      if (arrowEl2[i].classList.contains("turn") === true) {
        count++;
      }
    }

    if (count === arrowEl2.length) {
      btn2.innerHTML = "전체닫기";
      btn2.classList.add("open");
    } else {
      btn2.innerHTML = "전체열기";
      btn2.classList.remove("open");
      count = 0;
    }
  };

  arrowEl2[2].addEventListener("click", arrowClick5);
})();
