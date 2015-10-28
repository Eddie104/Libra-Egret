module libra.displayObject{

    export class JSprite extends egret.Sprite{

        public constructor(){
            super();
            this.once(egret.Event.ADDED_TO_STAGE,this.onAddedToStage,this)
        }
        
        protected onAddedToStage(evt:egret.Event):void{
            this.once(egret.Event.REMOVED_FROM_STAGE,this.onRemovedFromStage,this);
        }
        
        protected onRemovedFromStage(evt:egret.Event):void{
            this.once(egret.Event.ADDED_TO_STAGE,this.onAddedToStage,this);
        }

        public removeSelf():void{
            if(this.parent) {
                this.parent.removeChild(this);
            }
        }

        public addTo(parent:egret.DisplayObjectContainer, zorder?:number):void{
            if(zorder){
                parent.addChildAt(this, zorder);
            }else{
                parent.addChild(this);
            }
        }
        
//        $render(context: egret.sys.RenderContext): void {
//            super.$render(context);
////            var texture = this._texture;
////            if(texture) {
////                var offsetX: number = Math.round(texture._offsetX) + this._frameRect.x;
////                var offsetY: number = Math.round(texture._offsetY) + this._frameRect.y;
////                var bitmapWidth: number = texture._bitmapWidth;
////                var bitmapHeight: number = texture._bitmapHeight;
////                var destW: number = Math.round(texture.$getScaleBitmapWidth());
////                var destH: number = Math.round(texture.$getScaleBitmapHeight());
////
////                context.drawImage(texture._bitmapData, texture._bitmapX, texture._bitmapY,
////                    bitmapWidth, bitmapHeight, offsetX, offsetY, destW, destH);
////            }
//        }
    }
}
