const BASE_URL = "http://localhost:3000";
const ITEMS_URL = "http://localhost:3000/items";
const overlayDiv = document.getElementById('overlay')
const specialBoxDiv = document.getElementById('specialBox')
const body = document.getElementById('body')
const wrapper = document.getElementById('wrapper')
const search_button = document.querySelector("#search_button");
const search_input = document.querySelector("#myinput");
const userBox = document.querySelector('#user');
const loginButton = document.querySelector('#login');
const loginInput = document.querySelector('#user-id');
overlayDiv.className = 'overlay'
specialBoxDiv.className = 'specialBox'

function initialItems() {

	fetch(ITEMS_URL)
	.then(res => res.json())
	.then(itemIndexer);
}

initialItems();
search_button.addEventListener("click", searchItems);
loginButton.addEventListener("click", function () {

	const userId = loginInput.value;
	fetch(`${BASE_URL}/login?id=${userId}`)
	.then(res => res.json())
	.then(user => {
		userBox.dataset.name = user.name;
		userBox.dataset.id = user.id;
	});
});


function searchItems(event) {

	wrapper.innerHTML = "";
	event.preventDefault();
	fetch(`${ITEMS_URL}?search=${search_input.value}`)
		.then(res => res.json())
		.then(itemIndexer)
}

function itemIndexer(items){
	items.forEach(listItems)
}


wrapper.addEventListener("click", (e) => {

	const itemCard = e.target.closest('.item-card');
	if (itemCard) {
		
		overlayDiv.style.opacity = .8;
		// specialBoxDiv.appendChild(overlayBtn)

		if(overlayDiv.style.display == "block"){
			overlayDiv.style.display = "none";
			specialBoxDiv.style.display = "none";
		} else {
			overlayDiv.style.display = "block";
			specialBoxDiv.style.display = "block";
		}

		specialBoxDiv.innerHTML = `
				<img src="${itemCard.dataset.img_url}" style="width:300px;height:300;">
				<h1 class='subtitle'><strong>${itemCard.dataset.name}</strong></h1>
				<p>${itemCard.dataset.description}</p>
				<h2>Price: <span class='dolla'>$</span><strong>${itemCard.dataset.price}</strong></h2>
				<button class='button' style="background-color: orange;" id="buy-button">Buy</button>`
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
		indexDiv.className = "card item-card"
		indexDiv.dataset.description = item.description;
		indexDiv.dataset.name = item.name
		indexDiv.dataset.price = item.price
		indexDiv.dataset.state = item.state
		indexDiv.dataset.img_url = item.img_url
		indexDiv.dataset.id = item.user_id

	const cardImgDiv = document.createElement('div')
		cardImgDiv.className = 'card-image'
	const cardFigure = document.createElement('figure')
		cardFigure.className = 'image is-4by3'
		cardFigure.innerHTML = `<img src="${item.img_url}">`
	const contentDiv = document.createElement('div')
		contentDiv.className = 'card-content'
		contentDiv.innerHTML = `
			<h1 class='subtitle'><strong>${item.name}</strong></h1>
			<p>${item.description}</p>`

		wrapper.appendChild(indexDiv)
		indexDiv.appendChild(cardImgDiv)
		indexDiv.appendChild(contentDiv)
		cardImgDiv.appendChild(cardFigure)

}
