var app = new Vue({
  el: "#app",
  data: {},

  computed: {
    resultImgURL: function () {
      var score = localStorage.getItem("score");
      var imgSrc = "";

      if (score < 2) imgSrc = "assets/illustrations-kc-score-bgd-image-33.svg";
      else if (score == 2)
        imgSrc = "assets/illustrations-kc-score-bgd-image-67.svg";
      else imgSrc = "assets/illustrations-kc-score-bgd-image-100.svg";

      return imgSrc;
    },

    resultScore: function () {
      var score = localStorage.getItem("score");
      if (score == 0) result = "0";
      else if (score == 1) result = "33";
      else if (score == 2) result = "67";
      else result = "100";

      return result;
    },

    nextURLText: function () {
      var score = localStorage.getItem("score");
      if (score < 2) result = "Take again";
      else if (score == 2) result = "Go to summary";
      else result = "Go to summary";

      return result;
    },

    nextURLLink: function () {
      var score = localStorage.getItem("score");
      if (score < 2) result = "module01-04.html";
      else if (score == 2) result = "module01-10.html";
      else result = "module01-10.html";

      return result;
    },

    scoreClass: function () {
      var score = localStorage.getItem("score");
      if (score < 2) result = "score-percentage-33";
      else result = "score-percentage";

      return result;
    },
  },
});
