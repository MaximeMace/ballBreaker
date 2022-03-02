export default class StartScene extends Phaser.Scene {
    /**
     * Constructor
     */
    constructor() {
        super('StartScene');
    }

    // preloading graphic assets
    preload() {}

    create() {

        // Init text title menu
        // //@TODO 120 with text width
        this.titleMenu = this.add.text(this.game.config.width / 2 - 140, 100, 'BALL BREAKER', {
            fontSize: '40px',
            fill: '#000',
        });

        // Init player vs computer button
        let playBtn = this.add.text(100, 300, 'Play');
        playBtn.setPadding(10);
        playBtn.setStyle({ backgroundColor: '#e55c90', fontSize: 32 });
        playBtn.setInteractive();
        playBtn.x = this.game.config.width / 2 - playBtn.width / 2;
        playBtn.y = this.game.config.height / 4 - playBtn.height / 2;


        // Manage event click
        playBtn.on('pointerdown', () => {
            this.scene.start('LevelScene');
        });
    }

    update() {}
}