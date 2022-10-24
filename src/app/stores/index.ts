import * as fromProducts from './login/login.reducer';
import { UserActions, EUserActions } from './login/login.action';
import { IUserState, IUserLoginState } from './login/login.state';
import { ActionReducerMap } from '@ngrx/store';

export interface IAppState {
    user: IUserState;
}

// export const appReducer: ActionReducerMap<IAppState> = {
//     user: fromProducts.userReducer,
// };
