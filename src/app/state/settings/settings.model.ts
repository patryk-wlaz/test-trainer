export interface SettingsState {
  readonly version: string;
}

export const initialState: SettingsState = {
  version: '',
};
