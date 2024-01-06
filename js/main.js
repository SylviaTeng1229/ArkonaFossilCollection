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
	var trilobite = document.getElementById("TRILOBITE");
	var brachiopod = document.getElementById("BRACHIOPOD");
	var coral = document.getElementById("CORAL");
	var bryozoan = document.getElementById("BRYOZOAN");
	var gastropod = document.getElementById("GASTROPOD");
	var cephalopod = document.getElementById("CEPHALOPOD");
	var crinoid = document.getElementById("CRINOID");
	var bivalve = document.getElementById("BIVALVE");
	var fish_material = document.getElementById("FISHMATERIAL");
	var microfossil = document.getElementById("MICROFOSSIL");
	var trace_fossil = document.getElementById("TRACEFOSSIL");
	var others = document.getElementById("OTHERS");
	var unknown_fossil = document.getElementById("UNKNOWNFOSSIL");
	
	// Content divs
	var trilobite_content = document.getElementById("TRILOBITE-CONTENT");
	var brachiopod_content = document.getElementById("BRACHIOPOD-CONTENT");
	var coral_content = document.getElementById("CORAL-CONTENT");
	var bryozoan_content = document.getElementById("BRYOZOAN-CONTENT");
	var gastropod_content = document.getElementById("GASTROPOD-CONTENT");
	var cephalopod_content = document.getElementById("CEPHALOPOD-CONTENT");
	var crinoid_content = document.getElementById("CRINOID-CONTENT");
	var bivalve_content = document.getElementById("BIVALVE-CONTENT");
	var fish_material_content = document.getElementById("FISHMATERIAL-CONTENT");
	var microfossil_content = document.getElementById("MICROFOSSIL-CONTENT");
	var trace_fossil_content = document.getElementById("TRACEFOSSIL-CONTENT");
	var others_content = document.getElementById("OTHERS-CONTENT");
	var unknown_fossil_content = document.getElementById("UNKNOWNFOSSIL-CONTENT");
	
	// Event listeners
	trilobite.addEventListener("click", function() {
		trilobite_content.style.display = "block";
		brachiopod_content.style.display = "none";
		coral_content.style.display = "none";
		bryozoan_content.style.display = "none";
		gastropod_content.style.display = "none";
		cephalopod_content.style.display = "none";
		crinoid_content.style.display = "none";
		bivalve_content.style.display = "none";
		fish_material_content.style.display = "none";
		microfossil_content.style.display = "none";
		trace_fossil_content.style.display = "none";
		others_content.style.display = "none";
		unknown_fossil_content.style.display = "none";
	});
	
	brachiopod.addEventListener("click", function() {
		trilobite_content.style.display = "none";
		brachiopod_content.style.display = "block";
		coral_content.style.display = "none";
		bryozoan_content.style.display = "none";
		gastropod_content.style.display = "none";
		cephalopod_content.style.display = "none";
		crinoid_content.style.display = "none";
		bivalve_content.style.display = "none";
		fish_material_content.style.display = "none";
		microfossil_content.style.display = "none";
		trace_fossil_content.style.display = "none";
		others_content.style.display = "none";
		unknown_fossil_content.style.display = "none";
	});
	
	coral.addEventListener("click", function() {
		trilobite_content.style.display = "none";
		brachiopod_content.style.display = "none";
		coral_content.style.display = "block";
		bryozoan_content.style.display = "none";
		gastropod_content.style.display = "none";
		cephalopod_content.style.display = "none";
		crinoid_content.style.display = "none";
		bivalve_content.style.display = "none";
		fish_material_content.style.display = "none";
		microfossil_content.style.display = "none";
		trace_fossil_content.style.display = "none";
		others_content.style.display = "none";
		unknown_fossil_content.style.display = "none";
	});
	
	bryozoan.addEventListener("click", function() {
		trilobite_content.style.display = "none";
		brachiopod_content.style.display = "none";
		coral_content.style.display = "none";
		bryozoan_content.style.display = "block";
		gastropod_content.style.display = "none";
		cephalopod_content.style.display = "none";
		crinoid_content.style.display = "none";
		bivalve_content.style.display = "none";
		fish_material_content.style.display = "none";
		microfossil_content.style.display = "none";
		trace_fossil_content.style.display = "none";
		others_content.style.display = "none";
		unknown_fossil_content.style.display = "none";
	});

	gastropod.addEventListener("click", function() {
		trilobite_content.style.display = "none";
		brachiopod_content.style.display = "none";
		coral_content.style.display = "none";
		bryozoan_content.style.display = "none";
		gastropod_content.style.display = "block";
		cephalopod_content.style.display = "none";
		crinoid_content.style.display = "none";
		bivalve_content.style.display = "none";
		fish_material_content.style.display = "none";
		microfossil_content.style.display = "none";
		trace_fossil_content.style.display = "none";
		others_content.style.display = "none";
		unknown_fossil_content.style.display = "none";
	});

	cephalopod.addEventListener("click", function() {
		trilobite_content.style.display = "none";
		brachiopod_content.style.display = "none";
		coral_content.style.display = "none";
		bryozoan_content.style.display = "none";
		gastropod_content.style.display = "none";
		cephalopod_content.style.display = "block";
		crinoid_content.style.display = "none";
		bivalve_content.style.display = "none";
		fish_material_content.style.display = "none";
		microfossil_content.style.display = "none";
		trace_fossil_content.style.display = "none";
		others_content.style.display = "none";
		unknown_fossil_content.style.display = "none";
	});
	
	crinoid.addEventListener("click", function() {
		trilobite_content.style.display = "none";
		brachiopod_content.style.display = "none";
		coral_content.style.display = "none";
		bryozoan_content.style.display = "none";
		gastropod_content.style.display = "none";
		cephalopod_content.style.display = "none";
		crinoid_content.style.display = "block";
		bivalve_content.style.display = "none";
		fish_material_content.style.display = "none";
		microfossil_content.style.display = "none";
		trace_fossil_content.style.display = "none";
		others_content.style.display = "none";
		unknown_fossil_content.style.display = "none";
	});
	
	bivalve.addEventListener("click", function() {
		trilobite_content.style.display = "none";
		brachiopod_content.style.display = "none";
		coral_content.style.display = "none";
		bryozoan_content.style.display = "none";
		gastropod_content.style.display = "none";
		cephalopod_content.style.display = "none";
		crinoid_content.style.display = "none";
		bivalve_content.style.display = "block";
		fish_material_content.style.display = "none";
		microfossil_content.style.display = "none";
		trace_fossil_content.style.display = "none";
		others_content.style.display = "none";
		unknown_fossil_content.style.display = "none";
	});
	
	fish_material.addEventListener("click", function() {
		trilobite_content.style.display = "none";
		brachiopod_content.style.display = "none";
		coral_content.style.display = "none";
		bryozoan_content.style.display = "none";
		gastropod_content.style.display = "none";
		cephalopod_content.style.display = "none";
		crinoid_content.style.display = "none";
		bivalve_content.style.display = "none";
		fish_material_content.style.display = "block";
		microfossil_content.style.display = "none";
		trace_fossil_content.style.display = "none";
		others_content.style.display = "none";
		unknown_fossil_content.style.display = "none";
	});

	microfossil.addEventListener("click", function() {
		trilobite_content.style.display = "none";
		brachiopod_content.style.display = "none";
		coral_content.style.display = "none";
		bryozoan_content.style.display = "none";
		gastropod_content.style.display = "none";
		cephalopod_content.style.display = "none";
		crinoid_content.style.display = "none";
		bivalve_content.style.display = "none";
		fish_material_content.style.display = "none";
		microfossil_content.style.display = "block";
		trace_fossil_content.style.display = "none";
		others_content.style.display = "none";
		unknown_fossil_content.style.display = "none";
	});
	
	trace_fossil.addEventListener("click", function() {
		trilobite_content.style.display = "none";
		brachiopod_content.style.display = "none";
		coral_content.style.display = "none";
		bryozoan_content.style.display = "none";
		gastropod_content.style.display = "none";
		cephalopod_content.style.display = "none";
		crinoid_content.style.display = "none";
		bivalve_content.style.display = "none";
		fish_material_content.style.display = "none";
		microfossil_content.style.display = "none";
		trace_fossil_content.style.display = "block";
		others_content.style.display = "none";
		unknown_fossil_content.style.display = "none";
	});

	others.addEventListener("click", function() {
		trilobite_content.style.display = "none";
		brachiopod_content.style.display = "none";
		coral_content.style.display = "none";
		bryozoan_content.style.display = "none";
		gastropod_content.style.display = "none";
		cephalopod_content.style.display = "none";
		crinoid_content.style.display = "none";
		bivalve_content.style.display = "none";
		fish_material_content.style.display = "none";
		microfossil_content.style.display = "none";
		trace_fossil_content.style.display = "none";
		others_content.style.display = "block";
		unknown_fossil_content.style.display = "none";
	});

	unknown_fossil.addEventListener("click", function() {
		trilobite_content.style.display = "none";
		brachiopod_content.style.display = "none";
		coral_content.style.display = "none";
		bryozoan_content.style.display = "none";
		gastropod_content.style.display = "none";;
		cephalopod_content.style.display = "none";
		crinoid_content.style.display = "none";
		bivalve_content.style.display = "none";
		fish_material_content.style.display = "none";
		microfossil_content.style.display = "none";
		trace_fossil_content.style.display = "none";
		others_content.style.display = "none";
		unknown_fossil_content.style.display = "block";
	});
});
