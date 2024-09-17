function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const sphereContainer = document.querySelector('.floating-sphere-container');
const sphere = document.querySelector('.sphere');

// Initial mouse and sphere container positions
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
const speed = 0.1; // Controls smoothness of movement

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Move the sphere container smoothly based on mouse position
function moveSphere() {
  // Calculate the center position for sphere container
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  // Calculate the new position with smooth transition
  const targetX = mouseX - sphereContainer.clientWidth / 2;
  const targetY = mouseY - sphereContainer.clientHeight / 2;

  // Smoothly interpolate the position
  const currentX = sphereContainer.offsetLeft;
  const currentY = sphereContainer.offsetTop;
  
  sphereContainer.style.left = `${currentX + (targetX - currentX) * speed}px`;
  sphereContainer.style.top = `${currentY + (targetY - currentY) * speed}px`;

  requestAnimationFrame(moveSphere);
}

moveSphere();

function toggleFlip(button) {
	const flipCardInner = button.closest('.flip-card-inner');
	flipCardInner.style.transform = flipCardInner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
  }

  function flipCard(button) {
	const card = button.closest('.flip-card');
	card.classList.toggle('flipped');
	
	// Prevent other cards from flipping while one is already flipped
	document.querySelectorAll('.live-demo-btn').forEach(btn => {
	  if (btn !== button && btn.closest('.flip-card').classList.contains('flipped')) {
		btn.click();
	  }
	});
  }

  flipCard();