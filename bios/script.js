$(document).ready(function () {
	var loc = window.location.href+'';
	if (loc.indexOf('http://')==0){
		window.location.href = loc.replace('http://','https://');	// https redirect
	}	
	
	$('body').keydown(function(e) {
		console.log(e.which)
		if(e.which == 38) { //up
			oldseg = seg;
			$(".visiblepanel table.clickable tr").each(function(){
				if($(this).hasClass('selected')) {
					seg = $(this);
				}
			});
			if ((seg != oldseg) && ($(seg).prev().length > 0)) {
				$(seg).removeClass('selected');
				$(seg).prev().addClass('selected');
			}
		}
		if(e.which == 40) { //down
			oldseg = seg;
			$(".visiblepanel table.clickable tr").each(function(){
				if($(this).hasClass('selected')) {
					seg = $(this);
				}
			});
			if ((seg != oldseg) && ($(seg).next().length > 0)) {
				$(seg).removeClass('selected');
				$(seg).next().addClass('selected');
			}
		}
		if(e.which == 37) { //left
			oldseg = seg;
			$("#mainMenu li").each(function(){
				if($(this).hasClass('selected')) {
					seg = $(this);
				}
			});
			if ((seg != oldseg) && ($(seg).prev().length > 0)) {
				$(seg).removeClass('selected');
				$(seg).prev().addClass('selected');
				
				$('.panel').removeClass('visiblepanel');
				stri = '.panel:nth-child(' + (Number($(seg).index())) + ')';
				console.log(stri);
				$(stri).addClass('visiblepanel');
				$("table.clickable tr").removeClass('selected');
				$(".visiblepanel table.clickable tr:nth-child(1)").addClass('selected');
			}
		}
		if(e.which == 39) { //right
			oldseg = seg;
			$("#mainMenu li").each(function(){
				if($(this).hasClass('selected')) {
					seg = $(this);
				}
			});
			if ((seg != oldseg) && ($(seg).next().length > 0)) {
				$(seg).removeClass('selected');
				$(seg).next().addClass('selected');

				$('.panel').removeClass('visiblepanel');
				stri = '.panel:nth-child(' + (Number($(seg).index())+2) + ')';
				console.log(stri);
				$(stri).addClass('visiblepanel');
				$("table.clickable tr").removeClass('selected');
				$(".visiblepanel table.clickable tr:nth-child(1)").addClass('selected');
			}			
		}
		if(e.which == 13) { //enter
			window.open("https://www.quenq.com/boot/","_self");
		}
		if(e.which == 112) { //F1
			
		}
		if(e.which == 27) { //Esc
			
		}
		if(e.which == 113) { //F2
			
		}
		if(e.which == 120) { //F9
			window.open("https://www.quenq.com/boot/","_self");
		}		
	});	
	setTime();	
});

var stri;
var seg;
var oldseg;

function setTime() {
    var d = new Date();
    var n = d.getHours();	document.getElementById("clockh").innerHTML = n;
	n = d.getMinutes();		document.getElementById("clockm").innerHTML = n;
	n = d.getSeconds();		document.getElementById("clocks").innerHTML = n;
	n = d.getDate();	    document.getElementById("dated").innerHTML = n;
	n = d.getMonth();	    document.getElementById("datem").innerHTML = n;
	n = d.getFullYear();	document.getElementById("datey").innerHTML = n;
	var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	n = days[d.getDay()];	document.getElementById("daten").innerHTML = n;
}
