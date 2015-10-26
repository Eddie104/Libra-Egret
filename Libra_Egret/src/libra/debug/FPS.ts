/**
 *
 * @author 
 *
 */
module libra.debug{
    export class FPS extends egret.DisplayObjectContainer implements libra.tick.ITickable {

        private fpsTf: egret.TextField;
        
        private curFps: number;
 
        public constructor() {
            super();
            this.fpsTf = new egret.TextField();
            this.fpsTf.size = 20;
            this.addChild(this.fpsTf);
            egret.MainContext.instance.stage.addChild(this);
        }
	
        /**
         * 每帧调用该方法
         * @param	interval 距离上一次被调用该方法的时间间隔，单位毫秒
         */
        public tick(interval: number): void {egret.MainContext.instance.stage.frameRate
            var fps:number = egret.MainContext.instance.stage.frameRate;
            if(this.curFps != fps){
                this.curFps = fps;
                this.fpsTf.text = "fps:" + this.curFps;   
            }
        }

        public isTickabled(): boolean {
            return true;
        }
    }   
}
