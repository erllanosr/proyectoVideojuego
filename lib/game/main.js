ig.module(
        'game.main'
    )
    .requires(
        'impact.game',
        'impact.font',
        'impact.debug.debug',
        'game.entities.enemy',
        'game.entities.player',
        'game.entities.trigger',
        'game.entities.triggerl1',
        'game.entities.bala',

        //niveles
        'game.levels.mainMenu',
        'game.levels.level_1',
    )
    .defines(function() {

        MyGame = ig.Game.extend({

            // Load a font
            font: new ig.Font('media/04b03.font.png'),
            gravity: 180,
            player: null,
            enemy: null,


            init: function() {
                // Initialize your game here; bind keys etc.

                ig.input.bind(ig.KEY.LEFT_ARROW, "left");
                ig.input.bind(ig.KEY.RIGHT_ARROW, "right");
                ig.input.bind(ig.KEY.UP_ARROW, "jump");
                ig.input.bind(ig.KEY.SPACE, 'dispara');


                this.loadLevel(LevelMainMenu);

                this.player = this.getEntitiesByType(EntityPlayer)[0];
                this.enemy = this.getEntitiesByType(EntityEnemy)[0];

            },

            update: function() {
                // Update all entities and backgroundMaps
                this.parent();

                this.player = this.getEntitiesByType(EntityPlayer)[0];
                this.enemy = this.getEntitiesByType(EntityEnemy)[0];
                // Add your own, additional update code here
                
                    this.screen.x = this.player.pos.x - ig.system.width / 2;
                    this.screen.y = this.player.pos.y - ig.system.height / 2;
                
            },

            draw: function() {
                // Draw all entities and backgroundMaps
                this.parent();


                // Add your own drawing code here
                /*var x = ig.system.width / 2,
                    y = ig.system.height / 2;

                this.font.draw('It Works!', x, y, ig.Font.ALIGN.CENTER);
				*/


            }
        });


        // Start the Game with 60fps, a resolution of 320x240, scaled
        // up by a factor of 2
        ig.main('#canvas', MyGame, 60, 320, 240, 2);

    });