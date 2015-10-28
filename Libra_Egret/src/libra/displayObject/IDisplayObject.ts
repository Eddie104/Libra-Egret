module libra.displayObject {
	/**
	 *
	 * @author 
	 *
	 */
    export interface IDisplayObject {

        removeSelf(): void;

        addTo(parent: egret.DisplayObjectContainer, zorder?: number): void;
    }
}
