function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";	
}

function myAccFunc(elementId,iconId) {
    var x = document.getElementById(elementId);
	var iconx = document.getElementById(iconId);
    if (x.className.indexOf("w3-show")==-1) {
        x.className+=" w3-show";
        //x.previousElementSibling.className += " w3-green";
    } else { 
        x.className=x.className.replace(" w3-show", "");
       // x.previousElementSibling.className = 
       // x.previousElementSibling.className.replace(" w3-green", "");
    }
	if(iconx.className=="fa fa-caret-left")
		iconx.className=iconx.className.replace("-left", "-down");
	else
		iconx.className=iconx.className.replace("-down", "-left");
	
}

function onClickLeftMenu(elementClass,index) {
    var x = document.getElementsByClassName(elementClass);	
    for (var i = 0; i < x.length; i++) {
      //x[i].style.display = "none";
	  x[i].className=x[i].className.replace(" w3-white", "");
	  //if(i<=11){
		  //x[i+12].className=x[i+12].className.replace(" w3-white", "");
	  //}
	  //var j=12+i;
	  //x[j].className=x[j].className.replace(" w3-white", "");
	  //x[i].className +=" w3-my-green";
    }
    x[index].className +=" w3-white";
	if(index<=11){
		x[12+index].className +=" w3-white";
	}
	else
		x[index-12].className +=" w3-white";
	//x[12+index].className +=" w3-white";
}

function showOtp(divID) {
	document.getElementById(divID).style.display = "block";
}