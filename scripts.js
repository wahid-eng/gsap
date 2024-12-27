document.addEventListener('DOMContentLoaded', () => {
	gsap.to('section h2', {
		transform: 'translateX(-150%)',
		scrollTrigger: {
			trigger: '.overflow-hidden',
			markers: true,
			start: 'top 0%',
			scrub: true,
			pin: true,
		},
	});
});
