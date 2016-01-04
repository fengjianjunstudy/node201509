var fs = require('fs');

/**
 * 异步的方式把字符串写入文件
 * read r write w execute x
 * 读      写       可执行
 * 二爷(写)一直(执行)死(4)读书
 * 4        2       1
 *
 * rw = 6
 *
 * -rw- 自己创建者拥有的权限
 * r--  所属组
 * r--  其它人
 *
 */
fs.writeFileSync('line.txt','第一行',{flag:'w',encoding:'utf8'},function(err){
  console.log(err);
})

/*fs.writeFile('line.txt',new Buffer('第二行'),{flag:'a',encoding:'utf8'},function(err){
    console.log(err);
})*/

fs.appendFile('line.txt',new Buffer('第二行'));
console.log(Math.pow(2,6)-1);// 0-63
/**
 * base64
 *
 * base是把3个8位字节 转成4个6位字节 然后在6位字节前补两个0
 *
 *
 */
var buf = new Buffer('珠');
console.log(buf);
//e7 8f a0

function base64(str){
    var buf=new Buffer(str);
    var arrB=[];
    var result;
    var bStr;
    for(var i=0;i<buf.length;i++){
        var bf="";
        switch (buf[i].toString("2").length){
            case 1:
                bf="0000000"+buf[i].toString("2");
                break;
            case 2:
                bf="000000"+buf[i].toString("2");
                break;
            case 3:
                bf="00000"+buf[i].toString("2");
                break;
            case 4:
                bf="0000"+buf[i].toString("2");
                break;
            case 5:
                bf="000"+buf[i].toString("2");
                break;
            case 6:
                bf="00"+buf[i].toString("2");
                break;
            case 7:
                bf="0"+buf[i].toString("2");
                break;
            default:
                bf=buf[i].toString("2")
        }
        arrB.push(bf)
    }
    bStr=arrB.join("");
    result=handleBinary(bStr);
    return result;
}
function handleBinary(bStr){
    var i=0;
    var lastStr="";
    var charStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var result=""
    switch (bStr.length%24){
        case 0:
            break;
        case 8:
            lastStr="==";
            break;
        default:
            lastStr="=";
    }
    switch (bStr.length%6){
        case 2:
            bStr+="0000";
            break;
        case 4:
            bStr+="00";

    }
    for(var i= 0,sLen=bStr.length;i<sLen;i=i+6){
        var num=parseInt(bStr.substr(i,6),"2");
        result+=charStr[num];
    }
    return result+lastStr;
}
var guoguo="果果 i love you"
console.log(base64(guoguo));
console.log(parseInt("e7",16));
console.log(parseInt("8f",16))
console.log(parseInt("a0",16));
console.log((231).toString(2));
console.log((143).toString(2));
console.log((160).toString(2));
// 00111001 00111000 00111110 00100000

console.log(parseInt("00111001",2));//57
console.log(parseInt("00111000",2));//56
console.log(parseInt("00111110",2));//62
console.log(parseInt("00100000",2));//32

var str = 'ABCDEFGHIJKLMNOPQRSTUVWZYX';
str += str.toLowerCase();
str += '0123456789';
str += '+/';
console.log(str[57]+str[56]+str[62]+str[32]);