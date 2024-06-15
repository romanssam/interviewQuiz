
export const validateFullName = (fullName: string) => {
    const errors = [];

    if (!fullName) {
        errors.push("Обязательное поле");
    }

    return errors;
}