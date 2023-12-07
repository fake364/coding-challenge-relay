export const getMinErrorValidation = minLength => value =>
    value.trim().length < minLength;

export const getMaxErrorValidation=maxLength => value =>
    value.trim().length > maxLength;