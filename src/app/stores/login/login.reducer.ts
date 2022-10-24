import { UserActions, EUserActions } from './login.action';
import { IUserState, IUserLoginState } from './login.state';
const initLoginState: IUserLoginState = {
    loading: false,
    success: false,
    fail: false,
    userName: ''
};
const initUserState: IUserState = {
    login: initLoginState
};

export function userReducer(state = initUserState, action: UserActions): IUserState {
    switch (action.type) {
        case EUserActions.LOGIN:
            return {
              ...state,
                login: { ...initLoginState, loading: true}
            };
        case EUserActions.LOGIN_SUCCESS:
            return {
                ...state,
                login: { ...state.login, loading: false, success: true, userName: action.payload  }
            };
        case EUserActions.LOGIN_FAIL:
            return {
                ...state,
                login: { ...state.login, loading: false, fail: true }
            };
        default:
            return state;
    }
}

