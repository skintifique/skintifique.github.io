let current_urlMILA = window.location.href ;

if (current_urlMILA.includes("/166-mila")) {
//////show mila-166 version
 document.getElementById("milaJsVs").innerHTML = "THIS PAGE IS IN DEVELOPMENT / CETTE PAGE EST EN DEVELOPPEMENT 8" ;
 let current_url = window.location.href ;
 document.getElementById("milaJsVs2").innerHTML = current_url ;

let anchorlinks = document.querySelectorAll('a[href^="#"]')
 
for (let item of anchorlinks) { // relitere 
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}

//document.addEventListener("touchstart", function(event) {event.preventDefault(); event.stopImmediatePropagation(); event.stopPropagation();});
//document.addEventListener("touchend", function(event) {event.preventDefault(); event.stopImmediatePropagation(); event.stopPropagation();});
//document.getElementById("recoOption").addEventListener("click", function() {selectOptionOrProduct(this);});
 }
//function to select product and other options
///////document.body.addEventListener("click", function(selectProduct) {
function selectOptionOrProduct(selectProduct) {
////////////document.getElementById("recoOption").addEventListener("click", function(selectProduct) {
//////let e = selectProduct.target ;
//////let e_style = getComputedStyle(e) ;
//////let e_cursor = e_style.cursor;
document.getElementById("milaJsVs2").innerHTML = "selectOptionProduct" ;
}
/////////if (e_cursor === "pointer") {

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
//+++
///////}
//+++
///////});
//}
// END OF SCRIPT FOR MILA PAGE
