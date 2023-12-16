function encryptingPassword(input) {

    let pattern = /(?<sep>.+)>(?<grp1>\d{3})\|(?<grp2>[a-z]{3})\|(?<grp3>[A-Z]{3})\|(?<grp4>[^<>]{3})<\1/;

    let num = Number(input.shift());

    for (let line of input) {

        match = pattern.exec(line);

        if (match == null) {
            console.log(`Try another password!`);

        } else {
            let password = [];
            let { grp1, grp2, grp3, grp4 } = match.groups
            password.push(grp1, grp2, grp3, grp4);
            password = password.join(``);
            console.log(`Password: ${password}`);
        }

    }

}

encryptingPassword([
    "3",
    "##>00|no|NO|!!!?<###",
    "##>123|yes|YES|!!!<##",
    "$$<111|noo|NOPE|<<>$$"])

encryptingPassword(["5",
    "aa>111|mqu|BAU|mqu<aa",
    "()>111!aaa!AAA!^&*<()",
    "o>088|abc|AAA|***<o",
    "asd>asd|asd|ASD|asd<asd",
    "*>088|zzzz|ZzZ|123<*"])