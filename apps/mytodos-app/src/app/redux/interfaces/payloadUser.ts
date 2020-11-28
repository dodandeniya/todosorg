import { IUser } from '@todosorg/common-share';

export interface IUserInfo extends IUser {
  id?: any;
}

export default interface IPayloadUser {
  userInfo?: IUserInfo;
  error?: string;
  loading: Boolean;
}
