console.log("Hello! We're working hard (we being me) so stand by!");

const checkPasswords = (p1, p2, p3, p4, p5) => {
    if (p1 !== "ann") { return false };
    if (p2 !== "macdonalds") { return false };
    if (p3 !== "hungryjacks") {return false };
    if (p4 !== "jen") { return false };
    if (p5 !== "marcus") { return false };
    console.log(p1, p2, p3);
    return true;
};

let p1 = prompt('Who gave me a butterfly hairclip? (first name lowercase): ', 'N/A');
let p2 = prompt('What\'s my favourite fast food chain past midnight? (lowercase no spaces full spelling): ', 'N/A');
let p3 = prompt('What\'s my favourite fast food chain before midnight? (lowercase no spaces full spelling): ', 'N/A');
let p4 = prompt('Who do I want to headpat most? (first name lowercase): ', 'N/A');
let p5 = prompt('Who is the person I need to show my love to most right now? (first name lowercase): ', 'N/A');

if (!checkPasswords(p1, p2, p3, p4, p5)) {
    confirm(`Incorrect.\nResponses: ${p1} ${p2} ${p3} ${p4} ${p5}`);
    close();
};