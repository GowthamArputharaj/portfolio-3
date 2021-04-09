function pop() {
	let amount = 30000;
    
    setInterval(() => {
        createParticle(`${Math.floor(Math.random() * window.innerWidth)}`, window.innerHeight);

        setTimeout(() => {
            document.querySelector('particle').remove();
        }, 1500);
    }, 400)
        
}

function createParticle(x, y) {
	const particle = document.createElement('particle');
	document.body.appendChild(particle);
	let width = Math.floor(Math.random() * 30 + 8);
	let height = width;
	let destinationX = (Math.random()) * 300;
	let destinationY = (Math.random()) * 300;
	let rotation = Math.random() * 520;
	let delay = Math.random() * 1000;


	// var color = `hsl(${Math.random() * 90 + 90}, 70%, 50%)`;

	// color = `rgb(64,53,71)`;
	var color = particle.style.color;
	particle.style.boxShadow = `0 0 ${Math.floor(Math.random() * 10 + 10)}px ${color}`;
	// particle.style.background = color;
    // particle.style.boxShadow   = ``
	particle.style.borderRadius = '50%';
	width = height = Math.random() * 5 + 9;


	particle.style.width = `${width}px`;
	particle.style.height = `${height}px`;
	const animation = particle.animate([{
			transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
			opacity: 1
		},
		{
			transform: `translate(-50%, -50%) translate(${x}px, ${y - window.innerHeight - 500}px) rotate(${rotation}deg)`,
			opacity: 0.3
		}
	], {
		duration: Math.random() * 1000 + 50000,
		easing: 'cubic-bezier(0, 0.95, .8, 1)',
		delay: delay
	});
	animation.onfinish = removeParticle;
}

function removeParticle() {
	e.srcElement.effect.target.remove();
}

pop();