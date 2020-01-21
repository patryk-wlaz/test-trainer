export interface SimplifiedPermission {
  key: string;
  values?: string[];
}

export interface Role {
  id: string;
  name: string;
  applicationId: string;
  countries: string[];
  agencies: string[];
  permissions: SimplifiedPermission[];
}

export interface User {
  id: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  firstname?: string;
  lastname?: string;
  agencyId?: string;
  countryId?: string;
  departmentId?: string;
  azureId?: string;
  userRoles: Role[];
  active: boolean;
  // TODO: remove comment when auth tool ready
  avatar?: string; // this is currently fake because auth tool does not provide avatars now
}

export type UsersState = Readonly<{
  loading: boolean;
  myself: User;
}>;

export const initialState: UsersState = {
  loading: false,
  myself: null,
};
