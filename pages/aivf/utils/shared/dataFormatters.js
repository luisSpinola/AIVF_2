export const getDataFormater = (display_mode) => {
    switch(display_mode){
        case 'default':
            return dataFormatterStandart;
        case 'currency':
            return dataFormatterCurrency;
        case 'percentage':
            return dataFormatterPercentage;
    }
}

export const dataFormatterStandart = (number) => {
    return number.toLocaleString('pt-PT');
}

export const dataFormatterPercentage = (number) => {
    return number.toLocaleString('pt-PT') + "%";
}

export const dataFormatterCurrency = (number) => {
    return number.toLocaleString('pt-PT', {
        minimumFractionDigits: 0, maximumFractionDigits: 0,
        style: 'currency',
        currency: 'EUR'
    })
}