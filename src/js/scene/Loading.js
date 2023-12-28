/**
 * 게임 로딩 화면
 */

import Phaser from 'phaser';

export default class Loading extends Phaser.Scene {
	constructor() {
		super('loading'); // 식별자를 loading 으로 설정
	}

	// 사전 설정
	preload() {
		// TITLE
		this.load.image(
			'TITLE',
			'https://res.cloudinary.com/dawyhdlcl/image/upload/v1677738067/game/title/title_bumekh.png'
		);
	}

	// 생성
	create() {
		const { x, y, width, height } = this.cameras.main; // 메인 카메라의 x, y, 높이, 폭 가져오기

		const center = {
			x: x + width / 2,
			y: y + height / 2,
		};
		
		this.round = this.scene.get('round');

		
		// 타이틀 화면
		const TITLE = this.add.image(center.x - 90, (center.y * 3.6) / 5, "TITLE").setScale(0.8).setOrigin(0);
		
		// 시작 텍스트
		this.startText = this.add
			.text(center.x, (center.y * 6) / 5, '아무 곳이나 눌러 시작하세요.', {
				fontSize: '22px',
				fill: '#000',
				align: 'center',
			})
			.setOrigin(0.5);

		// 화면 클릭시 이벤트
		this.input.once('pointerdown', () => {
			this.events.emit('wakeup');
			this.scene.transition({ target: 'round', duration: 10 });
		});
	}

	// 변경(갱신)
	update() {}
}