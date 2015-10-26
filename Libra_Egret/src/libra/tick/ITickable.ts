/**
 * Created by 鸿杰 on 2015/10/26.
 */
module libra.tick {
    /**
     * 需要每帧被调用某方法的对象
     */
    export interface ITickable{
        /**
         * 每帧调用该方法
         * @param	interval 距离上一次被调用该方法的时间间隔，单位毫秒
         */
        tick(interval:number):void;

        isTickabled():boolean;

        setTickabled?(val:boolean):void;
    }
}
