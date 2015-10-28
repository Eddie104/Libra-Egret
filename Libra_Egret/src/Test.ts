/**
 * Created by 鸿杰 on 2015/10/26.
 */
class Test{
    public constructor(main:Main){
        var stage: egret.Stage = egret.MainContext.instance.stage;
        
//        var obj: egret.Bitmap = new egret.Bitmap(RES.getRes("egretIcon"));
//        obj.x = 200;
//        obj.y = 200;
//        stage.addChild(obj);
        
//        libra.utils.effectUtil.shockObj(obj);
//        console.log("22ddd2222");
        
//        var tf: egret.TextField = new egret.TextField();
//        tf.x = 200; tf.y = 200;
//        tf.text = "aaa";
////        stage.addChild(tf);
//        var t: egret.RenderTexture = new egret.RenderTexture();
//        t.drawToTexture(tf);
//        var b: egret.Bitmap = new egret.Bitmap(t);
//        b.x = 200;
//        b.y = 400;
//        stage.addChild(b);
        
//        libra.utils.effectUtil.typerEffect(tf, "的身份访问地");
        
//        var s:string = libra.utils.dateUtil.formatByTime(333423423423);
//        console.log(libra.display.stageWidth(), libra.display.stageHeight(), libra.display.cx(), libra.display.cy());
        
//        var frameExecutor: libra.utils.executor.QueueExecutor = new libra.utils.executor.QueueExecutor();
//        frameExecutor.regist(this.aaa, this);
//        frameExecutor.regist(this.bbb, this);
//        frameExecutor.regist(this.ccc, this);
//        
//        frameExecutor.regist(this.aaa, this);
//        frameExecutor.regist(this.ccc, this);
//        
//        frameExecutor.execute();
        
//        var dic: libra.collection.Dictionary = new libra.collection.Dictionary();
//        dic.set("a", "111111111");
//        dic.set("b", 2);
//        
//        console.log(dic.get("a"));
//        console.log(dic.get("b"));
        
        var l: number = 3000;
        for(var i: number = 0;i < l; i++){
            this.createMC(stage);
        }
        console.log("舞台MC数量:", l);
    }
    
    private createMC(stage:egret.Stage):void{
        var mcData: egret.MovieClipData = new egret.MovieClipDataFactory(RES.getRes("testJson"), RES.getRes("testPng")).generateMovieClipData();
        var mc: egret.MovieClip = new egret.MovieClip(mcData);
        mc.frameRate = 12;
//        mc.x = 200; mc.y = 200;
        mc.x = libra.utils.mathUtil.MathUtil.getRandom(0, libra.display.stageWidth());
        mc.y = libra.utils.mathUtil.MathUtil.getRandom(0, libra.display.stageHeight());
        stage.addChild(mc);
        mc.play(10);
    }
    
//    private aaa() {
//        console.log("aaa");
//    }
//    
//    private bbb(){
//        console.log("bbb");
//    }
//    
//    private ccc() {
//        console.log("ccc");
//    }
}