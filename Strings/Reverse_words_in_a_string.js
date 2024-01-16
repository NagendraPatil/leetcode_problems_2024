/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let op = '';
    let marker = false;
    for(let i=0;i<s.length;i++){
        if(s[i]!==' '){
            if(marker){
                op+=' ';
                marker = false;
            }
            op+= s[i];
        }else{
            marker = true;
        }
    }
    s = op.trim();
    s = s.split(' ');
    let start = 0;
    let end = s.length-1;
    while(start<end){
        let temp = s[end];
        s[end] = s[start];
        s[start] = temp;
        end--;
        start++;
    }
    return s.join(' ');
};

// Problem 151