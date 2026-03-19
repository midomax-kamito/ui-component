import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function objectsToArray(object: Object) {
    let result: any[] = [];

    Object.values(object).forEach((value) => {
        if (typeof value === "string") {
            result = [...result, value];
        } else if (typeof value === "object" && !Array.isArray(value) && value !== null) {
            result = [...result, ...objectsToArray(value)];
        }

        return undefined;
    });

    return result;
}

export function objectsToString(object: Object) {
    return objectsToArray(object).join(" ");
}

export const removeVietnameseTones = (str: string) => {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a'); //a
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e'); //e
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i'); //i
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o'); //o
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u'); //u
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y'); //y
    str = str.replace(/đ/g, 'd'); //d
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A'); //A
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E'); //E
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I'); //I
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O'); //O
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U'); //U
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y'); //Y
    str = str.replace(/Đ/g, 'D'); //D
    return str;
};

export const toLowerSnakeCase = (input: string): string => {
    return removeVietnameseTones(
        input
            .trim()
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, ''),
    )
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '_');
};

export const REGEX_SNAKE_CASE = /^[a-z0-9_]+$/;
