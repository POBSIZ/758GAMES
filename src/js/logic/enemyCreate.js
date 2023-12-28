import Phaser from 'phaser';

import Soju from '../object/soju';
import Tobacco from '../object/tobacco';

export default function enemyCreate(scene) {
	scene.time.addEvent({
		delay: 3000,
		callback: () => {
			const { _scrollX, _scrollY, width, height } = scene.cameras.main; // 메인 카메라의 x, y, 높이, 폭 가져오기
			const y = _scrollY + 280;
			
			// soju 생성
			const soju = new Soju(
				scene,
				Phaser.Math.Between(_scrollX, _scrollX + width),
				Phaser.Math.Between(y, y + height),
				scene.player
			);
			scene.sojuGroup.add(soju);

			// tobbaco 생성
			const tobacco = new Tobacco(
				scene,
				Phaser.Math.Between(_scrollX, _scrollX + width),
				Phaser.Math.Between(y, y + height),
				scene.player
			);
			scene.tobaccoGroup.add(tobacco);
		},
		loop: true,
	});
}