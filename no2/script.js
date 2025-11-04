var winWidth = $(window).width();
var ratio = winWidth / 1920;
var fontSize = {
  small: 9,
  medium: 10
};
var played = [0, 0, 0];
var vara = [];
var bodyFontSize = Math.max(16 * ratio, 10);
var posX = Math.max(80 * ratio, 30);
$("body").css("font-size", bodyFontSize + "px");
fontSize.small = Math.max(fontSize.small * ratio, 7);
fontSize.medium = Math.max(fontSize.medium * ratio, 10);
vara[0] = new Vara(
  "#vara-container",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "04 Nov 2025",
      textAlign: "right",
      y: 20,
      x: -45,
      delay: 500,
      duration: 1500,
      fontSize: fontSize.small
    },
    {
      text: "Hewooo sayang,        youve done a great job today!",
      y: 40,
      x: posX,
      duration: 4000
    },
    {
      text: "I know that youve been going through   a lot recently,",
      id: "sphinx",
      x: posX,
      delay: 500,
      duration: 4500
    },
    {
      text: "and I just want to say how proud I am of you for pushing through everything.",
      id: "end",
      delay: 500,
      x: posX,
      duration: 4500
    }
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);
vara[1] = new Vara(
  "#vara-container2",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "04 Nov 2025",
      textAlign: "right",
      delay: 500,
      y: 20,
      x: -45,
      duration: 1500,
      fontSize: fontSize.small
    },
    {
      text: "Maybe today doesnt feel like your day, but remember... youre still capable   of so much more than you think.",
      y: 40,
      x: posX,
      duration: 4000
    },
    {
      text: "So dont be sad okay... youre doing better than you think.",
      y: 5,
      x: posX,
      delay: 500,
      duration: 3500
    }
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);
vara[2] = new Vara(
  "#vara-container3",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "04 Nov 2025",
      textAlign: "right",
      delay: 500,
      y: 20,
      x: -45,
      duration: 1500,
      fontSize: fontSize.small
    },
    {
      text: "Dahhh yaa cayank kuwh cudah cukup kata2 sweet nyaah ituhhh",
      y: 10,
      x: posX,
      duration: 3500
    },
    {
      text: "Pokoknyah, semangat terus yah dalam menjalani hari2 muwh",
      y: 0,
      x: posX,
      duration: 3500
    },
    {
      text: "Karna acu slalu ada disisimuwh, mendukungmuwh, & mencintaimuwh",
      y: 0,
      color: "#3f51b5",
      id: "",
      x: posX,
      duration: 3500
    }
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);
vara[2].ready(function() {
  $(".front:not(.last)").click(function() {
    var ix = $(this)
      .parent(".paper")
      .index();
    $(".book").addClass("open");
    $(this)
      .parent(".paper")
      .addClass("open");
    if (!played[ix]) {
      vara[ix].playAll();
      vara[ix].animationEnd(function(i, o) {
        played[ix] = 1;
        if (i == "link") {
          var group = o.container;
          var rect = vara[2].createNode("rect", {
            x: 0,
            y: 0,
            width: o.container.getBoundingClientRect().width,
            height: o.container.getBoundingClientRect().height,
            fill: "transparent"
          });
          group.appendChild(rect);
          $(rect).css("cursor", "pointer");
          $(rect).click(function() {
            console.log(true);
            document.querySelector("#link").click();
          });
        }
      });
    }
  });
  $(".back").click(function() {
    if (
      $(this)
        .parent(".paper")
        .index() == 0
    )
      $(".book").removeClass("open");
    $(this)
      .parent(".paper")
      .removeClass("open");
  });
});