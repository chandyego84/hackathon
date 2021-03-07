var config =
{
	type: Phaser.AUTO,
	width: 1450,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300 },
			debug: false
		}
	},
	scene: {
		preload: preload,
		create: create,
		update: update
	}
};

var game = new Phaser.Game(config);

function preload() {
	this.load.image('sky', '../Assets/tutorial/sky.png');
	this.load.image('ground', '../Assets/tutorial/platform.png');
	this.load.image('star', '../Assets/tutorial/star.png');
	this.load.image('bomb', '../Assets/tutorial/bomb.png');
	this.load.spritesheet('dude', '../Assets/alien/alien_sheet.png',
		{ frameWidth: 24, frameHeight: 48 }
	);
}

var platforms;
var player;
var score = 0;
var scoreText;

function create() {
	this.physics.world.bounds.width = 1450;
	this.physics.world.bounds.height = 600;

	this.add.image(800, 300, 'sky').setScale(2);

	// creates new static physics group and assigns to playforms var
	platforms = this.physics.add.staticGroup();

	// set scale multiplies dimensions of image
	// refreshBody tells physics world about changes we made ^
	platforms.create(400, 600, 'ground').setScale(6).refreshBody();

	platforms.create(20, 200, 'ground');
	platforms.create(200, 350, 'ground');
	platforms.create(725, 220, 'ground');
	platforms.create(1250, 350, 'ground');
	platforms.create(1430, 200, 'ground');
	platforms.create(725, 400, 'ground');

	// creation of physics sprite 
	player = this.physics.add.sprite(100, 450, 'dude');
	player.setBounce(0.2);
	player.setCollideWorldBounds(true);
	player.body.setGravityY(300);
	
	// collision object to check for collisions btwn player and platforms objects 
	this.physics.add.collider(player, platforms);

	// creation of animations it can use
	this.anims.create({
		key: 'left',
		frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 2 }),
		frameRate: 10,
		repeat: -1
	});

	this.anims.create({
		key: 'turn',
		frames: [{ key: 'dude', frame: 3 }],
		frameRate: 20
	});

	this.anims.create({
		key: 'right',
		frames: this.anims.generateFrameNumbers('dude', { start: 4, end: 6 }),
		frameRate: 10,
		repeat: -1
	});

	cursors = this.input.keyboard.createCursorKeys();	// cursors for player movement 

	// stars 
	stars = this.physics.add.group({
		key: 'star',
		repeat: 15,
		setXY: { x: 12, y: 0, stepX: 70 }
	});

	// iterates all childern in the Group and gives random Y bounce value between 0.2 and 0.8
	stars.children.iterate(function (child) {
		child.setBounceY(Phaser.Math.FloatBetween(0.2, 0.8));
	})
	// collision between stars and platforms 
	this.physics.add.collider(stars, platforms);

	// overlap function for star and players; gets rid of star, add to score
	function collectStar(player, star) {
		star.disableBody(true, true);

		score += 10;
		scoreText.setText('Player 1: ' + score);

		if (stars.countActive(true) > 12)	// countActive to see if there are still stars alive
		{
			var x = (player.x < 400) ? Phaser.Math.Between(400, 800) :
				Phaser.Math.Between(0, 400);

			var bomb = bombs.create(x, 16, 'bomb');
			bomb.setBounce(1);
			bomb.setCollideWorldBounds(true);
			bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
		}
	}
	}

	// check to see if player overlaps w/ star or not
	scoreText = this.add.text(16, 16, 'Player 1: 0', { fontSize: '32px', fill: '#000' });
	this.physics.add.overlap(player, stars, collectStar, null, this);

	// "enemies"
	bombs = this.physics.add.group();
	this.physics.add.collider(bombs, platforms);

	function hitBomb(player, bomb) {
		this.physics.pause();
		player.setTint(0xff0000);
		player.anims.play('turn');
		endGame = this.add.text(350, 280, 'GAME OVER! \nYOU LOST.', { fontSize: '48px', fill: '#000' });
		gameOver = true;
	}
	this.physics.add.collider(player, bombs, hitBomb, null, this);


function update() {
	if (cursors.left.isDown) {
		player.setVelocityX(-160);
		player.anims.play('left', true);
	}
	else if (cursors.right.isDown) {
		player.setVelocityX(160);
		player.anims.play('right', true);
	}
	// no key is held down, sprite is stationary
	else {
		player.setVelocityX(0);
		player.anims.play('turn');
	}
	// jump ability if up key is pressed and sprite is touching ground
	if (cursors.up.isDown && player.body.touching.down) {
		player.setVelocityY(-450);
	}
}
