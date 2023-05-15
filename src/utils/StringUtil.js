export const toLocalePrice = (value) => {
    return Number(+value).toLocaleString('en-IN', { currency: 'INR', minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export const toLocalePriceNoDecimal = (value) => {
    return Number(+value).toLocaleString('en-IN', { currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })
}

export const toCompactPricePrefix = (value) => {
    return `₹ ${toCompactPrice(value)}`
}

export const toCompactPrice = (value) => {
    return Number(+value)
        .toLocaleString(
            'en-IN', {
            //@ts-ignore
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 2,
        }).replace('T', 'K');
}