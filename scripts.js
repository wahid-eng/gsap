document.addEventListener('DOMContentLoaded', () => {
	gsap.set('h1', { opacity: 0, scale: 0 });

	const tl = gsap.timeline();
	tl.from('header > a', {
		y: -20,
		opacity: 0,
	})
		.from('nav li', {
			x: 20,
			opacity: 0,
			stagger: 0.1,
		})
		.to('h1', {
			scale: 2,
			opacity: 1,
			duration: 1,
		})
		.to('.section-text-scrolling h2', {
			transform: 'translateX(-150%)',
			scrollTrigger: {
				trigger: '.section-text-scrolling',
				start: 'top 0%',
				scrub: true,
				pin: true,
			},
		});
});
