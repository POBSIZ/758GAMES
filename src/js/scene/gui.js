/**
 * GUI 화면
 */

import Phaser from 'phaser';

import _ from 'underscore';

import loadAssets from './loadAssets';

import Orb from '../object/item/orb';

export default class GUI extends Phaser.Scene {
	constructor() {
		super({ key: 'gui', active: true });
	}

	// 초기화
	init() {}

	// 사전 설정
	preload() {
		// blue_orb 이미지
		this.load.image(
			'blue',
			'https://res.cloudinary.com/dawyhdlcl/image/upload/v1675564552/game/item/blue_orb_glngqh.png'
		);

		// red_orb 이미지
		this.load.image(
			'red',
			'https://res.cloudinary.com/dawyhdlcl/image/upload/v1675564553/game/item/red_orb_gn9n9h.png'
		);

		// yellow_orb 이미지
		this.load.image(
			'yellow',
			'https://res.cloudinary.com/dawyhdlcl/image/upload/v1675564553/game/item/yellow_orb_pnvv7z.png'
		);
	}

	// 생성
	create() {
		this.round = this.scene.get('round');
		this.loading = this.scene.get('loading');

		// UI 숨기기
		this.scene.sleep();

		// // scene 전환시 UI 표시
		this.loading.events.on(
			'wakeup',
			function () {
				this.scene.wake();
			},
			this
		);

		const { x, y, width, height } = this.cameras.main; // 메인 카메라의 x, y, 높이, 폭 가져오기

		const center = {
			x: x + width / 2,
			y: y + height / 2,
		};

		// stopwatch text
		this.timestamp = this.add.text(36, 24, `Time: 0.0`, {
			font: '20px Arial',
			fill: '#000000',
		});

		// Score text
		this.score = this.add.text(36, 68, `Score: 0`, {
			font: '20px Arial',
			fill: '#000000',
			align: 'right',
		});

		// stopwatch
		this.timer = { sec: 0, milsec: 0 };
		this.stopwatch = _.throttle(() => {
			this.timer.milsec += 1;
			if (this.timer.milsec > 99) {
				this.timer.sec += 1;
				this.timer.milsec = 0;
			}
			this.timestamp.setText(`Time: ${this.timer.sec}.${this.timer.milsec}`);
		}, 1);

		// 오브 이미지 그룹
		this.imgGroup = this.add.group();

		// 오브 획득 이벤트 로직
		this.round.events.on(
			'getOrb',
			function (list) {
				this.imgGroup.clear(true, true);

				list.forEach((item, i) => {
					if (i === 0) {
						const orb = this.add.image(50, 114, item).setScale(0.3);
						this.imgGroup.add(orb);
					}

					if (i === 1) {
						const orb = this.add.image(90, 114, item).setScale(0.3);
						this.imgGroup.add(orb);
					}
				});
			},
			this
		);

		// 스코어 획득 이벤트 로직
		this.round.events.on(
			'getScore',
			function (score) {
				this.score.setText(
					`Score: ${Number(this.score._text.replace(/[^0-9]/g, '')) + score}`
				);
			},
			this
		);

		// 체력 표시
		this.health = this.add.text(36, 46, 'Health: 50', {
			font: '20px Arial',
			fill: '#000000',
		});

		// 적 충돌시 이벤트
		this.round.events.on(
			'hit',
			function (health) {
				this.health.setText(`Health: ${health}`);
			},
			this
		);
	}

	// 변경(갱신)
	update() {
		if (Number(this.health._text.replace(/[^0-9]/g, '')) > 0) {
			this.stopwatch();
		} else {
			this.timestamp.setColor('#fff');
			this.health.setColor('#fff');
			this.score.setColor('#fff');
		}
	}
}