export default class LevelScene extends Phaser.Scene {
    /**
     * Constructor
     */
    constructor() {
        super('LevelScene');
    }

    // preloading graphic assets
    preload() {
        this.load.image("levels", "assets/level.png");
        this.load.image("arrowLeft", "assets/arrowLeft.png");
        this.load.image("arrowRight", "assets/arrowRight.png");
    }

    create() {
        // Change color background to black
        this.cameras.main.setBackgroundColor('#000000');

        // number of thumbnail rows
        var thumbRows = 5;
        var thumbCols = 4;
        // width of a thumbnail, in pixels
        var thumbWidth = 56;
        var thumbHeight = 56;
        // space among thumbnails, in pixels
        var thumbSpacing = 10;
        var levels = 60;
        // how many pages are needed to show all levels?
        var pages = levels / (thumbRows * thumbCols);
        // current page
        var currentPage = 0;
        // arrows to navigate through level pages
        var leftArrow;
        var rightArrow;

        // placing left and right arrow buttons, will call arrowClicked function when clicked
        leftArrow = this.add.image(50, 540, "arrowLeft");
        leftArrow.alpha = 0.3;

        // Event click on leftArrow
        leftArrow.on('pointerdown', this.arrowClicked());

        // Event click on rightArrow
        leftArrow.setInteractive();
        leftArrow.once('pointerup', arrowClicked, this);

        rightArrow = this.add.sprite(740, 540, "arrowRight");

        // Event click on rightArrow
        rightArrow.setInteractive();
        rightArrow.once('pointerup', this.arrowClicked(), this);

        // creation of the thumbails group
        levelLogo = this.physics.add.staticGroup({
            key: 'levels',
            frameQuantity: 0
        });

        // determining level thumbnails width and height for each page
        var levelLength = thumbWidth * thumbCols + thumbSpacing * (thumbCols - 1);
        var levelHeight = thumbWidth * thumbRows + thumbSpacing * (thumbRows - 1);

        // looping through each page
        for (var l = 0; l < pages; l++) {
            // horizontal offset to have level thumbnails horizontally centered in the page
            var offsetX = (config.width - levelLength) / 2 + config.width * l;
            var offsetY = (config.height - levelHeight) / 2;

            // looping through each level thumbnails
            for (var i = 0; i < thumbRows; i++) {
                for (var j = 0; j < thumbCols; j++) {
                    // which level does the thumbnail refer?
                    var levelNumber = i * thumbCols + j + l * (thumbRows * thumbCols);

                    // adding the thumbnail, as a button which will call thumbClicked function if clicked   		
                    levelLogo.create(offsetX + j * (thumbWidth + thumbSpacing), offsetY + i * (thumbHeight + thumbSpacing), "levels", 0);
                    levelLogo.levelNumber = levelNumber + 1;
                }
            }
        }
    }

    thumbClicked() {
        alert("button clicked");
    }


    update() {}

    /**
     * Clicked method of arrow
     */
    arrowClicked() {
        alert("arrow clicked");
    }
}