//---------------------Loader--------------------------- 

window.onload = function () {
  document.querySelector('.loader-container').style.display = 'none';
};


//---------------------Heading--------------------------- 

var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  })
  .add({
    targets: '.ml10',
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}



// --------------------My Journey Animation-----------------------

$(document).ready(function () {

  var $animationElements = $('.progress-value');
  var $window = $(window);

  function checkIfInView() {

    var windowHeight = $window.height();
    var windowTopPosition = $window.scrollTop();
    var windowBottomPosition = (windowTopPosition + windowHeight);

    $.each($animationElements, function () {
      var $element = $(this);
      var elementHeight = $element.outerHeight();
      var elementTopPosition = $element.offset().top;
      var elementBottomPosition = (elementTopPosition + elementHeight);

      if ((elementBottomPosition >= windowTopPosition) &&
        (elementTopPosition <= windowBottomPosition)) {
        $element.addClass('in-view');
      } else {
        $element.removeClass('in-view');
      }
    });
  }

  $window.on('scroll resize', checkIfInView);
  $window.trigger('scroll');
});


// ----------------------Scroll with ease effect----------------------

function getElementY(query) {
  return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top
}

function doScrolling(element, duration) {
  var startingY = window.pageYOffset
  var elementY = getElementY(element)
  var targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY
  var diff = targetY - startingY
  var easing = function (t) { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 }
  var start

  if (!diff) return
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp
    var time = timestamp - start
    var percent = Math.min(time / duration, 1)
    percent = easing(percent)

    window.scrollTo(0, startingY + diff * percent)

    if (time < duration) {
      window.requestAnimationFrame(step)
    }
  })
}

document.getElementById('nav-home').addEventListener('click', doScrolling.bind(null, '#aoscont', 800))
document.getElementById('nav-about').addEventListener('click', doScrolling.bind(null, '.about-section', 800))
document.getElementById('nav-project').addEventListener('click', doScrolling.bind(null, '#project', 800))
document.getElementById('nav-contact').addEventListener('click', doScrolling.bind(null, '#contcont', 800))


/*----------------Contact Us-------------------*/

/*---------Greeting------------*/

// document.addEventListener('DOMContentLoaded',function(event){
//   var dataText = [ "Hey, there", "How was your experience ?", "We appreciate your valuable feedback."];

//   function typeWriter(text, i, fnCallback) {
//     if (i < (text.length)) {
//      document.querySelector("#greetcont").innerHTML = text.substring(0, i+1) +'<span id="spanid" aria-hidden="true"></span>';
//       setTimeout(function() {
//         typeWriter(text, i + 1, fnCallback)
//       }, 100);
//     }
//     else if (typeof fnCallback == 'function') {
//       setTimeout(fnCallback, 1000);
//     }
//   }

//    function StartTextAnimation(i) {
//      if (typeof dataText[i] == 'undefined'){
//         setTimeout(function() {
//           StartTextAnimation(0);
//         }, 20000);
//      }
//     else if (i < dataText[i].length) {
//      typeWriter(dataText[i], 0, function(){
//        StartTextAnimation(i + 1);
//      });
//     }
//   }

//   StartTextAnimation(0);
// });

/*----------Contact-----------*/

document.addEventListener('DOMContentLoaded', function (event) {
  var dataText = ["Have some questions ?", "Get in touch with us."];

  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
      document.querySelector("#contcont").innerHTML = text.substring(0, i + 1) + '<span id="spanid" aria-hidden="true"></span>';
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 1500);
    }
  }

  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined') {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 1000);
    }
    else if (i < dataText[i].length) {
      typeWriter(dataText[i], 0, function () {
        StartTextAnimation(i + 1);
      });
    }
  }

  StartTextAnimation(0);
});
