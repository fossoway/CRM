export const addValidationCyrillicSpace = (input) => {
    input.value = input.value.replace(/[^А-Яа-яёЁ\s]/igu, '');
};

export const addValidationCyrillic = (input) => {
    input.value = input.value.replace(/[^А-Яа-яёЁ]/igu, '');
};

export const addValidationNumeric = (input) => {
    input.value = input.value.replace(/[^0-9]/ig, '');
};