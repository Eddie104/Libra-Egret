module libra.game {
	/**
	 *
	 * @author 
	 *
	 */
	export class BaseScene extends libra.displayObject.JSprite{
		public constructor() {
            super();
		}
		
        protected onAddedToStage(evt: egret.Event): void {
            super.onAddedToStage(evt);
        }

        protected onRemovedFromStage(evt: egret.Event): void {
            super.onRemovedFromStage(evt);
        }
	}
}
