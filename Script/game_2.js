var config = {
	type: Phaser.AUTO,
    width: 800,
    height: 500,

    physics: {
      default: "arcade",
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
const game = new Phaser.Game(config);
function preload(){
  this.load.image("tiles", "../Assets/mainlevbuild.png");
  this.load.tilemapTiledJSON("map", "../Assets/level1.json");
  this.load.image("ground", "../Assets/tutorial/platform.png");
  this.load.spritesheet("dude", "../Assets/tutorial/dude.png", {frameWidth: 32, frameHeight: 48 });
  this.load.image("star", "../Assets/tutorial/star.png");
  this.load.image("bomb", "../Assets/tutorial/bomb.png");
}

function create(){
  const map = this.make.tilemap({key: "map"});
  const tileset = map.addTilesetImage("logan_simple_platformer", "tiles");
  const platforms = map.createStaticLayer("Platforms", tileset, 0, -200);
  platforms.setCollisionByExclusion(-1, true);
  //platforms = this.physics.add.staticGroup();
  
  //platforms.create(400, 485, "ground").setScale(2).refreshBody();
  // refreshBody() tells the physics engine that changes were made
  player = this.physics.add.sprite(100, 0, "dude");
  player.setCollideWorldBounds(true); // can't go off the canvas

  // add animation based off sprite spritesheet
  this.anims.create({
    key:"left",
    frames: this.anims.generateFrameNumbers("dude", {start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1 // tells the animation to loop
  });

  this.anims.create({
    key:"turn",
    frames: [ { key:"dude", frame: 4 } ],
    frameRate: 20
  });

  this.anims.create({
    key:"right",
    frames: this.anims.generateFrameNumbers("dude", {start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1 // tells the animation to loop
  });
  player.body.setGravityY(300);
  this.physics.add.collider(player, platforms);

  cursors = this.input.keyboard.createCursorKeys();

  coins = this.physics.add.group({
    key:"star",
    repeat: 11, // 1 + 11 = 12 total stars
    setXY: {x:12, y:0, stepX: 70 }
  });

  coins.children.iterate(function(child) {
    child.setBounceY(Phaser.Math.FloatBetween(.4, .8));
  });

  score = 0;
  scoreText = this.add.text(16, 16, "Score: 0", {fontSize: "32px", fill: "#fff"});

  this.physics.add.collider(coins, platforms);
  this.physics.add.overlap(player, coins, collectCoin, null, this);

  this.cameras.main.startFollow(player);
}

function update(){
  
  if(cursors.left.isDown)
  {
    player.setVelocityX(-140);
    player.anims.play("left", true);
  }
  else if(cursors.right.isDown)
  {
    player.setVelocityX(140);
    player.anims.play("right", true);
  }
  
  else
  {
    player.setVelocityX(0);
    player.anims.play("turn");
  }
  
  if(cursors.up.isDown && this.player.body.onFloor()) // && player.body.touching.down
  {
    player.setVelocityY(-330);
  }
}

function collectCoin(player, coin)
{
  coin.disableBody(true, true); // parent game object inactive + invisible

  // update the score
  score += 1;
  scoreText.setText("Score: " + score);
}