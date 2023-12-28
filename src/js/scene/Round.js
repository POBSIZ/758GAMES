/**
 * 게임 화면
 */

import Phaser from 'phaser';

import _ from 'underscore';

import Player from '../object/player';
import Soju from '../object/soju';
import Tobacco from '../object/tobacco';

import loadAssets from './loadAssets';
import createAnims from './createAnims';
import fadeout from './fadeout';

import orbCreateLogic from '../logic/orbCreateLogic';
import enemyCreate from '../logic/enemyCreate';

import Dashboard from '../ui/dashboard';

export default class Round extends Phaser.Scene {
	constructor() {
		super('round'); // 식별자를 round 으로 설정
	}

	// 사전 설정
	preload() {
		loadAssets(this);
	}

	// 생성
	create() {
		const { x, y, width, height } = this.cameras.main; // 메인 카메라의 x, y, 높이, 폭 가져오기

		// 배경 설정
		this.background = this.add.tileSprite(x, y, width, height, 'round_bg').setOrigin(0);

		const center = {
			x: x + width / 2,
			y: y + height / 2,
		};

		// 애니메이션 생성
		createAnims(this);

		// 아이템 및 그룹 생성
		this.items = this.add.group();
		orbCreateLogic(this, this.items);

		// 먹은 아이템 배열
		this.getList = [];

		// soju group 생성
		this.sojuGroup = this.add.group();

		// tobacco group 생성
		this.tobaccoGroup = this.add.group();

		// enemy 생성
		enemyCreate(this);

		// 충돌 적용 (collider)
		this.physics.add.collider(this.sojuGroup);
		this.physics.add.collider(this.tobaccoGroup);

		// player 생성
		this.player = new Player(this, center.x, (height * 4) / 5, this.items, this.getList, [
			this.sojuGroup,
			this.tobaccoGroup,
		]);

		// 카메라 player 따라다니기
		this.cameras.main.startFollow(this.player);
	}

	// 변경(갱신)
	update() {
		const { width, height } = this.cameras.main;

		// camera가 가는 곳으로 background가 따라와요!
		this.background.setX(this.player.x - width / 2);
		this.background.setY(this.player.y - height / 2);

		// 무한대 배경
		this.background.tilePositionX = this.player.x - width / 2;
		this.background.tilePositionY = this.player.y - height / 2;
	}
}