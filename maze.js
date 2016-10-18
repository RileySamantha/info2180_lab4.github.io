"use strict";
window.onload = function(){
	
	var count=0;
	var touch= count;
	if (touch>0){
		document.getElementById("status").innerHTML= "You LOSE :( Move your mouse over the \"S\" to restart.";	
		alert("go!");
		};
	
	for (var i=0; i<5; i++){
	
	count= count+1;
	var code = document.getElementsByClassName("boundary")[i];
		
		// code.addEventListener("mouseover", function(){
		// code.setAttribute("class=boundary", "youlose");
		// });
		
		count= count+1;
		code.addEventListener("mouseover", function(){
		//code.className= "youlose";
		//var touch= 0;
		count= count+1;
		code.style.backgroundColor= "#ff8888";
		//touch +=1;
		
		document.getElementsByClassName("boundary")[0].style.backgroundColor= " #ff8888";
		document.getElementsByClassName("boundary")[1].style.backgroundColor= " #ff8888";
		document.getElementsByClassName("boundary")[2].style.backgroundColor= " #ff8888";
		document.getElementsByClassName("boundary")[3].style.backgroundColor= " #ff8888";
		document.getElementsByClassName("boundary")[4].style.backgroundColor= " #ff8888";
		});
		
		
			console.log(touch);
		if (touch > 0 ){
			document.getElementById("status").innerHTML= "You LOSE :( Move your mouse over the \"S\" to restart.";		
		};	
	};
	
	if (touch>1){
		document.getElementById("status").innerHTML= "You LOSE :( Move your mouse over the \"S\" to restart.";		
		};
	
		
	var win = document.getElementById("end");
		win.addEventListener("mouseover", function(){
			
			if (touch<1){
				document.getElementById("status").innerHTML= "You WIN!!! :D ";
				
			}
			
		});
	
	
	var start = document.getElementById("start");
		start.addEventListener("mouseover", function(){
			
			document.getElementById("status").innerHTML= "Move your mouse over the \"S\" to begin.";
			touch=0;
			document.getElementsByClassName("boundary")[0].style.backgroundColor= "#eeeeee";
			document.getElementsByClassName("boundary")[1].style.backgroundColor= "#eeeeee";
			document.getElementsByClassName("boundary")[2].style.backgroundColor= "#eeeeee";
			document.getElementsByClassName("boundary")[3].style.backgroundColor= "#eeeeee";
			document.getElementsByClassName("boundary")[4].style.backgroundColor= "#eeeeee";
		});
		
	
	var maze= document.getElementById("maze");
	
	
	
	document.addEventListener("mouseover", function(){
		
		if(maze.offsetLeft > event.clientX ){
			
			document.getElementsByClassName("boundary")[0].style.backgroundColor= " #ff8888";
			document.getElementsByClassName("boundary")[1].style.backgroundColor= " #ff8888";
			document.getElementsByClassName("boundary")[2].style.backgroundColor= " #ff8888";
			document.getElementsByClassName("boundary")[3].style.backgroundColor= " #ff8888";
			document.getElementsByClassName("boundary")[4].style.backgroundColor= " #ff8888";
		};
		
		if((maze.offsetLeft + maze.offsetWidth) < event.clientX ){
			
			document.getElementsByClassName("boundary")[0].style.backgroundColor= " #ff8888";
			document.getElementsByClassName("boundary")[1].style.backgroundColor= " #ff8888";
			document.getElementsByClassName("boundary")[2].style.backgroundColor= " #ff8888";
			document.getElementsByClassName("boundary")[3].style.backgroundColor= " #ff8888";
			document.getElementsByClassName("boundary")[4].style.backgroundColor= " #ff8888";
		};
		
		if((maze.offsetTop) > event.clientY ){
			
			document.getElementsByClassName("boundary")[0].style.backgroundColor= " #ff8888";
			document.getElementsByClassName("boundary")[1].style.backgroundColor= " #ff8888";
			document.getElementsByClassName("boundary")[2].style.backgroundColor= " #ff8888";
			document.getElementsByClassName("boundary")[3].style.backgroundColor= " #ff8888";
			document.getElementsByClassName("boundary")[4].style.backgroundColor= " #ff8888";
		};
		
		if((maze.offsetTop + maze.offsetHeight) < event.clientY ){
			
			document.getElementsByClassName("boundary")[0].style.backgroundColor= " #ff8888";
			document.getElementsByClassName("boundary")[1].style.backgroundColor= " #ff8888";
			document.getElementsByClassName("boundary")[2].style.backgroundColor= " #ff8888";
			document.getElementsByClassName("boundary")[3].style.backgroundColor= " #ff8888";
			document.getElementsByClassName("boundary")[4].style.backgroundColor= " #ff8888";
		};
	});
	
	
};





	