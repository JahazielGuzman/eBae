document.addEventListener("DOMContentLoaded", function(){
	fetch('http://localhost:3000/items')
		.then(res => res.json())
		.then(itemIndexer)

})

function itemIndexer(items){
	console.log(items)
	items.forEach(listItems)
}

function listItems(item){
	const body = document.getElementById('body')
	const wrapper = document.getElementById('wrapper')
	

	const indexDiv = document.createElement('div')
		indexDiv.innerHTML = `<h1>${item.name}</h1>`
		wrapper.appendChild(indexDiv)


	const overlayDiv = document.createElement('div')
		overlayDiv.className = 'overlay'
		body.appendChild(overlayDiv)


	const specialBoxDiv = document.createElement('div')
		specialBoxDiv.className = 'specialBox'
		specialBoxDiv.innerHTML = `<h1>${item.description}</h1>`
		body.appendChild(specialBoxDiv)	
		

	indexDiv.addEventListener("click", () => {
		overlayDiv.style.opacity = .8;
		// specialBoxDiv.appendChild(overlayBtn)

		if(overlayDiv.style.display == "block"){
			overlayDiv.style.display = "none";
			specialBoxDiv.style.display = "none";
		} else {
			overlayDiv.style.display = "block";
			specialBoxDiv.style.display = "block";
		}
	})

	overlayDiv.addEventListener("click", () => {
		overlayDiv.style.opacity = 0;
		
		if(overlayDiv.style.display == "block"){
			overlayDiv.style.display = "none";
			specialBoxDiv.style.display = "none";
		} else {
			overlayDiv.style.display = "block";
			specialBoxDiv.style.display = "block";
		}
	})
}



// function searchFunction() {
// 	var input, filter, ul, li, a, i;
//     filter = input.value.toUpperCase();
	
//     input = document.getElementById('myinput');
//     ul = document.getElementById('wrapper');
//     li = ul.getElementsByTagName('li');

//     for(i=0 ; i< li.length; i++){
//         a = li[i].getElementsByTagName('a')[0];
// 			if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
// 				li[i].style.display = "";
// 			} else {
// 			li[i].style.display = 'none';
// 			}
//     }
// }
