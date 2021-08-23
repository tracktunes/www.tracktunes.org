export const EMAIL_MAX_LEN: number = 255;
export const EMAIL_MIN_LEN: number = 8;

// Regex should be according to RFC 822
// From http://badsyntax.co/post/javascript-email-validation-rfc822
// export const EMAIL_REG_EXP: RegExp = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/; 
export const EMAIL_REG_EXP: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// See http://rumkin.com/software/email/rules.php

export const validateEmail: (email: string) => boolean = (email: string) => {
    // make sure it's all ascii-text
    if (/[^\x00-x7F]/.test(email)) {
        return false;
    }
    const parts: string[] = email.split('@');
    if (parts.length !== 2) {
        return false;
    }
    const localPart: string = parts[0];
    const domain: string = parts[1];
    if (/[^a-zA-Z0-9]/.test(domain[0])) {
        return false;
    }
    const len: number = email.length;
    return EMAIL_REG_EXP.test(email) &&
        !(len > EMAIL_MAX_LEN || len < EMAIL_MIN_LEN ||
          email[0] === '.' || email[len-1] === '.');
}

export const emailDomain = (email: string) => {
    return email.split(/[@]/).splice(-1)[0].toLowerCase();
};
