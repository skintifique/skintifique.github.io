let current_urlMILA = window.location.href ;
//////this vs: clean lang (several variables in the code)
//functions for MILA page
//the lines of code above and below are just for when the script is called externally. they need to be removed if plugged into the js theme again
if (current_urlMILA.includes("/166-mila")) {
//////show mila-166 version
 document.getElementById("milaJsVs").innerHTML = "THIS PAGE IS IN DEVELOPMENT / CETTE PAGE EST EN DEVELOPPEMENT 10" ;
///////////////////////////
//END get the stored profile parameters and set up all the options
//////////////////////////////////
// if click backToIngredientSelectors 'on excluded ingredient synthesis slide, then go back to appropriate slide
document.getElementById("backToIngredientSelectors").addEventListener("click",function() {
minusSlides();
});
//various navigations
//skip the diag in Reco option when user selects recoPath_direct button
//document.getElementById("recoPath_direct").addEventListener("click",function() {
//let slides0 = document.getElementsByClassName("slideReco") ;
//let slideIndex = slides0.length ;
//let slideIndex = 8;
//plusSlides();
//});
//END various navigations
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
document.getElementById("notAllergicToAnyIngredient").addEventListener("click",notAllergicToAnyIngredient) ;
function notAllergicToAnyIngredient() {
document.getElementById("ingredientsToExclude").innerText = "Vous n'avez indiqué aucun ingrédient à exclure" ;
document.getElementById("ingredientsToExcludeValues").innerText = "9999999" ;
document.getElementById("riskgroupsExclusionListLabels").innerText = "Vous n'avez indiqué aucun groupe d'ingrédients à exclure" ;
document.getElementById("riskgroupsExclusionListValues").innerText = "9999999" ;
document.getElementById("ingredientsToAvoidOption").innerText = "allIngredients" ;
plusSlides() ;
}
document.getElementById("confirmSKingredients").addEventListener("click",confirmSKingredients) ;
function confirmSKingredients() {
document.getElementById("ingredientsToAvoidOption").innerText = "skIngredients" ;
plusSlides() ;
}
//show-hide accordionSKingredients
document.getElementById("showHideSKingredients").addEventListener("click",showHideSKingredients) ;
function showHideSKingredients () {
document.getElementById("showHideSKingredients").href = "#anchorAboveShowHideSkIng";
//hide accordion_notAllergicToAnyIng if it has been opened
//document.getElementsByClassName("accordion_notAllergicToAnyIng")[0].style.display = "none" ;
document.getElementsByClassName("accordion_notAllergicToAnyIng")[0].classList.remove("showElement");
document.getElementsByClassName("accordion_notAllergicToAnyIng")[1].classList.remove("showElement");
//other stuff to do
document.getElementById("showHideiframeExclusionList").classList.remove("option_selected1") ;
document.getElementById("iframeExclusionList").style.display = "none" ;
document.getElementsByClassName("accordionExclusionList")[0].style.display = "none" ;
let accordionSKingredients = document.getElementsByClassName("accordionSKingredients") ;
let accordionSKingredients_situation = accordionSKingredients[0].style.display ;
if (accordionSKingredients_situation == "none") {
accordionSKingredients[0].style.display = "block" ;
accordionSKingredients[1].style.display = "block" ;
document.getElementById("showHideSKingredients").classList.add("option_selected1") ;
//the code below should be triggered only when user clicks on confirmSKingredients
//document.getElementById("ingredientsToAvoidOption").innerText = "skIngredients" ;
document.getElementById("ingredientsToAvoidOption").innerText = "none" ;
} else if (accordionSKingredients_situation == "block") {
accordionSKingredients[0].style.display = "none" ;
accordionSKingredients[1].style.display = "none" ;
document.getElementById("showHideSKingredients").classList.remove("option_selected1");
document.getElementById("ingredientsToAvoidOption").innerText = "none" ;
} else {
accordionSKingredients[0].style.display = "block" ;
accordionSKingredients[1].style.display = "block" ;
document.getElementById("showHideSKingredients").classList.add("option_selected1") ;
//the code below should be triggered only when user clicks on confirmSKingredients
//document.getElementById("ingredientsToAvoidOption").innerText = "skIngredients" ;
document.getElementById("ingredientsToAvoidOption").innerText = "none" ;
}
}
//END show-hide accordionSKingredients
//show-hide iframeExclusionList
document.getElementById("showHideiframeExclusionList").addEventListener("click",showHideiframeExclusionList) ;
function showHideiframeExclusionList () {
document.getElementById("showHideiframeExclusionList").href = "#anchorAboveShowHideSkIng" ;
document.getElementsByClassName("accordion_notAllergicToAnyIng")[0].classList.remove("showElement");
document.getElementsByClassName("accordion_notAllergicToAnyIng")[1].classList.remove("showElement");
//document.getElementById("showHideSKingredients").style.border = "1px solid grey" ;
document.getElementById("showHideSKingredients").classList.remove("option_selected1") ;
document.getElementsByClassName("accordionSKingredients")[0].style.display = "none" ;
document.getElementsByClassName("accordionSKingredients")[1].style.display = "none" ;
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
/////////////////////////// if (windowwidth < 900) {

/////////////////////////// targeturl = refurl + "?display=mobile&size=stacked&source_trigger=ext&lang=" + lang + "&ingredientsToExclude=" + ingredientsToExcludeValues_arr_str + "&riskgroupsToExclude=" + riskgroupsExclusionListValues_arr_str ;
/////////////////////////// } else {
targeturl = refurl + "?display=default&size=width&source_trigger=ext&lang=" + lang + "&ingredientsToExclude=" + ingredientsToExcludeValues_arr_str + "&riskgroupsToExclude=" + riskgroupsExclusionListValues_arr_str ;
/////////////////////////// }
document.getElementById("iframeExclusionList").src = targeturl ;
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
//if (e.id === "saveInfoIcon") {
//document.getElementById("saveInfo").classList.toggle("showElement");
//}
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
//manage select product options
if (e.classList.contains("selectProduct")) {
//reset all borders to default
let selectProduct = document.getElementsByClassName("selectProduct");
var i;
for (i = 0; i < selectProduct.length; i++) {
//selectProduct[i].style.border = "1px solid #1895E2";
selectProduct[i].style.border = "0px solid #1895E2";
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
////////////////////////////if ((selectedProduct === "anyList") || (selectedProduct === "anyList_text") || (selectedProduct === "anyList_icon")){
//case "anyList" :
//document.getElementById("anyList").href= "#topOfDiagInput" ;
////////////////////////////document.getElementById("selectedProduct").innerHTML = "My List" ;
////////////////////////////document.getElementById("selectedProductprofile").innerHTML = "My List" ;
////////////////////////////document.getElementById("selectedProductdiag").innerHTML = "My List" ;
////////////////////////////let ingredients_textarea = document.getElementById("ingredients_textarea") ;
////////////////////////////selectedIngredientList = ingredients_textarea.value ;
  //the 1 liner below is added on 20220116 to avoid user going to next slide before selected a list of ingredients
////////////////////////////  document.getElementById("selectedIngredientList").innerHTML = selectedIngredientList ;
  //
////////////////////////////document.getElementById("ingredients_textarea").style.border = "5px solid #1895E2" ;
////////////////////////////document.getElementById("anyList").classList.add("option_selected1") ;
////////////////////////////document.getElementById("anyList_text").style.display = "none" ;
////////////////////////////document.getElementById("anyList_icon").style.display = "block" ;
////////////////////////////var slideIndex = 1 ;
////////////////////////////plusSlides() ;
//break ;
////////////////////////////} else {
////////////////////////////let product_designation ;
////////////////////////////if (selectedProduct === "HG150x1") {
//case "HG150x1" :
////////////////////////////product_designation = "Hydrating Gel" ;
//break ;
//case "ML200x1" :
////////////////////////////} else if (selectedProduct === "ML200x1") {
////////////////////////////product_designation = "Moisturizing Lotion" ;
//break ;
//case "CL200x1" :
////////////////////////////} else if (selectedProduct === "CL200x1") {
////////////////////////////product_designation = "Cleanser Lotion" ;
//break ;
//case "PC40x1" :
////////////////////////////} else if (selectedProduct === "PC20x1") {
////////////////////////////product_designation = "Protective Cream" ;
//break ;
//default:
//} else if (selectedProduct === "recoProduct1_img") {
//let selectedProduct_root = selectedProduct.replace("_img","");
//let selectedProduct_corr = selectedProduct_root.concat("or") ;
//selectedProduct = document.getElementById(selectedProduct_corr).innerText ;
//product_designation = document.getElementById("recoProduct1_name").innerText ;
//selectedProduct = document.getElementById("recoProduct1or").innerText ;
//document.getElementsByClassName("accordionRecoGoMila")[0].style.display = "block" ;
//document.getElementsByClassName("accordionRecoInstructionMILA")[0].style.display = "none" ;
////////////////////////////} else if (selectedProduct === "recoProduct1_mila") {
////////////////////////////product_designation = document.getElementById("recoProduct1_name").innerText ;
////////////////////////////selectedProduct = document.getElementById("recoProduct1or").innerText ;
////////////////////////////document.getElementsByClassName("accordionRecoInstructionMILA")[0].style.display = "none" ;
////////////////////////////document.getElementsByClassName("accordionProductReviews")[0].style.display = "none" ;
////////////////////////////setTimeout(openMILA, 1000) ;
//} else if (selectedProduct === "recoProduct2_img") {
//product_designation = document.getElementById("recoProduct2_name").innerText ;
//selectedProduct = document.getElementById("recoProduct2or").innerText ;
//document.getElementsByClassName("accordionRecoGoMila")[0].style.display = "block" ;
//document.getElementsByClassName("accordionRecoInstructionMILA")[0].style.display = "none" ;
////////////////////////////} else if (selectedProduct === "recoProduct2_mila") {
////////////////////////////product_designation = document.getElementById("recoProduct2_name").innerText ;
////////////////////////////selectedProduct = document.getElementById("recoProduct2or").innerText ;
////////////////////////////document.getElementsByClassName("accordionRecoInstructionMILA")[0].style.display = "none" ;
////////////////////////////document.getElementsByClassName("accordionProductReviews")[0].style.display = "none" ;
////////////////////////////setTimeout(openMILA, 1000) ;
//} else if (selectedProduct === "recoProduct3_img") {
//product_designation = document.getElementById("recoProduct3_name").innerText ;
//selectedProduct = document.getElementById("recoProduct3or").innerText ;
//document.getElementsByClassName("accordionRecoGoMila")[0].style.display = "block" ;
//document.getElementsByClassName("accordionRecoInstructionMILA")[0].style.display = "none" ;
////////////////////////////} else if (selectedProduct === "recoProduct3_mila") {
////////////////////////////product_designation = document.getElementById("recoProduct3_name").innerText ;
////////////////////////////selectedProduct = document.getElementById("recoProduct3or").innerText ;
////////////////////////////document.getElementsByClassName("accordionRecoInstructionMILA")[0].style.display = "none" ;
////////////////////////////document.getElementsByClassName("accordionProductReviews")[0].style.display = "none" ;
////////////////////////////setTimeout(openMILA, 1000) ;
////////////////////////////} else if (selectedProduct === "recoProduct1_reviews") {
////////////////////////////document.getElementById("recoProduct1_reviews").href = "#topMILA" ;
//let productUrl = document.getElementById("recoProduct1_url").href ;
////////////////////////////selectedProduct = document.getElementById("recoProduct1or").innerText ;
////////////////////////////let productUrl = "https://www.skintifique.me/shop/fr/avisclients" ;
////////////////////////////let productUrl_reviews = productUrl + "?skshow=reviewsframe&skproduct=" + selectedProduct ;
////////////////////////////document.getElementById("iframeProductReviews").src = productUrl_reviews ;
////////////////////////////document.getElementsByClassName("accordionProductReviews")[0].style.display = "block" ;
////////////////////////////document.getElementsByClassName("iframeMILA")[0].style.display = "none" ;
////////////////////////////document.getElementsByClassName("accordionRecoGoMila")[0].style.display = "none" ;
////////////////////////////document.getElementsByClassName("accordionProfileGoMila")[0].style.display = "none" ;
////////////////////////////document.getElementsByClassName("accordionDiagGoMila")[0].style.display = "none" ;
////////////////////////////} else if (selectedProduct === "recoProduct2_reviews") {
////////////////////////////document.getElementById("recoProduct2_reviews").href = "#topMILA" ;
//let productUrl = document.getElementById("recoProduct2_url").href ;
////////////////////////////selectedProduct = document.getElementById("recoProduct2or").innerText ;
////////////////////////////let productUrl = "https://www.skintifique.me/shop/fr/avisclients" ;
////////////////////////////let productUrl_reviews = productUrl + "?skshow=reviewsframe&skproduct=" + selectedProduct ;
////////////////////////////document.getElementById("iframeProductReviews").src = productUrl_reviews ;
////////////////////////////document.getElementsByClassName("accordionProductReviews")[0].style.display = "block" ;
////////////////////////////document.getElementsByClassName("iframeMILA")[0].style.display = "none" ;
////////////////////////////document.getElementsByClassName("accordionRecoGoMila")[0].style.display = "none" ;
////////////////////////////document.getElementsByClassName("accordionProfileGoMila")[0].style.display = "none" ;
////////////////////////////document.getElementsByClassName("accordionDiagGoMila")[0].style.display = "none" ;
////////////////////////////} else if (selectedProduct === "recoProduct3_reviews") {
////////////////////////////document.getElementById("recoProduct3_reviews").href = "#topMILA" ;
//let productUrl = document.getElementById("recoProduct3_url").href ;
////////////////////////////selectedProduct = document.getElementById("recoProduct3or").innerText ;
////////////////////////////let productUrl = "https://www.skintifique.me/shop/fr/avisclients" ;
////////////////////////////let productUrl_reviews = productUrl + "?skshow=reviewsframe&skproduct=" + selectedProduct ;
////////////////////////////document.getElementById("iframeProductReviews").src = productUrl_reviews ;
////////////////////////////document.getElementsByClassName("accordionProductReviews")[0].style.display = "block" ;
////////////////////////////document.getElementsByClassName("iframeMILA")[0].style.display = "none" ;
////////////////////////////document.getElementsByClassName("accordionRecoGoMila")[0].style.display = "none" ;
////////////////////////////document.getElementsByClassName("accordionProfileGoMila")[0].style.display = "none" ;
////////////////////////////document.getElementsByClassName("accordionDiagGoMila")[0].style.display = "none" ;
////////////////////////////} else if (selectedProduct === "confirm_inputProduct") {
////////////////////////////document.getElementById("confirm_inputProduct").href = "#topOfDiagInput" ;
////////////////////////////document.getElementsByClassName("accordionInputProduct")[0].style.display = "none" ;
//document.getElementById("inputProduct_name").innerText = "inputProduct_nameDEV" ;
////////////////////////////product_designation = document.getElementById("inputProduct_code").innerText ;
//reset selectedProduct
////////////////////////////selectedProduct = product_designation ;
// reset slideIndex and show first appropriate slide
////////////////////////////var slideIndex = 0 ;
////////////////////////////plusSlides() ;
//show elements for the personal diag questions
////////////////////////////document.getElementsByClassName("prevnextbuttons")[0].style.display = "block" ;
////////////////////////////} else {
////////////////////////////product_designation = selectedProduct ;
////////////////////////////}
////////////////////////////document.getElementById("selectedProduct").innerHTML = "Skintifique - " + product_designation ;
////////////////////////////document.getElementById("selectedProductprofile").innerHTML = "Skintifique - " + product_designation ;
////////////////////////////document.getElementById("selectedProductdiag").innerHTML = "Skintifique - " + product_designation ;
////////////////////////////document.getElementById("selectedProductreco").innerHTML = "Skintifique - " + product_designation ;
// could add a script to build ingredient list for SK packs
////////////////////////////let selectedProduct_ingredients = selectedProduct.concat("_ingredients") ;
////////////////////////////selectedIngredientList = document.getElementById(selectedProduct_ingredients).innerText ;
////////////////////////////document.getElementById("ingredients_textarea").style.border = "2px solid #00b6e2" ;
////////////////////////////}
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
///////////////////////////case "profileOption" :
//reset slideIndex
//slideIndex = 1;
//
//document.getElementById(selectedOption).style.border = "5px solid #1895E2" ;
///////////////////////////document.getElementById(selectedOption).classList.add("topOption_selected") ;
///////////////////////////document.getElementById("profileOption_button").style.opacity = "1" ;
///////////////////////////document.getElementById("recoOption_button").style.opacity = "0.3" ;
//hide the text under the GoAnalyse btn and hide the MILA analysis
//iframeMILA.style.display = "none" ;
///////////////////////////document.getElementById("textUnderMILAprofileBtn").style.display = "none" ;
//show all the accordion elements with the selectedOption class
///////////////////////////let accordionProfile = document.getElementsByClassName("accordionProfile") ;
///////////////////////////let i;
///////////////////////////for (i = 0; i < accordionProfile.length; i++) {
///////////////////////////accordionProfile[i].style.display = "block" ;
///////////////////////////}
//replace profileOptionText1 by profileOptionText2
///////////////////////////document.getElementById("profileOptionText1").style.display = "none" ;
///////////////////////////document.getElementById("profileOptionText2").style.display = "block" ;
//store the selectedTopOption
///////////////////////////document.getElementById("selectedTopOption").innerHTML = "profileOption" ;
//reset slideIndex
///////////////////////////var slideIndex = 1 ;
///////////////////////////break;
/////////////////////////// case "diagOption" :
//reset slideIndex
//slideIndex = 1;
//
//document.getElementsByClassName("diagOption")[1].style.display = "block" ;
///////////////////////////document.getElementById(selectedOption).href = "#topOfDiagInput" ;
///////////////////////////document.getElementById(selectedOption).classList.add("option_selected1") ;
//document.getElementById("diagOption").classList.add("option_selected1") ;
///////////////////////////document.getElementById("openMILAprofile").classList.remove("option_selected1") ;
//show the top of the sliderfor the selectedOption class
///////////////////////////document.getElementsByClassName("accordionDiag")[0].style.display = "block" ;
///////////////////////////document.getElementsByClassName("accordionDiag")[1].style.display = "block" ;
///////////////////////////document.getElementsByClassName("accordionDiag")[2].style.display = "block" ;
///////////////////////////document.getElementsByClassName("accordionDiag")[3].style.display = "block" ;
//show the starting (new) slide for the selectedOption class and reset the slideIndex
//slideIndex = 2;
//document.getElementsByClassName("slideDiag")[2].style.display = "block" ;
//hide the text under the GoAnalyse btn and hide the MILA analysis
//iframeMILA.style.display = "none" ;
///////////////////////////document.getElementById("textUnderMILAdiagBtn").style.display = "none" ;
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
///////////////////////////document.getElementById("diagOptionText1").style.display = "none" ;
///////////////////////////document.getElementById("diagOptionText2").style.display = "block" ;
//store the selectedTopOption
///////////////////////////document.getElementById("selectedTopOption").innerHTML = "diagOption" ;
//show appropirate slide
//document.getElementsByClassName("slideDiag")[2].style.display = "block" ;
//var slideIndex = 4 ;
//showSlides(slideIndex += 3) ;
///////////////////////////var slideIndex = 2 ;
///////////////////////////plusSlides();
// show prevnextbuttons
///////////////////////////document.getElementsByClassName("prevnextbuttons")[0].style.display = "block" ;
///////////////////////////break;
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
//navigation options
///////////////////////////switch (selectedOption) {
///////////////////////////case "recoPath_diag" :
///////////////////////////document.getElementById("recoPath_diag").href = "#topOfDiagInput" ;
///////////////////////////document.getElementById("recoPath_diag").classList.add("option_selectedRecoPath") ;
///////////////////////////document.getElementById("recoPath_direct").classList.remove("option_selectedRecoPath") ;
///////////////////////////plusSlides();
///////////////////////////break;
///////////////////////////case "recoPath_direct" :
///////////////////////////document.getElementById("recoPath_diag").classList.remove("option_selectedRecoPath") ;
//document.getElementById("recoPath_direct").classList.add("option_selectedRecoPath") ;
///////////////////////////document.getElementById("recoPath_direct").classList.add("option_selected1") ;
///////////////////////////let slideIndex = document.getElementsByClassName("slideReco").length ;
///////////////////////////document.getElementsByClassName("slideReco")[slideIndex-1].style.display = "block" ;
///////////////////////////break;
///////////////////////////case "notAllergicToAnyIng" :
//hide sk ingredients and iframeExclusion list if they have been opened
///////////////////////////document.getElementsByClassName("accordionSKingredients")[0].style.display = "none" ;
///////////////////////////document.getElementsByClassName("accordionSKingredients")[1].style.display = "none" ;
///////////////////////////document.getElementsByClassName("accordionExclusionList")[0].style.display = "none" ;
///////////////////////////break;
///////////////////////////}
//END navigation options
//ENDoptions in ingredient slide
//options in recommendation section
let accordionSolution = document.getElementsByClassName("accordionSolution") ;
let diag_solution = document.getElementsByClassName("diag_solution") ;
 let diag_moisturizer = document.getElementsByClassName("diag_moisturizer") ;
 let diag_cleanser = document.getElementsByClassName("diag_cleanser") ;
//////////////////////////////switch (selectedOption) {
/////////////////////////////
///////////////////////////// }
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
//START script to do stuff when user comes in with flamclip or inputProduct urlparameter
let urlParamsCurrentUrl = new URLSearchParams(current_url);
//case when url parameter includes urlProduct
let inputProduct = urlParamsCurrentUrl.get('inputProduct') ;
if (inputProduct) {
document.getElementsByClassName("accordionInputProduct")[0].style.display = "block" ;
document.getElementById("inputProduct_code").innerText = inputProduct ;
//store the selectedTopOption
document.getElementById("selectedTopOption").innerHTML = "profileOption" ;
//get the inputProduct name and image
let sk_img = document.getElementById("productImg").innerText ;
const sk_img_const = JSON.parse(sk_img) ;
let inputProduct_img = sk_img_const[inputProduct] ;
let sk_names_fr = document.getElementById("productName_fr").innerText ;
const sk_names_fr_const = JSON.parse(sk_names_fr) ;
let inputProduct_name_fr = sk_names_fr_const[inputProduct] ;
document.getElementById("inputProduct_img").src = inputProduct_img ;
document.getElementById("inputProduct_name").innerText = inputProduct_name_fr ;
//hide and style the appropriate elements
document.getElementById("profileOption").style.border = "5px solid #1895E2" ;
document.getElementById("recoOption_button").style.opacity = "0.3" ;
// hide the text under the top options
document.getElementById("textUnderTopOptions").style.display = "none" ;
}
//case when url parameter includes flamclip
let flamclip = urlParamsCurrentUrl.get('flamclip') ;
if (flamclip > 0 ) {
document.getElementById("flamclipText1").style.display = "block" ;
//do the standard things to do when selectedOption = profileOption
document.getElementById("profileOption").style.border = "5px solid #1895E2" ;
document.getElementById("recoOption_button").style.opacity = "0.3" ;
// hide the text under the top options
document.getElementById("textUnderTopOptions").style.display = "none" ;
//show all the accordion elements with the selectedOption class
let accordionProfile = document.getElementsByClassName("accordionProfile") ;
let i;
for (i = 0; i < accordionProfile.length; i++) {
accordionProfile[i].style.display = "block" ;
}
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
//document.getElementById("countength ;
//_space_dash_space").innerHTML = count_space_dash_space ;
const array_space_slash_space = selectedIngredients_tosplit.split(" / ");
let count_space_slash_space = array_space_slash_space.length ;
const array_space_bigdot_space = selectedIngredients_tosplit.split(" • ");
let count_space_bigdot_space = array_space_bigdot_space.length ;
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
//actions when button confirm_excludedIngredients is clicked
//document.getElementById("confirm_excludedIngredients").addEventListener("click", confirmExcludedIngredients) ;
//function confirmExcludedIngredients() {
//let ingredientsToExclude3 = document.getElementById("ingredientsToExclude").innerText ;
//let ingredientsToExcludeValues3 = document.getElementById("ingredientsToExcludeValues").innerText ;
//let riskgroupsExclusionListLabels3 = //document.getElementById("riskgroupsExclusionListLabels").innerText ;
//let riskgroupsExclusionListValues3 = document.getElementById("riskgroupsExclusionListValues").innerText ;
//localStorage.setItem("MILA_ingredientsToExclude",ingredientsToExclude3) ;
//localStorage.setItem("MILA_ingredientsToExcludeValues",ingredientsToExcludeValues3) ;
//localStorage.setItem("MILA_riskgroupsExclusionListLabels",riskgroupsExclusionListLabels3) ;
//localStorage.setItem("MILA_riskgroupsExclusionListValues",riskgroupsExclusionListValues3) ;
//}
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
let lang2 ;
if (current_url.includes("/en/")) {
lang2 = "en-us" ;
} else if (current_url.includes("/fr/")) {
lang2 = "fr-fr" ;
} else {
lang2 = "en-us" ;
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
if (lang2 === "fr-fr") {
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
let recoProduct1_url ;
let recoProduct2_url ;
let recoProduct3_url ;
if (lang2 === "fr-fr") {
let productUrl_fr_from_front = document.getElementById("productUrl_fr").innerText ;
const productUrl_fr = JSON.parse(productUrl_fr_from_front) ;
recoProduct1_url = productUrl_fr[recoProduct1];
recoProduct2_url = productUrl_fr[recoProduct2];
recoProduct3_url = productUrl_fr[recoProduct3];
} else {
let productUrl_us_from_front = document.getElementById("productUrl_us").innerText ;
const productUrl_us = JSON.parse(productUrl_us_from_front) ;
recoProduct1_url = productUrl_us[recoProduct1];
recoProduct2_url = productUrl_us[recoProduct2];
recoProduct3_url = productUrl_us[recoProduct3];
} 
document.getElementById("recoProduct1_url").href = recoProduct1_url ;
document.getElementById("recoProduct2_url").href = recoProduct2_url ;
document.getElementById("recoProduct3_url").href = recoProduct3_url ;
// publish specific messages to user NOTE: NEED TO MAKE SURE selectedSKINTYPE is stored before this process!
let selectedSkinType = document.getElementById("selectedSkinType").innerText ;
if (selectedSkinType === "reactive") {
if (lang2 === "fr-fr") {
document.getElementById("recoProducts_message1").innerHTML = "Nos produits sont certainement parmi les plus sûrs au monde, mais puisque votre peau est réactive, nous vous recommandons de faire un test sur une petite partie de votre peau. S'il n'y pas de réaction après 10-15 minutes, alors ce produit devrait être sûr pour vous, et vous pouvez l'utiliser autant que vous le souhaitez!"
} else {
document.getElementById("recoProducts_message1").innerHTML = "Our products are certainly among the safest in the world. Yet, as you have reactive skin, we recommend you test on a small part of your body. If there is no reaction after 10-15 minutes, then this product should be safe for you and you can use it as much as you please!"
}
} else {
document.getElementById("recoProducts_message1").innerHTML = "" ;
}
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
document.getElementById("recoProduct1Allergic").innerText = "⚠️ " + recoProduct1_bad_ing ;
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
document.getElementById("recoProduct2Allergic").innerText = "⚠️ " + recoProduct2_bad_ing ;
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
document.getElementById("recoProduct3Allergic").innerText = "⚠️ " + recoProduct3_bad_ing ;
document.getElementById("recoProduct3Allergic").style.color = "red" ;
}
//END check that and signal if product contains ingredients that user is allergic to
}
//END actions when button openMILArecoSKproduct is clicked
// -
//START function to open iframeMILA with appropriate url and parameters for selectedTopOption
document.getElementById("openMILAprofile").addEventListener("click", function () {setTimeout(openMILAprofile, 500)});
function openMILAprofile () {
document.getElementById("openMILAprofile").href = "#topMILA" ;
document.getElementById("selectedTopOption").innerText = "profileOption" ;
//hide iframeMILA and other elements
document.getElementsByClassName("iframeMILA")[0].style.display = "none" ;
//END hide all the elements that have been shown previously if user has used diagOption
document.getElementById("openMILAprofile").classList.add("option_selected1") ;
document.getElementById("diagOption").classList.remove("option_selected1") ;
//document.getElementsByClassName("accordionProfileGoMila")[0].style.display = "block" ;
openMILA ();
}
document.getElementById("openMILAdiag").addEventListener("click", function () {setTimeout(openMILA, 500)}) ;
//document.getElementById("openMILAreco").addEventListener("click", openMILA) ;
function openMILA() {
let lang3 ;
if (current_url.includes("/en/")) {
lang3 = "en-us" ;
} else if (current_url.includes("/fr/")) {
lang3 = "fr-fr" ;
} else {
lang3 = "en-us" ;
}
let textAboveMILAiFrame ;
if (lang3 === "fr-fr") {
textAboveMILAiFrame = "Merci de patienter quelques secondes, le temps d'afficher le profil de sûreté" ;
} else {
textAboveMILAiFrame = "Please wait a few seconds for the safety profile to be displayed below" ;
}
document.getElementById("textAboveMILAiFrame").innerText = textAboveMILAiFrame ;
document.getElementById("textAboveMILAiFrame").style.display = "block" ;
let selectedTopOption = document.getElementById("selectedTopOption").innerText ;
let iframeMILA = document.getElementById("iframeMILA") ;
document.getElementsByClassName("iframeMILA")[0].style.display = "block" ;
document.getElementsByClassName("iframeMILA")[1].style.display = "block" ;
document.getElementsByClassName("iframeMILA")[2].style.display = "block" ;
let selectedProductName = document.getElementById("selectedProduct").innerText ;
let selectedIngredientList = document.getElementById("selectedIngredientList").innerText ;
//remove accents before encoding
let selectedIngredientList_cleaned = selectedIngredientList.normalize('NFD').replace(/[\u0300-\u036f]/g, "") ;
let str = "new_product_composition2=" + selectedIngredientList_cleaned ;
let ingredients_encoded = window.btoa(str);
if (selectedTopOption === "profileOption") {
document.getElementsByClassName("accordionProfileGoMila")[0].style.display = "block" ;
///////////////////////////iframeMILA.src = "https://flamingo.skintifique.me/v/RiU4fevditvb?dtype=profile&source_trigger=ext&lang=" + lang3 + "&product_name=" + selectedProductName + "&urlcode=" + ingredients_encoded ;
} else if ((selectedTopOption === "recoOption") || (selectedTopOption === "diagOption")) {
if (selectedTopOption === "diagOption") {
document.getElementsByClassName("accordionDiagGoMila")[0].style.display = "block" ;
} else if (selectedTopOption === "recoOption") {
document.getElementsByClassName("accordionRecoGoMila")[0].style.display = "block" ;
}
let selectedGender = document.getElementById("selectedGender").innerText ;
let selectedSkinType = document.getElementById("selectedSkinType").innerText ;
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
///////////////////////////iframeMILA.src = "https://flamingo.skintifique.me/v/RiU4fevditvb?dtype=diag&source_trigger=ext&product_name=" + selectedProductName + "&gender=" + selectedGender + "&skin_type=" + selectedSkinType + "&frequency=" + selectedFrequency + "&skin_area=" + selectedSkinArea + "&conditions=" + selectedConditions + "&lang=" + lang3 + "&ingredientsToExclude=" + ingredientsToExclude_arr_str + "&riskGroupsToExclude=" + riskgroupsExclusionList_arr_str + "&urlcode=" + ingredients_encoded ;
//the 2 lines of code below are expected to set the height of the iframe to the content inside. The inline style of the iframe may need to be removed + the height of the inside content may need to be adapted
///////////////////////////iframeMILA.onload = function(){
///////////////////////////iframeMILA.style.height = iframeMILA.contentWindow.document.body.scrollHeight + 'px';
///////////////////////////}
//END script to adapt height of iframeMILA
}
}
// script to manage the bad ingredients lists
// Add a "checked" symbol when clicking on a list item
///////////////////////////let list = document.querySelector("#bad_ingredient_list");
///////////////////////////list.addEventListener("click", function(ev) {
///////////////////////////if (ev.target.tagName === "LI") {
///////////////////////////ev.target.classList.toggle("checked");
///////////////////////////document.getElementById("allergicTo_no_SK_ingredient").style.border = "1px solid grey" ;
///////////////////////////}
///////////////////////////}, false);
///////////////////////////let list2 = document.querySelector("#bad_ingredient_list2");
///////////////////////////list2.addEventListener("click", function(ev) {
///////////////////////////if (ev.target.tagName === "LI") {
///////////////////////////ev.target.classList.toggle('checked');
///////////////////////////document.getElementById("allergicTo_no_SK_ingredient").style.border = "1px solid grey" ;
///////////////////////////}
///////////////////////////}, false);
///////////////////////////let list3 = document.querySelector("#bad_ingredient_list3");
///////////////////////////list3.addEventListener("click", function(ev) {
///////////////////////////if (ev.target.tagName === "LI") {
///////////////////////////ev.target.classList.toggle("checked");
///////////////////////////document.getElementById("allergicTo_no_SK_ingredient").style.border = "1px solid grey" ;
///////////////////////////}
///////////////////////////}, false);
///////////////////////////let list4 = document.querySelector("#bad_ingredient_list4");
///////////////////////////list4.addEventListener("click", function(ev) {
///////////////////////////if (ev.target.tagName === "LI") {
///////////////////////////ev.target.classList.toggle("checked");
///////////////////////////document.getElementById("allergicTo_no_SK_ingredient").style.border = "1px solid grey" ;
///////////////////////////}
///////////////////////////}, false);
///////////////////////////let span = document.createElement("SPAN");
///////////////////////////let txt = document.createTextNode("\u00D7");
///////////////////////////span.className = "close";
///////////////////////////span.appendChild(txt);
///////////////////////////li.appendChild(span);
///////////////////////////for (i = 0; i < close.length; i++) {
///////////////////////////close[i].onclick = function() {
///////////////////////////let div = this.parentElement;
///////////////////////////div.style.display = "none";
///////////////////////////}
///////////////////////////}
}
// END OF SCRIPT FOR MILA PAGE
