
class CommonUtil{

    public static toTable(a: string[], colN: number):string[][] {
        let r = []; let temp = [];
        for (let i = 0; i < a.length; i++) {
            temp.push(a[i]);
            if (temp.length == colN) {
                r.push(temp);
                temp = [];
            }
        }
        if (temp.length > 0) {
            r.push(temp);
        }
        return r;
    }
}


export default CommonUtil;