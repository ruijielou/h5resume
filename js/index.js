/* global fullpage */
"use strict";
window.onload = function () {

  fullpage.init('#sectionContent', {
    // autoScroll: 3000,
    // pageSpeed: 500,
    loopSection: true,
    beforeLeave: function (leaveIndex, nowIndex) {
      down.addEventListener("click", function(){
        fullpage.moveToNext();
        // nowIndex++;
        // fullpage.moveTo(nowIndex);
      }, false)
    }
  });
  var down = document.querySelector('#down');
      console.log(down)
      down.addEventListener("touchend", function(){
        fullpage.moveToNext();
      },true);
       down.addEventListener("click", function(){
        fullpage.moveToNext();
      },true)
};
