import * as types from "../types/types";

export interface Alert {
    message: string;
    onClose: () => void;
}

export interface ActivityForm {
    name: string;
    category: types.Category;
    description: string;
    startDate: string;
    endDate: string;
    from: string;
    to: string;
    mon: boolean;
    tues: boolean;
    wed: boolean;
    thus: boolean;
    fri: boolean;
    sat: boolean;
    sun: boolean;
    id?: string;
}
