var thisSlide = 0;
var picSlide = 0;
metProposal(thisSlide);
slideShow(picSlide);

document.onkeydown = function(evt) {
	evt = evt || window.event;
	var isEscape = false;
	if ("key" in evt) {
		isEscape = (evt.key == "Escape" || evt.key == "Esc");
	} else {
		isEscape = (evt.keyCode == 27);
	}
	if (isEscape) {
		closeOverlay('lodging', 'lodging-contents');
		closeOverlay('slideshow', 'slideshow-contents');
	}
};

function slideShow(n) {
	var pSlides = document.getElementsByClassName("slide-img");
	var maxSlides = pSlides.length;
	
	picSlide += n;
	if (picSlide >= maxSlides) {
		picSlide = 0;
	} else if (picSlide < 0) {
		picSlide = maxSlides-1;
	}

	//Hide All Slides
	for (var i = 0; i < maxSlides; i++) {
		pSlides[i].style.display = "none";
//		pSlides[i].className = pSlides[i].className.replace(" active","");
	}
	
	pSlides[picSlide].style.display = "inline-block";
//	pSlides[picSlides].className += " active";
}

function metProposal(n) {
	var mpSlides = document.getElementsByClassName("text-slides");
	var maxSlides = mpSlides.length;
	
	thisSlide += n;
	if (thisSlide >= maxSlides) {
		thisSlide = 0;
	} else if (thisSlide < 0) {
		thisSlide = maxSlides-1;
	}

	//Hide All Slides
	for (var i = 0; i < maxSlides; i++) {
		mpSlides[i].style.display = "none";
		mpSlides[i].className = mpSlides[i].className.replace(" active","");
	}
	
	mpSlides[thisSlide].style.display = "block";
	mpSlides[thisSlide].className += " active";
	
//	document.getElementById("showThis").innerHTML = thisSlide + "/" + maxSlides;

}

function openOverlay(item, content, n) {
	if (n>=0) {
		picSlide = 0;
		slideShow(n);
	}
	document.getElementById(content).style.display = "inline-block";
	document.getElementById(item).style.width = "100%";
	document.getElementById("escape").style.display = "block";
}

function closeOverlay(item, content) {
	document.getElementById(content).style.display = "none";
	document.getElementById(item).style.width = "0%";
	document.getElementById("escape").style.display = "none";
}
