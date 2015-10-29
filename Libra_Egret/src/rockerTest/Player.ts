/**
 *
 * @author 
 *
 */

enum DIR{
    left, up, right, down, leftDown, leftUp, rightDown, rightUp
}

enum PlayerStatus{
    stand, run    
}

class Player extends egret.MovieClip implements libra.tick.ITickable {

    private _dir: DIR = DIR.down;

    private _status: PlayerStatus = PlayerStatus.stand;

    private _isMoving: boolean = false;

    private _speed: number = 2;

    public constructor(mcData: egret.MovieClipData) {
        super(mcData);
        this.playStand();
    }
	
	/**
     * 每帧调用该方法
     * @param	dt 距离上一次被调用该方法的时间间隔，单位毫秒
     */
    public tick(dt: number): void {
        this.move();
    }

    public isTickable(): boolean {
        return true;
    }

    public startMove(dir: DIR): void {
        this._dir = dir;
        this.playRun();
        this._isMoving = true;
    }

    public stopMove(): void {
        this._isMoving = false;
        this.playStand();
    }

    private move(): void {
        if(this._isMoving) {
            var endX: number = this.x, endY: number = this.y;
            switch(this._dir) {
                case DIR.left:
                    endX -= this._speed;
                    break;
                case DIR.right:
                    endX += this._speed;
                    break;
                case DIR.up:
                    endY -= this._speed;
                    break;
                case DIR.down:
                    endY += this._speed;
                    break;
                case DIR.leftUp:
                    endY -= this._speed;
                    endX -= this._speed;
                    break;
                case DIR.leftDown:
                    endY += this._speed;
                    endX -= this._speed;
                    break;
                case DIR.rightDown:
                    endY += this._speed;
                    endX += this._speed;
                    break;
                case DIR.rightUp:
                    endY -= this._speed;
                    endX += this._speed;
                    break;
            }
            var stageWidth = egret.MainContext.instance.stage.stageWidth;
            var stageHeight = egret.MainContext.instance.stage.stageHeight;
            this.x = libra.utils.mathUtil.MathUtil.confine(endX, -360, stageWidth - 380);
            this.y = libra.utils.mathUtil.MathUtil.confine(endY, -270, stageHeight - 300);
        }
    }

    public playStand(): void {
        switch(this._dir) {
            case DIR.left:
                this.gotoAndPlay("standLeft", -1);
                break;
            case DIR.up:
                this.gotoAndPlay("standTop", -1);
                break;
            case DIR.right:
                this.gotoAndPlay("standRight", -1);
                break;
            case DIR.down:
                this.gotoAndPlay("standBottom", -1);
                break;
            case DIR.leftDown:
                this.gotoAndPlay("standLeftBottom", -1);
                break;
            case DIR.leftUp:
                this.gotoAndPlay("standLeftTop", -1);
                break;
            case DIR.rightDown:
                this.gotoAndPlay("standRightBottom", -1);
                break;
            case DIR.rightUp:
                this.gotoAndPlay("standRightTop", -1);
                break;
        }
    }

    public playRun(): void {
        switch(this._dir) {
            case DIR.left:
                this.gotoAndPlay("runLeft", -1);
                break;
            case DIR.up:
                this.gotoAndPlay("runTop", -1);
                break;
            case DIR.right:
                this.gotoAndPlay("runRight", -1);
                break;
            case DIR.down:
                this.gotoAndPlay("runBottom", -1);
                break;
            case DIR.leftDown:
                this.gotoAndPlay("runLeftBottom", -1);
                break;
            case DIR.leftUp:
                this.gotoAndPlay("runLeftTop", -1);
                break;
            case DIR.rightDown:
                this.gotoAndPlay("runRightBottom", -1);
                break;
            case DIR.rightUp:
                this.gotoAndPlay("runRightTop", -1);
                break;
        }
    }
}
