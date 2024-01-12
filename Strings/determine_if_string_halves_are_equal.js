var halvesAreAlike = function (s) {
    let left = 0; right = 0;
    for (let i = 0; i < s.length / 2; i++) {
        if ('aeiouAEIOU'.includes(s[i])) {
            left++;
        }
    }
    for (let i = s.length / 2; i < s.length; i++) {
        if ('aeiouAEIOU'.includes(s[i])) {
            right++;
        }
    }
    if (left === right) {
        return true;
    } else {
        return false;
    }
};