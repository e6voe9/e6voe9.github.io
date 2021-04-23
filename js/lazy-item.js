let lazy_item = function (){
	let loads = document.getElementsByClassName("lazy-item");
	for(let i = 0; i < loads.length; ++i){
		loads[i].setAttribute("src", loads[i].getAttribute("data-src"));
	}
};
let lazy_item_style = function (){
	let loads_style = document.getElementsByClassName("lazy-item-style");
	for(let i = 0; i < loads_style.length; ++i){
		loads_style[i].setAttribute("style", loads_style[i].getAttribute("data-style"));
	}
};     
window.addEventListener("scroll", lazy_item_style, {passive: true, once: true});
window.addEventListener("scroll", lazy_item, {passive: true, once: true});