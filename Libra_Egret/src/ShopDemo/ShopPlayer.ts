//module shopDemo {
	/**
	 *
	 * @author 
	 *
	 */
	
//    enum DIR{
//        leftDown, leftUp, rightDown, rightUp
//    }
	
//    export 
    class ShopPlayer extends egret.MovieClip implements libra.tick.ITickable{
        
        private _isMoving: boolean = false;
        private _dir: DIR = DIR.rightDown;
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
                case DIR.leftDown:
                    console.log("aaaaaaaaaa");
                    this.gotoAndPlay("standRightDown", -1);
                    this.scaleX = -1;
                    break;
                case DIR.leftUp:
                    this.gotoAndPlay("standRightUp", -1);
                    this.scaleX = -1;
                    break;
                case DIR.rightDown:
                    this.gotoAndPlay("standRightDown", -1);
                    this.scaleX = 1;
                    break;
                case DIR.rightUp:
                    this.gotoAndPlay("standRightUp", -1);
                    this.scaleX = 1;
                    break;
            }
        }

        public playRun(): void {
            switch(this._dir) {
                case DIR.leftDown:
                    this.gotoAndPlay("moveRightDown", -1);
                    this.scaleX = -1;
                    break;
                case DIR.leftUp:
                    this.gotoAndPlay("moveRightUp", -1);
                    this.scaleX = -1;
                    break;
                case DIR.rightDown:
                    this.gotoAndPlay("moveRightDown", -1);
                    this.scaleX = 1;
                    break;
                case DIR.rightUp:
                    this.gotoAndPlay("moveRightUp", -1);
                    this.scaleX = 1;
                    break;
            }
        }
	}
//}
