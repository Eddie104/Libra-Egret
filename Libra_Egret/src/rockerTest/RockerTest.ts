/**
 *
 * 摇杆测试
 * @author 
 *
 */
class RockerTest {

    private _player: Player;
    
    private _rocker: Rocker;
    
    public constructor(private _main: Main) {
        var bg: egret.Shape = new egret.Shape();
        var g = bg.graphics;
        g.beginFill(0x000000, 0.5);
        g.drawRect(0, 0, _main.stage.stageWidth, _main.stage.stageHeight);
        g.endFill();
        _main.stage.addChild(bg);
        
        this._player = new Player(new egret.MovieClipDataFactory(RES.getRes("testJson"), RES.getRes("testPng")).generateMovieClipData());
        _main.stage.addChild(this._player);
        libra.tick.Tick.getInstance().addItem(this._player);
        
        this._rocker = new Rocker();
        this._rocker.y = _main.stage.stageHeight - 150;
        this._rocker.x = 100;
        _main.stage.addChild(this._rocker);
        this._rocker.addEventListener(egret.Event.CHANGE, this.onDirChanged, this);
        this._rocker.addEventListener("stopMove", this.onStopMove, this);
    }
    
    private onDirChanged(evt:egret.Event):void{
        var dir: DIR = <DIR>evt.data;
        this._player.startMove(dir);
    }
    
    private onStopMove(evt:egret.Event):void{
        this._player.stopMove();
    }

}
