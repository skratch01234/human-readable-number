module.exports = function toReadable (number) {
    
    let dg = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tw = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let th = 'hundred'
    let result =''
    let strNumber = number+''
    let hunreds = 0
    let ostatOk = 0
    if(number==0){
        return 'zero'
    }
    if(strNumber.length==3){
        ostatOk=number%100
        hunreds = (number - ostatOk)/100
        result+=dg[hunreds]+' '+ th
        strNumber = ostatOk+''
    } 
    if(strNumber.length==2){
        ostatOk=+strNumber%10
        let tens = (strNumber-ostatOk)/10
        if(tens ==1){
            result += ' '+tn[ostatOk]
            return result.trim()
        }else{
            result += ' '+tw[tens]
            strNumber = ostatOk+''
        }
    }
    if(strNumber.length==1){
        result += ' '+dg[+strNumber]

    } 
    return result.trim()
}

