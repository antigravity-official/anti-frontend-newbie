import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { EuroAction } from './type';
import { getEuroInfo } from '../../api/euroInfo';
import { getEuroInfoAsync } from './action';
import { Dispatch } from 'redux';

export function getEuroInfoThunk(): ThunkAction<void, RootState, null, EuroAction> {
    return async (dispatch: Dispatch) => {
        const { request, success, failure } = getEuroInfoAsync;
        dispatch(request());
        try {
            const euroInfo = await getEuroInfo();
            dispatch(success(euroInfo));
        } catch (e) {
            dispatch(failure(e as Error));
        }
    };
}