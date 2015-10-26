/**
 * Created by ��� on 2015/10/26.
 */
module libra.log4H5{
    export class Logger{

        private _level:string;

        /**
         * ��ѡֵ:
         * Logger.ALL -- ���еȼ���log�����Դ�ӡ������
         * Logger.DEBUG -- ���Դ�ӡdebug��info��log��warn��error��
         * Logger.INFO -- ���Դ�ӡinfo��log��warn��error��
         * Logger.WARN -- ���Դ�ӡwarn��error��
         * Logger.ERROR -- ���Դ�ӡerror��
         * Logger.OFF --
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
