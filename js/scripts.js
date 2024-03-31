import { Modal as modal } from './projectModal.js';
import { projectCardContent } from '../content/projectCardContent.js';

const log = console.log;

const closeAnimation = () => {
	const row1 = document.querySelector('.row1');
	const row2 = document.querySelector('.row2');
	const row3 = document.querySelector('.row3');
	const hamburgerEl = document.querySelector('#hamburger');
	const menu = document.querySelector('#menu');
	let item = document.querySelectorAll('menu-item');

	function toggleAnimation() {
		row1.classList.toggle('rotateRight');
		row2.classList.toggle('transparent');
		row3.classList.toggle('rotateLeft');
		menu.classList.toggle('move');
	}

	hamburgerEl.addEventListener('click', function () {
		toggleAnimation();
	});
};
closeAnimation();

async function carousel(carouselList, eleRef) {
	var i = 0;
	await typeSentence(carouselList[i].text, eleRef);
	await waitForMs(1500);
	await deleteSentence(eleRef);
	await waitForMs(500);
	i++;
	await typeSentence(carouselList[i].text, eleRef);
	await waitForMs(1500);
	await deleteSentence(eleRef);
	await waitForMs(500);
	i++;
	await typeSentence(carouselList[i].text, eleRef);
	await waitForMs(1500);
}

function waitForMs(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

// ------------------ welcome ------------------
// const welcomePage = () => {
// 	// const canvas = document.getElementById('mazeCanvas');
// 	// const ctx = canvas.getContext('2d');
// 	// let angle = 0;
// 	// const marble = { x: 50, y: 50, radius: 10 };

// 	// game.js
// 	const gameContainer = document.querySelector('.gameContainer');

// 	// Define the maze as a 2D array (1 represents walls, 0 represents paths)
// 	const maze = [
// 		[
// 			1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1,
// 			1, 1,
// 		],
// 		[
// 			1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
// 			1, 1,
// 		],
// 		[
// 			1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
// 			1, 1,
// 		],
// 		[
// 			1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1,
// 			1, 1,
// 		],
// 		[
// 			1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1,
// 			1, 1,
// 		],
// 		[
// 			1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1,
// 			1, 1,
// 		],
// 		[
// 			1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0,
// 			1, 1,
// 		],
// 		[
// 			1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0,
// 			0, 1,
// 		],
// 		[
// 			1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0,
// 			0, 1,
// 		],
// 		[
// 			1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0,
// 			0, 1,
// 		],
// 		[
// 			0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0,
// 			0, 1,
// 		],
// 		[
// 			0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0,
// 			0, 1,
// 		],
// 		[
// 			0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0,
// 			0, 1,
// 		],
// 		[
// 			0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0,
// 			0, 1,
// 		],
// 		[
// 			0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0,
// 			0, 1,
// 		],
// 		[
// 			0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0,
// 			0, 1,
// 		],
// 		[
// 			0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0,
// 			0, 1,
// 		],
// 		[
// 			0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0,
// 			0, 1,
// 		],
// 		[
// 			1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0,
// 			0, 1,
// 		],
// 		[
// 			1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
// 			0, 1,
// 		],
// 		[
// 			1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,
// 			1, 1,
// 		],
// 		[
// 			1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
// 			1, 1,
// 		],
// 		[
// 			1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
// 			1, 1,
// 		],
// 		[
// 			1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1,
// 			1, 1,
// 		],
// 		[
// 			1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
// 			1, 1,
// 		],
// 		[
// 			1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1,
// 			1, 1,
// 		],
// 		[
// 			1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
// 			1, 1,
// 		],
// 		[
// 			1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
// 			1, 1,
// 		],
// 	];

// 	// Initial player position
// 	let ballPosition = { x: 16, y: 1 };

// 	// Function to draw the maze and player
// 	function drawMaze() {
// 		gameContainer.innerHTML = ''; // Clear the game container
// 		maze.forEach((row, y) => {
// 			row.forEach((cell, x) => {
// 				const cellElement = document.createElement('div');
// 				cellElement.style.width = '8px';
// 				cellElement.style.height = '8px';
// 				cellElement.style.position = 'absolute';
// 				cellElement.style.left = `${x * 8}px`;
// 				cellElement.style.top = `${y * 8}px`;
// 				cellElement.className = cell === 1 ? 'wall' : 'path';
// 				gameContainer.appendChild(cellElement);
// 			});
// 		});

// 		const playerElement = document.createElement('div');
// 		playerElement.className = 'ball';
// 		playerElement.style.left = `${ballPosition.x * 8}px`;
// 		playerElement.style.top = `${ballPosition.y * 8}px`;
// 		gameContainer.appendChild(playerElement);
// 	}

// 	// Function to move the player
// 	function moveBall(dx, dy) {
// 		const newX = ballPosition.x + dx;
// 		const newY = ballPosition.y + dy;
// 		if (maze[newY][newX] === 0) {
// 			// Check if the new position is a path
// 			ballPosition = { x: newX, y: newY };
// 			log(ballPosition);
// 			if (ballPosition.x === 13 && ballPosition.y === 9) {
// 				alert('You win!');
// 			}
// 			drawMaze(); // Redraw the maze with the new player position
// 		}
// 	}

// 	// Keyboard controls
// 	document.addEventListener('keydown', (event) => {
// 		switch (event.key) {
// 			case 'ArrowUp':
// 				moveBall(0, -1);
// 				break;
// 			case 'ArrowDown':
// 				moveBall(0, 1);
// 				break;
// 			case 'ArrowLeft':
// 				moveBall(-1, 0);
// 				break;
// 			case 'ArrowRight':
// 				moveBall(1, 0);
// 				break;
// 		}
// 	});

// 	// Initial drawing of the game
// 	drawMaze();

// 	// function drawMaze() {
// 	//     ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

// 	//     // Draw maze walls or boundaries
// 	//     ctx.beginPath();
// 	//     ctx.rect(50, 50, 500, 500); // Simple square maze boundary
// 	//     ctx.stroke();

// 	//     // Draw end hole
// 	//     ctx.beginPath();
// 	//     ctx.arc(550, 550, 15, 0, 2 * Math.PI);
// 	//     ctx.fillStyle = 'black';
// 	//     ctx.fill();

// 	//     // Draw marble
// 	//     ctx.beginPath();
// 	//     ctx.arc(marble.x, marble.y, marble.radius, 0, 2 * Math.PI);
// 	//     ctx.fillStyle = 'blue';
// 	//     ctx.fill();
// 	// }

// 	// function rotateMaze(direction) {
// 	//     angle += (direction === 'right' ? 5 : -5) * Math.PI / 180; // Convert degrees to radians
// 	//     canvas.style.transform = `rotate(${angle}rad)`;
// 	//     updateMarblePosition();
// 	// }

// 	// function updateMarblePosition() {
// 	//     // This is a simplified version of physics calculation
// 	//     // In a real game, you'd use more complex physics to determine the marble's movement
// 	//     const gravity = 0.1;
// 	//     marble.x += Math.sin(angle) * gravity;
// 	//     marble.y -= Math.cos(angle) * gravity;

// 	//     // Collision detection with maze boundaries
// 	//     if (marble.x < marble.radius || marble.x > canvas.width - marble.radius) marble.x = 50; // Reset on collision
// 	//     if (marble.y < marble.radius || marble.y > canvas.height - marble.radius) marble.y = 50; // Reset on collision

// 	//     drawMaze();
// 	// }

// 	// drawMaze();

// 	// Opening welcome screen on first load
// 	// document.addEventListener("DOMContentLoaded", function() {
// 	//     if (document.body.className === 'homePage') {
// 	//         if (sessionStorage.getItem('pageloadcount') === null) {
// 	//             document.querySelector('#opening').classList.add('show');
// 	//             sessionStorage.setItem('pageloadcount', '1');
// 	//             setTimeout(function() {
// 	//                 $("#opening").removeClass('hide');
// 	//             }, 1000);
// 	//         }
// 	//         // click to hide welcome screen
// 	//         document.querySelector('#opening').addEventListener('click', function() {
// 	//             document.querySelector('#opening').classList.remove('show');
// 	//             document.querySelector('#hamburger').classList.remove('hide');
// 	//             document.querySelector('.menu-large').classList.remove('hide');
// 	//             sessionStorage.setItem('pageloadcount', '1');
// 	//             // typewriter();
// 	//         })
// 	//     }
// 	// })

// 	// const ball = document.querySelector('.welcome-ball');
// 	// let positionX = 50; // Initial horizontal position
// 	// let positionY = 0; // Initial vertical position
// 	// const moveStep = 2; // Pixels to move each step

// 	// function moveBall(e) {
// 	//     switch (e.key) {
// 	//         case 'ArrowUp':
// 	//             positionY -= moveStep;
// 	//             break;
// 	//         case 'ArrowDown':
// 	//             positionY += moveStep;
// 	//             break;
// 	//         case 'ArrowLeft':
// 	//             positionX -= moveStep;
// 	//             break;
// 	//         case 'ArrowRight':
// 	//             positionX += moveStep;
// 	//             break;
// 	//         default:
// 	//             return; // Exit if it's not an arrow key
// 	//     }

// 	//     // Update ball position
// 	//     ball.style.top = `${positionY}%`;
// 	//     ball.style.left = `${positionX}%`;
// 	// }

// 	// Listen for arrow key presses
// 	// document.addEventListener('keydown', moveBall);
// };
// welcomePage();

// ------------------ about me ------------------
const aboutMePage = () => {
	// upst viewBox based on screen size
	const roomSvg = document.querySelector('.room_img svg');
	if (window.innerWidth < 1023) {
		const y =
			window.innerWidth > 546
				? window.innerWidth * 0.14
				: window.innerWidth * 0.64;

		roomSvg.setAttribute('viewBox', `200 ${y} 600 600`);
	} else {
		roomSvg.removeAttribute('viewBox');
	}

	const map = () => {
		mapboxgl.accessToken =
			'pk.eyJ1IjoibWh5bmVtYW4iLCJhIjoiY2ttYzdrZWM4Mjh3cDJwcXJ0dXp6dHZtdiJ9.51Y91GMZkjhaDhd02nRJqA';

		const geojson = {
			type: 'FeatureCollection',
			features: [
				{
					type: 'Feature',
					properties: {
						message: 'Bar',
						className: 'arequipa',
					},
					geometry: {
						type: 'Point',
						coordinates: [-72.21582, -15.971892],
					},
				},
				{
					type: 'Feature',
					properties: {
						className: 'lima',
					},
					geometry: {
						type: 'Point',
						coordinates: [-77.01812, -11.901892],
					},
				},
				{
					type: 'Feature',
					properties: {
						className: 'machu',
					},
					geometry: {
						type: 'Point',
						coordinates: [-73.21812, -12.701892],
					},
				},
				{
					type: 'Feature',
					properties: {
						className: 'painted',
					},
					geometry: {
						type: 'Point',
						coordinates: [-72.01812, -13.901892],
					},
				},
				{
					type: 'Feature',
					properties: {
						className: 'guatemala',
					},
					geometry: {
						type: 'Point',
						coordinates: [-90.01812, 14.701892],
					},
				},
				{
					type: 'Feature',
					properties: {
						className: 'cr',
					},
					geometry: {
						type: 'Point',
						coordinates: [-83.51812, 8.901892],
					},
				},
				{
					type: 'Feature',
					properties: {
						className: 'kc',
					},
					geometry: {
						type: 'Point',
						coordinates: [-95.01812, 37.701892],
					},
				},
				{
					type: 'Feature',
					properties: {
						className: 'philly',
					},
					geometry: {
						type: 'Point',
						coordinates: [-75.01812, 39.801892],
					},
				},
				{
					type: 'Feature',
					properties: {
						className: 'up',
					},
					geometry: {
						type: 'Point',
						coordinates: [-86.01812, 46.801892],
					},
				},
				{
					type: 'Feature',
					properties: {
						className: 'badlands',
					},
					geometry: {
						type: 'Point',
						coordinates: [-102.01812, 43.801892],
					},
				},
				{
					type: 'Feature',
					properties: {
						className: 'illinois',
					},
					geometry: {
						type: 'Point',
						coordinates: [-89.01812, 41.401892],
					},
				},
				{
					type: 'Feature',
					properties: {
						className: 'sf',
					},
					geometry: {
						type: 'Point',
						coordinates: [-122.514547, 37.789622],
					},
				},
				{
					type: 'Feature',
					properties: {
						className: 'venice',
					},
					geometry: {
						type: 'Point',
						coordinates: [12.714547, 45.489622],
					},
				},
				{
					type: 'Feature',
					properties: {
						className: 'rome',
					},
					geometry: {
						type: 'Point',
						coordinates: [12.714547, 41.489622],
					},
				},
				{
					type: 'Feature',
					properties: {
						className: 'iceland',
					},
					geometry: {
						type: 'Point',
						coordinates: [-18.714547, 63.419622],
					},
				},
				{
					type: 'Feature',
					properties: {
						className: 'dr',
					},
					geometry: {
						type: 'Point',
						coordinates: [-68.51812, 18.701892],
					},
				},
				{
					type: 'Feature',
					properties: {
						className: 'germany',
					},
					geometry: {
						type: 'Point',
						coordinates: [8.714547, 48.489622],
					},
				},
				{
					type: 'Feature',
					properties: {
						className: 'mx',
					},
					geometry: {
						type: 'Point',
						coordinates: [-88.91812, 20.701892],
					},
				},
			],
		};

		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/satellite-v9',
			projection: 'globe', // Display the map as a globe, since satellite-v9 defaults to Mercator
			zoom: 1.5,
			center: [-90, 40],
		});

		map.on('style.load', () => {
			map.setFog({}); // Set the default atmosphere style
		});

		map.on('load', () => {
			for (const place of geojson.features) {
				// Create a DOM element for each marker.
				const el = document.createElement('div');
				el.className = 'marker';
				el.style.backgroundSize = '100%';

				el.addEventListener('click', () => {
					document
						.querySelector(`.map_picture_container`)
						.classList.toggle('hide');
					if (document.querySelector('.img-wrapper.active'))
						document
							.querySelector('.img-wrapper.active')
							.classList.remove('active');
					document
						.querySelector(`.${place.properties.className}`)
						.classList.toggle('active');
					document.querySelector('.overlay').classList.toggle('active');
				});

				// Add markers to the map.
				new mapboxgl.Marker(el)
					.setLngLat(place.geometry.coordinates)
					.addTo(map);
			}
		});

		// The following values can be changed to control rotation speed:

		// At low zooms, complete a revolution every two minutes.
		const secondsPerRevolution = 120;
		// Above zoom level 5, do not rotate.
		const maxSpinZoom = 5;
		// Rotate at intermediate speeds between zoom levels 3 and 5.
		const slowSpinZoom = 3;

		let userInteracting = false;
		let spinEnabled = false;

		function spinGlobe() {
			const zoom = map.getZoom();
			if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
				let distancePerSecond = 360 / secondsPerRevolution;
				if (zoom > slowSpinZoom) {
					// Slow spinning at higher zooms
					const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
					distancePerSecond *= zoomDif;
				}
				const center = map.getCenter();
				center.lng -= distancePerSecond;
				// Smoothly animate the map over one second.
				// When this animation is complete, it calls a 'moveend' event.
				map.easeTo({ center, duration: 1000, easing: (n) => n });
			}
		}

		// Pause spinning on interaction
		map.on('mousedown', () => {
			userInteracting = true;
		});

		// Restart spinning the globe when interaction is complete
		map.on('mouseup', () => {
			userInteracting = false;
			spinGlobe();
		});

		// These events account for cases where the mouse has moved
		// off the map, so 'mouseup' will not be fired.
		map.on('dragend', () => {
			userInteracting = false;
			spinGlobe();
		});
		map.on('pitchend', () => {
			userInteracting = false;
			spinGlobe();
		});
		map.on('rotateend', () => {
			userInteracting = false;
			spinGlobe();
		});

		// When animation is complete, start spinning if there is no ongoing interaction
		map.on('moveend', () => {
			spinGlobe();
		});

		document.getElementById('btn-spin').addEventListener('click', (e) => {
			spinEnabled = !spinEnabled;
			if (spinEnabled) {
				spinGlobe();
				e.target.innerHTML = 'Pause Rotation';
			} else {
				map.stop(); // Immediately end ongoing animation
				e.target.innerHTML = 'Start Rotation';
			}
		});

		// glowing on clickable items
		document.querySelector('.about .globe').addEventListener('click', () => {
			document.querySelector('.map').classList.toggle('hide');
			document.querySelector('.globe').classList.remove('wait');
		});

		document.querySelector('.about .computer').addEventListener('click', () => {
			document.querySelector('.note').classList.toggle('hide');
			document.querySelector('.computer').classList.remove('wait');
		});
		document.querySelector('.about .picture').addEventListener('click', () => {
			document.querySelector('.frame').classList.toggle('hide');
			document.querySelector('.picture').classList.remove('wait');
		});

		if (window.innerWidth < 1023) {
			document
				.querySelector('.about .mobile-frame')
				.addEventListener('click', () => {
					document.querySelector('.frame').classList.toggle('hide');
					document.querySelector('.mobile-frame').classList.remove('wait');
				});
		}

		// close about modals
		const closeBtns = document.querySelectorAll('.about_wrapper .close');
		closeBtns.forEach((btn) => {
			btn.addEventListener('click', () => {
				if (btn.parentElement === document.querySelector('.travel-wrapper')) {
					document
						.querySelector('.map_picture_container')
						.classList.toggle('hide');
					document.querySelector('.overlay').classList.toggle('active');
				} else {
					btn.parentElement.classList.toggle('hide');
				}
			});
		});
	};

	map();
};

// ------------------ projects ------------------

const projectPage = () => {
	// insert project cards to roledex
	const projectCard = (projectId) => {
		const { title, img, alt, id, tech } = projectCardContent[projectId];
		const card = document.createElement('li');
		card.setAttribute('data-toggle', 'modal');
		card.setAttribute('data-id', id);
		if (img[1] === '') {
			card.innerHTML = `
            <div class="project_img">
                <img class="static " src=${img[0]} alt=${alt[0]}>
                <img class="projects-active" src=${img[0]} alt=${alt[0]}>
            </div> <!-- end of project_img -->
            <h2 class="project-header">${title}</h2>
        `;
		} else {
			card.innerHTML = `
                <div class="project_img">
                    <img class="static " src=${img[0]} alt=${alt[0]}>
                    <img class="projects-active" src=${img[1]} alt=${alt[1]}>
                </div> <!-- end of project_img -->
                <h2 class="project-header">${title}</h2>
            `;
		}
		return card;
	};

	const grid = document.querySelector('.projectsList');
	const projectIds = Object.keys(projectCardContent);

	projectIds.forEach((projectId) => {
		grid.insertAdjacentElement('beforeend', projectCard(projectId));
	});

	const insertModal = (project) => {
		if (!document.querySelector('.modal-project'))
			document
				.querySelector('body')
				.insertAdjacentElement('afterbegin', modal(project));
		document.querySelectorAll('.modal-project__close-icon').forEach((el) => {
			el.addEventListener('click', closeModal);
		});
	};

	const openModal = () => {
		document.documentElement.style.overflow = 'hidden'; // lock scrolling
		document.querySelector('.modal-project').classList.add('is-active');
	};

	const closeModal = () => {
		document.documentElement.style.overflow = 'visible'; // unlock scrolling
		document.querySelector('.modal-project').remove();
	};

	document.querySelectorAll('[data-toggle="modal"]').forEach((el) => {
		el.addEventListener('click', (e) => {
			const project = e.target.closest('li').getAttribute('data-id');
			insertModal(project);
			openModal();
		});
	});

	document.addEventListener('DOMContentLoaded', function () {
		const list = document.querySelector('.projectsList');
		const items = list.querySelectorAll('li');
		const section = document.querySelector('body.projects');
		const backgroundColors = [
			'#952e6b',
			'#892d65',
			'#7d2c5f',
			'#712c5a',
			'#652b54',
			'#5a2b4f',
			'#4e2a49',
			'#422943',
			'#36293e',
			'#2a2838',
			'#1f2833',
			'#2a2838',
			'#36293e',
			'#422943',
			'#4e2a49',
			'#5a2b4f',
			'#652b54',
			'#712c5a',
			'#7d2c5f',
			'#892d65',
			'#952e6b',
			'#892d65',
			'#7d2c5f',
		];

		let currentIndex = 0;

		// TODO:
		// drag to scroll projects
		// add captions to images
		// automatic carousel change projects
		// close mobile menu when click outside of menu

		function scrollProjects(direction) {
			const itemCount = items.length;
			// const itemHeight = items[0].offsetHeight;
			const itemHeight = 448.19;

			if (direction === 'next') {
				if (currentIndex < itemCount - 1) {
					currentIndex++;
					section.style.backgroundColor = backgroundColors[currentIndex];
				} else {
					currentIndex = 0; // Reset to the first item if at the end
					section.style.backgroundColor = backgroundColors[currentIndex];
				}
			} else if (direction === 'prev') {
				if (currentIndex > 0) {
					currentIndex--;
					section.style.backgroundColor = backgroundColors[currentIndex];
				} else {
					currentIndex = itemCount - 1; // Jump to the last item if at the start
					section.style.backgroundColor = backgroundColors[currentIndex];
				}
			}

			list.style.transform = `translateY(${-itemHeight * currentIndex}px)`;
		}

		document.getElementById('prev').addEventListener('click', function () {
			scrollProjects('prev');
		});

		document.getElementById('next').addEventListener('click', function () {
			scrollProjects('next');
		});
	});

	const changeGradientBasedOnUserInput = () => {
		function generateGradientHexCodes(startHex, endHex, n) {
			// Convert start and end HEX to RGB
			const startRgb = [0, 2, 4].map((i) =>
				parseInt(startHex.substring(i, i + 2), 16)
			);
			const endRgb = [0, 2, 4].map((i) =>
				parseInt(endHex.substring(i, i + 2), 16)
			);

			// Calculate step for each color channel
			const step = startRgb.map(
				(start, index) => (endRgb[index] - start) / (n - 1)
			);

			// Generate and collect hex codes
			const hexCodes = [];
			for (let i = 0; i < n; i++) {
				const nextRgb = startRgb.map((start, index) =>
					Math.round(start + step[index] * i)
				);
				const hexCode =
					'#' + nextRgb.map((c) => c.toString(16).padStart(2, '0')).join('');
				hexCodes.push(hexCode);
			}

			return hexCodes;
		}

		// Generate 11 gradient hex codes between #952e6b to #1f2833
		const gradientHexCodes = generateGradientHexCodes('#952e6b', '#1f2833', 11);
	};
};

if (window.location.pathname === '/projects.html') {
	projectPage();
}

if (window.location.pathname === '/about.html') {
	aboutMePage();
}
