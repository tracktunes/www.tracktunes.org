export const EMAIL_MAX_LEN: number = 255;
export const EMAIL_MIN_LEN: number = 8;
export const EMAIL_REG_EXP: RegExp =
      /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;

export const validateEmail = (email: string) => {
    const len: number = email.length;
    return EMAIL_REG_EXP.test(email) &&
        !(len > EMAIL_MAX_LEN || len < EMAIL_MIN_LEN ||
          email[0] === '.' || email[len-1] === '.');
}

export const emailDomain = (email: string) => {
    return email.split(/[@]/).splice(-1)[0].toLowerCase();
};
