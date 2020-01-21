import { RouterEffects, RouterFacade } from './router';

import { clientsReducer, ClientsEffects, ClientsState, ClientsFacade } from './clients';
import { usersReducer, UsersEffects, UsersState, UsersFacade } from './users';
import { personalReducer, PersonalEffects, PersonalState, PersonalFacade } from './personal';
import { newsSidebarReducer, NewsSidebarEffects, NewsSidebarState, NewsSidebarFacade } from './news-sidebar';

export interface IAction {
  type: string;
  payload?: any;
}

export const reducers = {
  clients: clientsReducer,
  users: usersReducer,
  newsSidebar: newsSidebarReducer,
  personal: personalReducer,
};

export const effects = [
  ClientsEffects,
  RouterEffects,
  UsersEffects,
  NewsSidebarEffects,
  PersonalEffects,
];

export const facades = [
  ClientsFacade,
  RouterFacade,
  UsersFacade,
  NewsSidebarFacade,
  PersonalFacade,
];

export interface AppState {
  clients: ClientsState;
  users: UsersState;
  personal: PersonalState;
  newsSidebar: NewsSidebarState;
}
