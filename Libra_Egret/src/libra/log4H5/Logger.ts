module libra.log4H5{
    export class Logger{

        private _level:string;
        
        /**
         * 设置当前需要开启的log级别。级别等级分别为：ALL<DEBUG < INFO<WARN<ERROR<OFF
         * 此功能只在 DEBUG 模式下才生效。
         * Logger.ALL -- 所有等级的log都可以打印出来。
         * Logger.DEBUG-- 可以打印debug、info、log、warn、error。
         * Logger.INFO-- 可以打印info、log、warn、error。
         * Logger.WARN-- 可以打印warn、error。
         * Logger.ERROR-- 可以打印error。
         * Logger.OFF-- 全部关闭。  
         */ 
        private static _instance:Logger;

        public constructor() {
            egret.Logger.logLevel = egret.Logger.DEBUG;
            this._level = egret.Logger.DEBUG;
        }

        public get level():string{
            return this._level;
        }

        public set level(val:string){
            this._level = val;
            egret.Logger.logLevel = this._level;
        }

        public debug(...str):void{
            console.debug(this.createResult());
        }

        public info(...str):void{
            console.info(this.createResult());
        }

        public warn(...str):void{
            console.warn(this.createResult());
        }

        public error(...str):void{
            console.error(this.createResult());
        }

        private createResult(...str):string{
            var result:string = "";
            for(var i:number = 0; i < str.length; i++){
                result += str[i];
            }
            return result;
        }

        public static getInstance():Logger{
            if(this._instance == null){
                this._instance = new Logger();
            }
            return this._instance;
        }

    }
}
