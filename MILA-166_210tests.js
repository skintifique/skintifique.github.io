let current_urlMILA = window.location.href ;
//////this vs: clean lang (several variables in the code)
//functions for MILA page
//the lines of code above and below are just for when the script is called externally. they need to be removed if plugged into the js theme again
if (current_urlMILA.includes("/166-mila")) {
//////show mila-166 version
 document.getElementById("milaJsVs").innerHTML = "THIS PAGE IS IN DEVELOPMENT / CETTE PAGE EST EN DEVELOPPEMENT 23" ;


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
//if (selectedOption.includes("_elmt")) {
if (selectedOption_class.contains("inside_option")) {
//let selectedOption_parent = document.getElementById(selectedOption).parentElement.id ;
let selectedOption_parent = e.parentElement.id ;
selectedOption = selectedOption_parent ;
}
//manage situations when user clicks on element that is a 1st child of an option
// control the display of top options
if ((selectedOption === "recoOption") || (selectedOption === "profileOption") || (selectedOption === "diagOption")) {
//rest the slideIndex
//slideIndex = 1;
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
//hide all accordion elements
let accordionElmt = document.getElementsByClassName("accordionElmt") ;
var j;
for (j = 0; j < accordionElmt.length; j++) {
accordionElmt[j].style.display = "none";
}
//hide iframeMILA and other elements
//document.getElementById("iframeMILA").style.display = "none" ;
document.getElementsByClassName("iframeMILA")[0].style.display = "none" ;
document.getElementsByClassName("iframeMILA")[1].style.display = "none" ;
document.getElementsByClassName("iframeMILA")[2].style.display = "none" ;
//show elements for the personal diag questions
document.getElementsByClassName("prevnextbuttons")[0].style.display = "block" ;
//highlight selectedOption and do the other stuff
switch (selectedOption) {

case "recoOption" :
//reset slideIndex
//slideIndex = 1;
//
document.getElementById(selectedOption).classList.add("topOption_selected") ;
document.getElementById("recoOption_button").style.opacity = "1" ;
document.getElementById("profileOption_button").style.opacity = "0.3" ;
//hide the text under the GoAnalyse btn and hide the MILA analysis
//iframeMILA.style.display = "none" ;
document.getElementById("textUnderMILArecoBtn").style.display = "none" ;

//show the top of the sliderfor the selectedOption class
document.getElementsByClassName("accordionReco")[0].style.display = "block" ;
document.getElementsByClassName("accordionReco")[1].style.display = "block" ;
document.getElementsByClassName("accordionReco")[2].style.display = "block" ;
document.getElementsByClassName("accordionReco")[3].style.display = "block" ;
//show the first slide for the selectedOption class and reset the slideIndex
var slideIndex = 1;
document.getElementsByClassName("slideReco")[0].style.display = "block" ;
//replace recoOptionText1 by recoOptionText2
document.getElementById("recoOptionText1").style.display = "none" ;
document.getElementById("recoOptionText2").style.display = "block" ;
//store the selectedTopOption
document.getElementById("selectedTopOption").innerHTML = "recoOption" ;
break;
}
}

//ENDoptions in ingredient slide
//options in recommendation section
let accordionSolution = document.getElementsByClassName("accordionSolution") ;
let diag_solution = document.getElementsByClassName("diag_solution") ;
 let diag_moisturizer = document.getElementsByClassName("diag_moisturizer") ;
 let diag_cleanser = document.getElementsByClassName("diag_cleanser") ;

//select condition_nickel if user is reactive to pollution, shoes, jewelry etc
let allergicToFactor_pollution_classList = document.getElementById("allergicToFactor_pollution").classList ;
let allergicToFactor_jewelry_classList = document.getElementById("allergicToFactor_jewelry").classList ;
let allergicToFactor_leather_classList = document.getElementById("allergicToFactor_leather").classList ;
let allergicToFactor_construction_classList = document.getElementById("allergicToFactor_construction_material").classList ;
if ((allergicToFactor_pollution_classList.contains("option_selectedAllergicToFactor")) || (allergicToFactor_jewelry_classList.contains("option_selectedAllergicToFactor")) || (allergicToFactor_leather_classList.contains("option_selectedAllergicToFactor")) || (allergicToFactor_construction_classList.contains("option_selectedAllergicToFactor"))) {
document.getElementById("condition_nickel_allergy").classList.add("option_selectedCondition") ;
}
//get all the selected conditions
////////////////const selectedConditions = [];
////////////////let conditions = document.getElementsByClassName("option_selectedCondition") ;
//if (conditions) {
////////////////var selCond;
////////////////for (selCond = 0; selCond < conditions.length; selCond++) {
////////////////let condition_id = conditions[selCond].id ;
////////////////let condition_name = condition_id.replace("condition_","") ;
////////////////selectedConditions.push(condition_name) ;
////////////////}
////////////////document.getElementById("selectedConditions").innerHTML = selectedConditions ;
////////////////localStorage.setItem("MILA_selectedConditions",selectedConditions) ;
//get all the selected allergicToFactors
////////////////const selectedAllergicToFactors = [];
////////////////let allergicToFactors = document.getElementsByClassName("option_selectedAllergicToFactor") ;
////////////////var s2;
////////////////for (s2 = 0; s2 < allergicToFactors.length; s2++) {
////////////////let allergicToFactors_id = allergicToFactors[s2].id ;
////////////////let allergicToFactors_name = allergicToFactors_id.replace("allergicToFactor_","") ;
////////////////selectedAllergicToFactors.push(allergicToFactors_name) ;
////////////////document.getElementById("selectedAllergicToFactors").innerHTML = selectedAllergicToFactors ;
////////////////}
//END get all the selected conditions
});
}
// END OF SCRIPT FOR MILA PAGE
