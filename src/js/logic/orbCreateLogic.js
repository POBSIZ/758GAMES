import Phaser from 'phaser';
import Orb from '../object/item/orb';

export default function orbCreateLogic(scene, group) {
	scene.time.addEvent({
		delay: 4000,
		callback: () => {
			const { _scrollX, _scrollY, width, height } = scene.cameras.main; // 메인 카메라의 x, y, 높이, 폭 가져오기
			const y = _scrollY + 280;

			group.clear(true, true);

			// yellow orb 생성
			const yellowOrb = new Orb(
				scene,
				Phaser.Math.Between(_scrollX, _scrollX + width),
				Phaser.Math.Between(y, y + height),
				'yellow'
			);
			group.add(yellowOrb);

			// red orb 생성
			const redOrb = new Orb(
				scene,
				Phaser.Math.Between(_scrollX, _scrollX + width),
				Phaser.Math.Between(y, y + height),
				'red'
			);
			group.add(redOrb);

			// blue orb 생성
			const blueOrb = new Orb(
				scene,
				Phaser.Math.Between(_scrollX, _scrollX + width),
				Phaser.Math.Between(y, y + height),
				'blue'
			);
			group.add(blueOrb);
		},
		loop: true,
	});
}