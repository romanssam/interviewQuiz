
export const validateEmail = (email: string) => {
    const errors = [];

    if (!email) {
        errors.push("Обязательное поле");
    }

    return errors;
}