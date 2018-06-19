/*
    时间格式化
*/

// 获取日期
export function day(val) {
    return val.substr(8,2)
}

// 获取年+月
export function yearMonth(val) {
    return val.substr(0,7)
}

// 获取年+月+日期
export function yearMonthDay(val) {
    return val.substr(0,10)
}