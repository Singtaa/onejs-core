

export function toJsArray<T>(csArr: any) {
    if (!csArr) return [];
    let arr = new Array(csArr.Length);
    var i = csArr.Length;
    while (i--) {
        arr[i] = csArr.get_Item(i);
    }
    return arr as T[];
}