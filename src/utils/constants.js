export const SPECIAL_CHARACTERS = /[`~!@#$%^&*()_+\-=\\,./<>?|[\]{};':"]/;
export const PASSWORD_MIN_LENGTH = 8;
export const inValidPasswordMessage = 'password must contain the following:\n' +
    ` - at least ${PASSWORD_MIN_LENGTH} characters\n` +
    ' - a lower-case letter\n' +
    ' - an upper-case letter\n' +
    ' - a digit; ie.(0-9)\n'
