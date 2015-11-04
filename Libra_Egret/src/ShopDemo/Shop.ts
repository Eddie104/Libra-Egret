/**
 *
 * @author 
 *
 */
//module shopDemo{
    
//    export 
    class Shop {

        private _player: ShopPlayer;

        public constructor(private _main: Main) {
            var bg: egret.Shape = new egret.Shape();
            var g = bg.graphics;
            g.beginFill(0x000000, 0.5);
            g.drawRect(0, 0, _main.stage.stageWidth, _main.stage.stageHeight);
            g.endFill();
            _main.stage.addChild(bg);

            this._player = new ShopPlayer(new egret.MovieClipDataFactory(RES.getRes("body01Json"), RES.getRes("body01Png")).generateMovieClipData());
            _main.stage.addChild(this._player);
            this._player.x = 200;
            this._player.y = 200;
            this._player.playRun();
        }
    }
//}
