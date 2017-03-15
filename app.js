metProposal(1);

function metProposal(n) {
	var mpSlides = document.getElementsByClassName("text-slides");
	var arrows = document.getElementsByClassName("arrow-btn");
	
	if (n==1) {
		mpSlides[0].style.display = "block";
		mpSlides[0].className += " active";
		arrows[0].className += " active";
		mpSlides[1].style.display = "none";
		mpSlides[1].className = mpSlides[1].className.replace(" active","");
		arrows[1].className = arrows[1].className.replace(" active","");
	} else {
		mpSlides[1].style.display = "block";
		mpSlides[1].className += " active";
		arrows[1].className += " active";
		mpSlides[0].style.display = "none";
		mpSlides[0].className = mpSlides[0].className.replace(" active","");
		arrows[0].className = arrows[0].className.replace(" active","");
	}
}

function clickLodging() {
	
}