import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { routerReducer } from "react-router-redux";
import login from "@pages/Login/reducer";
import main from "@pages/Main/reducer";
import ppjk from "@pages/Ppjk/reducer";

const rootReducer = combineReducers({
    login,
    main,
    ppjk,
    form: formReducer,
    routing: routerReducer,
});

export default rootReducer;
