/**
 * GUI 화면
 */

import Phaser from 'phaser';

import _ from 'underscore';

export default class Gameover extends Phaser.Scene {
	constructor() {
		super('gameover');
	}

	// 사전 설정
	preload() {}

	// 생성
	create() {
		const { x, y, width, height } = this.cameras.main; // 메인 카메라의 x, y, 높이, 폭 가져오기

		const center = {
			x: x + width / 2,
			y: y + height / 2,
		};

		// 게임 오버 텍스트
		this.gameOverText = this.add
			.text(center.x - 20, (center.y * 4) / 5, 'GAME OVER', {
				fontSize: '32px',
				fill: '#fff',
				align: 'center',
			})
			.setOrigin(0.5);

		// 재시작 텍스트
		this.restartText = this.add
			.text(center.x, (center.y * 6) / 5, '아무 곳이나 눌러 재시작하세요.', {
				fontSize: '22px',
				fill: '#fff',
				align: 'center',
			})
			.setOrigin(0.5);

		this.input.once('pointerdown', () => {
			window.location.reload();
		});
	}

	// 변경(갱신)
	update() {}
}