/**
 * Created by 鸿杰 on 2015/10/26.
 */
module libra.utils{

    export class MathUtil{

        public static  A:number = 180 / Math.PI;
        public static  B:number = Math.PI / 180;

        /**
         * 获取某点的夹角
         * 返回为弧度值
         */
        public static getPointAngle(x:number, y:number):number {
            return Math.atan2(y, x);
        }

        /**
         * 弧度转角度
         */
        public static R2A(r:number):number {
            return Math.floor(r * MathUtil.A);
        }

        /**
         * 角度转弧度
         */
        public static A2R(a:number):number {
            return a * MathUtil.B;
        }

        /**
         * 是否约等于0
         * @return
         */
        public static isApproximateZero(num:number):Boolean {
            return MathUtil.abs(num) < .001;
        }

        public static min(a:number, b:number):number {
        return a > b ? b : a;
    }

        public static max(a:number, b:number):number {
            return a > b ? a : b;
        }

        public static abs(a:number):number {
            return a > 0 ? a : 0 - a;
            //(i + (i >> 31)) ^ (i >> 31);
        }

        public static confine(value:number, min:number, max:number):number {
            return value < min ? min : (value > max ? max : value);
        }

        /**
         * Returns a random int number within a given range
         * @param	min
         * @param	max
         * @return
         */
        public static random(min:number, max:number):number {
            return Math.random() * (max - min + 1) + min;
        }

        /**
         * 是不是偶数
         * @param	val
         * @return
         */
        public static isEven(val:number):boolean {
            return (val & 1) == 1;
        }

        /**
         * 根据两点确定这两点连线的二元一次方程 y = ax + b或者 x = ay + b
         * @param ponit1
         * @param point2
         * @param type		指定返回函数的形式。为0则根据x值得到y，不为0则根据y得到x
         *
         * @return 由参数中两点确定的直线的二元一次函数
         */
        public static getLineFunc(ponit1:egret.Point, point2:egret.Point, type:number = 0):any {
            var resultFuc:any;
            // 先考虑两点在一条垂直于坐标轴直线的情况，此时直线方程为 y = a 或者 x = a 的形式
            if (ponit1.x == point2.x) {
                if (type) {
                    resultFuc =	function(y:number):number { return ponit1.x; };
                }else {
                    throw new Error("两点所确定直线垂直于y轴，不能根据x值得到y值");
                }
                return resultFuc;
            }else if(ponit1.y == point2.y) {
                if (type) {
                    throw new Error("两点所确定直线垂直于y轴，不能根据x值得到y值");
                }else {
                    resultFuc =	function(x:number):number { return ponit1.y; };
                }
                return resultFuc;
            }

            // 当两点确定直线不垂直于坐标轴时直线方程设为 y = ax + b
            var a:number;
            // 根据
            // y1 = ax1 + b
            // y2 = ax2 + b
            // 上下两式相减消去b, 得到 a = ( y1 - y2 ) / ( x1 - x2 )
            a = (ponit1.y - point2.y) / (ponit1.x - point2.x);

            var b:number;
            //将a的值代入任一方程式即可得到b
            b = ponit1.y - a * ponit1.x;
            //把a,b值代入即可得到结果函数
            resultFuc =	type ? function(y:number):number { return (y - b) / a; } : function(x:number):number { return a * x + b; };
            return resultFuc;
        }

        /**
         * 得到两点间连线的斜率
         * @param ponit1
         * @param point2
         * @return 			两点间连线的斜率
         *
         */
        public static getSlope(ponit1:egret.Point, point2:egret.Point):number {
            return (point2.y - ponit1.y) / (point2.x - ponit1.x);
        }

    }
}
