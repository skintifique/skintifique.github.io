let current_urlMILA = window.location.href ;
//////this vs: clean lang (several variables in the code)
//functions for MILA page
//the lines of code above and below are just for when the script is called externally. they need to be removed if plugged into the js theme again
if (current_urlMILA.includes("/166-mila")) {
//////show mila-166 version
 document.getElementById("milaJsVs").innerHTML = "THIS PAGE IS IN DEVELOPMENT / CETTE PAGE EST EN DEVELOPPEMENT 19" ;


//manage exclusion list
//
let ingredientsToExcludeValues = document.getElementById("ingredientsToExcludeValues").innerText ;
let riskgroupsExclusionListValues = document.getElementById("riskgroupsExclusionListValues").innerText ;
if ((ingredientsToExcludeValues.length === 0) || (ingredientsToExcludeValues === "ingredientsToExcludeValues") || (ingredientsToExcludeValues === "0")){
ingredientsToExcludeValues = "9999999" ;
}
if ((riskgroupsExclusionListValues.length === 0) || (riskgroupsExclusionListValues === "riskgroupsExclusionListValues") || (riskgroupsExclusionListValues === "0")){
riskgroupsExclusionListValues = "9999999" ;
}
const ingredientsToExcludeValues_arr = ingredientsToExcludeValues.split(",");
let ingredientsToExcludeValues_arr_str = JSON.stringify(ingredientsToExcludeValues_arr) ;
const riskgroupsExclusionListValues_arr = riskgroupsExclusionListValues.split(",");
let riskgroupsExclusionListValues_arr_str = JSON.stringify(riskgroupsExclusionListValues_arr) ;
let windowwidth = window.innerWidth;
let lang ;
if (current_url.includes('/fr/')) {
lang = "fr-fr";
} else {
lang = "en-us" ;
}

//function to select product and other options
document.body.addEventListener("click", function(selectProduct) {
let e = selectProduct.target ;
//let e_class = e.className ;
//if (e_class === "selectProduct") {
// actions when clicks on a various buttons inside the slider
if (e.id === "noneOfTheseFactors") {
// unselect any allergicToFactor that has been selected
let selectDiag_allergicToFactor = document.getElementsByClassName("selectDiag_allergicToFactor") ;
var sD1 ;
for (sD1 = 0; sD1 < selectDiag_allergicToFactor.length; sD1++) {
selectDiag_allergicToFactor[sD1].classList.remove("option_selectedAllergicToFactor") ;
}
//move to next slide
plusSlides() ;
}
if (e.classList.contains("confirm_slide_btn")) {
plusSlides() ;
}

//actions when user selects various options
if (e.classList.contains("accordion_info")) {
let info_elmt_class = "accordion_" + e.id ;
let info_elmts = document.getElementsByClassName(info_elmt_class) ;
var info_elmts0 ;
for (info_elmts0 = 0; info_elmts0 < info_elmts.length; info_elmts0++) {
info_elmts[info_elmts0].classList.toggle("showElement") ;
}
}
//manage style of reactive skin button on SkinType slide
if (e.id == "info_reactive_skin") {
document.getElementById("info_reactive_skin").href = "#textIntroReactiveSkin" ;
document.getElementById("info_reactive_skin").classList.add("option_selectedSkinType");
document.getElementById("skin_normal").classList.remove("option_selectedSkinType");
document.getElementById("skin_normally_sensitive").classList.remove("option_selectedSkinType");
};

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
//show all the accordion elements with the selectedOption class
//let accordionReco = document.getElementsByClassName("accordionReco") ;
//let c;
//for (c = 0; c < accordionReco.length; c++) {
//accordionReco[c].style.display = "block" ;
//}
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
const selectedConditions = [];
let conditions = document.getElementsByClassName("option_selectedCondition") ;
//if (conditions) {
var selCond;
for (selCond = 0; selCond < conditions.length; selCond++) {
let condition_id = conditions[selCond].id ;
let condition_name = condition_id.replace("condition_","") ;
selectedConditions.push(condition_name) ;
}
document.getElementById("selectedConditions").innerHTML = selectedConditions ;
localStorage.setItem("MILA_selectedConditions",selectedConditions) ;
//get all the selected allergicToFactors
const selectedAllergicToFactors = [];
let allergicToFactors = document.getElementsByClassName("option_selectedAllergicToFactor") ;
var s2;
for (s2 = 0; s2 < allergicToFactors.length; s2++) {
let allergicToFactors_id = allergicToFactors[s2].id ;
let allergicToFactors_name = allergicToFactors_id.replace("allergicToFactor_","") ;
selectedAllergicToFactors.push(allergicToFactors_name) ;
document.getElementById("selectedAllergicToFactors").innerHTML = selectedAllergicToFactors ;
}
//END get all the selected conditions
// START script to get all the selected SK ingredients to avoid
let ingredientsToAvoidOption = document.getElementById("ingredientsToAvoidOption").innerText ;
if (ingredientsToAvoidOption === "skIngredients") {
const ingredientsToExclude = [] ;
let displayedIngredientsList = document.getElementsByClassName("displayedIngredientsList") ;
var ing1;
for (ing1 = 0; ing1 < displayedIngredientsList.length; ing1++) {
let displayedIngredientsNodes = displayedIngredientsList[ing1].childNodes ;
var ing2 ;
for (ing2 = 0; ing2 < displayedIngredientsNodes.length; ing2++) {
let displayedIngredient = displayedIngredientsNodes[ing2] ;
let displayedIngredient_name = displayedIngredient.innerText ;
let displayedIngredientClass = displayedIngredient.className ;
if (displayedIngredientClass == "checked") {
ingredientsToExclude.push(displayedIngredient_name) ;
}
}
}
document.getElementById("ingredientsToExclude").innerHTML = ingredientsToExclude;
localStorage.setItem("MILA_ingredientsToExclude",ingredientsToExclude) ;
// get the values of the ingredients
const ingredientsToExcludeValues = [];
let skIngredientsReferences_from_front = document.getElementById("skIngredientsReferences").innerText ;
const skIngredientsReferences = JSON.parse(skIngredientsReferences_from_front) ;
let ing99 ;
for (ing99 = 0; ing99 < ingredientsToExclude.length; ing99++) {
let ingToExclude = ingredientsToExclude[ing99] ;
let ingValue = skIngredientsReferences[ingToExclude] ;
ingredientsToExcludeValues.push(ingValue) ;
}
document.getElementById("ingredientsToExcludeValues").innerText = ingredientsToExcludeValues ;
localStorage.setItem("MILA_ingredientsToExcludeValues",ingredientsToExcludeValues) ;
// END get the values of the ingredients
}
// END script to get all the selected ingredients to avoid
});

//script to validate and start cleaning the ingredient list
////////////////////////function startCleanIngrList(x) {
// 1- remove the special characters
////////////////////////let selectedIngredients_toclean = document.getElementById("selectedIngredientList").innerText;
////////////////////////let remove1 = selectedIngredients_toclean.replace(/§/g, "");
////////////////////////let remove2 = remove1.replace(/#/g, "");
////////////////////////let remove3 = remove2.replace(/\+/g, "");
////////////////////////let remove4 = remove3.replace(/\*/g, ""); ;
////////////////////////let selectedIngredients_tosplit = remove4 ;
// 2- create array using appropriate selector
////////////////////////const array_comma_space = selectedIngredients_tosplit.split(", ");
////////////////////////let count_comma_space = array_comma_space.length ;
//document.getElementById("comma_space").innerHTML = array_comma_space ;
//document.getElementById("count_comma_space").innerHTML = count_comma_space ;
////////////////////////const array_space_dash_space = selectedIngredients_tosplit.split(" - ");
////////////////////////let count_space_dash_space = array_space_dash_space.length ;
//document.getElementById("space_dash_space").innerHTML = array_space_dash_space ;
//document.getElementById("countength ;
//_space_dash_space").innerHTML = count_space_dash_space ;
////////////////////////const array_space_slash_space = selectedIngredients_tosplit.split(" / ");
////////////////////////let count_space_slash_space = array_space_slash_space.length ;
////////////////////////const array_space_bigdot_space = selectedIngredients_tosplit.split(" • ");
////////////////////////let count_space_bigdot_space = array_space_bigdot_space.length ;
////////////////////////let max = Math.max(count_comma_space, count_space_dash_space, count_space_slash_space, count_space_bigdot_space);
//document.getElementById("max").innerText = max ;
////////////////////////let selectedIngr_corr1 ;
////////////////////////if (max === count_comma_space) {
////////////////////////selectedIngr_corr1 = array_comma_space ;
////////////////////////} else if (max === count_space_dash_space) {
////////////////////////selectedIngr_corr1 = array_space_dash_space ;
////////////////////////} else if (max === count_space_slash_space) {
////////////////////////selectedIngr_corr1 = array_space_slash_space;
////////////////////////} else if (max === count_space_bigdot_space) {
////////////////////////selectedIngr_corr1 = array_space_bigdot_space;
////////////////////////}
//3 - trim the ingredients
////////////////////////const selectedIngr_corr2 = [] ;
////////////////////////var w;
////////////////////////for (w = 0; w < selectedIngr_corr1.length; w++) {
////////////////////////let ingr_corr1 = selectedIngr_corr1[w].trim() ;
////////////////////////selectedIngr_corr2.push(ingr_corr1) ;
////////////////////////}
//document.getElementById("selectedIngr_corr1").innerText = selectedIngr_corr2 ;
////////////////////////document.getElementById("selectedIngredientList").innerText = selectedIngr_corr2.join(", ") ;
//END script to validate ingredient list
////////////////////////}

//START function to open iframeMILA with appropriate url and parameters for selectedTopOption
////////////////////////document.getElementById("openMILAprofile").addEventListener("click", function () {setTimeout(openMILAprofile, 500)});
////////////////////////function openMILAprofile () {
////////////////////////document.getElementById("openMILAprofile").href = "#topMILA" ;
////////////////////////document.getElementById("selectedTopOption").innerText = "profileOption" ;
//hide iframeMILA and other elements
////////////////////////document.getElementsByClassName("iframeMILA")[0].style.display = "none" ;
//END hide all the elements that have been shown previously if user has used diagOption
////////////////////////document.getElementById("openMILAprofile").classList.add("option_selected1") ;
////////////////////////document.getElementById("diagOption").classList.remove("option_selected1") ;
//document.getElementsByClassName("accordionProfileGoMila")[0].style.display = "block" ;
////////////////////////openMILA ();
////////////////////////}
 
////////////////////////document.getElementById("openMILAdiag").addEventListener("click", function () {setTimeout(openMILA, 500)}) ;
 
////////////////////////function openMILA() {
////////////////////////let lang3 ;
////////////////////////if (current_url.includes("/en/")) {
////////////////////////lang3 = "en-us" ;
////////////////////////} else if (current_url.includes("/fr/")) {
////////////////////////lang3 = "fr-fr" ;
////////////////////////} else {
////////////////////////lang3 = "en-us" ;
////////////////////////}
////////////////////////let textAboveMILAiFrame ;
////////////////////////if (lang3 === "fr-fr") {
////////////////////////textAboveMILAiFrame = "Merci de patienter quelques secondes, le temps d'afficher le profil de sûreté" ;
////////////////////////} else {
////////////////////////textAboveMILAiFrame = "Please wait a few seconds for the safety profile to be displayed below" ;
////////////////////////}
////////////////////////document.getElementById("textAboveMILAiFrame").innerText = textAboveMILAiFrame ;
////////////////////////document.getElementById("textAboveMILAiFrame").style.display = "block" ;
////////////////////////let selectedTopOption = document.getElementById("selectedTopOption").innerText ;
////////////////////////let iframeMILA = document.getElementById("iframeMILA") ;
////////////////////////document.getElementsByClassName("iframeMILA")[0].style.display = "block" ;
////////////////////////document.getElementsByClassName("iframeMILA")[1].style.display = "block" ;
////////////////////////document.getElementsByClassName("iframeMILA")[2].style.display = "block" ;
////////////////////////let selectedProductName = document.getElementById("selectedProduct").innerText ;
////////////////////////let selectedIngredientList = document.getElementById("selectedIngredientList").innerText ;
//remove accents before encoding
////////////////////////let selectedIngredientList_cleaned = selectedIngredientList.normalize('NFD').replace(/[\u0300-\u036f]/g, "") ;
////////////////////////let str = "new_product_composition2=" + selectedIngredientList_cleaned ;
////////////////////////let ingredients_encoded = window.btoa(str);
////////////////////////if (selectedTopOption === "profileOption") {
////////////////////////document.getElementsByClassName("accordionProfileGoMila")[0].style.display = "block" ;
///////////////////////////iframeMILA.src = "https://flamingo.skintifique.me/v/RiU4fevditvb?dtype=profile&source_trigger=ext&lang=" + lang3 + "&product_name=" + selectedProductName + "&urlcode=" + ingredients_encoded ;
////////////////////////} else if ((selectedTopOption === "recoOption") || (selectedTopOption === "diagOption")) {
////////////////////////if (selectedTopOption === "diagOption") {
////////////////////////document.getElementsByClassName("accordionDiagGoMila")[0].style.display = "block" ;
////////////////////////} else if (selectedTopOption === "recoOption") {
////////////////////////document.getElementsByClassName("accordionRecoGoMila")[0].style.display = "block" ;
////////////////////////}
////////////////////////let selectedGender = document.getElementById("selectedGender").innerText ;
////////////////////////let selectedSkinType = document.getElementById("selectedSkinType").innerText ;
////////////////////////let selectedFrequency = document.getElementById("selectedFrequency").innerText ;
////////////////////////let selectedSkinArea = document.getElementById("selectedSkinArea").innerText ;
////////////////////////let selectedConditions = document.getElementById("selectedConditions").innerText ;
////////////////////////let ingredientsToExclude = document.getElementById("ingredientsToExcludeValues").innerText ;
////////////////////////let riskgroupsExclusionList = document.getElementById("riskgroupsExclusionListValues").innerText ;
////////////////////////if ((ingredientsToExclude.length === 0) || (ingredientsToExclude === "ingredientsToExcludeValues") || (ingredientsToExclude === "0")) {
////////////////////////ingredientsToExclude = "9999999" ;
////////////////////////}
////////////////////////if ((riskgroupsExclusionList.length === 0) || (riskgroupsExclusionList === "riskgroupsExclusionListValues") || (riskgroupsExclusionList === "0")) {
////////////////////////riskgroupsExclusionList = "9999999" ;
////////////////////////}
////////////////////////const ingredientsToExclude_arr = ingredientsToExclude.split(",");
////////////////////////let ingredientsToExclude_arr_str = JSON.stringify(ingredientsToExclude_arr) ;
////////////////////////const riskgroupsExclusionList_arr = riskgroupsExclusionList.split(",");
////////////////////////let riskgroupsExclusionList_arr_str = JSON.stringify(riskgroupsExclusionList_arr) ;
///////////////////////////iframeMILA.src = "https://flamingo.skintifique.me/v/RiU4fevditvb?dtype=diag&source_trigger=ext&product_name=" + selectedProductName + "&gender=" + selectedGender + "&skin_type=" + selectedSkinType + "&frequency=" + selectedFrequency + "&skin_area=" + selectedSkinArea + "&conditions=" + selectedConditions + "&lang=" + lang3 + "&ingredientsToExclude=" + ingredientsToExclude_arr_str + "&riskGroupsToExclude=" + riskgroupsExclusionList_arr_str + "&urlcode=" + ingredients_encoded ;

////////////////////////}
////////////////////////}
}
// END OF SCRIPT FOR MILA PAGE
