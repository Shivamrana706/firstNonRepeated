function firstNonRepeated(str: string): string | null {
    for (let i = 0; i < str.length; i++) {
        let getChar: string = str.charAt(i);
        if (str.indexOf(getChar) == str.lastIndexOf(getChar)) {
            return getChar;
        }
    }
    return null;
}

console.log(firstNonRepeated("nnttiifwe"));  