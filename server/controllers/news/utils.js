import every from 'lodash/every';


export const validateData = (data, requiredFields) => 
    every(data, (value, index) => typeof value === requiredFields[index]);
