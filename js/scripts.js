import { Modal as modal } from './projectModal.js';
import { projectCardContent } from '../content/projectCardContent.js';

const log = console.log;

// Shared navigation animation function
const animateNavItems = () => {
	// Only animate on desktop (nav-desktop is hidden on mobile)
	const navItems = document.querySelectorAll('.nav-desktop .menu-l-item');
	// Check if we're on desktop by checking window width (matches CSS media query)
	if (window.innerWidth < 786) {
		return; // Don't animate on mobile
	}

	navItems.forEach((item, index) => {
		// Reset animation
		item.style.animation = 'none';
		item.style.opacity = '0';
		item.style.transform = 'translateX(-100px)';

		// Trigger animation with delay
		setTimeout(() => {
			item.style.animation = `slideInFromLeft 0.6s ease-out forwards`;
		}, index * 150); // 150ms delay between each item
	});
};

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

// ------------------ home page ------------------
const homePage = () => {
	// Run navigation animation when page loads
	animateNavItems();

	// Re-run navigation animation on window resize
	window.addEventListener('resize', () => {
		animateNavItems();
	});
	const path = document.getElementById('wavePath');
	const container = document.querySelector('.wave-container');

	const defaultPoints = {
		x1: 360,
		y1: 150,
		x2: 1080,
		y2: -60,
	};

	let currentPoints = { ...defaultPoints };
	let animationId;

	container.addEventListener('mousemove', (e) => {
		cancelAnimationFrame(animationId);

		const rect = container.getBoundingClientRect();
		const mouseX = e.clientX - rect.left;
		const centerX = rect.width / 2;
		const offset = (mouseX - centerX) / centerX;

		const amplify = 200;
		const yAmplify = 80;

		currentPoints = {
			x1: defaultPoints.x1 + offset * -amplify,
			y1: defaultPoints.y1 + offset * -yAmplify,
			x2: defaultPoints.x2 + offset * -amplify,
			y2: defaultPoints.y2 + offset * yAmplify,
		};

		updatePath(currentPoints);
	});

	container.addEventListener('mouseleave', () => {
		animateBack();
	});

	function updatePath(points) {
		const d = `M0,60 C${points.x1},${points.y1} ${points.x2},${points.y2} 1440,60 L1440,150 L0,150 Z`;
		path.setAttribute('d', d);
	}

	function animateBack() {
		function step() {
			let done = true;
			for (let key in currentPoints) {
				const target = defaultPoints[key];
				const value = currentPoints[key];
				const delta = (target - value) * 0.1;

				if (Math.abs(delta) > 0.5) {
					currentPoints[key] += delta;
					done = false;
				} else {
					currentPoints[key] = target;
				}
			}

			updatePath(currentPoints);
			if (!done) animationId = requestAnimationFrame(step);
		}

		animationId = requestAnimationFrame(step);
	}
	// Parallax effect for background - moves background based on mouse position
	document.addEventListener('mousemove', (e) => {
		const x = (e.clientX / window.innerWidth - 0.5) * 30; // range: -15 to 15
		const y = (e.clientY / window.innerHeight - 0.5) * 30;
		document.body.style.backgroundPosition = `${x}px ${y}px`;
	});

	// water ripple effect
	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');

	let width = (canvas.width = window.innerWidth);
	let height = (canvas.height = window.innerHeight);

	window.addEventListener('resize', (e) => {
		width = canvas.width = window.innerWidth;
		height = canvas.height = window.innerHeight;
	});

	const ripples = [];
	const maxRipples = 6;
	let mouse = { x: width / 2, y: height / 2 };

	function addRipple(x, y) {
		// Sophisticated color palette - deep blues and teals
		const baseHue = 200 + Math.random() * 40; // 200-240 (blue to teal range)
		const saturation = 60 + Math.random() * 20; // 60-80%
		const lightness = 40 + Math.random() * 20; // 40-60%

		ripples.push({
			x,
			y,
			radius: 0,
			maxRadius: 120 + Math.random() * 80,
			speed: 1.5 + Math.random() * 1.5,
			life: 1,
			hue: baseHue,
			saturation,
			lightness,
			waveCount: 2 + Math.floor(Math.random() * 2), // 2-3 wave rings
			noise: Math.random() * 0.1, // Subtle distortion
		});

		if (ripples.length > maxRipples) {
			ripples.shift();
		}
	}

	function animate() {
		// Clear the canvas completely to prevent dots from staying forever
		ctx.clearRect(0, 0, width, height);

		// Animate and draw ripples
		for (let i = ripples.length - 1; i >= 0; i--) {
			const ripple = ripples[i];

			ripple.radius += ripple.speed;
			ripple.life *= 0.96; // Faster fade to remove ripples quicker

			// Remove ripples that have expanded too much or lost their life
			if (ripple.radius > ripple.maxRadius || ripple.life < 0.05) {
				ripples.splice(i, 1);
				continue;
			}

			// Draw sophisticated wave rings
			for (let wave = 0; wave < ripple.waveCount; wave++) {
				const waveRadius = ripple.radius - wave * 20;
				const waveOpacity = ripple.life * (1 - wave * 0.4) * 0.8; // Increased opacity for better visibility

				if (waveRadius > 0 && waveOpacity > 0) {
					ctx.beginPath();

					// Create sophisticated stroke with varying opacity
					const strokeColor = `hsla(${ripple.hue}, ${ripple.saturation}%, ${ripple.lightness}%, ${waveOpacity})`;
					ctx.strokeStyle = strokeColor;
					ctx.lineWidth = 2; // Slightly thicker lines for better visibility

					// Add subtle noise to the circle for organic feel
					const noiseRadius = Math.max(
						1,
						waveRadius + Math.sin(Date.now() * 0.001 + ripple.noise) * 2
					);
					ctx.arc(ripple.x, ripple.y, noiseRadius, 0, Math.PI * 2);
					ctx.stroke();
				}
			}

			// Sophisticated central effect - subtle glow
			if (ripple.radius < 25) {
				ctx.beginPath();
				const gradient = ctx.createRadialGradient(
					ripple.x,
					ripple.y,
					0,
					ripple.x,
					ripple.y,
					ripple.radius
				);
				gradient.addColorStop(
					0,
					`hsla(${ripple.hue}, ${ripple.saturation}%, ${ripple.lightness}%, ${
						ripple.life * 0.6
					})`
				);
				gradient.addColorStop(
					0.5,
					`hsla(${ripple.hue}, ${ripple.saturation}%, ${ripple.lightness}%, ${
						ripple.life * 0.3
					})`
				);
				gradient.addColorStop(1, 'transparent');
				ctx.fillStyle = gradient;
				ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
				ctx.fill();
			}
		}

		requestAnimationFrame(animate);
	}

	// Refined mouse interaction - less frequent, more intentional
	let lastRippleTime = 0;
	document.addEventListener('mousemove', (e) => {
		mouse.x = e.clientX;
		mouse.y = e.clientY;

		// Create ripples less frequently for more sophisticated feel
		const now = Date.now();
		if (now - lastRippleTime > 200) {
			// 200ms minimum between ripples
			if (Math.random() < 0.4) {
				addRipple(mouse.x, mouse.y);
				lastRippleTime = now;
			}
		}
	});

	// Subtle click effect
	document.addEventListener('click', (e) => {
		addRipple(e.clientX, e.clientY);
	});

	animate();

	// skills ticker with intersection observer
	const skillsTicker = document.querySelector('.skills-ticker');
	const skillsTickerContent = document.querySelector('.skills-ticker-content');

	if (skillsTicker && skillsTickerContent) {
		// Initially pause the animation
		skillsTickerContent.style.animationPlayState = 'paused';

		// Create intersection observer
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Start animation when in view
						skillsTickerContent.style.animationPlayState = 'running';
					} else {
						// Pause animation when out of view
						skillsTickerContent.style.animationPlayState = 'paused';
					}
				});
			},
			{
				threshold: 0.3, // Start when 30% of the element is visible
			}
		);

		// Observe the skills ticker
		observer.observe(skillsTicker);
	}
};

// ------------------ about me ------------------
const aboutMePage = () => {
	// Run navigation animation when page loads
	animateNavItems();

	// Re-run navigation animation on window resize
	window.addEventListener('resize', () => {
		animateNavItems();
	});

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
						coordinates: [-83.8078, 9.2548],
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
						coordinates: [12.3327, 45.4371],
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
				{
					type: 'Feature',
					properties: {
						className: 'bariloche',
					},
					geometry: {
						type: 'Point',
						coordinates: [-71.31812, -41.13189],
					},
				},
				{
					type: 'Feature',
					properties: {
						className: 'pat',
					},
					geometry: {
						type: 'Point',
						coordinates: [-71.4667, -41.1167],
					},
				},
				{
					type: 'Feature',
					properties: {
						className: 'fitz',
					},
					geometry: {
						type: 'Point',
						coordinates: [-73.0393, -49.2694],
					},
				},
				{
					type: 'Feature',
					properties: {
						className: 'jujuy',
					},
					geometry: {
						type: 'Point',
						coordinates: [-65.348609, -23.203963],
					},
				},
				{
					type: 'Feature',
					properties: {
						className: 'iguazu',
					},
					geometry: {
						type: 'Point',
						coordinates: [-54.4367, -25.6953],
					},
				},
				{
					type: 'Feature',
					properties: {
						className: 'moreno',
					},
					geometry: {
						type: 'Point',
						coordinates: [-73.0574, -50.4711],
					},
				},
				{
					type: 'Feature',
					properties: {
						className: 'uruguay',
					},
					geometry: {
						type: 'Point',
						coordinates: [-57.8398, -34.4626],
					},
				},
				{
					type: 'Feature',
					properties: {
						className: 'panama',
					},
					geometry: {
						type: 'Point',
						coordinates: [-82.24204, 9.34031],
					},
				},
				{
					type: 'Feature',
					properties: {
						className: 'panamaCity',
					},
					geometry: {
						type: 'Point',
						coordinates: [-79.535, 8.9525],
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

		const hideAllModals = () => {
			const modalSelectors = [
				'.frame_modal',
				'.note_modal',
				'.map_modal',
				'.fav_books_modal',
			];

			modalSelectors.forEach((selector) => {
				const element = document.querySelector(selector);
				if (!element.classList.contains('hide')) element.classList.add('hide');
			});
		};

		// glowing on clickable items
		document.querySelector('.about .globe').addEventListener('click', () => {
			hideAllModals();
			document.querySelector('.map_modal').classList.toggle('hide');
			document.querySelector('.globe').classList.remove('wait');
		});

		document.querySelector('.about .computer').addEventListener('click', () => {
			hideAllModals();
			document.querySelector('.note_modal').classList.toggle('hide');
			document.querySelector('.computer').classList.remove('wait');
		});

		document.querySelector('.about .book').addEventListener('click', () => {
			hideAllModals();
			document.querySelector('.fav_books_modal').classList.toggle('hide');
			document.querySelector('.book').classList.remove('wait');
		});

		document.querySelector('.about .picture').addEventListener('click', () => {
			hideAllModals();
			document.querySelector('.frame_modal').classList.toggle('hide');
			document.querySelector('.picture').classList.remove('wait');
		});

		if (window.innerWidth < 1023) {
			document
				.querySelector('.about .mobile-frame')
				.addEventListener('click', () => {
					document.querySelector('.frame_modal').classList.toggle('hide');
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
	// Run navigation animation when page loads
	animateNavItems();

	// Re-run navigation animation on window resize
	window.addEventListener('resize', () => {
		animateNavItems();
	});

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

if (window.location.pathname === '/index.html') {
	homePage();
}

if (window.location.pathname === '/projects.html') {
	projectPage();
}

if (window.location.pathname === '/about.html') {
	aboutMePage();
}

if (window.location.pathname === '/contact.html') {
	// Run navigation animation when page loads
	animateNavItems();

	// Re-run navigation animation on window resize
	window.addEventListener('resize', () => {
		animateNavItems();
	});
}
