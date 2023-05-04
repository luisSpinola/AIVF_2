export const DataFormaterStandart = (number) => {
    return number.toLocaleString('pt-PT');
}

export const DataFormaterPercentage = (number) => {
    return number.toLocaleString('pt-PT') + "%";
}

export const DataFormaterCurrency = (number) => {
    return number.toLocaleString('pt-PT', {
        minimumFractionDigits: 0, maximumFractionDigits: 0,
        style: 'currency',
        currency: 'EUR'
    })
}