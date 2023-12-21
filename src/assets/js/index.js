function openTab(evt, tabBlock) {
	var i, x, tablinks;
	x = document.getElementsByClassName("tabBlock");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < x.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" w3-border-green", "");
	}
	document.getElementById(tabBlock).style.display = "block";
	evt.currentTarget.firstElementChild.className += " w3-border-green";
	if (tabBlock == 'announce') {
		document.getElementById("hdimg").style.display = "block";
	}
	else {
		document.getElementById("hdimg").style.display = "none";
	}


}

var myIndex = 0;
function carousel() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
		dots[i].className = dots[i].className.replace(" w3-my-orange", "");
	}
	myIndex++;
	if (myIndex > x.length) { myIndex = 1 }
	x[myIndex - 1].style.display = "block";
	dots[myIndex - 1].className += " w3-my-orange";
	slideIndex = myIndex;
	//setTimeout(carousel, 2500);
}
//carousel();
function carouselFlag(i) {
	if (i == 1) {
		//startSlide();
	}
	else {
		//stopSlide();
	}
}
var theInterval;

function startSlide() {
	//theInterval = setInterval(carousel, 3000);
}

function stopSlide() {
	clearInterval(theInterval);
}
//startSlide();
var slideIndex = 1;
//showDivs(slideIndex);

function plusDivs(n) {
//	showDivs(slideIndex += n);
}

function currentDiv(n) {
//	showDivs(slideIndex = n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	if (n > x.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = x.length }
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" w3-my-orange", "");
	}
	x[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " w3-my-orange";
	myIndex = slideIndex;
}

var currFFZoom = 1;
var currIEZoom = 100;
function normalfont() {
	currFFZoom = 1;
	currIEZoom = 100;
	$('body').css('MozTransform', 'scale(' + currFFZoom + ')');
	$('body').css('zoom', ' ' + currIEZoom + '%');
}

function incre() {
	var step = 0.02;
	currFFZoom += step;
	$('body').css('MozTransform', 'scale(' + currFFZoom + ')');
	var stepie = 5;
	currIEZoom += stepie;
	if (currIEZoom >= 115) {
		$('body').css('zoom', ' ' + 115 + '%');
		currIEZoom = 115;
	}
	else
		$('body').css('zoom', ' ' + currIEZoom + '%');
}

function decr() {
	var step = 0.02;
	currFFZoom -= step;
	$('body').css('MozTransform', 'scale(' + currFFZoom + ')');
	var stepie = 5;
	currIEZoom -= stepie;
	if (currIEZoom <= 85) {
		$('body').css('zoom', ' ' + 85 + '%');
		currIEZoom = 85;
	}
	else
		$('body').css('zoom', ' ' + currIEZoom + '%');
}

function showAnnounce(divId) {
	var x = document.getElementsByClassName("announceClass");
	document.getElementById("moreID").style.display = "none";
	document.getElementById("lessID").style.display = "none";
	document.getElementById(divId).style.display = "table-cell";
	//x[0].style.display="table-cell";
	for (i = 0; i < x.length; i++) {
		if (divId == 'moreID')
			x[i].style.display = "none";
		else
			x[i].style.display = "table";
	}
}