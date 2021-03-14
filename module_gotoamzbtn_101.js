//this is code to add the the website to 

// IDENTIFY SKAID AND AMZ_ONETAG AND TARGET AMZ_URL
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

function find_amz_onetag (x) {
let product_asin_elmt = document.getElementById("product_asin") ;
let product_asin ;
if (!product_asin_elmt) { 
	product_asin = "unavailable" ;
    } else {
    product_asin = product_asin_elmt.value ;
    }
let amz_onetag ;
if (x == "skintifique0-20") {
amz_onetag = "skintifique0-20";
} else {
amz_onetag = "skintifique0-20";
}
let amz_url ;
if (product_asin == "unavailable") { 
	amz_url = "https://www.amazon.com/s?k=skintifique&tag=" + amz_onetag ;
    } else {
	amz_url = "https://www.amazon.com/dp/" + product_asin + "/?tag=" + amz_onetag ;
	}	
document.getElementById("go_to_amz_btn").href = amz_url ;
}

// END OF SECTION "IDENTIFY SKAID AND AMZ_ONETAG AND TARGET AMZ_URL"
