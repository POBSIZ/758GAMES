/**
 * 캐릭터 클래스
 */

import Phaser from 'phaser';

export default class Orb extends Phaser.Physics.Arcade.Sprite {
	// 	초기화
	constructor(scene, x, y, type) {
		super(scene, x, y);

		// 	장면 객체 저장
		this.scene = scene;

		// 타입 저장 및 설정
		this.type = type;
		this.typeMap = {
			red: () => {
				this.setTexture('red_orb');
			},
			blue: () => {
				this.setTexture('blue_orb');
			},
			yellow: () => {
				this.setTexture('yellow_orb');
			},
		};
		this.typeMap[this.type]();

		this.setPosition(x, y);
		this.setDepth(4);
		this.scale = 0.4;

		// 	장면에 추가
		scene.add.existing(this); // 장면 추가
		scene.physics.add.existing(this); // 물리엔진 추가
		// this.setCollideWorldBounds(true); // 맵 밖으로 나가는거 방지
		scene.physics.add.collider(this);

		// 업데이트 이벤트 적용
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.handleMovement, this);
	}

	// 	갱신
	handleMovement() {}
}