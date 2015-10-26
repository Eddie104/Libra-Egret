module libra.utils{

    export class MathUtil{

        public static A:number = 180 / Math.PI;
        public static B:number = Math.PI / 180;

        /**
         * »ñȡĳµãµļнÇ
         * ·µ»ØΪ»¡¶Èֵ
         */
        public static getPointAngle(x:number, y:number):number {
            return Math.atan2(y, x);
        }

        /**
         * »¡¶Èת½ǶÈ
         */
        public static R2A(r:number):number {
            return Math.floor(r * MathUtil.A);
        }

        /**
         * ½ǶÈת»¡¶È
         */
        public static A2R(a:number):number {
            return a * MathUtil.B;
        }

        /**
         * ÊǷñԼµÈÓÚ0
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
         * Êǲ»ÊÇżÊý
         * @param	val
         * @return
         */
        public static isEven(val:number):boolean {
            return (val & 1) == 1;
        }

        /**
         * ¸ù¾ÝÁ½µãȷ¶¨ÕâÁ½µãÁ¬ÏߵĶþԪһ´η½³Ì y = ax + b»òÕß x = ay + b
         * @param ponit1
         * @param point2
         * @param type		ָ¶¨·µ»غ¯ÊýµÄÐÎʽ¡£Ϊ0Ôò¸ù¾Ýxֵµõ½y£¬²»Ϊ0Ôò¸ù¾Ýyµõ½x
         *
         * @return ÓɲÎÊýÖÐÁ½µãȷ¶¨µÄֱÏߵĶþԪһ´κ¯Êý
         */
        public static getLineFunc(ponit1:egret.Point, point2:egret.Point, type:number = 0):any {
            var resultFuc:any;
            // Ïȿ¼ÂÇÁ½µãÔÚһÌõ´¹ֱÓÚ×ø±êÖáֱÏߵÄÇé¿򣬴ËʱֱÏ߷½³ÌΪ y = a »òÕß x = a µÄÐÎʽ
            if (ponit1.x == point2.x) {
                if (type) {
                    resultFuc =	function(y:number):number { return ponit1.x; };
                }else {
                    throw new Error("Á½µãËùȷ¶¨ֱÏߴ¹ֱÓÚyÖᣬ²»Äܸù¾Ýxֵµõ½yֵ");
                }
                return resultFuc;
            }else if(ponit1.y == point2.y) {
                if (type) {
                    throw new Error("Á½µãËùȷ¶¨ֱÏߴ¹ֱÓÚyÖᣬ²»Äܸù¾Ýxֵµõ½yֵ");
                }else {
                    resultFuc =	function(x:number):number { return ponit1.y; };
                }
                return resultFuc;
            }

            // µ±Á½µãȷ¶¨ֱÏ߲»´¹ֱÓÚ×ø±êÖáʱֱÏ߷½³ÌÉèΪ y = ax + b
            var a:number;
            // ¸ù¾Ý
            // y1 = ax1 + b
            // y2 = ax2 + b
            // ÉÏÏÂÁ½ʽÏà¼õÏûȥb, µõ½ a = ( y1 - y2 ) / ( x1 - x2 )
            a = (ponit1.y - point2.y) / (ponit1.x - point2.x);

            var b:number;
            //½«aµÄֵ´úÈëÈÎһ·½³Ìʽ¼´¿ɵõ½b
            b = ponit1.y - a * ponit1.x;
            //°Ña,bֵ´úÈ뼴¿ɵõ½½á¹ûº¯Êý
            resultFuc =	type ? function(y:number):number { return (y - b) / a; } : function(x:number):number { return a * x + b; };
            return resultFuc;
        }

        /**
         * µõ½Á½µã¼äÁ¬ÏߵÄбÂÊ
         * @param ponit1
         * @param point2
         * @return 			Á½µã¼äÁ¬ÏߵÄбÂÊ
         *
         */
        public static getSlope(ponit1:egret.Point, point2:egret.Point):number {
            return (point2.y - ponit1.y) / (point2.x - ponit1.x);
        }

    }
}
