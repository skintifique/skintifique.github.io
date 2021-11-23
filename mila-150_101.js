//functions for MILA page
if ((current_url.includes("https://www.skintifique.me/shop/en/150-mila")) || (current_url.includes("https://www.skintifique.me/shop/fr/150-mila"))) {
//START script to include new_product_composition2 or composition_url into textarea
let urlParamsCurrentUrl = new URLSearchParams(current_url);
let ingredients_textarea = document.getElementById("ingredients_textarea") ;
let ingredients_for_textarea ;
if (ingredients_textarea) {
// parameter new_product_composition2 is from email share access
let new_product_composition2 = urlParamsCurrentUrl.get('new_product_composition2');
// parameter composition_url is from iOS Shortcuts access
let composition_url = urlParamsCurrentUrl.get('composition_url');
if (new_product_composition2) {
let compo1 = window.atob(new_product_composition2) ;
let compo2 = compo1.replace(/,"/g,", ");
let compo3 = compo2.replace(/",/g,",");
let compo4 = compo3.replace(/"/g,"");
ingredients_for_textarea = compo4 ;
document.getElementById("ingredients_textarea").innerText = ingredients_for_textarea ;
} else if (composition_url) {
ingredients_for_textarea = window.atob(composition_url) ;
//document.getElementById("ingredients_textarea").innerText = composition_url_decode ;
document.getElementById("ingredients_textarea").innerText = ingredients_for_textarea ;
}
}
//END script to include new_product_composition2 into textarea
//script to select text input in textarea box
document.getElementById("ingredients_textarea").onchange = function(){
document.getElementById("selectedProduct").innerHTML = "My List" ;
//let ingredients_textarea = document.getElementById("ingredients_textarea") ;
selectedIngredientList = ingredients_textarea.value ;
document.getElementById("ingredients_textarea").style.border = "5px solid #1895E2" ;
if (selectedIngredientList) {
document.getElementById("selectedIngredientList").innerHTML = selectedIngredientList ;
document.getElementById("selectedIngredientList").style.color = "#00b6e2" ;
startCleanIngrList(selectedIngredientList) ;
} else {
document.getElementById("selectedIngredientList").innerHTML = "There is no ingredient !"
document.getElementById("selectedIngredientList").style.color = "red" ;
}
};
//END script to select text input in textarea box
//function to select product and other options
document.body.addEventListener("click", function(selectProduct) {
let e = selectProduct.target ;
let e_class = e.className ;
if (e_class === "selectProduct") {
//if (e.classList.contains("selectProduct")) {
//reset all borders to default
let selectProduct = document.getElementsByClassName("selectProduct");
var i;
for (i = 0; i < selectProduct.length; i++) {
selectProduct[i].style.border = "none";
}
let selectedProduct = e.id ;
e.style.border = "5px solid #1895E2" ;
//get the ingredient list
let selectedIngredientList ;
//let product_designation ;
//switch (selectedProduct) {
if (selectedProduct === "anyList") {
//case "anyList" :
document.getElementById("selectedProduct").innerHTML = "My List" ;
let ingredients_textarea = document.getElementById("ingredients_textarea") ;
selectedIngredientList = ingredients_textarea.value ;
document.getElementById("ingredients_textarea").style.border = "5px solid #1895E2" ;
//break ;
} else {
let product_designation ;
if (selectedProduct === "HG150x1") {
//case "HG150x1" :
product_designation = "Hydrating Gel" ;
//break ;
//case "ML200x1" :
} else if (selectedProduct === "ML200x1") {
product_designation = "Moisturizing Lotion" ;
//break ;
//case "CL200x1" :
} else if (selectedProduct === "CL200x1") {
product_designation = "Cleanser Lotion" ;
//break ;
//case "PC40x1" :
} else if (selectedProduct === "PC20x1") {
product_designation = "Protective Cream" ;
//break ;
//default:
} else if (selectedProduct === "recoProduct1_img") {
//let selectedProduct_root = selectedProduct.replace("_img","");
//let selectedProduct_corr = selectedProduct_root.concat("or") ;
//selectedProduct = document.getElementById(selectedProduct_corr).innerText ;
product_designation = document.getElementById("recoProduct1_name").innerText ;
selectedProduct = document.getElementById("recoProduct1or").innerText ;
} else if (selectedProduct === "recoProduct2_img") {
product_designation = document.getElementById("recoProduct2_name").innerText ;
selectedProduct = document.getElementById("recoProduct2or").innerText ;
} else if (selectedProduct === "recoProduct3_img") {
product_designation = document.getElementById("recoProduct3_name").innerText ;
selectedProduct = document.getElementById("recoProduct3or").innerText ;
} else {
product_designation = selectedProduct ;
}
document.getElementById("selectedProduct").innerHTML = "Skintifique - " + product_designation ;
let selectedProduct_ingredients = selectedProduct.concat("_ingredients") ;
selectedIngredientList = document.getElementById(selectedProduct_ingredients).innerText ;
document.getElementById("ingredients_textarea").style.border = "2px solid #00b6e2" ;
}
if (selectedIngredientList) {
document.getElementById("selectedIngredientList").innerHTML = selectedIngredientList ;
document.getElementById("selectedIngredientList").style.color = "#00b6e2" ;
} else {
document.getElementById("selectedIngredientList").innerHTML = "There is no ingredient !"
document.getElementById("selectedIngredientList").style.color = "red" ;
}
startCleanIngrList(selectedIngredientList) ;
}
//script to select options
let selectedOption = e.id ;
// control the display of top options
if ((selectedOption === "recoOption") || (selectedOption === "profileOption") || (selectedOption === "diagOption")) {
//remove borders for all the top option buttons
document.getElementById("recoOption").style.border = "none";
document.getElementById("profileOption").style.border = "none";
document.getElementById("diagOption").style.border = "none";
//hide all accordion elements
let accordionElmt = document.getElementsByClassName("accordionElmt") ;
var j;
for (j = 0; j < accordionElmt.length; j++) {
accordionElmt[j].style.display = "none";
}
//highlight selectedOption and do the other stuff
switch (selectedOption) {
case "profileOption" :
document.getElementById(selectedOption).style.border = "5px solid #1895E2" ;
//hide the text under the GoAnalyse btn and hide the MILA analysis
iframeMILA.style.display = "none" ;
document.getElementById("textUnderMILAProfileBtn").style.display = "none" ;
//show all the accordion elements with the selectedOption class
let accordionProfile = document.getElementsByClassName("accordionProfile") ;
let i;
for (i = 0; i < accordionProfile.length; i++) {
accordionProfile[i].style.display = "block" ;
}
//store the selectedTopOption
document.getElementById("selectedTopOption").innerHTML = "profileOption" ;
break;
case "diagOption" :
document.getElementById(selectedOption).style.border = "5px solid #1895E2" ;
//hide the text under the GoAnalyse btn and hide the MILA analysis
iframeMILA.style.display = "none" ;
document.getElementById("textUnderMILAProfileBtn").style.display = "none" ;
//show all the accordion elements with the selectedOption class
let accordionDiag = document.getElementsByClassName("accordionDiag") ;
let b;
for (b = 0; b < accordionDiag.length; b++) {
accordionDiag[b].style.display = "block" ;
//document.getElementById("test1").innerHTML = "paoezru";
}
//store the selectedTopOption
document.getElementById("selectedTopOption").innerHTML = "diagOption" ;
break;
case "recoOption" :
document.getElementById(selectedOption).style.border = "5px solid #1895E2" ;
//hide the text under the GoAnalyse btn and hide the MILA analysis
iframeMILA.style.display = "none" ;
document.getElementById("textUnderMILAProfileBtn").style.display = "none" ;
//show all the accordion elements with the selectedOption class
let accordionReco = document.getElementsByClassName("accordionReco") ;
let c;
for (c = 0; c < accordionReco.length; c++) {
accordionReco[c].style.display = "block" ;
//document.getElementById("test1").innerHTML = "paoezru";
}
//store the selectedTopOption
document.getElementById("selectedTopOption").innerHTML = "recoOption" ;
break;
}
}
//options in recommendation section
let accordionSolution = document.getElementsByClassName("accordionSolution") ;
switch (selectedOption) {
case "product_type_solution" :
//display the buttons product_type
document.getElementById("product_type_moisturizer").style.border = "none" ;
document.getElementById("product_type_cleanser").style.border = "none" ;
document.getElementById("product_type_solution").style.border = "5px solid #1895E2" ;
//show the accordions relevant for product_type_solution
//let accordionSolution = document.getElementsByClassName("accordionSolution") ;
let c;
for (c = 0; c < accordionSolution.length; c++) {
accordionSolution[c].style.display = "block" ;
}
//other stuff to do
document.getElementById("selectedProductType").innerText = "solution" ;
break;
case "product_type_moisturizer" :
//display the buttons product_type
document.getElementById("product_type_moisturizer").style.border = "5px solid #1895E2" ;
document.getElementById("product_type_cleanser").style.border = "none" ;
document.getElementById("product_type_solution").style.border = "none" ;
//hide and reset the accordions solution
//let accordionSolution2 = document.getElementsByClassName("accordionSolution") ;
let d;
for (d = 0; d < accordionSolution.length; d++) {
accordionSolution[d].style.display = "none" ;
}
document.getElementById("selectedSolution").innerText = "none" ;
//other stuff to do
document.getElementById("selectedProductType").innerText = "moisturizer" ;
break;
case "product_type_cleanser" :
//display the buttons product_type
document.getElementById("product_type_moisturizer").style.border = "none" ;
document.getElementById("product_type_cleanser").style.border = "5px solid #1895E2" ;
document.getElementById("product_type_solution").style.border = "none" ;
//hide and reset the accordions solution
//let accordionSolution3 = document.getElementsByClassName("accordionSolution") ;
let f;
for (f = 0; f < accordionSolution.length; f++) {
accordionSolution[f].style.display = "none" ;
}
document.getElementById("selectedSolution").innerText = "none" ;
//other stuff to do
document.getElementById("selectedProductType").innerText = "cleanser" ;
break;
}
//options in recommendation section - solutions
let selectReco_solution = document.getElementsByClassName("selectReco_solution") ;
switch (selectedOption) {
case "solution_see_more" :
//reset all other selectReco_solution buttons to non selected display
let s00;
for (s00 = 0; s00 < selectReco_solution.length; s00++) {
selectReco_solution[s00].style.border = "none" ;
}
//do other stuff
document.getElementById("solution_see_more").style.border = "5px solid #1895E2" ;
document.getElementById("selectedSolution").innerText = "solution_see_more" ;
document.getElementsByClassName("accordionSolutionSeeMore")[0].style.display = "block" ;
break;
case "solution_no_concern" :
//reset all other selectReco_solution buttons to non selected display
let s0;
for (s0 = 0; s0 < selectReco_solution.length; s0++) {
selectReco_solution[s0].style.border = "none" ;
}
//do other stuff
document.getElementById("solution_no_concern").style.border = "5px solid #1895E2" ;
document.getElementById("selectedSolution").innerText = "no_concern" ;
document.getElementsByClassName("accordionSolutionSeeMore")[0].style.display = "none" ;
break;
case "solution_eczema" :
//reset all other selectReco_solution buttons to non selected display
let s1;
for (s1 = 0; s1 < selectReco_solution.length; s1++) {
selectReco_solution[s1].style.border = "none" ;
}
//do other stuff
document.getElementById("solution_eczema").style.border = "5px solid #1895E2" ;
document.getElementById("selectedSolution").innerText = "eczema" ;
document.getElementsByClassName("accordionSolutionSeeMore")[0].style.display = "none" ;
break;
case "solution_psoriasis" :
//reset all other selectReco_solution buttons to non selected display
let s2;
for (s2 = 0; s2 < selectReco_solution.length; s2++) {
selectReco_solution[s2].style.border = "none" ;
}
//do other stuff
document.getElementById("solution_psoriasis").style.border = "5px solid #1895E2" ;
document.getElementById("selectedSolution").innerText = "psoriasis" ;
document.getElementsByClassName("accordionSolutionSeeMore")[0].style.display = "none" ;
break;
case "solution_acne" :
//reset all other selectReco_solution buttons to non selected display
let s3;
for (s3 = 0; s3 < selectReco_solution.length; s3++) {
selectReco_solution[s3].style.border = "none" ;
}
//do other stuff
document.getElementById("solution_acne").style.border = "5px solid #1895E2" ;
document.getElementById("selectedSolution").innerText = "acne" ;
break;
case "solution_pregnancy" :
//reset all other selectReco_solution buttons to non selected display
let s4;
for (s4 = 0; s4 < selectReco_solution.length; s4++) {
selectReco_solution[s4].style.border = "none" ;
}
//do other stuff
document.getElementById("solution_pregnancy").style.border = "5px solid #1895E2" ;
document.getElementById("selectedSolution").innerText = "pregnancy" ;
break;
}
//END options in recommendation section - solutions
//END options in recommentation section
//options in diagnostic section
switch (selectedOption) {
// for gender
case "gender_female" :
document.getElementById("selectedGender").innerHTML = "female" ;
document.getElementById("gender_male").style.border = "none";
document.getElementById("gender_female").style.border = "5px solid #1895E2" ;
break;
case "gender_male" :
document.getElementById("selectedGender").innerHTML = "male" ;
document.getElementById("gender_male").style.border = "5px solid #1895E2" ;
document.getElementById("gender_female").style.border = "none" ;
break;
//}
// for skin type
case "skin_normal" :
document.getElementById("selectedSkinType").innerHTML = "normal" ;
document.getElementById("skin_normally_sensitive").style.border = "none";
document.getElementById("skin_reactive").style.border = "none";
document.getElementById("skin_normal").style.border = "5px solid #1895E2" ;
break ;
case "skin_normally_sensitive" :
document.getElementById("selectedSkinType").innerHTML = "normally_sensitive" ;
document.getElementById("skin_normally_sensitive").style.border = "5px solid #1895E2" ;
document.getElementById("skin_reactive").style.border = "none";
document.getElementById("skin_normal").style.border = "none" ;
break ;
case "skin_reactive" :
document.getElementById("selectedSkinType").innerHTML = "reactive" ;
document.getElementById("skin_normally_sensitive").style.border = "none" ;
document.getElementById("skin_reactive").style.border = "5px solid #1895E2" ;
document.getElementById("skin_normal").style.border = "none" ;
break ;
//}
// for frequency
case "frequency_rarely" :
document.getElementById("selectedFrequency").innerHTML = "rarely" ;
document.getElementById("frequency_rarely").style.border = "5px solid #1895E2";
document.getElementById("frequency_frequently").style.border = "none" ;
break ;
case "frequency_frequently" :
document.getElementById("selectedFrequency").innerHTML = "frequently" ;
document.getElementById("frequency_rarely").style.border = "none";
document.getElementById("frequency_frequently").style.border = "5px solid #1895E2" ;
break ;
//}
// for area
case "area_small" :
document.getElementById("selectedSkinArea").innerHTML = "small" ;
document.getElementById("area_small").style.border = "5px solid #1895E2";
document.getElementById("area_large_or_sensitive").style.border = "none" ;
break ;
case "area_large_or_sensitive" :
document.getElementById("selectedSkinArea").innerHTML = "large_or_sensitive" ;
document.getElementById("area_small").style.border = "none";
document.getElementById("area_large_or_sensitive").style.border = "5px solid #1895E2" ;
break ;
// for conditions
case "condition_no_concern" :
//document.getElementById("selectedConditions").innerHTML = "no_concern" ;
document.getElementById("condition_no_concern").style.border = "5px solid #1895E2" ;
document.getElementById("condition_pregnancy").classList.remove("btn_condition_selected") ;
document.getElementById("condition_eczema").classList.remove("btn_condition_selected") ;
document.getElementById("condition_acne").classList.remove("btn_condition_selected") ;
document.getElementById("condition_reactive").classList.remove("btn_condition_selected") ;
document.getElementById("condition_nickel_allergy").classList.remove("btn_condition_selected") ;
document.getElementById("condition_earth").classList.remove("btn_condition_selected") ;
document.getElementById("condition_aging").classList.remove("btn_condition_selected") ;
document.getElementById("selectedConditions").innerHTML = "no_concern" ;
break ;
case "condition_pregnancy" :
//document.getElementById("selectedConditions").innerHTML = "pregnancy" ;
document.getElementById("condition_no_concern").style.border = "none" ;
document.getElementById("condition_pregnancy").classList.toggle("btn_condition_selected") ;
break ;
case "condition_eczema" :
//document.getElementById("selectedConditions").innerHTML = "eczema" ;
document.getElementById("condition_no_concern").style.border = "none" ;
document.getElementById("condition_eczema").classList.toggle("btn_condition_selected") ;
break ;
case "condition_acne" :
//document.getElementById("selectedConditions").innerHTML = "acne" ;
document.getElementById("condition_no_concern").style.border = "none" ;
document.getElementById("condition_acne").classList.toggle("btn_condition_selected") ;
break ;
case "condition_reactive" :
//document.getElementById("selectedConditions").innerHTML = "reactive" ;
document.getElementById("condition_no_concern").style.border = "none" ;
document.getElementById("condition_reactive").classList.toggle("btn_condition_selected") ;
break ;
case "condition_nickel_allergy" :
//document.getElementById("selectedConditions").innerHTML = "nickel_allergy" ;
document.getElementById("condition_no_concern").style.border = "none" ;
document.getElementById("condition_nickel_allergy").classList.toggle("btn_condition_selected") ;
break ;
case "condition_earth" :
//document.getElementById("selectedConditions").innerHTML = "earth" ;
document.getElementById("condition_no_concern").style.border = "none" ;
document.getElementById("condition_earth").classList.toggle("btn_condition_selected") ;
break ;
case "condition_aging" :
//document.getElementById("selectedConditions").innerHTML = "earth" ;
document.getElementById("condition_no_concern").style.border = "none" ;
document.getElementById("condition_aging").classList.toggle("btn_condition_selected") ;
break ;
}
//get all the selected conditions
const selectedConditions = [];
let conditions = document.getElementsByClassName("btn_condition_selected") ;
//if (conditions) {
var s;
for (s = 0; s < conditions.length; s++) {
let condition_id = conditions[s].id ;
let condition_name = condition_id.replace("condition_","") ;
selectedConditions.push(condition_name) ;
document.getElementById("selectedConditions").innerHTML = selectedConditions ;
}
//END get all the selected conditions
});
//script to validate and start cleaning the ingredient list
function startCleanIngrList(x) {
// 1- remove the special characters
let selectedIngredients_toclean = document.getElementById("selectedIngredientList").innerText;
let remove1 = selectedIngredients_toclean.replace(/§/g, "");
let remove2 = remove1.replace(/#/g, "");
let remove3 = remove2.replace(/\+/g, "");
let remove4 = remove3.replace(/\*/g, ""); ;
let selectedIngredients_tosplit = remove4 ;
// 2- create array using appropriate selector
const array_comma_space = selectedIngredients_tosplit.split(", ");
let count_comma_space = array_comma_space.length ;
//document.getElementById("comma_space").innerHTML = array_comma_space ;
//document.getElementById("count_comma_space").innerHTML = count_comma_space ;
const array_space_dash_space = selectedIngredients_tosplit.split(" - ");
let count_space_dash_space = array_space_dash_space.length ;
//document.getElementById("space_dash_space").innerHTML = array_space_dash_space ;
//document.getElementById("count_space_dash_space").innerHTML = count_space_dash_space ;
const array_space_slash_space = selectedIngredients_tosplit.split(" / ");
let count_space_slash_space = array_space_slash_space.length ;
//document.getElementById("space_slash_space").innerHTML = array_space_slash_space ;
const array_space_bigdot_space = selectedIngredients_tosplit.split(" • ");
let count_space_bigdot_space = array_space_bigdot_space.length ;
//document.getElementById("space_bigdot_space").innerHTML = array_space_bigdot_space ;
//document.getElementById("count_space_bigdot_space").innerHTML = count_space_bigdot_space ;
let max = Math.max(count_comma_space, count_space_dash_space, count_space_slash_space, count_space_bigdot_space);
//document.getElementById("max").innerText = max ;
let selectedIngr_corr1 ;
if (max === count_comma_space) {
selectedIngr_corr1 = array_comma_space ;
} else if (max === count_space_dash_space) {
selectedIngr_corr1 = array_space_dash_space ;
} else if (max === count_space_slash_space) {
selectedIngr_corr1 = array_space_slash_space;
} else if (max === count_space_bigdot_space) {
selectedIngr_corr1 = array_space_bigdot_space;
}
//3 - trim the ingredients
const selectedIngr_corr2 = [] ;
var w;
for (w = 0; w < selectedIngr_corr1.length; w++) {
let ingr_corr1 = selectedIngr_corr1[w].trim() ;
selectedIngr_corr2.push(ingr_corr1) ;
}
//document.getElementById("selectedIngr_corr1").innerText = selectedIngr_corr2 ;
document.getElementById("selectedIngredientList").innerText = selectedIngr_corr2.join(", ") ;
//END script to validate ingredient list
}
//function to open iframeMILA with appropriate url and parameters for selectedTopOption
document.getElementById("openMILA").addEventListener("click", openMILA) ;
function openMILA() {
let lang ;
if (current_url.includes("/en/")) {
lang = "en-us" ;
} else if (current_url.includes("/fr/")) {
lang = "fr-fr" ;
} else {
lang = "en-us" ;
}
let textUnderMILAProfileBtn ;
if (lang === "fr-fr") {
textUnderMILAProfileBtn = "Merci de patientez quelques secondes, le temps de réaliser l'analyse et l'afficher ci-dessous" ;
} else {
textUnderMILAProfileBtn = "Please wait a few seconds for the profile to be completed and displayed below";
}
document.getELementById("textUnderMILAprofileBtn").innerText = textUnderMILAProfileBtn ;
let selectedTopOption = document.getElementById("selectedTopOption").innerText ;
let iframeMILA = document.getElementById("iframeMILA") ;
iframeMILA.style.display = "block" ;
let selectedProductName = document.getElementById("selectedProduct").innerText ;
let selectedIngredientList = document.getElementById("selectedIngredientList").innerText ;
//remove accents before encoding
let selectedIngredientList_cleaned = selectedIngredientList.normalize('NFD').replace(/[\u0300-\u036f]/g, "") ;
let str = "new_product_composition2=" + selectedIngredientList_cleaned ;
let ingredients_encoded = window.btoa(str);
if (selectedTopOption === "profileOption") {
iframeMILA.src = "https://flamingo.skintifique.me/v/RiU4fevditvb?type=profile&source_trigger=ext&lang=" + lang + "&urlcode=" + ingredients_encoded ;
} else if (selectedTopOption === "diagOption") {
let selectedGender = document.getElementById("selectedGender").innerText ;
let selectedSkinType = document.getElementById("selectedSkinType").innerText ;
let selectedFrequency = document.getElementById("selectedFrequency").innerText ;
let selectedSkinArea = document.getElementById("selectedSkinArea").innerText ;
let selectedConditions = document.getElementById("selectedConditions").innerText ;
iframeMILA.src = "https://flamingo.skintifique.me/v/RiU4fevditvb?type=diag&source_trigger=ext&gender=" + selectedGender + "&skin_type=" + selectedSkinType + "&frequency=" + selectedFrequency + "&skin_area=" + selectedSkinArea + "&conditions=" + selectedConditions + "&lang=" + lang + "&urlcode=" + ingredients_encoded ;
//the 2 lines of code below are expected to set the height of the iframe to the content inside. The inline style of the iframe may need to be removed + the height of the inside content may need to be adapted
////iframeMILA.onload = function(){
////iframeMILA.style.height = iframeMILA.contentWindow.document.body.scrollHeight + 'px';
////}
} else if (selectedTopOption === "recoOption") {
let selectedGender = document.getElementById("selectedGender").innerText ;
let selectedSkinType = document.getElementById("selectedSkinType").innerText ;
let selectedFrequency = "potentially frequently" ;
let selectedSkinArea = "any part of your skin (except mucosal areas)" ;
let selectedConditions = document.getElementById("selectedConditions").innerText ;
iframeMILA.src = "https://flamingo.skintifique.me/v/RiU4fevditvb?type=diag&source_trigger=ext&product_name=" + selectedProductName + "&gender=" + selectedGender + "&skin_type=" + selectedSkinType + "&frequency=" + selectedFrequency + "&skin_area=" + selectedSkinArea + "&conditions=" + selectedConditions + "&lang=" + lang + "&urlcode=" + ingredients_encoded ;
//the 2 lines of code below are expected to set the height of the iframe to the content inside. The inline style of the iframe may need to be removed + the height of the inside content may need to be adapted
///iframeMILA.onload = function(){
///iframeMILA.style.height = iframeMILA.contentWindow.document.body.scrollHeight + 'px';
///}
}
}
}
//actions when button openMILArecoSKproduct is clicked
document.getElementById("openMILArecoSKproduct").addEventListener("click", openMILArecoSKproduct) ;
function openMILArecoSKproduct() {
//display the appropriate accordions
let accordionRecoResults = document.getElementsByClassName("accordionRecoResults") ;
var m ;
for (m = 0; m < accordionRecoResults.length; m++) {
accordionRecoResults[m].style.display = "block" ;
}
let selectedProductType = document.getElementById("selectedProductType").innerText ;
let selectedSolution = document.getElementById("selectedSolution").innerText ;
let selectedSearch = selectedProductType + "-" + selectedSolution ;
document.getElementById("selectedSearch").innerText = selectedSearch ;
let recoProduct1 ;
let recoProduct2 ;
let recoProduct3 ;
//select the appropriate products based on user input
switch (selectedSearch) {
case "moisturizer-none" :
recoProduct1 = "HG150x1";
recoProduct2 = "ML200x1";
recoProduct3 = "HG150x3";
break ;
case "cleanser-none" :
recoProduct1 = "CL200x1";
recoProduct2 = "CL200x3";
recoProduct3 = "ML200x1";
break ;
case "solution-eczema" :
recoProduct1 = "ECZE_body_pack";
recoProduct2 = "ECZE_face_pack";
recoProduct3 = "HG150x1";
break ;
case "solution-psoriasis" :
recoProduct1 = "PSO_body_pack";
recoProduct2 = "PSO_face_pack";
recoProduct3 = "HG150x1";
break ;
case "solution-acne" :
recoProduct1 = "ACNE_pack";
recoProduct2 = "CL200x1";
recoProduct3 = "ML200x1";
break ;
case "solution-pregnancy" :
recoProduct1 = "MATE_pack";
recoProduct2 = "HG150x1";
recoProduct3 = "ML200x1";
break ;
}
//END select the appropriate products based on user input
//store the recoProductX for later use (eg when a recoProduct is later clicked and selected)
document.getElementById("recoProduct1or").innerText = recoProduct1 ;
document.getElementById("recoProduct2or").innerText = recoProduct2 ;
document.getElementById("recoProduct3or").innerText = recoProduct3 ;
//select appropriate names, images, urls etc for the recommended products
let lang ;
if (current_url.includes("/en/")) {
lang = "en-us" ;
} else if (current_url.includes("/fr/")) {
lang = "fr-fr" ;
} else {
lang = "en-us" ;
}
//get the correspondance data from the front
//get the product names
let productName_us_from_front = document.getElementById("productName_us").innerText ;
const productName_us = JSON.parse(productName_us_from_front) ;
let productName_fr_from_front = document.getElementById("productName_fr").innerText ;
const productName_fr = JSON.parse(productName_fr_from_front) ;
let recoProduct1_name ;
let recoProduct2_name ;
let recoProduct3_name ;
if (lang === "fr-fr") {
recoProduct1_name = productName_fr[recoProduct1];
recoProduct2_name = productName_fr[recoProduct2];
recoProduct3_name = productName_fr[recoProduct3];
} else {
recoProduct1_name = productName_us[recoProduct1];
recoProduct2_name = productName_us[recoProduct2];
recoProduct3_name = productName_us[recoProduct3];
}
document.getElementById("recoProduct1_name").innerText = recoProduct1_name;
document.getElementById("recoProduct2_name").innerText = recoProduct2_name;
document.getElementById("recoProduct3_name").innerText = recoProduct3_name;
//get the product images
let productImg_from_front = document.getElementById("productImg").innerText ;
const productImg = JSON.parse(productImg_from_front) ;
let recoProduct1_img = productImg[recoProduct1];
let recoProduct2_img = productImg[recoProduct2];
let recoProduct3_img = productImg[recoProduct3];
document.getElementById("recoProduct1_img").src = recoProduct1_img ;
document.getElementById("recoProduct2_img").src = recoProduct2_img ;
document.getElementById("recoProduct3_img").src = recoProduct3_img ;
//get the product ps id
let productPSID_from_front = document.getElementById("productPSID").innerText ;
const productPSID = JSON.parse(productPSID_from_front) ;
let recoProduct1_psid = productPSID[recoProduct1];
let recoProduct2_psid = productPSID[recoProduct2];
let recoProduct3_psid = productPSID[recoProduct3];
document.getElementsByName("id_product")[0].value = recoProduct1_psid ;
document.getElementsByName("id_product")[1].value = recoProduct2_psid ;
document.getElementsByName("id_product")[2].value = recoProduct3_psid ;
//get the product url
let productUrl_fr_from_front = document.getElementById("productUrl_fr").innerText ;
const productUrl_fr = JSON.parse(productUrl_fr_from_front) ;
let recoProduct1_url = productUrl_fr[recoProduct1];
let recoProduct2_url = productUrl_fr[recoProduct2];
let recoProduct3_url = productUrl_fr[recoProduct3];
document.getElementById("recoProduct1_url").href = recoProduct1_url ;
document.getElementById("recoProduct2_url").href = recoProduct2_url ;
document.getElementById("recoProduct3_url").href = recoProduct3_url ;
}
//END actions when button openMILArecoSKproduct is clicked
// -
// END OF SCRIPT FOR MILA PAGE
