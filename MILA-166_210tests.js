let current_urlMILA = window.location.href ;
//////this vs: clean lang (several variables in the code)
//functions for MILA page
//the lines of code above and below are just for when the script is called externally. they need to be removed if plugged into the js theme again
if (current_urlMILA.includes("/166-mila")) {
//////show mila-166 version
 document.getElementById("milaJsVs").innerHTML = "THIS PAGE IS IN DEVELOPMENT / CETTE PAGE EST EN DEVELOPPEMENT 34" ;

//function to select product and other options
///////document.body.addEventListener("click", function(selectProduct) {
////////////document.getElementById("recoOption").addEventListener("click", function(selectProduct) {
///////let e = selectProduct.target ;
///////let e_style = getComputedStyle(e) ;
///////let e_cursor = e_style.cursor;

///////if (e_cursor === "pointer") {

//script to select options
///////let selectedOption = e.id ;
///////let selectedOption_class = e.classList ;
//manage situations when user clicks on text below the top optoin images
//////////////////if ((selectedOption === "recoOptionText00") || (selectedOption === "recoOptionText01") || (selectedOption === "recoOptionText02")){
//////////////////selectedOption = "recoOption" ;
//////////////////} else if ((selectedOption === "profileOptionText0") || (selectedOption === "profileOptionText01") || (selectedOption === "profileOptionText02")){
//////////////////selectedOption = "profileOption" ;
//////////////////}
//END manage situations when user clicks on text below the top optoin images
//manage situations when user clicks on element that is a 1st child of an option

//////////////////if (selectedOption_class.contains("inside_option")) {
//let selectedOption_parent = document.getElementById(selectedOption).parentElement.id ;
//////////////////let selectedOption_parent = e.parentElement.id ;
//////////////////selectedOption = selectedOption_parent ;
//////////////////}
/+++
///////}
/+++
///////});
}
// END OF SCRIPT FOR MILA PAGE
