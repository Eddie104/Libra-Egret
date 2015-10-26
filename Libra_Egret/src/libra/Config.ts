/**
 *
 * @author 
 *
 */
module libra{
    export class Config {
        
        public static SHOW_FPS: boolean = false;
        
        public constructor() {
            if(Config.SHOW_FPS) {
                var fps: libra.debug.FPS = new libra.debug.FPS();
                libra.tick.Tick.getInstance().addItem(fps);
            }
        }
    }
}
