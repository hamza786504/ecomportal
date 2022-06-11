Draggable.create("#slider", {
    bounds:"#categories_slider",
//allowNativeTouchScrolling:false,
    type:"x",
throwProps: true
    }
)

// TweenMax.set("body", {overflowY:'scroll'});

// var scrollSpeed = 0.5; // half of user scroll
// var scrollHeight = 10000;

// TweenMax.set("body", {height:scrollHeight, overflowY:'scroll'});

$(document).on("scroll", function (){
const pixels = $(document).scrollTop();
TweenMax.to('#slider',1,{x:-0.5 * pixels})

//  '0.5' = half speed of user scroll
console.log(pixels);
})

/* This Pen Loads the Following

TweenMax: latest version
-TweenLite
-TweenMax
-TimelineLite
-TimelineMax
-CSSPlugin
-BezierPlugin
-DirectionalRotationPlugin
-AttrPlugin
-RoundPropsPlugin
-EasePack
Draggable

** Bonus Plugins **
-ThrowPropsPlugin

Please use the minimal amount of code
possible to recreate the problem you
are experiencing.

*/
