//do not remove this line of code
$(document).foundation();


(function() {
	"use strict";

//scroll


var logo = document.querySelector("#logo");

//about page animation
var para1 = document.querySelector("#paragraph1");
var para2 = document.querySelector("#paragraph2");
var para3 = document.querySelector("#paragraph3");

//gallery page animation	
var gallery = document.querySelector("#gallery");

	
var tl = new TimelineMax({repeat:0, repeatDelay:1});
var tl2 = new TimelineMax({repeat:0, repeatDelay:1});
	
var tlLogo = new TimelineMax({repeat:0, repeatDelay:1});

tlLogo.add(TweenLite.to(logo,4,{opacity:1}));
////header
	
var nav = document.querySelector("#mainNav");
var links = nav.querySelectorAll("a");
		
//function
function scrollit(evt) {
console.log(evt.target.id);

var idNum = evt.target.id;
console.log("scroll"+idNum)	;
TweenLite.to(window, 1, {scrollTo:"#scroll"+idNum, offsetY:20});
}
	
for(var s=0; s<links.length; s++){
	links[s].addEventListener("click", scrollit, false);
}

//Tween Fade in	
//function activate() {	
var aboutShowUp = document.querySelector("#about");
var galleryShowUp = document.querySelector("#gallery");
console.log(galleryShowUp);

var screenPOS;
var story;
var gallery;

function activate() {
		screenPOS = window.scrollY;
		story = aboutShowUp.offsetTop;
		gallery = galleryShowUp.offsetTop;
		
		//console.log(story);
		if(screenPOS+10>story) {
		console.log("para");
		tl2.add(TweenLite.to(para1,1,{opacity:1}));
		tl2.add(TweenLite.to(para2,1,{opacity:1}));
		tl2.add(TweenLite.to(para3,1,{opacity:1}));
			
		}
		if(screenPOS+10>gallery){
			tl.add(TweenLite.to(galleryShowUp,1,{opacity:1}));
			
		}
	}
	
	window.addEventListener("scroll", activate, false);
	





//video player
	var video, teaser, trailer;
	var playButton = document.querySelector("#playVideo");
	
function togglePlay(evt) {
		console.log("from togglePlay()");
		if(video.paused){
			video.play();
			//playButton.innerHTML = "pause";
			console.log(evt.currentTarget);
			evt.currentTarget.innerHTML = "pause";
			
		}else{
			video.pause();
			
			playButton.innerHTML = "play";
		}
	}
		
	function init() {
		console.log("From init()");
		video = document.querySelector("#myVideo");	
		//console.log(video.currentSrc);
		var toggleButton = document.querySelector("#playVideo");
		toggleButton.addEventListener("click", togglePlay, false);
		
		teaser = document.querySelector("#vid1");
		trailer = document.querySelector("#vid2");
	
		teaser.addEventListener("click", swapMov, false);
		trailer.addEventListener("click", swapMov, false);
	}
	


function swapMov(evt){
	//console.log("From swapMov()");
	//video.src="video/vid1.webm";
	if(evt.currentTarget.id==="vid1"){
			video.src="video/lotr_trailer.webm";
	}else{
		video.src="video/lotr-teaser.webm";
	}
	console.log(evt.currentTarget.id);
	
}
	
window.addEventListener("load", init, false);



//gallery

//Variables	
	var cast = ["frodo", "sam", "aragorn", "legolas", "gandalf", "merryPippin", "gimli", "boromir", "theRing"];
	var photos = ["frodo_bg", "sam_bg", "aragorn_bg", "legolas_bg", "gandalf_bg","pippin_merry_bg", "gimli_bg", "boromir_bg", "theRing_bg"];
	
	var captions = ["Frodo Portrayed by","Sam Portrayed by","Aragorn Portrayed by","Legolas Portrayed by", "Gandalf Portrayed by", "Merry and Pippin Portrayed by", "Gimli Portrayed by", "Boromir Portrayed by", "The Ring Created by"];
	var actor = ["ELIJAH WOOD","SEAN ASTIN","VIGGO MORTENSEN","ORLANDO BLOOM","IAN MCKELLEN", "DOMINIC MONAGHAN AND BILLY BOYD", "JOHN RHYS-DAVIES", "SEAN BEAN", 	"J. R. R. Tolkien"];
	
	var describe = ["the main protagonists of the lord of the rings. frodo is a hobbit of the shire who inherits the One Ring from his cousin bilbo baggins and undertakes the quest to destroy it in the fires of Mount Doom.", 
	
	"sam is frodo baggins' gardener and best friend. sam proved himself to be frodo's closest and most dependable companion, the most loyal of the fellowship of the ring",
	
	"aragorn joined frodo baggins on his journey to rivendell. aragorn plays the part of a very strong, very athletic, and very good fighting warrior, who is part of the fellowship.",
	
	"legolas is a sindarin elf who was part of the fellowship with his keen eyesight, sensitive hearing, and excellent bowmanship, Legolas was a valuable resource to the other eight members of the fellowship.",
	
	"gandalf is a wizard and a member of the istari order. gandalf begins the quest by identifying the ring and is the first to say to frodo that it must be destroyed. he is also the leader of the fellowship.",
	
	"pippin and merry are young hobbits, and plays a major role as one of the companions of frodo baggins, in his quest to destroy the One Ring. both are members of the fellowship of the ring.",
	
	"gimli was a member of durin's folk who volunteered to accompany frodo baggins as a member of the fellowship of the ring on the quest to destroy the one ring. He was an honourable, wise, and stalwart warrior.",
	
	"boromir is a noble character who believes passionately in the greatness of his kingdom. boromir's great stamina and physical strength, made him a widely admired commander to the fellowship.",
	
	"is a magic ring that when put on gives the power of invisibility. it was created by sauron the dark lord as part of his design to win domination over middle-earth"];
	
	
	var lotr = document.querySelector("#fellowship");
	var bg = document.querySelector("#bg");
	var select = document.querySelector("#list");
	var anchors = select.querySelectorAll("img");
	var desc = document.querySelector("#info");
	var person = document.querySelector("#actor");
	var char = document.querySelector("#char");
	//functions
	
	function swapProduct(evt){
		evt.preventDefault();
			
	bg.src="images/"+photos[evt.target.id]+".jpg";
	

	}
	
	function swapCast(evt){
		evt.preventDefault();
			
	lotr.src="images/"+cast[evt.target.id]+".png";
	
	}
	
	function swapDesc(evt){
		evt.preventDefault();
	desc.innerHTML = describe[evt.target.id];
	char.innerHTML = captions[evt.target.id];
	person.innerHTML = actor[evt.target.id];
	}
	
	
	
	
	//Listeners
	for(var j=0;j<anchors.length; j++){
		anchors[j].addEventListener("click", swapProduct, false);
	}
	
	for(var x=0;x<anchors.length; x++){
		anchors[x].addEventListener("click", swapCast, false);
	}
	
	for(var d=0;d<anchors.length; d++){
		anchors[d].addEventListener("click", swapDesc, false);
	}

	

	


})();