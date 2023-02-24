let onReady = () => {
  transitionAniSet("to-right", ".sect-event .event-img-area .img-phone", ".sect-event", 600, 300);
  transitionAniSet("to-up", ".sect-event .event-img-area .img-hand", ".sect-event", 600, 300);
  transitionAniSet("to-left", ".sect-event .event-cont .event-text-area", ".sect-event", 600, 300);
  transitionAniSet("y-rotate", ".sect-common-ad .ad-link img", ".sect-common-ad", 300, 200);
  transitionAniSet("to-small", ".sect-carlist .carlist-ad-area", ".sect-carlist .carlist-ad-area", 300, 200);
  transitionAniSet(
    "to-right",
    ".sect-carlist .car-list-info:nth-of-type(1)",
    ".sect-carlist .car-list-info:nth-of-type(1)",
    300,
    100
  );
  transitionAniSet(
    "to-left",
    ".sect-carlist .car-list-info:nth-of-type(2)",
    ".sect-carlist .car-list-info:nth-of-type(2)",
    300,
    100
  );
  transitionAniSet(
    "to-right",
    ".sect-carlist .car-list-info:nth-of-type(3)",
    ".sect-carlist .car-list-info:nth-of-type(3)",
    300,
    100
  );
};

window.addEventListener("DOMContentLoaded", onReady);

//트랜지션 애니메이션
let transitionAniSet = (aniCssName, targetName, triggerName, onCorrect, offCorrect, onlyPC = true) => {
  // let target = document.querySelector(".sect-event");
  if (onlyPC && window.innerWidth <= 900) return;
  let target = document.querySelector(targetName);
  let trigger = document.querySelector(triggerName);

  let triggerPos = trigger.getBoundingClientRect().top + window.pageYOffset;
  target.classList.add("ani-init-" + aniCssName);

  window.addEventListener("scroll", aniRun);

  function aniRun() {
    let scrollBottom = window.scrollY + window.innerHeight;
    // console.log(scrollBottom);
    if (scrollBottom >= triggerPos + onCorrect) {
      target.classList.add("ani-back-" + aniCssName);
      target.classList.add("ani-run-" + aniCssName);
    } else if (scrollBottom <= triggerPos + offCorrect) {
      target.classList.remove("ani-run-" + aniCssName);
    }
  }
};
