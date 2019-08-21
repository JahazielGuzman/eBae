document.addEventListener("DOMContentLoaded", function(){

	let search_button = document.querySelector("#search_button");
	let search_input = document.querySelector("#myinput");
	let wrapper = document.querySelector('#wrapper');

	search_button.addEventListener("click", searchItems)

	function searchItems(event) {

		event.preventDefault();
		fetch(`http://localhost:3000/items?search=${search_input.value}`)
			.then(res => res.json())
			.then(items => items.forEach(slapItemOnDOM))
	}

	function slapItemOnDOM(item) {

			div = document.createElement('div');
			div.className = 'card column space';
			div.innerHTML = `
			<img src=${item.img_url}>
			<h1>${item.name}</h1>
			<p>$ ${item.price}</p>
			<p>seller: ${item.user.name}</p>`;
			wrapper.appendChild(div);
	}
});


function itemIndexer(items){
	console.log(items)
	items.forEach(listItems)
}

function listItems(item){
	wrapper = document.getElementById('columnsWrapper')
	div = document.createElement('div')
		div.className = 'card column space'
		div.innerHTML = `
		<h1>${item.name}</h1>
		<p>${item.price}</p>
		<p>seller: ${item.user_id}</p>`
	wrapper.appendChild(div)
}

function toggleOverlay(){
	var overlay = document.getElementById('overlay');
    var specialBox = document.getElementById('specialBox'); //<--need to get element by classname instead of ID
    
	overlay.style.opacity = .8;
	if(overlay.style.display == "block"){
		overlay.style.display = "none";
		specialBox.style.display = "none";
	} else {
		overlay.style.display = "block";
		specialBox.style.display = "block";
	}
}

function searchFunction() {
	var input, filter, ul, li, a, i;
    filter = input.value.toUpperCase();
	
    input = document.getElementById('myinput');
    ul = document.getElementById('wrapper');
    li = ul.getElementsByTagName('li');

    for(i=0 ; i< li.length; i++){
        a = li[i].getElementsByTagName('a')[0];
			if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
				li[i].style.display = "";
			} else {
			li[i].style.display = 'none';
			}
    }
}
