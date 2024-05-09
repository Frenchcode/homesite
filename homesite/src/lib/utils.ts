export const isValidEmail = (email: string): boolean => {
    const emailRegex: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
}

export const hasCapitalletter = (phrase: string): boolean => {
    const phraseRegex: RegExp = /[A-Z]/;
    return phraseRegex.test(phrase);
}

export const hasNormalLetter = (phrase: string): boolean => {
    const phraseRegex: RegExp = /[a-z]/;
    return phraseRegex.test(phrase);
}

export const hasSpecialLetter = (phrase: string): boolean => {
    const phraseRegex: RegExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    return phraseRegex.test(phrase);
}

export const hasNumber = (phrase: string): boolean => {
    const phraseRegex: RegExp = /[0-9]/;
    return phraseRegex.test(phrase);
}

export const hasLenOfSix = (phrase: string): boolean => {
    if (phrase.length >= 8)
        return true
    return false;
}


export const containsOnlyLetters = (inputString: string): boolean => {
    // Regular expression to match only alphabetic characters
    const lettersRegex = /^[a-zA-Z]+$/;
    // Test if the input string contains only alphabetic characters
    return lettersRegex.test(inputString);
}