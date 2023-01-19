//module for gotoamz to add to all pages//
//gtamz buttons on ps product pages (only 1 possible) should be identified as <a id="go_to_amz_btn" class="(xxx) go_to_amz_btn" target="_blank"><img src="yyy" /img></a>, and the product SKP indicated as the product Reference in the cms or with code: <a class="product-reference"><label class="label">Reference</label><span itemprop="sku">SKPxxx</span></a> //
//gtamz buttons on other pages (several possible) should be identified as <a id="product_code" class="(xxx) go_to_amz_btn" target="_blank">><img src="yyy" /img></a>, where "product_code" is in the skp_productCode constant below //
//the constants providing correspondance between productCodes and asin in US and EU AMZshops are provided below and need to be updated! //

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
  const skaid_tag_amzfr = {skp201frtestdktess:"amzfr_tag_test1",skp202frtestdktess:"amzfr_tag_test2"} ;
  let amz_tag0 = skaid_tag_amzfr[skaid] ;
  if (amz_tag0) {
    amz_tag = amz_tag0 ;
  } else {
    amz_tag = "skintifique-21" ;
  }
  
  
  
  
  
//  amz_tag = "skintifique-21" ;
} else if (url_lang === "en") {
  if (traffic_source === "uk") {
    amz_shop = ".co.uk" ;
    amz_tag = "skintifique0f-21" ;
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
// ligne de code ci-dessous est ok mais pas quand il y a plusieurs elements avec class product-reference	
//let product_referenceAff2 = product_referenceAff[0].querySelector("[itemprop=sku]").textContent ;
// code ci-dessous pour tolerer les situations ou il y a plusieurs elements avec class product-reference
let product_referenceAff2 = document.querySelector("[itemprop=sku]").textContent ;
	

const skp_productCode = {SKP2200616:"LCx1",SKP2200619:"LSx1",SKP2200644:"MBx1",SKP2200645:"MATU_pack",SKP2200631:"EXEE_body_pack",SKP1300002:"ML200x1",SKP1300003:"CL200x1",SKP1400007:"PC20x1",SKP1400010:"HG40x1",SKP1700310:"HG150x1",SKP1400121:"DISC_pack",SKP2200647:"PSO_balm_pack",SKP1400122:"PSO_face_pack",SKP1400123:"GH40x3",SKP1400124:"ML200x2",SKP1400125:"ML200x3",SKP1400177:"ACNE_pack",SKP1600129:"ECZE_face_pack",SKP1600130:"NAL_pack",SKP1700150:"SEB_pack",SKP1700215:"CL200x3",SKP1700317:"PC20x3",SKP1700408:"PSO_body_pack",SKP1700420:"HG150x3",SKP2100403:"MATE_pack",SKP2100514:"ECZE_body_pack",SKP2100615:"DYSH_pack"} ;
selected_btn_code = skp_productCode[product_referenceAff2] ;

} else {
	selected_btn_code = selected_btn ;
	}
    
 const productCode_asin_us = {LCx1:"B0BNLQB41H",LSx1:"B0BN6NZDDB",MBx1:"B0BN4DM1P9",MATU_pack:"B0BNNHX59V",EXEE_body_pack:"B07BZG2GX7",ML200x1:"B00N2Y7VI0",CL200x1:"B00N2Y7X24",PC20x1:"B00N2Y7QG2",HG40x1:"B00N2Y7T8W",HG150x1:"B07CBHZTXV",DISC_pack:"B00VX1TUUG",PSO_face_pack:"B01I1C39TW",PSO_face_pack2:"B01I1C39TW",PSO_face_pack3:"B00STOFCOS",GH40x3:"B00VX8B5WU",ML200x2:"B01HZYWJFC",ML200x3:"B00SUZIYWI",ACNE_pack:"B075MDT7J1",ACNE_pack2:"B075MDT7J1",ECZE_face_pack:"B01M2BSRC8",ECZE_face_pack2:"B01M2BSRC8",ECZE_face_pack3:"B01M2BSRC8",NAL_pack:"B01MQWDTJO",NAL_pack2:"B01MQWDTJO",NAL_pack3:"B01MQWDTJO",NAL_pack4:"B01MQWDTJO",SEB_pack:"B071DH3ZMP",SEB_pack2:"B071DH3ZMP",CL200x3:"B07931ZH4X",PC20x3:"B079T3W5GX",PSO_body_pack:"B07BZG2GX7",PSO_body_pack2:"B07BZG2GX7",PSO_body_pack3:"B07BZG2GX7",HG150x3:"B07BZT2VPN",MATE_pack:"B0963YPSZP",ECZE_body_pack:"B093731Z82",ECZE_body_pack2:"B093731Z82",ECZE_body_pack3:"B093731Z82",DYSH_pack:"B093717W1S",DYSH_pack2:"B093717W1S",DYSH_pack3:"B093717W1S"}
 const productCode_asin_eu = {LCx1:"B0BNLQB41H",LSx1:"B0BN6NZDDB",MBx1:"B0BN4DM1P9",MATU_pack:"B0BNNHX59V",EXEE_body_pack:"B09W37DX52",ML200x1:"B00N2Y7VI0",CL200x1:"B00N2Y7X24",PC20x1:"B00N2Y7QG2",HG40x1:"B00N2Y7T8W",HG150x1:"B07CBHZTXV",DISC_pack:"B00SV0XMYW",PSO_balm_pack:"B0BQWV8W7P",PSO_face_pack:"B00STOFCOS",PSO_face_pack2:"B00STOFCOS",PSO_face_pack3:"B00STOFCOS",GH40x3:"B00VX8B5WU",ML200x2:"B01HZYWJFC",ML200x3:"B00SUZY0CQ",ACNE_pack:"B075MDT7J1",ACNE_pack2:"B075MDT7J1",ECZE_face_pack:"B01M2BSRC8",ECZE_face_pack2:"B01M2BSRC8",ECZE_face_pack3:"B01M2BSRC8",NAL_pack:"B01MQWDTJO",NAL_pack2:"B01MQWDTJO",NAL_pack3:"B01MQWDTJO",NAL_pack4:"B01MQWDTJO",SEB_pack:"B071DH3ZMP",SEB_pack2:"B071DH3ZMP",CL200x3:"B07931ZH4X",PC20x3:"B079T3W5GX",PSO_body_pack:"B07BZG2GX7",PSO_body_pack2:"B07BZG2GX7",PSO_body_pack3:"B07BZG2GX7",HG150x3:"B07BZT2VPN",MATE_pack:"B0963YPSZP",ECZE_body_pack:"B093731Z82",ECZE_body_pack2:"B093731Z82",ECZE_body_pack3:"B093731Z82",DYSH_pack:"B093717W1S",DYSH_pack2:"B093717W1S",DYSH_pack3:"B093717W1S"}
 
 switch (amz_shop) {
 	case ".com":
    selected_asin = productCode_asin_us[selected_btn_code]
    break;
    case ".fr":
    selected_asin = productCode_asin_eu[selected_btn_code]
 	break;
    case ".co.uk":
    selected_asin = productCode_asin_eu[selected_btn_code]
    break;
    default:
    selected_asin = productCode_asin_us[selected_btn_code] ;
    }
    	    
//devise target url //
let amz_url ;
if (selected_asin === "na") { 
	amz_url = "https://www.amazon" + amz_shop + "/s?k=skintifique&tag=" + amz_tag ;
    } else if (selected_asin) {
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
