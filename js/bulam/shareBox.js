(function () {
  const btnEl = document.querySelector(".btn-share");
  const boxEl = document.querySelector(".share-box");

  const btnClick = () => {
    if (btnEl.classList.contains("on")) {
      btnEl.classList.remove("on");
      boxEl.classList.remove("onBox");
    } else {
      btnEl.classList.add("on");
      boxEl.classList.add("onBox");
    }
  };

  btnEl.addEventListener("click", btnClick);

  const bodyEl = document.querySelector("body");

  const bodyClick = (e) => {
    if (
      !e.target.classList.contains("btn-share") &&
      !e.target.classList.contains("share-box")
    ) {
      btnEl.classList.remove("on");
      boxEl.classList.remove("onBox");
    }
  };

  bodyEl.addEventListener("click", bodyClick);
})();
