(function(){
	initConfig();
}());

function initConfig(){
	var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	document.body.style.height = h + "px";	
	var that = this;
	
	window.h = h;
	window.w = w;
	
	var xhr= new XMLHttpRequest();
	xhr.open('GET', '../templates/firstPage.html', true  );
	xhr.onreadystatechange= function() {
		if (this.readyState!==4) return;
		if (this.status!==200) return; // or whatever error handling you want
		that.mainPage = this.responseText;
		document.body.innerHTML= this.responseText;
	};
	xhr.send();
	
	var xhr= new XMLHttpRequest();
	xhr.open('GET', '../templates/secondPage.html', true );
	xhr.onreadystatechange= function() {
		if (this.readyState!==4) return;
		if (this.status!==200) return; // or whatever error handling you want
		that.secondPage = this.responseText;
	};
	xhr.send();
	
	
	var xhr= new XMLHttpRequest();
	xhr.open('GET', '../templates/thirdPage.html', true  );
	xhr.onreadystatechange= function() {
		if (this.readyState!==4) return;
		if (this.status!==200) return; // or whatever error handling you want
		that.thirdPage = this.responseText;
	};
	xhr.send();
	window.addEventListener('hashchange' , locationChange2);
}

function locationChange2(data){
	document.body.innerHTML= "";
	
	var path = data.newURL;
	var redirectParam  = path.substring(path.indexOf('#')+1 , path.length);
	
	if(redirectParam == "secondPage"){
		document.body.innerHTML =  this.secondPage;
		document.getElementById('secondContainer').style.height = (window.h - 148) + "px";
		
	}else if(redirectParam == "thirdPage"){
		document.body.innerHTML =  thirdPage;
	}else{
		document.body.innerHTML =  mainPage;
	}
	
}