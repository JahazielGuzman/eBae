document.addEventListener("DOMContentLoaded", function(){
	fetch('http://localhost:3000/items')
		.then(res => res.json())
		.then(itemIndexer)


})

const overlayDiv = document.getElementById('overlay')
const specialBoxDiv = document.getElementById('specialBox')
const body = document.getElementById('body')
const wrapper = document.getElementById('wrapper')
overlayDiv.className = 'overlay'
specialBoxDiv.className = 'specialBox'

function itemIndexer(items){
	console.log(items)
	items.forEach(listItems)
}


wrapper.addEventListener("click", (e) => {

	if (e.target.parentElement.className === "item-card") {	
		overlayDiv.style.opacity = .8;
		// specialBoxDiv.appendChild(overlayBtn)

		if(overlayDiv.style.display == "block"){
			overlayDiv.style.display = "none";
			specialBoxDiv.style.display = "none";
		} else {
			overlayDiv.style.display = "block";
			specialBoxDiv.style.display = "block";
		}

		specialBoxDiv.innerHTML = `<h1>name${e.target.parentElement.dataset.name}</h1>
					<h1>desc${e.target.parentElement.dataset.description}</h1>
					<h1>price${e.target.parentElement.dataset.price}</h1>
					<h1>state${e.target.parentElement.dataset.state}</h1>
					<h1>img${e.target.parentElement.dataset.img_url}</h1>
					<h1>user${e.target.parentElement.dataset.id}</h1>`
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

function listItems(item){

	const indexDiv = document.createElement('div')
		indexDiv.className = "item-card"
		indexDiv.innerHTML = `<h1>${item.name}</h1>`
		indexDiv.dataset.description = item.description;
		indexDiv.dataset.name = item.name
		indexDiv.dataset.price = item.price
		indexDiv.dataset.state = item.state
		indexDiv.dataset.img_url = item.img_url
		indexDiv.dataset.id = item.user_id

		wrapper.appendChild(indexDiv)

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
