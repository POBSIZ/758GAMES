export default function loadAssets(scene) {
	// 배경 이미지
	scene.load.image(
		'round_bg',
		'https://res.cloudinary.com/dawyhdlcl/image/upload/v1675564552/game/round/ground_tile_a_tkzlee.png'
	);

	//게임 제목
	scene.load.image(
		'title_name',
		'https://res.cloudinary.com/dawyhdlcl/image/upload/v1675564964/game/title/bg_cxwwuo.gif'
	);
	

	// blue_orb 이미지
	scene.load.image(
		'blue_orb',
		'https://res.cloudinary.com/dawyhdlcl/image/upload/v1675564552/game/item/blue_orb_glngqh.png'
	);
	
	// red_orb 이미지
	scene.load.image(
		'red_orb',
		'https://res.cloudinary.com/dawyhdlcl/image/upload/v1675564553/game/item/red_orb_gn9n9h.png'
	);
	
	// yellow_orb 이미지
	scene.load.image(
		'yellow_orb',
		'https://res.cloudinary.com/dawyhdlcl/image/upload/v1675564553/game/item/yellow_orb_pnvv7z.png'
	);

	// player 이미지
	scene.load.image(
		'player',
		'https://res.cloudinary.com/dawyhdlcl/image/upload/v1675564552/game/anim/player/player_zwn43m.png'
	);

	// player 오른쪽 달리기 애니메이션
	scene.load.spritesheet(
		'player_right_run',
		'https://res.cloudinary.com/dawyhdlcl/image/upload/v1675564552/game/anim/player/player_right_run_qrsl8c.png',
		{
			frameWidth: 120,
			frameHeight: 160,
		}
	);

	// player 왼쪽 달리기 애니메이션
	scene.load.spritesheet(
		'player_left_run',
		'https://res.cloudinary.com/dawyhdlcl/image/upload/v1675564552/game/anim/player/player_left_run_nqttcz.png',
		{
			frameWidth: 120,
			frameHeight: 160,
		}
	);

	// player 왼쪽 대기 애니메이션
	scene.load.spritesheet(
		'player_left_idle',
		'https://res.cloudinary.com/dawyhdlcl/image/upload/v1675564552/game/anim/player/player_left_idle_kmybrh.png',
		{
			frameWidth: 120,
			frameHeight: 160,
		}
	);

	// player 오른쪽 대기 애니메이션
	scene.load.spritesheet(
		'player_right_idle',
		'https://res.cloudinary.com/dawyhdlcl/image/upload/v1675564552/game/anim/player/player_right_idle_vsyxx5.png',
		{
			frameWidth: 120,
			frameHeight: 160,
		}
	);

	// soju 달리기 애니메이션
	scene.load.spritesheet(
		'soju',
		'https://res.cloudinary.com/dawyhdlcl/image/upload/v1675564551/game/anim/soju/soju_run_ukidul.png',
		{
			frameWidth: 120,
			frameHeight: 184,
		}
	);

	// tobacco_right_run 애니메이션
	scene.load.spritesheet(
		'tobacco_right_run',
		'https://res.cloudinary.com/dawyhdlcl/image/upload/v1675564551/game/anim/tobacco/tobacco_right_run_giiyor.png',
		{
			frameWidth: 102,
			frameHeight: 132,
		}
	);

	// tobacco_left_run 애니메이션
	scene.load.spritesheet(
		'tobacco_left_run',
		'https://res.cloudinary.com/dawyhdlcl/image/upload/v1675564551/game/anim/tobacco/tobacco_left_run_ahinpc.png',
		{
			frameWidth: 102,
			frameHeight: 132,
		}
	);
}