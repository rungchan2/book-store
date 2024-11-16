export const formatNumber = (number: number) => {
    return number.toLocaleString('ko-KR', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
};
