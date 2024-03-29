//module for gotoamz to add to all pages//

//store and get skaid if any//
const url_params = new URLSearchParams(window.location.search);
let skaid = url_params.get("skaid");
if (skaid) {
	sessionStorage.setItem("skaid",skaid);
} else {
let skaid2 = sessionStorage.getItem("skaid") ;	
if (skaid2) {
	skaid = skaid2 ;
	} else {
	skaid = "none" ;
	}
}	  
	  
//detect click event then gotoamz if event element is with appropriate class//	  
    document.addEventListener("click", goToAmz);
    
    function goToAmz(event) { 

//identify if the click occured on a gotoamz class button//
    let classes = event.target.parentElement.classList ;	    
    if (classes.contains("go_to_amz_btn"))  {

 //identify traffic country source//
let traffic_source ;
if (skaid.includes("fr")){
	traffic_source = "fr" ;
} else if (skaid.includes("us")){
	traffic_source = "us" ;
} else if (skaid.includes("uk")){
	traffic_source = "uk" ;
} else {
	traffic_source = "us" ;
}

// get url language //
let current_url = window.location.href ;
let url_lang ;
if (current_url.includes("/fr/")) {
	url_lang = "fr" ;
} else if (current_url.includes("/en/")) {
	url_lang = "en" ;
} else {	
	url_lang = "en" ;
}	

// get target amz shop and tag //
let amz_shop ;
let amz_tag ;
if (url_lang === "fr") {
	amz_shop = ".fr" ;
  amz_tag = "skintifique-21" ;
} else if (url_lang === "en") {
  if (traffic_source === "uk") {
    amz_shop = ".co.uk" ;
    amz_tag = "skintifiqueOf-21" ;
    } else {
	  amz_shop = ".com" ;
    amz_tag = "skintifique00-20" ;
    }
 }
 
      
//select the target product asin //
    let selected_asin ;
    let selected_btn = event.target.parentElement.id ;
    let selected_btn_code ;

	    
//identify if the button is on ps product page and if so one needs to get the appropriate product_id //
if (selected_btn === "go_to_amz_btn"){

let product_referenceAff = document.getElementsByClassName("product-reference") ;
let product_referenceAff2 = product_referenceAff[0].querySelector("[itemprop=sku]").textContent ;

switch (product_referenceAff2) {
	case "SKP1300003":
	selected_btn_code = "CLx1"
	break;
	default:
	selected_btn_code = "HG_facex1"
	}
} else {
	selected_btn_code = selected_btn ;
	}
	
	
	
//    let selected_btn_option = "asin-" + selected_btn ; //	    
//    let selected_list = document.getElementById(selected_btn_option) ; //
 //   selected_list.value = amz_shop ; //
      
 //           for (var i = 0; i < selected_list.length; i++) { //
 //               var option = selected_list.options[i]; //
 //               if (option.value == amz_shop) { //
//                    selected_asin = option.text; //
 //               } //
//            } //
//} else { //
//then the button is on wp or a non-product ps page//	

    switch (selected_btn_code)  { 
      case "HG_facex1":
        if (amz_shop === ".com") {
          selected_asin = "asinHG_faceUS" ;
          } else if (amz_shop === ".fr") {
          selected_asin = "asinHG_faceFR" ;
          } else if (amz_shop === ".co.uk") {
          selected_asin = "asinHG_faceUK" ;
          } else {
          selected_asin = "asinHG_faceUS" ;
          }
        break;
      case "HG_bodyx1":
        if (amz_shop === ".com") {
          selected_asin = "asinHG_bodyUS" ;
          } else if (amz_shop === ".fr") {
          selected_asin = "asinHG_bodyFR" ;
          } else if (amz_shop === ".co.uk") {
          selected_asin = "asinHG_bodyUK" ;
          } else {
          selected_asin = "asinHG_faceUS" ;
          }
        break;
        case "CLx1":
        if (amz_shop === ".com") {
          selected_asin = "asinCLx1US" ;
          } else if (amz_shop === ".fr") {
          selected_asin = "asinCLx1FR" ;
          } else if (amz_shop === ".co.uk") {
          selected_asin = "asinCLx1UK" ;
          } else {
          selected_asin = "asinCLx1US" ;
          }
        break;
      default:
          selected_asin = "" ;    
      }
	    
//devise target url //
let amz_url ;
if (selected_asin) { 
	amz_url = "https://www.amazon" + amz_shop + "/dp/" + selected_asin + "/?tag=" + amz_tag ;
    } else {
	amz_url = "https://www.amazon" + amz_shop + "/s?k=skintifique&tag=" + amz_tag ;
	}

//document.getElementById("showp").innerHTML = amz_url ;//
//--window.open(amz_url, "_blank") ;--//
	    
document.getElementById(selected_btn).target = "_blank" ;	    
document.getElementById(selected_btn).href = amz_url ;
	    
       }
   }
