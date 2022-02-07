import { fetchUserList } from "../../services/user";

import { DATA_FETCHED, LOADING, FAILED } from "./constants";

export const API = {
    fetchUserList,
};

export const TYPES = {
    DATA_FETCHED,
    LOADING,
    FAILED,
};
