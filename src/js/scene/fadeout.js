import Phaser from 'phaser';

export default function fadeout(scene, center) {
	const num = 0;
	const title = scene.add.sprite(center.x, center.y, 'title_name');
	scene.add.text(center.x - 80, center.y * 2.3, '게임시작 : SPACEBAR', {
		font: '20px',
		fill: '#ffffff',
		align: 'center',
	});

	scene.input.keyboard.once('keydown-SPACE', () => {
		scene.tweens.add({
			targets: title,
			alpha: { from: 1, to: 0 },
			ease: 'Sine.InOut',
			duration: 1000,
			repeat: 0,
			yoyo: false,
		});
		// scene.cameras.main.fadeOut(1000);
		//scene.cameras.main.fadeIn(1000,0,0,0);
		//this.scene.transition({ target: 'round', duration: 500 });
	});
}