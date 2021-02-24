/*USE THIS FILE FOR THE DEFAULT SKINTY PAGE*/
/* Some global variables are included in the scripts below. In particular: */
/*   image_query_page (url of the image that shows when user uses a queryb parameter and on SkinTy info) */
/*   df-messenger agentId and default intent */
/*   allowed promoters for the default_prom (should be only default_prom, except for SK, for demos) */
/*   Skintifique acknowledgment, to show at bottom of SkinTy introduction text */
/*   possible themeb, beyond the current list */


let image_query_page = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYA2n-s-Pn6rtQz-3aLUgj8s1XxhahIv0ZPA&usqp=CAU" ;
let newsletter_url = document.getElementById("newsletter_url").value ;
if (newsletter_url === "none") {
let nwsl_text = document.getElementById("nwsl_text") ;
nwsl_text.style.display = "none" ;
} else if (newsletter_url) {
document.getElementById("nwsl_url").href = newsletter_url ;
}
document.getElementById("img_query_img").src = image_query_page ;

let languageCode = document.getElementById("languageCode").value ;
let ackn_text = document.getElementById("ackn_text") ;
if (languageCode == "en") {
  if (ackn_text) {
  let ackn2 = "SkinTy is powered with &hearts; by Skintifique - Innovative skincare for freedom." ;
  document.getElementById("ackn_text").innerHTML = ackn2 ;
  } else {
  document.getElementById("skintyIntro").innerHTML = "Please bear with us, there is an unknown problem on this page. You should use the genuine SkinTy on Skintifique website: https://www.skintifique.me/skinty " ;
  }
} else if (languageCode == "fr") {
  if (ackn_text) {
  let ackn2 = "SkinTy est offert avec &hearts; par Skintifique - Les soins dermato-cosmétiques libérateurs pour ma santé et mon bien-être." ;
  document.getElementById("ackn_text").innerHTML = ackn2 ;
  } else {
  document.getElementById("skintyIntro").innerHTML = "Veuillez nous excuses, il y a un problème avec cette page. Vous devriez utiliser SkinTy sur le site de Skintifique: https://www.skintifique.me/skinty " ;
  }
} 


function with_query () {
let agentId = "c7e74905-9f16-46e9-9231-bbca98ad967e" ;
let languageCode = document.getElementById("languageCode").value ;
let chatIcon = document.getElementById("chatIcon").value ;
let promb = document.getElementById("default_prom").value ;
let intent = "welcome_" + promb + "_query";
let expand ;
const dfMessenger = document.querySelector("df-messenger");
dfMessenger.getAttribute("agent-id");
dfMessenger.setAttribute("agent-id",agentId);
dfMessenger.getAttribute("language-code");
dfMessenger.setAttribute("language-code",languageCode);
dfMessenger.getAttribute("chat-icon");
dfMessenger.setAttribute("chat-icon",chatIcon);
dfMessenger.getAttribute("intent");
dfMessenger.setAttribute("intent",intent);
dfMessenger.getAttribute("expand");
dfMessenger.setAttribute("expand","expand");
window.customElements.define("df-messenger", dfMessenger);
}



let url02 = location.href ;
let url02Params = (new URL(document.location)).searchParams ;
let queryb2 = url02Params.get("queryb") ;
if (queryb2) {
let imageURL = image_query_page ;
const dfMessenger2 = document.querySelector("df-messenger");
dfMessenger2.addEventListener("df-messenger-loaded", function (event) {
let welcomeIntro = "Hello, I am SkinTy, your 24/7 digital assistant."
let welcomeIntro2 = "Please click below to confirm your question. Or say SUGGESTION to see frequent ones" ;
const payloadImage = [
  {
        "rawUrl": imageURL,
        "accessibilityText": "Visitor search image",
        "type": "image"
      }];
const payload1 = [
  {
        "options": [
          {
            "text": queryb2
          }
        ],
        "type": "chips"
      }];
dfMessenger2.renderCustomCard(payloadImage);
dfMessenger2.renderCustomText(welcomeIntro) ;
dfMessenger2.renderCustomText(welcomeIntro2) ;
dfMessenger2.renderCustomCard(payload1);
});
}




function no_query () {
let agentId = "c7e74905-9f16-46e9-9231-bbca98ad967e" ;
let languageCode = document.getElementById("languageCode").value ;
let chatIcon = document.getElementById("chatIcon").value ;
let intent ;
let expand ;
const dfMessenger = document.querySelector("df-messenger");
let url0 = window.location.href ;
let url1 = document.referrer ;
let url = url0.concat(url1) ;
let url0Params = (new URL(document.location)).searchParams ;
let promb = url0Params.get("promb") ;
let themeb = url0Params.get("themeb") ;
let formatb = url0Params.get("formatb") ;
let showb = url0Params.get("showb") ;
let introb = url0Params.get("introb") ;
let default_prom = document.getElementById("default_prom").value ;
let promoters ;
if (default_prom == "sk") {
promoters = "sk,anna_demo,myshop_demo" ;
} else {
promoters = default_prom ;
}
let available_themes = document.getElementById("available_themes_for_default_prom").value ;
let prom_promb = promoters.search(promb) ;
let prom_themeb = available_themes.search(themeb) ;
if (!(promb)){
    updated_promb = default_prom ;
} else if (prom_promb > -1) {
    updated_promb = promb ;
} else {
    updated_promb = "promoterError" ;
}
if (updated_promb == "promoterError") {
    intent = "welcome_promoterError_default" ;
} else if (updated_promb == default_prom) {
if (themeb) {
    if (prom_themeb > -1) {
        intent = "welcome_" + updated_promb + "_" + themeb ;
    } else {
        intent = "welcome_" + updated_promb + "_default" ;
    }
} else {
    intent = "welcome_" + updated_promb + "_default" ;
} 
} else if (updated_promb != default_prom) {
   intent = "welcome_" + updated_promb + "_default" ;
} 
dfMessenger.getAttribute("agent-id");
dfMessenger.setAttribute("agent-id",agentId);
dfMessenger.getAttribute("language-code");
dfMessenger.setAttribute("language-code",languageCode);
dfMessenger.getAttribute("chat-icon");
dfMessenger.setAttribute("chat-icon",chatIcon);
dfMessenger.getAttribute("intent");
dfMessenger.setAttribute("intent",intent);
if (formatb == "close") {
    dfMessenger.removeAttribute("expand") ;
    } else if (formatb == "open") {
    dfMessenger.setAttribute("expand","expand");
    } 
if (showb == "hide") {
    dfMessenger.setAttribute("hidden","hidden");
    } else if (showb == "show") {
    dfMessenger.removeAttribute("hidden");
    }
window.customElements.define("df-messenger", dfMessenger);
}



let url = window.location.href ;
let urlParams = (new URL(document.location)).searchParams ;
let queryb = urlParams.get("queryb") ;
if (queryb) {
with_query () ;
} else {
no_query () ;
}
