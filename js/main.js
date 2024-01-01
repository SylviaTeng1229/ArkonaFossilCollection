(function($) {

	"use strict";

	jQuery(document).ready(function( $ ){
		var fullHeight = function() {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		};
		fullHeight();
		$('#sidebarCollapse').on('click', function () {
			$('#sidebar').toggleClass('active');
		});
	});
})(jQuery);

document.addEventListener("DOMContentLoaded", function() {
	// Default content
	// document.getElementById("home-content").innerHTML = "Welcome to our website!";
	
	// Menu items
	var mond_cake = document.getElementById("MONDCAKE");
	var backed_food = document.getElementById("BACKEDFOOD");
	var breakfirst = document.getElementById("BREAKFIRST");
	var normal_cake = document.getElementById("NORMALCAKE");
	var sandwich = document.getElementById("SANDWICH");
	var cephalopod = document.getElementById("CEPHALOPOD");
	var crinoid = document.getElementById("CRINOID");
	var bivalve = document.getElementById("BIVALVE");
	var microfossil = document.getElementById("MICROFOSSIL");
	var others = document.getElementById("OTHERS");
	var unknown_fossil = document.getElementById("UNKNOWNFOSSIL");
	
	// Content divs
	var mond_cake_content = document.getElementById("MONDCAKE-CONTENT");
	var backed_food_content = document.getElementById("BACKEDFOOD-CONTENT");
	var breakfirst_content = document.getElementById("BREAKFIRST-CONTENT");
	var normal_cake_content = document.getElementById("NORMALCAKE-CONTENT");
	var sandwich_content = document.getElementById("SANDWICH-CONTENT");
	var cephalopod_content = document.getElementById("CEPHALOPOD-CONTENT");
	var crinoid_content = document.getElementById("CRINOID-CONTENT");
	var bivalve_content = document.getElementById("BIVALVE-CONTENT");
	var microfossil_content = document.getElementById("MICROFOSSIL-CONTENT");
	var others_content = document.getElementById("OTHERS-CONTENT");
	var unknown_fossil_content = document.getElementById("UNKNOWNFOSSIL-CONTENT");
	
	// Event listeners
	mond_cake.addEventListener("click", function() {
		mond_cake_content.style.display = "block";
		backed_food_content.style.display = "none";
		breakfirst_content.style.display = "none";
		normal_cake_content.style.display = "none";
		sandwich_content.style.display = "none";
		cephalopod_content.style.display = "none";
		crinoid_content.style.display = "none";
		bivalve_content.style.display = "none";
		microfossil_content.style.display = "none";
		others_content.style.display = "none";
		unknown_fossil_content.style.display = "none";
	});
	
	backed_food.addEventListener("click", function() {
		mond_cake_content.style.display = "none";
		backed_food_content.style.display = "block";
		breakfirst_content.style.display = "none";
		normal_cake_content.style.display = "none";
		sandwich_content.style.display = "none";
		cephalopod_content.style.display = "none";
		crinoid_content.style.display = "none";
		bivalve_content.style.display = "none";
		microfossil_content.style.display = "none";
		others_content.style.display = "none";
		unknown_fossil_content.style.display = "none";
	});
	
	breakfirst.addEventListener("click", function() {
		mond_cake_content.style.display = "none";
		backed_food_content.style.display = "none";
		breakfirst_content.style.display = "block";
		normal_cake_content.style.display = "none";
		sandwich_content.style.display = "none";
		cephalopod_content.style.display = "none";
		crinoid_content.style.display = "none";
		bivalve_content.style.display = "none";
		microfossil_content.style.display = "none";
		others_content.style.display = "none";
		unknown_fossil_content.style.display = "none";
	});
	
	normal_cake.addEventListener("click", function() {
		mond_cake_content.style.display = "none";
		backed_food_content.style.display = "none";
		breakfirst_content.style.display = "none";
		normal_cake_content.style.display = "block";
		sandwich_content.style.display = "none";
		cephalopod_content.style.display = "none";
		crinoid_content.style.display = "none";
		bivalve_content.style.display = "none";
		microfossil_content.style.display = "none";
		others_content.style.display = "none";
		unknown_fossil_content.style.display = "none";
	});

	sandwich.addEventListener("click", function() {
		mond_cake_content.style.display = "none";
		backed_food_content.style.display = "none";
		breakfirst_content.style.display = "none";
		normal_cake_content.style.display = "none";
		sandwich_content.style.display = "block";
		cephalopod_content.style.display = "none";
		crinoid_content.style.display = "none";
		bivalve_content.style.display = "none";
		microfossil_content.style.display = "none";
		others_content.style.display = "none";
		unknown_fossil_content.style.display = "none";
	});

	cephalopod.addEventListener("click", function() {
		mond_cake_content.style.display = "none";
		backed_food_content.style.display = "none";
		breakfirst_content.style.display = "none";
		normal_cake_content.style.display = "none";
		sandwich_content.style.display = "none";
		cephalopod_content.style.display = "block";
		crinoid_content.style.display = "none";
		bivalve_content.style.display = "none";
		microfossil_content.style.display = "none";
		others_content.style.display = "none";
		unknown_fossil_content.style.display = "none";
	});
	
	crinoid.addEventListener("click", function() {
		mond_cake_content.style.display = "none";
		backed_food_content.style.display = "none";
		breakfirst_content.style.display = "none";
		normal_cake_content.style.display = "none";
		sandwich_content.style.display = "none";
		cephalopod_content.style.display = "none";
		crinoid_content.style.display = "block";
		bivalve_content.style.display = "none";
		microfossil_content.style.display = "none";
		others_content.style.display = "none";
		unknown_fossil_content.style.display = "none";
	});
	
	bivalve.addEventListener("click", function() {
		mond_cake_content.style.display = "none";
		backed_food_content.style.display = "none";
		breakfirst_content.style.display = "none";
		normal_cake_content.style.display = "none";
		sandwich_content.style.display = "none";
		cephalopod_content.style.display = "none";
		crinoid_content.style.display = "none";
		bivalve_content.style.display = "block";
		microfossil_content.style.display = "none";
		others_content.style.display = "none";
		unknown_fossil_content.style.display = "none";
	});

	microfossil.addEventListener("click", function() {
		mond_cake_content.style.display = "none";
		backed_food_content.style.display = "none";
		breakfirst_content.style.display = "none";
		normal_cake_content.style.display = "none";
		sandwich_content.style.display = "none";
		cephalopod_content.style.display = "none";
		crinoid_content.style.display = "none";
		bivalve_content.style.display = "none";
		microfossil_content.style.display = "block";
		others_content.style.display = "none";
		unknown_fossil_content.style.display = "none";
	});

	others.addEventListener("click", function() {
		mond_cake_content.style.display = "none";
		backed_food_content.style.display = "none";
		breakfirst_content.style.display = "none";
		normal_cake_content.style.display = "none";
		sandwich_content.style.display = "none";
		cephalopod_content.style.display = "none";
		crinoid_content.style.display = "none";
		bivalve_content.style.display = "none";
		microfossil_content.style.display = "none";
		others_content.style.display = "block";
		unknown_fossil_content.style.display = "none";
	});

	unknown_fossil.addEventListener("click", function() {
		mond_cake_content.style.display = "none";
		backed_food_content.style.display = "none";
		breakfirst_content.style.display = "none";
		normal_cake_content.style.display = "none";
		sandwich_content.style.display = "none";
		cephalopod_content.style.display = "none";
		crinoid_content.style.display = "none";
		bivalve_content.style.display = "none";
		microfossil_content.style.display = "none";
		others_content.style.display = "none";
		unknown_fossil_content.style.display = "block";
	});
});
