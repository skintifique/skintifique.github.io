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
    if (classes.contains("gotoamzbtn"))  {

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

// get target amz shop and asin //
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
    let selected_btn = event.target.id ;
	    document.getElementById("showp").innerHTML = selected_btn ;
    let selected_btn_option = "option-" + selected_btn ;	    
    let selected_list = document.getElementById(selected_btn_option) ;
    selected_list.value = amz_shop ;
      
            for (var i = 0; i < selected_list.length; i++) {
                var option = selected_list.options[i];
                if (option.value == amz_shop) {
                    selected_asin = option.text;
                }
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
	    
document.getElementById(selected_btn).href = amz_url ;
	    
       }
   }
