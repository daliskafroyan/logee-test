import { DATA_FETCHED, LOADING, FAILED, CLEAR_MESSAGE } from "./constants";

const initialState = {
    isLoading: {
        fetchDashboardGmv: false,
    },
    data: {
        fetchDashboardGmv: false,
    },
    message: {
        fetchDashboardGmv: false,
    },
};

export default function reducer(state = initialState, action = {}) {
    const { type, data, isLoading, key, message } = action;

    console.log("#debug type reducer main", action);

    switch (type) {
        case DATA_FETCHED:
            return {
                ...state,
                isLoading: { ...state.isLoading, [key]: isLoading },
                data: { ...state.data, [key]: data },
            };
        case LOADING:
            return {
                ...state,
                isLoading: { ...state.isLoading, [key]: isLoading },
            };
        case FAILED:
            return {
                ...state,
                isLoading: { ...state.isLoading, [key]: isLoading },
                message: { ...state.message, [key]: message },
            };
        case CLEAR_MESSAGE:
            return {
                ...state,
                message: { ...state.message, [key]: message },
            };

        default:
            return state;
    }
}
