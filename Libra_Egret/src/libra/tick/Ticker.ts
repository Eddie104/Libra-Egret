/**
 * Created by 鸿杰 on 2015/10/26.
 */
module libra.tick{
     export class Tick{

        private static _instance:Tick;

        /**
         * 最大两帧间隔（防止待机后返回卡死）
         * @private
         */
        public static MAX_INTERVAL:number = 3000;

        /**
         * @private
         */
        public static MIN_INTERVAL:number = 0;

        /**
         * 事件的载体。可以是主类Main，也可以是一个shape。
         * 只要是EventDispatcher的子类即可。
         * @private
         */
        private _eventDispatcher:egret.EventDispatcher;

        /**
         * 是否暂停。默认不暂停。
         * @private
         * @default false
         */
        private _pause:boolean;

        /**
         * 需要注册EnterFrame事件的ITickable的集合
         * @private
         */
        private tickabledList:ITickable[];

        /**
         * 速度系数
         * 可由此实现慢速播放
         * @private
         */
        //public var speed:Number = 1.0;

        /**
         * 上次记录的时间
         * @private
         */
        private prevTime:number;

        public constructor(eventDispatcher:egret.EventDispatcher){
            this._eventDispatcher = eventDispatcher;
            this.tickabledList = [];
            this._pause = true;
            this.pause = false;
         }

        /**
         * 增加一个需要注册EnterFrame事件的ITickable
         * @param	r ITickable
         */
        public addItem(item:ITickable):boolean {
            if (this.hasItem(item)) return false;
            this.tickabledList[this.tickabledList.length] = item;
            //objNum += 1;
            return true;
        }

        /**
         * 移除一个需要注册EnterFrame事件的ITickable
         * @param	r ITickable
         */
        public removeItem(item:ITickable):boolean {
            var index:number = this.tickabledList.indexOf(item);
            if (index != -1) {
                this.tickabledList.splice(index, 1);
                //objNum--;
                return true;
            }
            return false;
        }

        /**
         * 清除对象
         */
        public clearItem():void {
            this.tickabledList.length = 0;
            //objNum = 0;
        }

         /**
          * 清除掉积累的时间（在暂停之后）
          */
        public clear():void {
            this.prevTime = 0;
        }

        /**
         * 判断该ITickable是否已经存在
         * @param	i 被判断的ITickable
         * @return Boolean
         */
        public hasItem(i:ITickable):boolean {
            return this.tickabledList.indexOf(i) != -1;
        }

        /**
         * 设置是否暂停。true：暂停。false：不暂停
         * @param	v
         */
        public set pause(v:boolean) {
            if (this._pause == v) { return; }
            this._pause = v;
            if (v) {
                this._eventDispatcher.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrameHandler, this);
            }else {
                this._eventDispatcher.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrameHandler, this);
            }
        }

        /**
         * 获取是否暂停信息
         * @return
         */
        public get pause():boolean {
            return this._pause;
        }

        /**
         * EnterFrame事件循环
         * @private
         * @param	e
         */
        private onEnterFrameHandler(e:egret.Event):void {
            var nextTime:number = egret.getTimer();
            if (!this.pause) {
                var interval:number;
                if (this.prevTime == 0) interval = 0;
                else {
                    interval = libra.utils.MathUtil.max(Tick.MIN_INTERVAL, libra.utils.MathUtil.min(nextTime - this.prevTime, Tick.MAX_INTERVAL));
                    //interval *= speed;
                    //const tmp:int = getTimer();
                    for(var r in this.tickabledList) {
                        if (r.isTickabled()) r.tick(interval);
                        //if (getTimer() - tmp > 10) {
                            //Logger.warn('渲染超过10毫秒,跳出循环');
                            //break;
                        //}
                    }
                    console.log(this.prevTime, egret.MainContext.instance.stage.frameRate);
                    /*while (true) {
                        if (nowRender > objNum - 1) {
                            owRender = 0;
                            break;
                        }
                        if (tickabledList[nowRender].tickabled) {
                            tickabledList[nowRender].tick(interval);
                        }
                        nowRender += 1;
                        if (getTimer() - tmp > 10) {
                            Logger.warn('渲染超过10毫秒,跳出循环');
                            break;
                        }
                    }*/
                }
            }
            this.prevTime = nextTime;
         }
        
        /**
         * 获取当前实例
         */ 
        public static getInstance(eventDispatcher?:egret.EventDispatcher):Tick{
            if(!this._instance){
                if(!eventDispatcher){
                   libra.log4H5.Logger.getInstance().error("libra.tick.Ticker");
                }else{
                    this._instance = new Tick(eventDispatcher);
                }
            }
            return this._instance;
        }

    }
}
