//this is code to add the the website to 

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

//NOTE : EVERTHING BELOW WILL NEED TO EXECUTE ONLY IF THERE IS AN GTAMZ BTN AND IT IS CLICKED //

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
let product_asin ;
let product_asin_elmt ;
let amz_tag ;
if (url_lang === "fr") {
	amz_shop = ".fr" ;
  amz_tag = "skintifique-21" ;
  product_asin_elmt = document.getElementById("product_asin_fr") ;
} else if (url_lang === "en") {
  if (traffic_source === "uk") {
    amz_shop = ".co.uk" ;
    amz_tag = "skintifiqueOf-21" ;
    product_asin_elmt = document.getElementById("product_asin_uk") ;
    } else {
	  amz_shop = ".com" ;
    amz_tag = "skintifique00-20" ;
    product_asin_elmt = document.getElementById("product_asin_us") ;
    }
 }

 if (!product_asin_elmt) { 
    product_asin = "unavailable" ;
    } else {
    product_asin = product_asin_elmt.value ;
    }

//devise target url //
let amz_url ;
if (product_asin == "unavailable") { 
	amz_url = "https://www.amazon" + amz_shop + "/s?k=skintifique&tag=" + amz_tag ;
    } else {
	amz_url = "https://www.amazon" + amz_shop + "/dp/" + product_asin + "/?tag=" + amz_tag ;
	}	
document.getElementById("go_to_amz_btn").href = amz_url ;




// IDENTIFY SKAID AND AMZ_ONETAG AND TARGET AMZ_URL
let go_to_amz_btn = document.getElementById("go_to_amz_btn") ;
if (go_to_amz_btn) {
document.getElementById("go_to_amz_btn").addEventListener("click",function() {
const url_params = new URLSearchParams(window.location.search);
let skaid = url_params.get("skaid");
if (skaid) {
	sessionStorage.setItem("skaid",skaid);
	find_amz_onetag(skaid);
} else {
let skaid2 = sessionStorage.getItem("skaid") ;	
if (skaid2) {
	find_amz_onetag(skaid2);
	} else {
	find_amz_onetag("skintifique0-20");
	}
}
});
}	

function find_amz_onetag (x) {
let product_asin_elmt = document.getElementById("product_asin") ;
let product_asin ;
if (!product_asin_elmt) { 
    product_asin = "unavailable" ;
    } else {
    product_asin = product_asin_elmt.value ;
    }
let amz_shop ;
let url = window.location.href ;
if (url.includes("/en/")) {
	amz_shop = "https://www.amazon.com" ;
} else if (url.includes("/fr/")) {
	amz_shop = "https://www.amazon.fr" ;
} else {	
	amz_shop = "https://www.amazon.com" ;
}	
let amz_onetag ;
if (x == "skintifique00-20") {
amz_onetag = "skintifique00-20";
} else if (x == "skintifique-21") {
amz_onetag = "skintifique-21";
} else {
if (url.includes("/en/")) {
	amz_onetag = "skintifique00-20" ;
} else if (url.includes("/fr/")) {
	amz_onetag = "skintifique-21" ;
} else {	
	amz_onetag = "skintifique00-20" ;
}	
}
let amz_url ;
if (product_asin == "unavailable") { 
	amz_url = amz_shop + "/s?k=skintifique&tag=" + amz_onetag ;
    } else {
	amz_url = amz_shop + "/dp/" + product_asin + "/?tag=" + amz_onetag ;
	}	
document.getElementById("go_to_amz_btn").href = amz_url ;
}

// END OF SECTION "IDENTIFY SKAID AND AMZ_ONETAG AND TARGET AMZ_URL"
