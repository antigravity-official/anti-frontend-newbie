import * as actions from './action';
import { ActionType } from 'typesafe-actions';
import { EuroInfo } from '../../api/euroInfo';

export type EuroAction = ActionType<typeof actions>;

export type EuroState = {
  euroInfo: {
    loading: boolean;
    error: Error | null;
    data: EuroInfo | null;
  };
};