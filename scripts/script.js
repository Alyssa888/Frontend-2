// JavaScript Document
console.log("hi");

/******************************/
/* menu openen de MENU button */
/******************************/

/* JOUW CODE HIER - stap 4 */

// stap 1: zoek de menu-button op en sla die op in een variabele
var openButton = document.querySelector("header > button");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
openButton.onclick = openMenu;

// stap 3: voeg in de functie een class toe aan de nav
function openMenu() {
	// zoek de nav op
	var deNav = document.querySelector("nav");
	// voeg class toe aan nav
	deNav.classList.add("toonMenu");
}




/************************************/
/* menu sluiten met de sluit button */
/************************************/

/* JOUW CODE HIER - stap 5 */

// stap 1 - zoek sluiten button op
var sluitButton = document.querySelector("nav button");

// stap 2 - laat die button luisteren naar kliks
sluitButton.onclick = sluitMenu;

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu() {
	var deNav = document.querySelector("nav");
	deNav.classList.remove("toonMenu");
}




/**********************************/
/* bonus: menu sluiten met escape */
/**********************************/
window.onkeydown = handleKeydown;

function handleKeydown(event) {
	if (event.key == "Escape") {
		var deNav = document.querySelector("nav");
		deNav.classList.remove("toonMenu");
	}
}


/* PIJLTJES KNOPPEN CAROUSEL */
function createCaroCarrousel(carrouselID) {
	let carrousel = document.querySelector("#" + carrouselID);
	let carrouselElementsContainer = carrousel.querySelector(":scope > ul");
	let carrouselElements = carrouselElementsContainer.querySelectorAll("li");
	let linkButtons = carrousel.querySelectorAll(":scope > a");


	/*****************************/
	/* LINKS/RECHTS LINK-BUTTONS */
	/*****************************/

	// de links/rechts link-buttons initialiseren en activeren
	function iniLinkButtons() {
		for (linkButton of linkButtons) {
			// beide link-buttins naar kliks laten luisteren
			linkButton.addEventListener("click", function (e) {
				// als er geklikt wordt
				// de default-actie (de link volgen) niet uitvoeren
				e.preventDefault();

				// bepalen of er op 'previous' of 'next' geklikt is
				let direction = this.getAttribute("href");
				// naar het element gaan
				goToElement(direction);
			});
		}
	}


	/*****************/
	/* START POSITIE */
	/*****************/

	// het eerste element actief maaken
	function iniStartPosition() {
		// eerste element current maken
		carrouselElements[0].classList.add("current");
		// aan het begin van de container starten
		carrouselElementsContainer.scrollLeft = 0;
	}


	/*********************/
	/* ALGEMENE FUNCTIES */
	/*********************/

	//////////////////////////////////
	// naar volgende/vorige element //
	function goToElement(direction) {
		// het huidige current element opzoeken
		let currentElement = carrousel.querySelector(":scope > ul > .current");

		let newElement;
		if (direction == "previous") {
			// het nieuwe element is het vorige broertje/zusje
			newElement = currentElement.previousElementSibling;
			// checken of nieuwe element bestaat - anders naar laatste
			if (!newElement) {
				newElement = carrousel.querySelector(":scope > ul > li:last-of-type");
			}
		} else {
			// het nieuwe element is het volgende broertje/zusje
			newElement = currentElement.nextElementSibling;
			// checken of nieuwe element bestaat - anders naar eerste
			if (!newElement) {
				newElement = carrousel.querySelector(":scope > ul > li:first-of-type");
			}
		}

		// naar het nieuwe element scrollen
		scrollToElement(newElement);
	}


	///////////////////////////
	// scroll to new element //
	function scrollToElement(newElement) {
		// carousel container opzoeken
		let carouselElementsContainer = newElement.closest("ul");

		// de linker offset van het nieuwe element bepalen 
		let newElementOffset = newElement.offsetLeft;

		// de carousel naar de berekende positie scrollen
		carouselElementsContainer.scrollTo({
			left: newElementOffset
		});

		// nieuwe element current element maken
		updateCurrentElement(newElement);
	}


	////////////////////////////
	// update current element //
	function updateCurrentElement(newElement) {
		// het huidige current element opzoeken
		let currentElement = carrousel.querySelector(":scope > ul > .current");
		// de class current verwijderen
		currentElement.classList.remove("current");

		// de class current toevoegen
		newElement.classList.add("current");
	}


	// de linkbuttons activeren
	iniLinkButtons();
	// de carrousel bij het begin starten
	iniStartPosition();
}


/************************/
/* DE CARROUSEL CREËREN */
/************************/

// nadat de pagina geladen is, de carrousels activeren
(function () {
	// hier de id gebruiken van de section in de html
	createCaroCarrousel("justButtons");
	//je kunt hier ook meerdere carrousellen activeren
})();

/* <!-- Bron: Codepen,pijltjes carousel, https://codepen.io/shooft/pen/mdBOZLz --> */


/* *AUDIO* */

function clickMessage() {
	let sound = document.getElementById('audio');
	sound.play();
}

/* Bron: Audio koppelen aan button, https://www.youtube.com/watch?v=6ukTdMSlerI&ab_channel=PastorCanayo */

/* *ANIMATION* */
const afbeelding = document.getElementById("bewegende-afbeelding");

afbeelding.addEventListener("click", function () {
	afbeelding.classList.toggle("beweeg");
});

/* Bron: Afbeelding laten bewegen on click, ChatGPT, https://chatgpt.com/share/670cea83-81f0-800b-96f4-20970b1bb72c */
