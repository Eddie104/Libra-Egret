/**
 * Created by ��� on 2015/10/26.
 */
module libra.utils{

    export class MathUtil{

        public static  A:number = 180 / Math.PI;
        public static  B:number = Math.PI / 180;

        /**
         * ��ȡĳ��ļн�
         * ����Ϊ����ֵ
         */
        public static getPointAngle(x:number, y:number):number {
            return Math.atan2(y, x);
        }

        /**
         * ����ת�Ƕ�
         */
        public static R2A(r:number):number {
            return Math.floor(r * MathUtil.A);
        }

        /**
         * �Ƕ�ת����
         */
        public static A2R(a:number):number {
            return a * MathUtil.B;
        }

        /**
         * �Ƿ�Լ����0
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
         * �ǲ���ż��
         * @param	val
         * @return
         */
        public static isEven(val:number):boolean {
            return (val & 1) == 1;
        }

        /**
         * ��������ȷ�����������ߵĶ�Ԫһ�η��� y = ax + b���� x = ay + b
         * @param ponit1
         * @param point2
         * @param type		ָ�����غ�������ʽ��Ϊ0�����xֵ�õ�y����Ϊ0�����y�õ�x
         *
         * @return �ɲ���������ȷ����ֱ�ߵĶ�Ԫһ�κ���
         */
        public static getLineFunc(ponit1:egret.Point, point2:egret.Point, type:number = 0):any {
            var resultFuc:any;
            // �ȿ���������һ����ֱ��������ֱ�ߵ��������ʱֱ�߷���Ϊ y = a ���� x = a ����ʽ
            if (ponit1.x == point2.x) {
                if (type) {
                    resultFuc =	function(y:number):number { return ponit1.x; };
                }else {
                    throw new Error("������ȷ��ֱ�ߴ�ֱ��y�ᣬ���ܸ���xֵ�õ�yֵ");
                }
                return resultFuc;
            }else if(ponit1.y == point2.y) {
                if (type) {
                    throw new Error("������ȷ��ֱ�ߴ�ֱ��y�ᣬ���ܸ���xֵ�õ�yֵ");
                }else {
                    resultFuc =	function(x:number):number { return ponit1.y; };
                }
                return resultFuc;
            }

            // ������ȷ��ֱ�߲���ֱ��������ʱֱ�߷�����Ϊ y = ax + b
            var a:number;
            // ����
            // y1 = ax1 + b
            // y2 = ax2 + b
            // ������ʽ�����ȥb, �õ� a = ( y1 - y2 ) / ( x1 - x2 )
            a = (ponit1.y - point2.y) / (ponit1.x - point2.x);

            var b:number;
            //��a��ֵ������һ����ʽ���ɵõ�b
            b = ponit1.y - a * ponit1.x;
            //��a,bֵ���뼴�ɵõ��������
            resultFuc =	type ? function(y:number):number { return (y - b) / a; } : function(x:number):number { return a * x + b; };
            return resultFuc;
        }

        /**
         * �õ���������ߵ�б��
         * @param ponit1
         * @param point2
         * @return 			��������ߵ�б��
         *
         */
        public static getSlope(ponit1:egret.Point, point2:egret.Point):number {
            return (point2.y - ponit1.y) / (point2.x - ponit1.x);
        }

    }
}
