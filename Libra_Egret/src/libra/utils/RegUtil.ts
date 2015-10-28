module libra.utils.regUtil {
	
	/** 
	 * 检查输入的Email信箱格式是否正确 
	 * @param strEmail：字符串 
	 * @return 如果通过验证返回true,否则返回false 
	 */
    export function checkEmail(strEmail): boolean { 
        var emailReg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
        return emailReg.test(strEmail);
    };
	 
	/**
	 * 校验ip地址的格式 
	 * @param strIP ip地址 
	 * 返回：如果通过验证返回true,否则返回false； 
	 */
    export function isIP(strIP): boolean {
        var re = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g //匹配IP地址的正则表达式 
        if(re.test(strIP)) {
            if(Number(RegExp.$1) < 256 && Number(RegExp.$2) < 256 && Number(RegExp.$3) < 256 && Number(RegExp.$4) < 256) {
                return true;
            }
        }
        return false;
    };
}
