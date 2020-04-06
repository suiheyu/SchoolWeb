class DateUtil{

    static sss: number = 1;
    static s: number = DateUtil.sss * 1000;
    static m: number = DateUtil.s * 60;
    static h: number = DateUtil.m * 60;
    static d: number = DateUtil.h * 24;
    static startYear: number = 1970;
    static dayOfmonth: Array<number> = new Array(31,28,31,30,31,30,31,31,30,31,30,31);

    public static formateDateTime(date: Date,dateSplitChar = "-",timeSplitChar = ":", d2tSplitChar = " "):string{
        return DateUtil.formateDate(date,dateSplitChar) + d2tSplitChar + DateUtil.formateTime(date,timeSplitChar);
    }
    public static formateDate(date: Date,splitChar = "-"):string{
        let tempArray = [];
        tempArray.push( this.paddingLeft(date.getFullYear(),4) );
        tempArray.push( this.paddingLeft(date.getMonth() + 1,2) );
        tempArray.push( this.paddingLeft(date.getDate(),2) );
        return tempArray.join(splitChar);
    }

    public static formateTime(date: Date,splitChar = ":"):string{
        let tempArray = [];
        tempArray.push( this.paddingLeft(date.getHours(),2) );
        tempArray.push( this.paddingLeft(date.getMinutes(),2) );
        tempArray.push( this.paddingLeft(date.getSeconds(),2) );
        return tempArray.join(splitChar);
    }

    private static paddingLeft(str: number,length: number,paddingChar = "0"){
        return String(str).padStart(length,paddingChar);
    }

    public static parseDate(dateStr: string,splitChar = "-"):Date{
        return new Date(this.parseDate2Timestamp(dateStr,splitChar) + new Date().getTimezoneOffset() * this.m);
    }

    public static parseDateTime(dateTimeStr: string,dateSplitChar = "-",timeSplitChar = ":", d2tSplitChar = " "):Date{
        let tempArray = dateTimeStr.replace(/\s+/,' ').split(d2tSplitChar);
        return new Date(
            this.parseDate2Timestamp(tempArray[0],dateSplitChar) 
        + this.parseTime2Timestamp(tempArray[1],timeSplitChar)
        + new Date().getTimezoneOffset() * this.m
        );
    }

    public static parseDate2Timestamp(dateStr: string,splitChar = "-"):number{
        let strArray = dateStr.trim().split(splitChar);
        let year = Number(strArray[0]) || 0;
        let month = Number(strArray[1]) || 0;
        let day = Number(strArray[2]) || 0;
        let tempYear = year > this.startYear ? year - 1 : year;
        return ( (year - this.startYear ) * 365 + this.getLeapYearNumber(this.startYear,tempYear) ) * this.d 
        + this.getMonthOffsetByYearBegin(month,year) * this.d
        + ( day - 1 ) * this.d;
    }

    public static parseTime2Timestamp(timeStr: string,splitChar = ":"):number{

        let strArray = timeStr.trim().split(splitChar);
        let hour = Number(strArray[0]) || 0;
        let minute = Number(strArray[1]) || 0;
        let second = Number(strArray[2]) || 0;
        return hour * this.h + minute * this.m + second * this.s;
    }
    public static getMonthOffsetByYearBegin(month: number,year: number):number{
        let totolDay:number = 0;
        for(let i=1 ; i < month; i++ ){
            if( i == 2 && DateUtil.isLeapYear(year)){
                totolDay += DateUtil.dayOfmonth[i-1] + 1;
            }
            else{
                totolDay += DateUtil.dayOfmonth[i-1];
            }
        }
        return totolDay;
    }

    public static isLeapYear(year: number):boolean{
        return year % 4 == 0 && ( year % 100 != 0 || year % 400 == 0 );
    }

    public static getLeapYearNumber(startY: number, endY: number): number{
        return DateUtil.getLeapYearNumberStep(startY,endY,4) - DateUtil.getLeapYearNumberStep(startY,endY,100) + DateUtil.getLeapYearNumberStep(startY,endY,400);
    }

    private static getLeapYearNumberStep(x: number, y: number, divisor: number): number{
        let symbol = 1;
        if(x > y){
            let t = y;
            y = x;
            x = t;
            symbol = -1;
        }
        if (x % divisor != 0)
          x = x + divisor - x % divisor; // 把x变成不小于x的能被divisor整除的数
        if (y % divisor != 0)
          y = y - y % divisor; // 把y变成不大于y的能被divisor整除的数
        return x <= y ? symbol * ((y - x) / divisor + 1) : 0;
    }

}

export default DateUtil;