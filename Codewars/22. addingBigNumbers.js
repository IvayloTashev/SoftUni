function add(a, b) {
    let res = '';
    let carry = 0;

    // Start from the end of both strings
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        const digitA = i >= 0 ? parseInt(a[i], 10) : 0;
        const digitB = j >= 0 ? parseInt(b[j], 10) : 0;

        const sum = digitA + digitB + carry;
        res = (sum % 10) + res;     // Add the current digit to the front of the result
        carry = Math.floor(sum / 10); // Calculate carry for next iteration

        i--;
        j--;
    }

    return res;
}

add('63829983432984289347293874', '90938498237058927340892374089') // 91002328220491911630239667963