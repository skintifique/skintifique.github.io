let current_url = window.location.href ;
//functions for Flamingo ingredient comparisons with SK products : check archive on github
// -
//functions for MILA page
if ((current_url.includes("https://www.skintifique.me/shop/en/166-mila")) || (current_url.includes("https://www.skintifique.me/shop/fr/166-mila"))) {
//get the stored profile parameters and set up all the options
let selectedGender = localStorage.getItem("MILA_selectedGender");
let selectedSkinType = localStorage.getItem("MILA_selectedSkinType");
let selectedFrequency = localStorage.getItem("MILA_selectedFrequency");
let selectedSkinArea = localStorage.getItem("MILA_selectedSkinArea");
let selectedConditions = localStorage.getItem("MILA_selectedConditions");
let ingredientsToExclude = localStorage.getItem("MILA_ingredientsToExclude");
let ingredientsToExcludeValues = localStorage.getItem("MILA_ingredientsToExcludeValues");
let riskgroupsExclusionListLabels = localStorage.getItem("MILA_riskgroupsExclusionListLabels");
let riskgroupsExclusionListValues = localStorage.getItem("MILA_riskgroupsExclusionListValues");
if (selectedGender) {
document.getElementById("selectedGender").innerText = selectedGender ;
document.getElementById("gender_female").classList.remove("option_selectedGender") ;
document.getElementById("gender_male").classList.remove("option_selectedGender") ;
let selectedGender_id = "gender_" + selectedGender ;
document.getElementById(selectedGender_id).classList.add("option_selectedGender") ;
}
if (selectedSkinType) {
document.getElementById("selectedSkinType").innerText = selectedSkinType ;
document.getElementById("skin_normal").classList.remove("option_selectedSkinType") ;
document.getElementById("skin_normally_sensitive").classList.remove("option_selectedSkinType") ;
document.getElementById("skin_reactive").classList.remove("option_selectedSkinType") ;
let selectedSkinType_id = "skin_" + selectedSkinType ;
document.getElementById(selectedSkinType_id).classList.add("option_selectedSkinType") ;
}
//add the appropriate accordions if selectedSkinType = reactive
if (selectedSkinType === "reactive") {
document.getElementsByClassName("accordionAllergicToReco")[0].classList.add("slideReco") ;
document.getElementsByClassName("accordionAllergicToReco")[1].classList.add("slideReco") ;
//document.getElementsByClassName("accordionAllergicToSynthesis")[0].classList.add("slideReco") ;
document.getElementsByClassName("accordionAllergicToDiag")[0].classList.add("slideDiag") ;
document.getElementsByClassName("accordionAllergicToDiag")[1].classList.add("slideDiag") ;
document.getElementsByClassName("accordionAllergicToSynthesis")[0].classList.add("slideReco", "slideDiag") ;
//also select condition = reactive, by default
document.getElementById("condition_reactive").classList.add("option_selectedCondition") ;
}
if (selectedFrequency) {
document.getElementById("selectedFrequency").innerText = selectedFrequency ;
document.getElementById("frequency_rarely").classList.remove("option_selectedFrequency") ;
document.getElementById("frequency_frequently").classList.remove("option_selectedFrequency") ;
let selectedFrequency_id = "frequency_" + selectedFrequency ;
document.getElementById(selectedFrequency_id).classList.add("option_selectedFrequency") ;
}
if (selectedSkinArea) {
document.getElementById("selectedSkinArea").innerText = selectedSkinArea ;
document.getElementById("area_small").classList.remove("option_selectedArea") ;
document.getElementById("area_large_or_sensitive").classList.remove("option_selectedArea") ;
let selectedSkinArea_id = "area_" + selectedSkinArea ;
document.getElementById(selectedSkinArea_id).classList.add("option_selectedArea") ;
}
if (selectedConditions) {
document.getElementById("selectedConditions").innerText = selectedConditions ;
// reset all diag_condition buttons to zero (Note: this may not be necessary)
let conditions = document.getElementsByClassName("diag_condition") ;
var c99;
for (c99 = 0; c99 < conditions.length; c99++) {
conditions[c99].classList.remove("option_selectedCondition");
}
if (selectedConditions.includes("no_concern")) {
document.getElementById("condition_no_concern").classList.add("option_selectedCondition") ;
}
if (selectedConditions.includes("pregnancy")) {
document.getElementById("condition_pregnancy").classList.add("option_selectedCondition") ;
}
if (selectedConditions.includes("eczema")) {
document.getElementById("condition_eczema").classList.add("option_selectedCondition") ;
}
if (selectedConditions.includes("acne")) {
document.getElementById("condition_acne").classList.add("option_selectedCondition") ;
}
if ((selectedConditions.includes("reactive")) || (selectedSkinType === "reactive")) {
document.getElementById("condition_reactive").classList.add("option_selectedCondition") ;
}
if (selectedConditions.includes("nickel_allergy")) {
document.getElementById("condition_nickel_allergy").classList.add("option_selectedCondition") ;
}
if (selectedConditions.includes("earth")) {
document.getElementById("condition_earth").classList.add("option_selectedCondition") ;
}
if (selectedConditions.includes("aging")) {
document.getElementById("condition_aging").classList.add("option_selectedCondition") ;
}
}
if (ingredientsToExclude) {
document.getElementById("ingredientsToExclude").innerText = ingredientsToExclude ;
}
if (ingredientsToExcludeValues) {
document.getElementById("ingredientsToExcludeValues").innerText = ingredientsToExcludeValues ;
}
if (riskgroupsExclusionListLabels) {
document.getElementById("riskgroupsExclusionListLabels").innerText = riskgroupsExclusionListLabels ;
}
if (riskgroupsExclusionListValues) {
document.getElementById("riskgroupsExclusionListValues").innerText = riskgroupsExclusionListValues ;
}
//END get the stored profile parameters and set up all the options
//manage the slider
document.getElementById("prev").addEventListener("click",minusSlides) ;
document.getElementById("next").addEventListener("click",plusSlides) ;
//
var slideIndex = 1;
//showSlides(slideIndex);
function plusSlides() {
showSlides(slideIndex += 1) ;
}
function minusSlides() {
showSlides(slideIndex += -1) ;
}
function currentSlide(n) {
showSlides(slideIndex = n);
}
function showSlides(n) {
let selectedTopOption0 = document.getElementById("selectedTopOption").innerText ;
let accordionTopOption ;
let mySlides ;
switch (selectedTopOption0) {
case "recoOption" :
accordionTopOption = "accordionReco" ;
mySlides = "slideReco" ;
break ;
case "profileOption" :
accordionTopOption = "accordionProfile" ;
mySlides = "slideProfile" ;
break ;
case "diagOption" :
accordionTopOption = "accordionDiag" ;
mySlides = "slideDiag" ;
break ;
}
let slides = document.getElementsByClassName(mySlides);
if (n == "1") {
document.getElementById("prev").style.display = "none" ;
} else {
document.getElementById("prev").style.display = "block" ;
}
if (n === slides.length) {
document.getElementById("next").style.display = "none" ;
} else {
document.getElementById("next").style.display = "block" ;
}
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
var i;
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
//hide all the accordionElmts
let accordionElmt0 = document.getElementsByClassName("accordionElmt");
var elmt0;
for (elmt0 = 0; elmt0 < accordionElmt0.length; elmt0++) {
accordionElmt0[elmt0].style.display = "none";
}
//show all the top elements for the diag
//let selectedTopOption0 = document.getElementById("selectedTopOption").innerText ;
document.getElementsByClassName(accordionTopOption)[0].style.display = "block" ;
document.getElementsByClassName(accordionTopOption)[1].style.display = "block" ;
document.getElementsByClassName(accordionTopOption)[2].style.display = "block" ;
document.getElementsByClassName(accordionTopOption)[3].style.display = "block" ;
//manage visibility of button goToExcludedIngredients
let thereAreExcludedIngredients = document.getElementById("ingredientsToExclude").innerText ;
if (thereAreExcludedIngredients.includes("aucun ingrédient")) {
document.getElementById("goToExcludedIngredients").style.display = "none" ;
} else {
document.getElementById("goToExcludedIngredients").style.display = "block" ;
}
//END manage visibility of button goToExcludedIngredients
slides[slideIndex-1].style.display = "block";
setTimeout(function() {
var iframe = document.getElementById("iframeGetEmailMILA");
iframe.style.background = "white";
// iframe.contentWindow.document.body.style.backgroundColor = "white";
}, 1000);
//document.getElementById("iframeGetEmailMILA").style.background = "white";
}
//
//END manage the slider
// if click backToIngredientSelectors 'on excluded ingredient synthesis slide, then go back to appropriate slide
document.getElementById("backToIngredientSelectors").addEventListener("click",function() {
minusSlides();
});
// if click inside ingredient textarea, then unselect this ingredient list
document.getElementById("ingredients_textarea").addEventListener("click",function() { document.getElementById("anyList").style.border = "2px solid #1895E2" ;
document.getElementById("anyList").classList.remove("option_selected1") ;
document.getElementById("anyList_text").style.display = "block" ;
document.getElementById("anyList_icon").style.display = "none" ;
document.getElementById("ingredients_textarea").style.border = "1px solid #1895E2" ;
});
// END if click inside ingredient textarea, then unselect this ingredient list
//manage button goToExcludedIngredients
//let thereAreExcludedIngredients = document.getElementById("ingredientsToExclude").innerText ;
//document.getElementById("test2").innerText = thereAreExcludedIngredients ;
//if (thereAreExcludedIngredients.includes("aucun ingrédient")) {
//document.getElementById("goToExcludedIngredients").style.display = "none" ;
//}
document.getElementById("goToExcludedIngredients").addEventListener("click",goToExcludedIngredients) ;
function goToExcludedIngredients () {
plusSlides() ;
}
//show-hide accordionSKingredients
document.getElementById("showHideSKingredients").addEventListener("click",showHideSKingredients) ;
function showHideSKingredients () {
document.getElementById("showHideiframeExclusionList").classList.remove("option_selected1") ;
document.getElementById("iframeExclusionList").style.display = "none" ;
document.getElementsByClassName("accordionExclusionList")[0].style.display = "none" ;
let accordionSKingredients = document.getElementsByClassName("accordionSKingredients") ;
let accordionSKingredients_situation = accordionSKingredients[0].style.display ;
if (accordionSKingredients_situation == "none") {
accordionSKingredients[0].style.display = "block" ;
document.getElementById("showHideSKingredients").classList.add("option_selected1") ;
document.getElementById("ingredientsToAvoidOption").innerText = "skIngredients" ;
} else if (accordionSKingredients_situation == "block") {
accordionSKingredients[0].style.display = "none" ;
document.getElementById("showHideSKingredients").classList.remove("option_selected1");
document.getElementById("ingredientsToAvoidOption").innerText = "none" ;
} else {
accordionSKingredients[0].style.display = "block" ;
document.getElementById("showHideSKingredients").classList.add("option_selected1") ;
document.getElementById("ingredientsToAvoidOption").innerText = "skIngredients" ;
}
}
//END show-hide accordionSKingredients
//show-hide iframeExclusionList
document.getElementById("showHideiframeExclusionList").addEventListener("click",showHideiframeExclusionList) ;
function showHideiframeExclusionList () {
//document.getElementById("showHideSKingredients").style.border = "1px solid grey" ;
document.getElementById("showHideSKingredients").classList.remove("option_selected1") ;
document.getElementsByClassName("accordionSKingredients")[0].style.display = "none" ;
document.getElementsByClassName("accordionExclusionList")[0].style.display = "block" ;
let iframeExclusionList = document.getElementById("iframeExclusionList") ;
let iframeExclusionList_situation = iframeExclusionList.style.display ;
if (iframeExclusionList_situation == "none") {
iframeExclusionList.style.display = "block" ;
//document.getElementById("showHideiframeExclusionList").style.border = "5px solid #1895E2" ;
document.getElementById("showHideiframeExclusionList").classList.add("option_selected1") ;
document.getElementById("ingredientsToAvoidOption").innerText = "allIngredients" ;
} else if (iframeExclusionList_situation == "block") {
iframeExclusionList.style.display = "none" ;
//document.getElementById("showHideiframeExclusionList").style.border = "1px solid grey" ;
document.getElementById("showHideiframeExclusionList").classList.remove("option_selected1") ;
document.getElementById("ingredientsToAvoidOption").innerText = "none" ;
} else {
iframeExclusionList.style.display = "block" ;
//document.getElementById("showHideiframeExclusionList").style.border = "5px solid #1895E2" ;
document.getElementById("showHideiframeExclusionList").classList.add("option_selected1") ;
document.getElementById("ingredientsToAvoidOption").innerText = "allIngredients" ;
}
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
//let fromcdiframe = localStorage.getItem("fromcdiframe"); code from iflam3, not in use here
let refurl = "https://flamingo.skintifique.me/v/hncRwLrN6P1n" ;
let targeturl ;
if (windowwidth < 900) {
targeturl = refurl + "?display=mobile&size=stacked&source_trigger=ext&lang=" + lang + "&ingredientsToExclude=" + ingredientsToExcludeValues_arr_str + "&riskgroupsToExclude=" + riskgroupsExclusionListValues_arr_str ;
} else {
targeturl = refurl + "?display=default&size=width&source_trigger=ext&lang=" + lang + "&ingredientsToExclude=" + ingredientsToExcludeValues_arr_str + "&riskgroupsToExclude=" + riskgroupsExclusionListValues_arr_str ;
}
document.getElementById("iframeExclusionList").src = targeturl ;
}
//
function getMessage(e) {
if (e.origin !== 'https://flamingo.skintifique.me') return;
let msg = e.data ;
document.getElementById("fromIframeExclusionList").innerText = msg ;
let ing_labels_start = msg.search("excluded_ingredients_labels=");
let ing_values_start = msg.search("excluded_ingredients_values=") ;
let riskgroups_labels_start = msg.search("excluded_riskgroups_labels=") ;
let riskgroups_values_start = msg.search("excluded_riskgroups_values=");
let excluded_ingredients_labels_start = ing_labels_start + 28;
let excluded_ingredients_values_start = ing_values_start + 28;
let excluded_riskgroups_labels_start = riskgroups_labels_start + 27;
let excluded_riskgroups_values_start = riskgroups_values_start + 27;
let excluded_ingredients_labels = msg.slice(excluded_ingredients_labels_start,ing_values_start) ;
if ((excluded_ingredients_labels.length === 0) || (excluded_ingredients_labels == "0")) {
excluded_ingredients_labels = "Vous n'avez indiqué aucun ingrédient à exclure" ;
}
document.getElementById("ingredientsToExclude").innerText = excluded_ingredients_labels ;
localStorage.setItem("MILA_ingredientsToExclude",excluded_ingredients_labels) ;
let excluded_ingredients_values = msg.slice(excluded_ingredients_values_start,riskgroups_labels_start) ;
if ((ingredientsToExcludeValues.length === 0) || (ingredientsToExcludeValues === "ingredientsToExcludeValues") || (ingredientsToExcludeValues === "0")) {
excluded_ingredients_values = "9999999" ;
}
document.getElementById("ingredientsToExcludeValues").innerText = excluded_ingredients_values ;
localStorage.setItem("MILA_ingredientsToExcludeValues",excluded_ingredients_values) ;
let excluded_riskgroups_labels = msg.slice(excluded_riskgroups_labels_start,riskgroups_values_start) ;
if ((excluded_riskgroups_labels.length === 0) || (excluded_riskgroups_labels == "0")) {
excluded_riskgroups_labels = "Vous n'avez indiqué aucun groupe d'ingrédient à exclure" ;
}
document.getElementById("riskgroupsExclusionListLabels").innerText = excluded_riskgroups_labels ;
localStorage.setItem("MILA_riskgroupsExclusionListLabels",excluded_riskgroups_labels) ;
let excluded_riskgroups_values = msg.slice(excluded_riskgroups_values_start) ;
document.getElementById("riskgroupsExclusionListValues").innerText = excluded_riskgroups_values ;
localStorage.setItem("MILA_riskgroupsExclusionListValues",excluded_riskgroups_values) ;
}
window.addEventListener("message", getMessage, false);
//
//decrypt and store excluded ingredients and riskgroups form Exclusion List
//END decrypt and store excluded ingredients and riskgroups form Exclusion List
//end manage exclusion list
//show-hide SK products below the textarea
document.getElementById("showHideSKproducts").addEventListener("click",showHideSKproducts) ;
function showHideSKproducts () {
let accordionSKproducts = document.getElementsByClassName("accordionSKproducts")[0] ;
let accordionSKproducts_situation = accordionSKproducts.style.display ;
if (accordionSKproducts_situation == "none") {
accordionSKproducts.style.display = "block" ;
document.getElementsByClassName("accordionSKproducts")[1].style.display = "block" ;
} else if (accordionSKproducts_situation == "block") {
accordionSKproducts.style.display = "none" ;
document.getElementsByClassName("accordionSKproducts")[1].style.display = "none" ;
} else {
accordionSKproducts.style.display = "block" ;
document.getElementsByClassName("accordionSKproducts")[1].style.display = "block" ;
}
}
//ENDshow-hide SK products below the textarea
//script to select text input in textarea box
document.getElementById("ingredients_textarea").onchange = function(){
document.getElementById("selectedProduct").innerHTML = "My List" ;
document.getElementById("selectedProductprofile").innerHTML = "My List" ;
document.getElementById("selectedProductdiag").innerHTML = "My List" ;
//let ingredients_textarea = document.getElementById("ingredients_textarea") ;
selectedIngredientList = ingredients_textarea.value ;
document.getElementById("ingredients_textarea").style.border = "1px solid #1895E2" ;
if (selectedIngredientList) {
document.getElementById("selectedIngredientList").innerHTML = selectedIngredientList ;
document.getElementById("selectedIngredientListprofile").innerHTML = selectedIngredientList ;
document.getElementById("selectedIngredientListdiag").innerHTML = selectedIngredientList ;
document.getElementById("selectedIngredientList").style.color = "#00b6e2" ;
document.getElementById("selectedIngredientListprofile").style.color = "#00b6e2" ;
document.getElementById("selectedIngredientListdiag").style.color = "#00b6e2" ;
startCleanIngrList(selectedIngredientList) ;
} else {
document.getElementById("selectedIngredientList").innerHTML = "There is no ingredient !"
document.getElementById("selectedIngredientListprofile").innerHTML = "There is no ingredient !"
document.getElementById("selectedIngredientListdiag").innerHTML = "There is no ingredient !"
document.getElementById("selectedIngredientList").style.color = "red" ;
document.getElementById("selectedIngredientListprofile").style.color = "red" ;
document.getElementById("selectedIngredientListdiag").style.color = "red" ;
}
};
//END script to select text input in textarea box
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
if (e.classList.contains("selectProduct")) {
//reset all borders to default
let selectProduct = document.getElementsByClassName("selectProduct");
var i;
for (i = 0; i < selectProduct.length; i++) {
selectProduct[i].style.border = "1px solid #1895E2";
document.getElementById("anyList").classList.remove("option_selected1") ;
document.getElementById("anyList_text").style.display = "block" ;
document.getElementById("anyList_icon").style.display = "none" ;
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
document.getElementById("selectedProductprofile").innerHTML = "My List" ;
document.getElementById("selectedProductdiag").innerHTML = "My List" ;
let ingredients_textarea = document.getElementById("ingredients_textarea") ;
selectedIngredientList = ingredients_textarea.value ;
document.getElementById("ingredients_textarea").style.border = "5px solid #1895E2" ;
document.getElementById("anyList").classList.add("option_selected1") ;
document.getElementById("anyList_text").style.display = "none" ;
document.getElementById("anyList_icon").style.display = "block" ;
var slideIndex = 1 ;
plusSlides() ;
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
//document.getElementsByClassName("accordionRecoGoMila")[0].style.display = "block" ;
document.getElementsByClassName("accordionRecoInstructionMILA")[0].style.display = "none" ;
setTimeout(openMILA, 1000) ;
} else if (selectedProduct === "recoProduct2_img") {
product_designation = document.getElementById("recoProduct2_name").innerText ;
selectedProduct = document.getElementById("recoProduct2or").innerText ;
//document.getElementsByClassName("accordionRecoGoMila")[0].style.display = "block" ;
document.getElementsByClassName("accordionRecoInstructionMILA")[0].style.display = "none" ;
setTimeout(openMILA, 1000) ;
} else if (selectedProduct === "recoProduct3_img") {
product_designation = document.getElementById("recoProduct3_name").innerText ;
selectedProduct = document.getElementById("recoProduct3or").innerText ;
//document.getElementsByClassName("accordionRecoGoMila")[0].style.display = "block" ;
document.getElementsByClassName("accordionRecoInstructionMILA")[0].style.display = "none" ;
setTimeout(openMILA, 1000) ;
} else {
product_designation = selectedProduct ;
}
document.getElementById("selectedProduct").innerHTML = "Skintifique - " + product_designation ;
document.getElementById("selectedProductprofile").innerHTML = "Skintifique - " + product_designation ;
document.getElementById("selectedProductdiag").innerHTML = "Skintifique - " + product_designation ;
document.getElementById("selectedProductreco").innerHTML = "Skintifique - " + product_designation ;
// could add a script to build ingredient list for SK packs
let selectedProduct_ingredients = selectedProduct.concat("_ingredients") ;
selectedIngredientList = document.getElementById(selectedProduct_ingredients).innerText ;
document.getElementById("ingredients_textarea").style.border = "2px solid #00b6e2" ;
}
if (selectedIngredientList) {
document.getElementById("selectedIngredientList").innerHTML = selectedIngredientList ;
document.getElementById("selectedIngredientListprofile").innerHTML = selectedIngredientList ;
document.getElementById("selectedIngredientListdiag").innerHTML = selectedIngredientList ;
document.getElementById("selectedIngredientListreco").innerHTML = selectedIngredientList ;
document.getElementById("selectedIngredientList").style.color = "#00b6e2" ;
document.getElementById("selectedIngredientListprofile").style.color = "#00b6e2" ;
document.getElementById("selectedIngredientListdiag").style.color = "#00b6e2" ;
document.getElementById("selectedIngredientListreco").style.color = "#00b6e2" ;
} else {
document.getElementById("selectedIngredientList").innerHTML = "There is no ingredient !"
document.getElementById("selectedIngredientListprofile").innerHTML = "There is no ingredient !"
document.getElementById("selectedIngredientListdiag").innerHTML = "There is no ingredient !"
document.getElementById("selectedIngredientListreco").innerHTML = "There is no ingredient !"
document.getElementById("selectedIngredientList").style.color = "red" ;
document.getElementById("selectedIngredientListprofile").style.color = "red" ;
document.getElementById("selectedIngredientListdiag").style.color = "red" ;
document.getElementById("selectedIngredientListreco").style.color = "red" ;
}
startCleanIngrList(selectedIngredientList) ;
}
//script to select options
let selectedOption = e.id ;
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
//show elements for the personal diag questions
document.getElementsByClassName("prevnextbuttons")[0].style.display = "block" ;
//highlight selectedOption and do the other stuff
switch (selectedOption) {
case "profileOption" :
//reset slideIndex
//slideIndex = 1;
//
//document.getElementById(selectedOption).style.border = "5px solid #1895E2" ;
document.getElementById(selectedOption).classList.add("topOption_selected") ;
document.getElementById("profileOption_button").style.opacity = "1" ;
document.getElementById("recoOption_button").style.opacity = "0.3" ;
//hide the text under the GoAnalyse btn and hide the MILA analysis
//iframeMILA.style.display = "none" ;
document.getElementById("textUnderMILAprofileBtn").style.display = "none" ;
//show all the accordion elements with the selectedOption class
let accordionProfile = document.getElementsByClassName("accordionProfile") ;
let i;
for (i = 0; i < accordionProfile.length; i++) {
accordionProfile[i].style.display = "block" ;
}
//replace profileOptionText1 by profileOptionText2
document.getElementById("profileOptionText1").style.display = "none" ;
document.getElementById("profileOptionText2").style.display = "block" ;
//store the selectedTopOption
document.getElementById("selectedTopOption").innerHTML = "profileOption" ;
//reset slideIndex
var slideIndex = 1 ;
break;
case "diagOption" :
//reset slideIndex
//slideIndex = 1;
//
//document.getElementsByClassName("diagOption")[1].style.display = "block" ;
document.getElementById(selectedOption).classList.add("option_selected1") ;
//document.getElementById("diagOption").classList.add("option_selected1") ;
document.getElementById("openMILAprofile").classList.remove("option_selected1") ;
//show the top of the sliderfor the selectedOption class
document.getElementsByClassName("accordionDiag")[0].style.display = "block" ;
document.getElementsByClassName("accordionDiag")[1].style.display = "block" ;
document.getElementsByClassName("accordionDiag")[2].style.display = "block" ;
document.getElementsByClassName("accordionDiag")[3].style.display = "block" ;
//show the starting (new) slide for the selectedOption class and reset the slideIndex
//slideIndex = 2;
//document.getElementsByClassName("slideDiag")[2].style.display = "block" ;
//hide the text under the GoAnalyse btn and hide the MILA analysis
//iframeMILA.style.display = "none" ;
document.getElementById("textUnderMILAdiagBtn").style.display = "none" ;
//show all the accordion elements with the selectedOption class
//let accordionDiag = document.getElementsByClassName("accordionDiag") ;
//let b;
//for (b = 0; b < accordionDiag.length; b++) {
//accordionDiag[b].style.display = "block" ;
//}
// if selectedSkinType = reactive, then also show the accordionAllergicToSynthesis
//let selectedSkinType = document.getElementById("selectedSkinType").innerText ;
//if (selectedSkinType === "reactive"){
//document.getElementsByClassName("accordionAllergicToSynthesis")[0].style.display = "block" ;
//}
//replace diagOptionText1 by diagOptionText2
document.getElementById("diagOptionText1").style.display = "none" ;
document.getElementById("diagOptionText2").style.display = "block" ;
//store the selectedTopOption
document.getElementById("selectedTopOption").innerHTML = "diagOption" ;
//show appropirate slide
//document.getElementsByClassName("slideDiag")[2].style.display = "block" ;
//var slideIndex = 4 ;
//showSlides(slideIndex += 3) ;
var slideIndex = 2 ;
plusSlides();
// show prevnextbuttons
document.getElementsByClassName("prevnextbuttons")[0].style.display = "block" ;
break;
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
//options in recommendation section
let accordionSolution = document.getElementsByClassName("accordionSolution") ;
switch (selectedOption) {
case "product_type_solution" :
//display the buttons product_type
document.getElementById("product_type_moisturizer").classList.remove("option_selectedLookingFor") ;
document.getElementById("product_type_cleanser").classList.remove("option_selectedLookingFor") ;
document.getElementById("product_type_solution").classList.add("option_selectedLookingFor") ;
//show the accordions relevant for product_type_solution
let c;
for (c = 0; c < accordionSolution.length; c++) {
accordionSolution[c].style.display = "block" ;
}
//other stuff to do
document.getElementById("selectedProductType").innerText = "solution" ;
//document.getElementsByClassName("accordionSolutionSeeMore")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionEczema")[0].style.display = "none" ;
document.getElementsByClassName("accordionProductTypeMoisturizer")[0].style.display = "none" ;
document.getElementsByClassName("accordionProductTypeMoisturizer")[1].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[1].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[2].style.display = "none" ;
break;
case "product_type_moisturizer" :
//display the buttons product_type
document.getElementById("product_type_moisturizer").classList.add("option_selectedLookingFor") ;
document.getElementById("product_type_cleanser").classList.remove("option_selectedLookingFor") ;
document.getElementById("product_type_solution").classList.remove("option_selectedLookingFor") ;
//hide and reset the accordions solution
let d;
for (d = 0; d < accordionSolution.length; d++) {
accordionSolution[d].style.display = "none" ;
}
document.getElementById("selectedSolution").innerText = "none" ;
//other stuff to do
document.getElementById("selectedProductType").innerText = "moisturizer" ;
//document.getElementsByClassName("accordionSolutionSeeMore")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionEczema")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionEczema")[1].style.display = "none" ;
document.getElementsByClassName("accordionProductTypeMoisturizer")[0].style.display = "block" ;
document.getElementsByClassName("accordionProductTypeMoisturizer")[1].style.display = "block" ;
document.getElementsByClassName("accordionSolutionAllergy")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[1].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[2].style.display = "none" ;
break;
case "product_type_cleanser" :
//display the buttons product_type
document.getElementById("product_type_moisturizer").classList.remove("option_selectedLookingFor") ;
document.getElementById("product_type_cleanser").classList.add("option_selectedLookingFor") ;
document.getElementById("product_type_solution").classList.remove("option_selectedLookingFor") ;
//hide and reset the accordions solution
let f;
for (f = 0; f < accordionSolution.length; f++) {
accordionSolution[f].style.display = "none" ;
}
document.getElementById("selectedSolution").innerText = "none" ;
//other stuff to do
document.getElementById("selectedProductType").innerText = "cleanser" ;
//document.getElementsByClassName("accordionSolutionSeeMore")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionEczema")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionEczema")[1].style.display = "none" ;
document.getElementsByClassName("accordionProductTypeMoisturizer")[0].style.display = "none" ;
document.getElementsByClassName("accordionProductTypeMoisturizer")[1].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[1].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[2].style.display = "none" ;
plusSlides() ;
break;
}
//options in recommendation section - solutions
let diag_solution = document.getElementsByClassName("diag_solution") ;
switch (selectedOption) {
case "solution_see_more" :
//reset all other diag_solution buttons to non selected display
let s00;
for (s00 = 0; s00 < diag_solution.length; s00++) {
diag_solution[s00].classList.remove("option_selectedLookingFor") ;
}
//do other stuff
document.getElementById("solution_see_more").classList.add("option_selectedLookingFor") ;
document.getElementById("selectedSolution").innerText = "solution_see_more" ;
//document.getElementsByClassName("accordionSolutionSeeMore")[0].style.display = "block" ;
document.getElementsByClassName("accordionSolutionEczema")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionEczema")[1].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[1].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[2].style.display = "none" ;
break;
case "product_type_moisturizer_face_intense" :
//display the buttons product_type
document.getElementById("product_type_moisturizer_face_intense").classList.add("option_selectedLookingFor") ;
document.getElementById("product_type_moisturizer_body_intense").classList.remove("option_selectedLookingFor") ;
document.getElementById("product_type_moisturizer_body_default").classList.remove("option_selectedLookingFor") ;
document.getElementById("product_type_moisturizer_deal").classList.remove("option_selectedLookingFor") ;
document.getElementById("product_type_moisturizer").classList.remove("option_selectedLookingFor") ;
document.getElementById("product_type_cleanser").classList.remove("option_selectedLookingFor") ;
document.getElementById("product_type_solution").classList.remove("option_selectedLookingFor") ;
//hide and reset the accordions solution
let m1;
for (m1 = 0; m1 < accordionSolution.length; m1++) {
accordionSolution[m1].style.display = "none" ;
}
document.getElementById("selectedSolution").innerText = "none" ;
//other stuff to do
document.getElementById("selectedProductType").innerText = "moisturizer_face_intense" ;
//document.getElementsByClassName("accordionSolutionSeeMore")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionEczema")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionEczema")[1].style.display = "none" ;
document.getElementsByClassName("accordionProductTypeMoisturizer")[0].style.display = "block" ;
document.getElementsByClassName("accordionSolutionAllergy")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[1].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[2].style.display = "none" ;
plusSlides() ;
break;
case "product_type_moisturizer_body_intense" :
//display the buttons product_type
document.getElementById("product_type_moisturizer_face_intense").classList.remove("option_selectedLookingFor") ;
document.getElementById("product_type_moisturizer_body_intense").classList.add("option_selectedLookingFor") ;
document.getElementById("product_type_moisturizer_body_default").classList.remove("option_selectedLookingFor") ;
document.getElementById("product_type_moisturizer_deal").classList.remove("option_selectedLookingFor") ;
document.getElementById("product_type_moisturizer").classList.remove("option_selectedLookingFor") ;
document.getElementById("product_type_cleanser").classList.remove("option_selectedLookingFor") ;
document.getElementById("product_type_solution").classList.remove("option_selectedLookingFor") ;
//hide and reset the accordions solution
let m2;
for (m2 = 0; m2 < accordionSolution.length; m2++) {
accordionSolution[m2].style.display = "none" ;
}
document.getElementById("selectedSolution").innerText = "none" ;
//other stuff to do
document.getElementById("selectedProductType").innerText = "moisturizer_body_intense" ;
//document.getElementsByClassName("accordionSolutionSeeMore")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionEczema")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionEczema")[1].style.display = "none" ;
document.getElementsByClassName("accordionProductTypeMoisturizer")[0].style.display = "block" ;
document.getElementsByClassName("accordionSolutionAllergy")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[1].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[2].style.display = "none" ;
plusSlides() ;
break;
case "product_type_moisturizer_body_default" :
//display the buttons product_type
document.getElementById("product_type_moisturizer_face_intense").classList.remove("option_selectedLookingFor") ;
document.getElementById("product_type_moisturizer_body_intense").classList.remove("option_selectedLookingFor") ;
document.getElementById("product_type_moisturizer_body_default").classList.add("option_selectedLookingFor") ;
document.getElementById("product_type_moisturizer_deal").classList.remove("option_selectedLookingFor") ;
document.getElementById("product_type_moisturizer").classList.remove("option_selectedLookingFor") ;
document.getElementById("product_type_cleanser").classList.remove("option_selectedLookingFor") ;
document.getElementById("product_type_solution").classList.remove("option_selectedLookingFor") ;
//hide and reset the accordions solution
let m3;
for (m3 = 0; m3 < accordionSolution.length; m3++) {
accordionSolution[m3].style.display = "none" ;
}
document.getElementById("selectedSolution").innerText = "none" ;
//other stuff to do
document.getElementById("selectedProductType").innerText = "moisturizer_body_default" ;
//document.getElementsByClassName("accordionSolutionSeeMore")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionEczema")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionEczema")[1].style.display = "none" ;
document.getElementsByClassName("accordionProductTypeMoisturizer")[0].style.display = "block" ;
document.getElementsByClassName("accordionSolutionAllergy")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[1].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[2].style.display = "none" ;
plusSlides() ;
break;
case "product_type_moisturizer_deal" :
//display the buttons product_type
document.getElementById("product_type_moisturizer_face_intense").classList.remove("option_selectedLookingFor") ;
document.getElementById("product_type_moisturizer_body_intense").classList.remove("option_selectedLookingFor") ;
document.getElementById("product_type_moisturizer_body_default").classList.remove("option_selectedLookingFor") ;
document.getElementById("product_type_moisturizer_deal").classList.add("option_selectedLookingFor") ;
document.getElementById("product_type_moisturizer").classList.remove("option_selectedLookingFor") ;
document.getElementById("product_type_cleanser").classList.remove("option_selectedLookingFor") ;
document.getElementById("product_type_solution").classList.remove("option_selectedLookingFor") ;
//hide and reset the accordions solution
let m4;
for (m4 = 0; m4 < accordionSolution.length; m4++) {
accordionSolution[m4].style.display = "none" ;
}
document.getElementById("selectedSolution").innerText = "none" ;
//other stuff to do
document.getElementById("selectedProductType").innerText = "moisturizer_deal" ;
//document.getElementsByClassName("accordionSolutionSeeMore")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionEczema")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionEczema")[1].style.display = "none" ;
document.getElementsByClassName("accordionProductTypeMoisturizer")[0].style.display = "block" ;
document.getElementsByClassName("accordionSolutionAllergy")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[1].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[2].style.display = "none" ;
plusSlides() ;
break;
case "solution_no_concern" :
//reset all other diag_solution buttons to non selected display
let s0;
for (s0 = 0; s0 < diag_solution.length; s0++) {
diag_solution[s0].classList.remove("option_selectedLookingFor") ;
}
//do other stuff
document.getElementById("solution_no_concern").classList.add("option_selectedLookingFor") ;
document.getElementById("selectedSolution").innerText = "no_concern" ;
//document.getElementsByClassName("accordionSolutionSeeMore")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionEczema")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionEczema")[1].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[1].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[2].style.display = "none" ;
plusSlides() ;
break;
case "solution_eczema" :
//reset all other diag_solution buttons to non selected display
let s1;
for (s1 = 0; s1 < diag_solution.length; s1++) {
diag_solution[s1].classList.remove("option_selectedLookingFor") ;
}
//do other stuff
document.getElementById("solution_eczema").classList.add("option_selectedLookingFor") ;
document.getElementById("selectedSolution").innerText = "eczema" ;
//document.getElementsByClassName("accordionSolutionSeeMore")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionEczema")[0].style.display = "block" ;
document.getElementsByClassName("accordionSolutionEczema")[1].style.display = "block" ;
document.getElementsByClassName("accordionSolutionAllergy")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[1].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[2].style.display = "none" ;
break;
case "solution_eczema_dermatitis" :
//reset all other diag_solution buttons to non selected display
let s12;
for (s12 = 0; s12 < diag_solution.length; s12++) {
diag_solution[s12].classList.remove("option_selectedLookingFor") ;
}
//do other stuff
document.getElementById("solution_eczema_dermatitis").classList.add("option_selectedLookingFor") ;
document.getElementById("selectedSolution").innerText = "eczema_dermatitis" ;
//document.getElementsByClassName("accordionSolutionSeeMore")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[1].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[2].style.display = "none" ;
plusSlides() ;
break;
case "solution_dyshidrosis" :
//reset all other diag_solution buttons to non selected display
let s13;
for (s13 = 0; s13 < diag_solution.length; s13++) {
//diag_solution[s13].classList.remove("option_selectedLookingFor") ;
diag_solution[s13].classList.remove("option_selectedLookingFor") ;
}
//do other stuff
document.getElementById("solution_dyshidrosis").classList.add("option_selectedLookingFor") ;
document.getElementById("selectedSolution").innerText = "dyshidrosis" ;
//document.getElementsByClassName("accordionSolutionSeeMore")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[1].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[2].style.display = "none" ;
plusSlides() ;
break;
case "solution_seborrheic" :
//reset all other diag_solution buttons to non selected display
let s14;
for (s14 = 0; s14 < diag_solution.length; s14++) {
diag_solution[s14].classList.remove("option_selectedLookingFor") ;
}
//do other stuff
document.getElementById("solution_seborrheic").classList.add("option_selectedLookingFor") ;
document.getElementById("selectedSolution").innerText = "seborrheic" ;
//document.getElementsByClassName("accordionSolutionSeeMore")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[1].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[2].style.display = "none" ;
plusSlides() ;
break;
case "solution_contact_eczema_nickel" :
//reset all other diag_solution buttons to non selected display
let s15;
for (s15 = 0; s15 < diag_solution.length; s15++) {
diag_solution[s15].classList.remove("option_selectedLookingFor") ;
}
//do other stuff
document.getElementById("solution_contact_eczema_nickel").classList.add("option_selectedLookingFor") ;
document.getElementById("selectedSolution").innerText = "contact_eczema_nickel" ;
//document.getElementsByClassName("accordionSolutionSeeMore")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[1].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[2].style.display = "none" ;
plusSlides() ;
break;
case "solution_psoriasis" :
//reset all other diag_solution buttons to non selected display
let s2;
for (s2 = 0; s2 < diag_solution.length; s2++) {
diag_solution[s2].classList.remove("option_selectedLookingFor") ;
}
//do other stuff
document.getElementById("solution_psoriasis").classList.add("option_selectedLookingFor") ;
document.getElementById("selectedSolution").innerText = "psoriasis" ;
//document.getElementsByClassName("accordionSolutionSeeMore")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionEczema")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionEczema")[1].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[1].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[2].style.display = "none" ;
plusSlides() ;
break;
case "solution_acne" :
//reset all other diag_solution buttons to non selected display
let s3;
for (s3 = 0; s3 < diag_solution.length; s3++) {
diag_solution[s3].classList.remove("option_selectedLookingFor") ;
}
//do other stuff
document.getElementById("solution_acne").classList.add("option_selectedLookingFor") ;
document.getElementById("selectedSolution").innerText = "acne" ;
document.getElementsByClassName("accordionSolutionEczema")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionEczema")[1].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[1].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[2].style.display = "none" ;
plusSlides() ;
break;
case "solution_pregnancy" :
//reset all other diag_solution buttons to non selected display
let s4;
for (s4 = 0; s4 < diag_solution.length; s4++) {
diag_solution[s4].classList.remove("option_selectedLookingFor") ;
}
//do other stuff
document.getElementById("solution_pregnancy").classList.add("option_selectedLookingFor") ;
document.getElementById("selectedSolution").innerText = "pregnancy" ;
document.getElementsByClassName("accordionSolutionEczema")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionEczema")[1].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[1].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[2].style.display = "none" ;
plusSlides() ;
break;
case "solution_burn" :
//reset all other diag_solution buttons to non selected display
let s5;
for (s5 = 0; s5 < diag_solution.length; s5++) {
diag_solution[s5].classList.remove("option_selectedLookingFor") ;
}
//do other stuff
document.getElementById("solution_burn").classList.add("option_selectedLookingFor") ;
document.getElementById("selectedSolution").innerText = "burn" ;
document.getElementsByClassName("accordionSolutionEczema")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionEczema")[1].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[1].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[2].style.display = "none" ;
plusSlides() ;
break;
case "solution_allergy" :
//reset all other diag_solution buttons to non selected display
let s6;
for (s6 = 0; s6 < diag_solution.length; s6++) {
diag_solution[s6].classList.remove("option_selectedLookingFor") ;
}
//do other stuff
document.getElementById("solution_allergy").classList.add("option_selectedLookingFor") ;
document.getElementById("selectedSolution").innerText = "allergy" ;
document.getElementsByClassName("accordionSolutionEczema")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionEczema")[1].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[0].style.display = "block" ;
document.getElementsByClassName("accordionSolutionAllergy")[1].style.display = "block" ;
document.getElementsByClassName("accordionSolutionAllergy")[2].style.display = "block" ;
break;
case "solution_pollution" :
//reset all other diag_solution buttons to non selected display
let s7;
for (s7 = 0; s7 < diag_solution.length; s7++) {
diag_solution[s7].classList.remove("option_selectedLookingFor") ;
}
//do other stuff
document.getElementById("solution_pollution").classList.add("option_selectedLookingFor") ;
document.getElementById("selectedSolution").innerText = "pollution" ;
document.getElementsByClassName("accordionSolutionEczema")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionEczema")[1].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[1].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[2].style.display = "none" ;
plusSlides() ;
break;
case "solution_allergy_metal" :
//reset all other diag_solution buttons to non selected display
let s8;
for (s8 = 0; s8 < diag_solution.length; s8++) {
diag_solution[s8].classList.remove("option_selectedLookingFor") ;
}
//do other stuff
document.getElementById("solution_allergy_metal").classList.add("option_selectedLookingFor") ;
document.getElementById("selectedSolution").innerText = "allergy_metal" ;
document.getElementsByClassName("accordionSolutionEczema")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionEczema")[1].style.display = "none" ;
plusSlides() ;
break;
case "solution_allergy_jewellery" :
//reset all other diag_solution buttons to non selected display
let s9;
for (s9 = 0; s9 < diag_solution.length; s9++) {
diag_solution[s9].classList.remove("option_selectedLookingFor") ;
}
//do other stuff
document.getElementById("solution_allergy_jewellery").classList.add("option_selectedLookingFor") ;
document.getElementById("selectedSolution").innerText = "allergy_jewellery" ;
document.getElementsByClassName("accordionSolutionEczema")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionEczema")[1].style.display = "none" ;
plusSlides() ;
break;
case "solution_allergy_leather" :
//reset all other diag_solution buttons to non selected display
let s10;
for (s10 = 0; s10 < diag_solution.length; s10++) {
diag_solution[s10].classList.remove("option_selectedLookingFor") ;
}
//do other stuff
document.getElementById("solution_allergy_leather").classList.add("option_selectedLookingFor") ;
document.getElementById("selectedSolution").innerText = "allergy_leather" ;
document.getElementsByClassName("accordionSolutionEczema")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionEczema")[1].style.display = "none" ;
plusSlides() ;
break;
case "solution_allergy_construction_material" :
//reset all other diag_solution buttons to non selected display
let s11;
for (s11 = 0; s11 < diag_solution.length; s11++) {
diag_solution[s11].classList.remove("option_selectedLookingFor") ;
}
//do other stuff
document.getElementById("solution_allergy_construction_material").classList.add("option_selectedLookingFor") ;
document.getElementById("selectedSolution").innerText = "allergy_construction_material" ;
document.getElementsByClassName("accordionSolutionEczema")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionEczema")[1].style.display = "none" ;
plusSlides() ;
break;
case "solution_aging" :
//reset all other diag_solution buttons to non selected display
let ag1;
for (ag1 = 0; ag1 < diag_solution.length; ag1++) {
diag_solution[ag1].classList.remove("option_selectedLookingFor") ;
}
//do other stuff
document.getElementById("solution_aging").classList.add("option_selectedLookingFor") ;
document.getElementById("selectedSolution").innerText = "aging" ;
//document.getElementsByClassName("accordionSolutionSeeMore")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionEczema")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionEczema")[1].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[0].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[1].style.display = "none" ;
document.getElementsByClassName("accordionSolutionAllergy")[2].style.display = "none" ;
plusSlides() ;
break;
}
//END options in recommendation section - solutions
//END options in recommentation section
//options in diagnostic section
switch (selectedOption) {
// for gender
case "gender_female" :
document.getElementById("selectedGender").innerHTML = "female" ;
localStorage.setItem("MILA_selectedGender", "female");
document.getElementById("gender_male").classList.remove("option_selectedGender");
document.getElementById("gender_female").classList.add("option_selectedGender");
plusSlides() ;
break;
case "gender_male" :
document.getElementById("selectedGender").innerHTML = "male" ;
localStorage.setItem("MILA_selectedGender", "male");
document.getElementById("gender_male").classList.add("option_selectedGender");
document.getElementById("gender_female").classList.remove("option_selectedGender");
plusSlides() ;
break;
//}
// for skin type
case "skin_normal" :
document.getElementById("selectedSkinType").innerHTML = "normal" ;
localStorage.setItem("MILA_selectedSkinType", "normal");
document.getElementById("skin_normally_sensitive").classList.remove("option_selectedSkinType");
document.getElementById("skin_reactive").classList.remove("option_selectedSkinType");
document.getElementById("skin_normal").classList.add("option_selectedSkinType");
document.getElementsByClassName("accordionAllergicToReco")[0].style.display = "none" ;
document.getElementsByClassName("accordionAllergicToReco")[1].style.display = "none" ;
//document.getElementsByClassName("accordionAllergicToReco")[2].style.display = "none" ;
//document.getElementsByClassName("accordionAllergicToReco")[3].style.display = "none" ;
document.getElementsByClassName("accordionAllergicToReco")[0].classList.remove("slideReco") ;
document.getElementsByClassName("accordionAllergicToReco")[1].classList.remove("slideReco") ;
//document.getElementsByClassName("accordionAllergicToReco")[2].classList.remove("mySlides") ;
document.getElementsByClassName("accordionAllergicToSynthesis")[0].classList.remove("slideReco") ;
//document.getElementsByClassName("accordionAllergicToReco")[4].style.display = "none" ;
//document.getElementsByClassName("accordionAllergicToDiag")[0].style.display = "none" ;
//document.getElementsByClassName("accordionAllergicToDiag")[1].style.display = "none" ;
document.getElementsByClassName("accordionAllergicToDiag")[0].classList.remove("slideDiag") ;
document.getElementsByClassName("accordionAllergicToDiag")[1].classList.remove("slideDiag") ;
//document.getElementsByClassName("accordionAllergicToDiag")[2].style.display = "none" ;
//document.getElementsByClassName("accordionAllergicToDiag")[3].style.display = "none" ;
//document.getElementsByClassName("accordionAllergicToSynthesis")[0].style.display = "none" ;
document.getElementsByClassName("accordionAllergicToSynthesis")[0].classList.remove("slideDiag") ;
plusSlides() ;
break ;
case "skin_normally_sensitive" :
document.getElementById("selectedSkinType").innerHTML = "normally_sensitive" ;
localStorage.setItem("MILA_selectedSkinType", "normally_sensitive");
document.getElementById("skin_normally_sensitive").classList.add("option_selectedSkinType");
document.getElementById("skin_reactive").classList.remove("option_selectedSkinType");
document.getElementById("skin_normal").classList.remove("option_selectedSkinType");
document.getElementsByClassName("accordionAllergicToReco")[0].style.display = "none" ;
document.getElementsByClassName("accordionAllergicToReco")[1].style.display = "none" ;
//document.getElementsByClassName("accordionAllergicToReco")[2].style.display = "none" ;
//document.getElementsByClassName("accordionAllergicToReco")[3].style.display = "none" ;
document.getElementsByClassName("accordionAllergicToReco")[0].classList.remove("slideReco") ;
document.getElementsByClassName("accordionAllergicToReco")[1].classList.remove("slideReco") ;
//document.getElementsByClassName("accordionAllergicToReco")[2].classList.remove("mySlides") ;
document.getElementsByClassName("accordionAllergicToSynthesis")[0].classList.remove("slideReco") ;
//document.getElementsByClassName("accordionAllergicToReco")[4].style.display = "none" ;
//document.getElementsByClassName("accordionAllergicToDiag")[0].style.display = "none" ;
//document.getElementsByClassName("accordionAllergicToDiag")[1].style.display = "none" ;
document.getElementsByClassName("accordionAllergicToDiag")[0].classList.remove("slideDiag") ;
document.getElementsByClassName("accordionAllergicToDiag")[1].classList.remove("slideDiag") ;
//document.getElementsByClassName("accordionAllergicToDiag")[2].style.display = "none" ;
//document.getElementsByClassName("accordionAllergicToDiag")[3].style.display = "none" ;
//document.getElementsByClassName("accordionAllergicToSynthesis")[0].style.display = "none" ;
document.getElementsByClassName("accordionAllergicToSynthesis")[0].classList.remove("slideDiag") ;
plusSlides() ;
break ;
case "skin_reactive" :
document.getElementById("selectedSkinType").innerHTML = "reactive" ;
localStorage.setItem("MILA_selectedSkinType", "reactive");
document.getElementById("skin_normally_sensitive").classList.remove("option_selectedSkinType");
document.getElementById("skin_reactive").classList.add("option_selectedSkinType");
document.getElementById("skin_normal").classList.remove("option_selectedSkinType");
//document.getElementsByClassName("accordionAllergicToSynthesis")[0].style.display = "block" ;
let selectedTopOptionR = document.getElementById("selectedTopOption").innerText ;
if (selectedTopOptionR === "recoOption") {
//document.getElementsByClassName("accordionAllergicToReco")[0].style.display = "block" ;
//document.getElementsByClassName("accordionAllergicToReco")[1].style.display = "block" ;
//document.getElementsByClassName("accordionAllergicToReco")[2].style.display = "block" ;
//document.getElementsByClassName("accordionAllergicToReco")[3].style.display = "block" ;
document.getElementsByClassName("accordionAllergicToReco")[0].classList.add("slideReco") ;
document.getElementsByClassName("accordionAllergicToReco")[1].classList.add("slideReco") ;
//document.getElementsByClassName("accordionAllergicToReco")[2].classList.add("mySlides") ;
document.getElementsByClassName("accordionAllergicToSynthesis")[0].classList.add("slideReco") ;
//document.getElementsByClassName("accordionAllergicToReco")[4].style.display = "block" ;
} else if (selectedTopOptionR === "diagOption") {
//document.getElementsByClassName("accordionAllergicToDiag")[0].style.display = "block" ;
//document.getElementsByClassName("accordionAllergicToDiag")[1].style.display = "block" ;
document.getElementsByClassName("accordionAllergicToDiag")[0].classList.add("slideDiag") ;
document.getElementsByClassName("accordionAllergicToDiag")[1].classList.add("slideDiag") ;
document.getElementsByClassName("accordionAllergicToSynthesis")[0].classList.add("slideDiag") ;
//document.getElementsByClassName("accordionAllergicToDiag")[2].style.display = "block" ;
//document.getElementsByClassName("accordionAllergicToDiag")[3].style.display = "block" ;
//document.getElementsByClassName("accordionAllergicToDiag")[4].style.display = "block" ;
}
// also select condition = reactive, by default
document.getElementById("condition_reactive").classList.add("option_selectedCondition") ;
plusSlides() ;
break ;
//}
// for allergicToFactor
//case "allergicToFactor_nothing" :
//document.getElementById("allergicToFactor_nothing").classList.add("option_selectedAllergicToFactor");
//document.getElementById("allergicToFactor_pollution").classList.remove("option_selectedAllergicToFactor") ;
//document.getElementById("allergicToFactor_nickel").classList.remove("option_selectedAllergicToFactor") ;
//document.getElementById("allergicToFactor_jewelry").classList.remove("option_selectedAllergicToFactor") ;
//document.getElementById("allergicToFactor_leather").classList.remove("option_selectedAllergicToFactor") ;
//document.getElementById("allergicToFactor_construction_material").classList.remove("option_selectedAllergicToFactor");
//document.getElementsByClassName("accordionAllergicToFactors")[0].style.display = "none";
//document.getElementById("selectedAllergicToFactors").innerHTML = "no_allergicToFactor" ;
//break ;
case "allergicToFactor_pollution" :
//document.getElementById("allergicToFactor_nothing").style.border = "none";
document.getElementById("allergicToFactor_pollution").classList.toggle("option_selectedAllergicToFactor") ;
document.getElementsByClassName("accordionAllergicToFactors")[0].style.display = "block";
break ;
//case "allergicToFactor_nickel" :
//document.getElementById("allergicToFactor_nothing").style.border = "none";
//document.getElementById("allergicToFactor_nickel").classList.toggle("option_selectedAllergicToFactor") ;
//document.getElementsByClassName("accordionAllergicToFactors")[0].style.display = "block";
//break ;
case "allergicToFactor_jewelry" :
//document.getElementById("allergicToFactor_nothing").style.border = "none";
document.getElementById("allergicToFactor_jewelry").classList.toggle("option_selectedAllergicToFactor") ;
document.getElementsByClassName("accordionAllergicToFactors")[0].style.display = "block";
break ;
case "allergicToFactor_leather" :
//document.getElementById("allergicToFactor_nothing").style.border = "none";
document.getElementById("allergicToFactor_leather").classList.toggle("option_selectedAllergicToFactor") ;
document.getElementsByClassName("accordionAllergicToFactors")[0].style.display = "block";
break ;
case "allergicToFactor_construction_material" :
//document.getElementById("allergicToFactor_nothing").style.border = "none";
document.getElementById("allergicToFactor_construction_material").classList.toggle("option_selectedAllergicToFactor");
document.getElementsByClassName("accordionAllergicToFactors")[0].style.display = "block";
break ;
// for frequency
case "frequency_rarely" :
document.getElementById("selectedFrequency").innerHTML = "rarely" ;
localStorage.setItem("MILA_selectedFrequency", "rarely");
document.getElementById("frequency_rarely").classList.add("option_selectedFrequency");
document.getElementById("frequency_frequently").classList.remove("option_selectedFrequency");
plusSlides() ;
break ;
case "frequency_frequently" :
document.getElementById("selectedFrequency").innerHTML = "frequently" ;
localStorage.setItem("MILA_selectedFrequency", "frequently");
document.getElementById("frequency_rarely").classList.remove("option_selectedFrequency");
document.getElementById("frequency_frequently").classList.add("option_selectedFrequency");
plusSlides() ;
break ;
//}
// for area
case "area_small" :
document.getElementById("selectedSkinArea").innerHTML = "small" ;
localStorage.setItem("MILA_selectedSkinArea", "small");
document.getElementById("area_small").classList.add("option_selectedArea");
document.getElementById("area_large_or_sensitive").classList.remove("option_selectedArea");
plusSlides() ;
break ;
case "area_large_or_sensitive" :
document.getElementById("selectedSkinArea").innerHTML = "large_or_sensitive" ;
localStorage.setItem("MILA_selectedSkinArea", "large_or_sensitive");
document.getElementById("area_small").classList.remove("option_selectedArea");
document.getElementById("area_large_or_sensitive").classList.add("option_selectedArea");
plusSlides() ;
break ;
// for conditions
case "condition_no_concern" :
//document.getElementById("selectedConditions").innerHTML = "no_concern" ;
document.getElementById("condition_no_concern").classList.add("option_selectedCondition");
document.getElementById("condition_pregnancy").classList.remove("option_selectedCondition");
document.getElementById("condition_eczema").classList.remove("option_selectedCondition");
document.getElementById("condition_acne").classList.remove("option_selectedCondition") ;
document.getElementById("condition_reactive").classList.remove("option_selectedCondition") ;
document.getElementById("condition_nickel_allergy").classList.remove("option_selectedCondition") ;
document.getElementById("condition_earth").classList.remove("option_selectedCondition") ;
document.getElementById("condition_aging").classList.remove("option_selectedCondition") ;
document.getElementById("selectedConditions").innerHTML = "no_concern" ;
break ;
case "condition_pregnancy" :
//document.getElementById("selectedConditions").innerHTML = "pregnancy" ;
document.getElementById("condition_no_concern").classList.remove("option_selectedCondition");
document.getElementById("condition_pregnancy").classList.toggle("option_selectedCondition") ;
break ;
case "condition_eczema" :
//document.getElementById("selectedConditions").innerHTML = "eczema" ;
document.getElementById("condition_no_concern").classList.remove("option_selectedCondition");
document.getElementById("condition_eczema").classList.toggle("option_selectedCondition") ;
break ;
case "condition_acne" :
//document.getElementById("selectedConditions").innerHTML = "acne" ;
document.getElementById("condition_no_concern").classList.remove("option_selectedCondition");
document.getElementById("condition_acne").classList.toggle("option_selectedCondition") ;
break ;
case "condition_reactive" :
//document.getElementById("selectedConditions").innerHTML = "reactive" ;
document.getElementById("condition_no_concern").classList.remove("option_selectedCondition");
document.getElementById("condition_reactive").classList.toggle("option_selectedCondition") ;
break ;
case "condition_nickel_allergy" :
//document.getElementById("selectedConditions").innerHTML = "nickel_allergy" ;
document.getElementById("condition_no_concern").classList.remove("option_selectedCondition");
document.getElementById("condition_nickel_allergy").classList.toggle("option_selectedCondition") ;
break ;
case "condition_earth" :
//document.getElementById("selectedConditions").innerHTML = "earth" ;
document.getElementById("condition_no_concern").classList.remove("option_selectedCondition");
document.getElementById("condition_earth").classList.toggle("option_selectedCondition") ;
break ;
case "condition_aging" :
//document.getElementById("selectedConditions").innerHTML = "earth" ;
document.getElementById("condition_no_concern").classList.remove("option_selectedCondition");
document.getElementById("condition_aging").classList.toggle("option_selectedCondition") ;
break ;
}
//select condition_nickel if user is reactive to pollution, shoes, jewelry etc ///////////////////////////
let allergicToFactor_pollution_classList = document.getElementById("allergicToFactor_pollution").classList ;
let allergicToFactor_jewelry_classList = document.getElementById("allergicToFactor_jewelry").classList ;
let allergicToFactor_leather_classList = document.getElementById("allergicToFactor_leather").classList ;
let allergicToFactor_construction_classList = document.getElementById("allergicToFactor_construction_material").classList ;
if ((allergicToFactor_pollution_classList.contains("option_selectedAllergicToFactor")) || (allergicToFactor_jewelry_classList.contains("option_selectedAllergicToFactor")) || (allergicToFactor_leather_classList.contains("option_selectedAllergicToFactor")) || (allergicToFactor_construction_classList.contains("option_selectedAllergicToFactor"))) {
document.getElementById("condition_nickel_allergy").classList.add("option_selectedCondition") ;
}
//else {
//document.getElementById("condition_nickel_allergy").classList.remove("option_selectedCondition") ;
//}
//get all the selected conditions
const selectedConditions = [];
let conditions = document.getElementsByClassName("option_selectedCondition") ;
//if (conditions) {
var selCond;
for (selCond = 0; selCond < conditions.length; selCond++) {
let condition_id = conditions[selCond].id ;
let condition_name = condition_id.replace("condition_","") ;
selectedConditions.push(condition_name) ;
//document.getElementById("selectedConditions").innerHTML = selectedConditions ;
//localStorage.setItem("MILA_selectedConditions",selectedConditions) ;
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
//START script to do stuff when user comes in with flamclip urlparameter
let urlParamsCurrentUrl = new URLSearchParams(current_url);
//show welcome just below MIA top image
let flamclip = urlParamsCurrentUrl.get('flamclip') ;
if (flamclip) {
//document.getElementById("flamclip").innerText = flamclip ;
document.getElementById("flamclipText1").style.display = "block" ;
//do the standard things to do when selectedOption = profileOption
//document.getElementById("flamclip").innerText = flamclip ;
document.getElementById("profileOption").style.border = "5px solid #1895E2" ;
document.getElementById("recoOption_button").style.opacity = "0.3" ;
//hide the text under the GoAnalyse btn and hide the MILA analysis (not useful in this scenario)
//iframeMILA.style.display = "none" ;
//document.getElementById("textUnderMILAprofileBtn").style.display = "none" ;
// hide the text under the top options
document.getElementById("textUnderTopOptions").style.display = "none" ;
//show all the accordion elements with the selectedOption class
let accordionProfile = document.getElementsByClassName("accordionProfile") ;
let i;
for (i = 0; i < accordionProfile.length; i++) {
accordionProfile[i].style.display = "block" ;
}
//replace profileOptionText1 by profileOptionText2
//document.getElementById("profileOptionText1").style.display = "none" ;
//document.getElementById("profileOptionText2").style.display = "none" ;
//document.getElementById("profileOptionText3").style.display = "block" ;
//store the selectedTopOption
document.getElementById("selectedTopOption").innerHTML = "profileOption" ;
// reset slideIndex and show first appropriate slide
var slideIndex = 0 ;
plusSlides() ;
//show elements for the personal diag questions
document.getElementsByClassName("prevnextbuttons")[0].style.display = "block" ;
}
//include new_product_composition2 or composition_url into textarea
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
//}
//END script to include new_product_composition2 into textarea
//END script to do all the stuff when user comes in with flamclip parameter
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
case "moisturizer_face_intense-none" :
recoProduct1 = "HG40x1";
recoProduct2 = "HG40x3";
recoProduct3 = "CL200x1";
break ;
case "moisturizer_body_intense-none" :
recoProduct1 = "HG150x1";
recoProduct2 = "HG150x3";
recoProduct3 = "ML200x1";
break ;
case "moisturizer_body_default-none" :
recoProduct1 = "ML200x1";
recoProduct2 = "ML200x3";
recoProduct3 = "HG150x1";
break ;
case "moisturizer_deal-none" :
recoProduct1 = "HG40x3";
recoProduct2 = "HG150x3";
recoProduct3 = "ML200x3";
break ;
case "solution-eczema" :
recoProduct1 = "ECZE_body_pack";
recoProduct2 = "ECZE_face_pack";
recoProduct3 = "ML200x1";
break ;
// new situations
case "solution-eczema_dermatitis" :
recoProduct1 = "ECZE_body_pack";
recoProduct2 = "ECZE_face_pack";
recoProduct3 = "ML200x1";
break ;
case "solution-dyshidrosis" :
recoProduct1 = "DYSH_pack";
recoProduct2 = "HG150x1";
recoProduct3 = "ML200x1";
break ;
case "solution-seborrheic" :
recoProduct1 = "SEB_pack";
recoProduct2 = "CL200x1";
recoProduct3 = "ML200x1";
break ;
case "solution-contact_eczema_nickel" :
recoProduct1 = "NAL_pack";
recoProduct2 = "PC20x1";
recoProduct3 = "ML200x1";
break ;
case "solution-burn" :
recoProduct1 = "HG150x1";
recoProduct2 = "HG40x1";
recoProduct3 = "HG150x3";
break ;
// END new situations
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
case "solution-pollution" :
recoProduct1 = "ML200x1";
recoProduct2 = "CL200x1";
recoProduct3 = "CL200x3";
break ;
case "solution-allergy_metal" :
recoProduct1 = "PC20x1";
recoProduct2 = "NAL_pack";
recoProduct3 = "PC20x3";
break ;
case "solution-allergy_metal" :
recoProduct1 = "PC20x1";
recoProduct2 = "NAL_pack";
recoProduct3 = "PC20x3";
break ;
case "solution-allergy_jewellery" :
recoProduct1 = "PC20x1";
recoProduct2 = "NAL_pack";
recoProduct3 = "PC20x3";
break ;
case "solution-allergy_jewellery" :
recoProduct1 = "PC20x1";
recoProduct2 = "NAL_pack";
recoProduct3 = "PC20x3";
break ;
case "solution-allergy_leather" :
recoProduct1 = "PC20x1";
recoProduct2 = "PC20x3";
recoProduct3 = "NAL_pack";
break ;
case "solution-allergy_construction_material" :
recoProduct1 = "PC20x1";
recoProduct2 = "PC20x3";
recoProduct3 = "NAL_pack";
break ;
case "solution-aging" :
recoProduct1 = "HG40x1";
recoProduct2 = "HG150x1";
recoProduct3 = "HG40x3";
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
// publish specific messages to user NOTE: NEED TO MAKE SURE selectedSKINTYPE is stored before this process!
let selectedSkinType = document.getElementById("selectedSkinType").innerText ;
if (selectedSkinType === "reactive") {
if (lang = "fr-fr") {
document.getElementById("recoProducts_message1").innerHTML = "Nos produits sont certainement parmi les plus sûrs au monde, mais puisque votre peau est réactive, nous vous recommandons de faire un test sur une petite partie de votre peau. S'il n'y pas de réaction après 10-15 minutes, alors ce produit devrait être sûr pour vous, et vous pouvez l'utiliser autant que vous le souhaitez!"
} else {
document.getElementById("recoProducts_message1").innerHTML = "Our products are certainly among the safest in the world. Yet, as you have reactive skin, we recommend you test on a small part of your body. If there is no reaction after 10-15 minutes, then this product should be safe for you and you can use it as much as you please!"
}
} else {
document.getElementById("recoProducts_message1").innerHTML = "" ;
}
////////////////////////////////////////////////////////////////////////////////////////////////////
//check that and signal if product contains ingredients that user is allergic to
let ingredientsToExclude_innerText = document.getElementById("ingredientsToExclude").innerText ;
const ingredientsToExclude = ingredientsToExclude_innerText.split(",") ;
// for recoProduct1
const recoProduct1_bad_ing = [] ;
document.getElementById("recoProduct1Allergic").style.display = "none" ;
let recoProduct1_ing = recoProduct1.concat("_ingredients");
let recoProduct1_ingredients = document.getElementById(recoProduct1_ing).innerText ;
const recoProduct1_ingredients_arrayed = recoProduct1_ingredients.split(", ");
var ingred ;
for (ingred = 0; ingred < recoProduct1_ingredients_arrayed.length; ingred++) {
if (ingredientsToExclude.indexOf(recoProduct1_ingredients_arrayed[ingred]) > -1) {
recoProduct1_bad_ing.push(recoProduct1_ingredients_arrayed[ingred]) ;
document.getElementById("recoProduct1Allergic").style.display = "block" ;
}
document.getElementById("recoProduct1Allergic").innerText = "⚠️ Contient: " + recoProduct1_bad_ing ;
document.getElementById("recoProduct1Allergic").style.color = "red" ;
}
// for recoProduct2
const recoProduct2_bad_ing = [] ;
document.getElementById("recoProduct2Allergic").style.display = "none" ;
let recoProduct2_ing = recoProduct2.concat("_ingredients");
let recoProduct2_ingredients = document.getElementById(recoProduct2_ing).innerText ;
const recoProduct2_ingredients_arrayed = recoProduct2_ingredients.split(", ");
var ingred2 ;
for (ingred2 = 0; ingred2 < recoProduct2_ingredients_arrayed.length; ingred2++) {
if (ingredientsToExclude.indexOf(recoProduct2_ingredients_arrayed[ingred2]) > -1) {
recoProduct2_bad_ing.push(recoProduct2_ingredients_arrayed[ingred2]) ;
document.getElementById("recoProduct2Allergic").style.display = "block" ;
}
document.getElementById("recoProduct2Allergic").innerText = "⚠️ Contient: " + recoProduct2_bad_ing ;
document.getElementById("recoProduct2Allergic").style.color = "red" ;
}
// for recoProduct3
const recoProduct3_bad_ing = [] ;
document.getElementById("recoProduct3Allergic").style.display = "none" ;
let recoProduct3_ing = recoProduct3.concat("_ingredients");
let recoProduct3_ingredients = document.getElementById(recoProduct3_ing).innerText ;
const recoProduct3_ingredients_arrayed = recoProduct3_ingredients.split(", ");
var ingred3 ;
for (ingred3 = 0; ingred3 < recoProduct3_ingredients_arrayed.length; ingred3++) {
if (ingredientsToExclude.indexOf(recoProduct3_ingredients_arrayed[ingred3]) > -1) {
recoProduct3_bad_ing.push(recoProduct3_ingredients_arrayed[ingred3]) ;
document.getElementById("recoProduct3Allergic").style.display = "block" ;
}
document.getElementById("recoProduct3Allergic").innerText = "⚠️ Contient: " + recoProduct3_bad_ing ;
document.getElementById("recoProduct3Allergic").style.color = "red" ;
}
//END check that and signal if product contains ingredients that user is allergic to
}
//END actions when button openMILArecoSKproduct is clicked
// -
//START function to open iframeMILA with appropriate url and parameters for selectedTopOption
document.getElementById("openMILAprofile").addEventListener("click", function () {setTimeout(openMILAprofile, 500)});
function openMILAprofile () {
document.getElementById("selectedTopOption").innerText = "profileOption" ;
//hide prevnextbuttons
document.getElementsByClassName("prevnextbuttons")[0].style.display = "none" ;
//hide al the elements that have been shown previously if user has used diagOption
//hide all accordion elements
//let accordionElmt = document.getElementsByClassName("accordionElmt") ;
//var j;
//for (j = 0; j < accordionElmt.length; j++) {
//accordionElmt[j].style.display = "none";
//}
//hide iframeMILA and other elements
//document.getElementById("iframeMILA").style.display = "none" ;
document.getElementsByClassName("iframeMILA")[0].style.display = "none" ;
document.getElementsByClassName("iframeMILA")[1].style.display = "none" ;
//show all accordion profile elements
//let accordionProfile = document.getElementsByClassName("accordionProfile") ;
//var k;
//for (k = 0; k < accordionProfile.length; k++) {
//accordionProfile[k].style.display = "block";
//}
//END hide all the elements that have been shown previously if user has used diagOption
//document.getElementById("openMILAprofile").style.border = "5px solid #1895E2" ;
document.getElementById("openMILAprofile").classList.add("option_selected1") ;
//document.getElementById("diagOption").style.border = "1px solid grey" ;
document.getElementById("diagOption").classList.remove("option_selected1") ;
//document.getElementsByClassName("accordionProfileGoMila")[0].style.display = "block" ;
openMILA ();
//});
}
document.getElementById("openMILAdiag").addEventListener("click", function () {setTimeout(openMILA, 500)}) ;
//document.getElementById("openMILAreco").addEventListener("click", openMILA) ;
function openMILA() {
let lang ;
if (current_url.includes("/en/")) {
lang = "en-us" ;
} else if (current_url.includes("/fr/")) {
lang = "fr-fr" ;
} else {
lang = "en-us" ;
}
let textAboveMILAiFrame ;
if (lang === "fr-fr") {
textAboveMILAiFrame = "Merci de patienter quelques secondes, le temps d'afficher le profil de sûreté" ;
} else {
textAboveMILAiFrame = "Please wait a few seconds for the safety profile to be displayed below" ;
}
document.getElementById("textAboveMILAiFrame").innerText = textAboveMILAiFrame ;
document.getElementById("textAboveMILAiFrame").style.display = "block" ;
//document.getElementById("textUnderMILABtn").innerHTML = textUnderMILABtn ;
//document.getElementById("textUnderMILABtn").style.display = "block" ;
let selectedTopOption = document.getElementById("selectedTopOption").innerText ;
let iframeMILA = document.getElementById("iframeMILA") ;
//iframeMILA.style.display = "block" ;
document.getElementsByClassName("iframeMILA")[0].style.display = "block" ;
document.getElementsByClassName("iframeMILA")[1].style.display = "block" ;
let selectedProductName = document.getElementById("selectedProduct").innerText ;
let selectedIngredientList = document.getElementById("selectedIngredientList").innerText ;
//remove accents before encoding
let selectedIngredientList_cleaned = selectedIngredientList.normalize('NFD').replace(/[\u0300-\u036f]/g, "") ;
let str = "new_product_composition2=" + selectedIngredientList_cleaned ;
let ingredients_encoded = window.btoa(str);
if (selectedTopOption === "profileOption") {
//document.getElementById("textUnderMILAprofileBtn").innerHTML = textUnderMILABtn ;
//document.getElementById("textUnderMILAprofileBtn").style.display = "block" ;
document.getElementsByClassName("accordionProfileGoMila")[0].style.display = "block" ;
iframeMILA.src = "https://flamingo.skintifique.me/v/RiU4fevditvb?dtype=profile&source_trigger=ext&lang=" + lang + "&product_name=" + selectedProductName + "&urlcode=" + ingredients_encoded ;
} else if ((selectedTopOption === "recoOption") || (selectedTopOption === "diagOption")) {
if (selectedTopOption === "diagOption") {
document.getElementsByClassName("accordionDiagGoMila")[0].style.display = "block" ;
} else if (selectedTopOption === "recoOption") {
document.getElementsByClassName("accordionRecoGoMila")[0].style.display = "block" ;
}
//document.getElementById("textUnderMILArecoBtn").innerHTML = textUnderMILABtn ;
//document.getElementById("textUnderMILArecoBtn").style.display = "block" ;
let selectedGender = document.getElementById("selectedGender").innerText ;
let selectedSkinType = document.getElementById("selectedSkinType").innerText ;
//let selectedFrequency = "potentially frequently" ;
//let selectedSkinArea = "any part of your skin (except mucosal areas)" ;
let selectedFrequency = document.getElementById("selectedFrequency").innerText ;
let selectedSkinArea = document.getElementById("selectedSkinArea").innerText ;
let selectedConditions = document.getElementById("selectedConditions").innerText ;
let ingredientsToExclude = document.getElementById("ingredientsToExcludeValues").innerText ;
let riskgroupsExclusionList = document.getElementById("riskgroupsExclusionListValues").innerText ;
if ((ingredientsToExclude.length === 0) || (ingredientsToExclude === "ingredientsToExcludeValues") || (ingredientsToExclude === "0")) {
ingredientsToExclude = "9999999" ;
}
if ((riskgroupsExclusionList.length === 0) || (riskgroupsExclusionList === "riskgroupsExclusionListValues") || (riskgroupsExclusionList === "0")) {
riskgroupsExclusionList = "9999999" ;
}
const ingredientsToExclude_arr = ingredientsToExclude.split(",");
let ingredientsToExclude_arr_str = JSON.stringify(ingredientsToExclude_arr) ;
const riskgroupsExclusionList_arr = riskgroupsExclusionList.split(",");
let riskgroupsExclusionList_arr_str = JSON.stringify(riskgroupsExclusionList_arr) ;
iframeMILA.src = "https://flamingo.skintifique.me/v/RiU4fevditvb?dtype=diag&source_trigger=ext&product_name=" + selectedProductName + "&gender=" + selectedGender + "&skin_type=" + selectedSkinType + "&frequency=" + selectedFrequency + "&skin_area=" + selectedSkinArea + "&conditions=" + selectedConditions + "&lang=" + lang + "&ingredientsToExclude=" + ingredientsToExclude_arr_str + "&riskGroupsToExclude=" + riskgroupsExclusionList_arr_str + "&urlcode=" + ingredients_encoded ;
//the 2 lines of code below are expected to set the height of the iframe to the content inside. The inline style of the iframe may need to be removed + the height of the inside content may need to be adapted
iframeMILA.onload = function(){
iframeMILA.style.height = iframeMILA.contentWindow.document.body.scrollHeight + 'px';
}
//END script to adapt height of iframeMILA
}
}
// script to manage the bad ingredients lists
// Add a "checked" symbol when clicking on a list item
let list = document.querySelector("#bad_ingredient_list");
list.addEventListener("click", function(ev) {
if (ev.target.tagName === "LI") {
ev.target.classList.toggle("checked");
document.getElementById("allergicTo_no_SK_ingredient").style.border = "1px solid grey" ;
}
}, false);
let list2 = document.querySelector("#bad_ingredient_list2");
list2.addEventListener("click", function(ev) {
if (ev.target.tagName === "LI") {
ev.target.classList.toggle('checked');
document.getElementById("allergicTo_no_SK_ingredient").style.border = "1px solid grey" ;
}
}, false);
let list3 = document.querySelector("#bad_ingredient_list3");
list3.addEventListener("click", function(ev) {
if (ev.target.tagName === "LI") {
ev.target.classList.toggle("checked");
document.getElementById("allergicTo_no_SK_ingredient").style.border = "1px solid grey" ;
}
}, false);
let list4 = document.querySelector("#bad_ingredient_list4");
list4.addEventListener("click", function(ev) {
if (ev.target.tagName === "LI") {
ev.target.classList.toggle("checked");
document.getElementById("allergicTo_no_SK_ingredient").style.border = "1px solid grey" ;
}
}, false);
let span = document.createElement("SPAN");
let txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
li.appendChild(span);
for (i = 0; i < close.length; i++) {
close[i].onclick = function() {
let div = this.parentElement;
div.style.display = "none";
}
}
}
// -
// END OF SCRIPT FOR MILA PAGE
// -
//script to open select mobile menu items on menu-click
let mobile_menu_elmts = document.getElementById("iqitmegamenu-mobile").querySelectorAll(".mm-expand");
//mobile_menu_elmts[2].style.visibility = "hidden";
mobile_menu_elmts[2].parentElement.classList.add("show");
//script to add info next to telephone field on check out page
//let current_url3 = window.location.href ;
//if (current_url3.includes("/shop/fr/commande")){
//document.getElementsByClassName("col-form-label")[1].style.display = "none" ;
//let labels = document.getElementsByClassName("col-form-label") ;
//var i;
//for (i = 0; i < labels.length; i++) {
//let label = labels[i].innerText ;
//if (label.includes("Téléphone")) {
//label.style.background-color = "red";
//}
//}
//}
//document.getElementsByClassName("form-control-comment")[1].style.display = "block" ;
//document.getElementsByClassName("form-control-comment")[1].style.background-color = "red" ;
