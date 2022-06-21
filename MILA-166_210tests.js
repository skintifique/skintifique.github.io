let current_urlMILA = window.location.href ;
//////this vs: clean lang (several variables in the code)
//functions for MILA page
//the lines of code above and below are just for when the script is called externally. they need to be removed if plugged into the js theme again
if (current_urlMILA.includes("/166-mila")) {
//////show mila-166 version
 document.getElementById("milaJsVs").innerHTML = "THIS PAGE IS IN DEVELOPMENT / CETTE PAGE EST EN DEVELOPPEMENT 29" ;


//function to select product and other options
document.body.addEventListener("click", function(selectProduct) {
let e = selectProduct.target ;

//script to select options
let selectedOption = e.id ;
let selectedOption_class = e.classList ;
//manage situations when user clicks on text below the top optoin images
if ((selectedOption === "recoOptionText00") || (selectedOption === "recoOptionText01") || (selectedOption === "recoOptionText02")){
selectedOption = "recoOption" ;
} else if ((selectedOption === "profileOptionText0") || (selectedOption === "profileOptionText01") || (selectedOption === "profileOptionText02")){
selectedOption = "profileOption" ;
}
//END manage situations when user clicks on text below the top optoin images
//manage situations when user clicks on element that is a 1st child of an option

if (selectedOption_class.contains("inside_option")) {
//let selectedOption_parent = document.getElementById(selectedOption).parentElement.id ;
let selectedOption_parent = e.parentElement.id ;
selectedOption = selectedOption_parent ;
}

// control the display of top options
if ((selectedOption === "recoOption") || (selectedOption === "profileOption") || (selectedOption === "diagOption")) {

//hide the text line under the topOptions as it is now not useful to the user
document.getElementById("textUnderTopOptions").style.display = "none" ;
//remove borders for all the top option buttons
document.getElementById("recoOption").classList.remove("topOption_selected") ;
document.getElementById("profileOption").classList.remove("topOption_selected") ;
document.getElementById("diagOption").classList.remove("option_selected1") ;
//reset all the OptionText1 to display block
document.getElementById("recoOptionText1").style.display = "block";
document.getElementById("diagOptionText1").style.display = "block";
document.getElementById("profileOptionText1").style.display = "block";
//reset all the OptionText2 to display none
document.getElementById("recoOptionText2").style.display = "none";
document.getElementById("diagOptionText2").style.display = "none";
document.getElementById("profileOptionText2").style.display = "none";
//reset all the textUnderMILAxxxBtn to display none
document.getElementById("textUnderMILAprofileBtn").style.display = "none";
document.getElementById("textUnderMILAdiagBtn").style.display = "none";
document.getElementById("textUnderMILArecoBtn").style.display = "none";

//highlight selectedOption and do the other stuff
////////////////////switch (selectedOption) {
////////////////////case "recoOption" :
////////////////////document.getElementById(selectedOption).classList.add("topOption_selected") ;
////////////////////document.getElementById("recoOption_button").style.opacity = "1" ;
////////////////////document.getElementById("profileOption_button").style.opacity = "0.3" ;
//hide the text under the GoAnalyse btn and hide the MILA analysis


//show the top of the sliderfor the selectedOption class
////////////////////document.getElementsByClassName("accordionReco")[0].style.display = "block" ;
////////////////////document.getElementsByClassName("accordionReco")[1].style.display = "block" ;
////////////////////document.getElementsByClassName("accordionReco")[2].style.display = "block" ;
////////////////////document.getElementsByClassName("accordionReco")[3].style.display = "block" ;
//show the first slide for the selectedOption class and reset the slideIndex

////////////////////document.getElementsByClassName("slideReco")[0].style.display = "block" ;
//replace recoOptionText1 by recoOptionText2
////////////////////document.getElementById("recoOptionText1").style.display = "none" ;
////////////////////document.getElementById("recoOptionText2").style.display = "block" ;
//store the selectedTopOption
////////////////////document.getElementById("selectedTopOption").innerHTML = "recoOption" ;
////////////////////break;
////////////////////}
}

});
}
// END OF SCRIPT FOR MILA PAGE
