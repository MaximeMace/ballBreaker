export default class GameScene extends Phaser.Scene {
    /**
     * Constructor
     */
    constructor() {
        super('GameScene');
    }

    // Preload allows you to load assets for the game
    preload() {
        // Change color background to black
        this.cameras.main.setBackgroundColor('#000000');

        // Load bricks spritesheet
        this.load.spritesheet('brick', 'assets/bricks.png', {
            frameWidth: 100,
            frameHeight: 56
        });

        // Load balls spritesheet
        this.load.spritesheet('ball', 'assets/balls.png', {
            frameWidth: 100,
            frameHeight: 56
        });

        // Load background
        this.load.image('background', 'assets/bg1.png');
    }

    create() {
        // A simple background for our game
        // this.add.image(400, 300, 'background');

        // Instantiate group of static bricks
        bricks = this.physics.add.staticGroup({
            key: 'brick',
            frameQuantity: 0
        });

        // Instantiate group of balls
        balls = this.physics.add.group({
            key: 'ball',
            frameQuantity: 0
        });

        // Instantiate score 
        scoreText = this.add.text(16, 16, 'score: 0', {
            fontSize: '12px',
            fill: '#fff'
        });

        for (i = 0; i < levels.lvl1.size; i++) {
            bricks.create(56 * levels.lvl1.positionX[i], 50 * levels.lvl1.positionY[i], 'brick', levels.lvl1.colors[i]);
        }

        // The initial ball and its settings
        ball = this.physics.add.sprite(100, 450, 'ball');

        // Ball physics properties.
        ball.setBounce(0.8);
        ball.setCollideWorldBounds(true);
        ball.setVelocity(100, 800);
        ball.allowGravity = false;

        this.physics.add.collider(ball, bricks, this.hitBricks, null, this);
    }



    hitBricks(ball, brick, score, scoreText) {
        brick.disableBody(true, true);
        // score += 10;
        // scoreText.setText('Score: ' + score);
    }
}