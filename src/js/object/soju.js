/**
 * 적 클래스
 */

import Phaser from 'phaser';

export default class Soju extends Phaser.Physics.Arcade.Sprite {
	// 	초기화
	constructor(scene, x, y, player) {
		super(scene, x, y);

		// 	장면 객체 저장
		this.scene = scene;

		// 	캐릭터 설정
		this.setTexture('soju');
		this.setPosition(x, y);
		this.setDepth(5);
		this.scale = 0.4;
		this.speed = 150;

		// player 지정
		this.player = player;

		// 	장면에 추가
		scene.add.existing(this); // 장면 추가
		scene.physics.add.existing(this); // 물리엔진 추가
		// this.setCollideWorldBounds(true); // 맵 밖으로 나가는거 방지

		this.chaseEvent = this.scene.time.addEvent({
			delay: 100,
			callback: () => {
				scene.physics.moveToObject(this, this.player, this.speed);
			},
			loop: true,
		});

		this.play('soju_run', true);

		// 업데이트 이벤트 적용
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.handleMovement, this);
	}

	// 갱신
	handleMovement() {
		if (!this.active) {
			this.chaseEvent.remove(false);
			this.destroy();
		}
	}
}