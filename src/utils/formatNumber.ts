import dayjs from "dayjs";

export const formatNumber = (number: number) => {
    return number.toLocaleString('ko-KR', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
};

export const formatDate = (date: string, format: string) => {
    return dayjs(date).format(format);
}
