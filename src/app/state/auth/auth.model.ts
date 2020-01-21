import { GetMyselfResInterface } from '@common/auth/auth.interfaces';
export type AuthState = Readonly<{
  urlToReturn: string;
  user?: GetMyselfResInterface;
}>;

export const initialState: AuthState = {
  urlToReturn: '',
};
