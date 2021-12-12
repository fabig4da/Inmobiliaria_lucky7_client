// import { AuthReducerAction} from "../../interfaces/utils";
import { types } from "../types";

const initialState = {
    logged: false
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            state = {
                logged: true,
                data: action.payload
            }
            return state;
        case types.logout:
            return initialState
        default:
            return state;
    }

}