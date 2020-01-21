// This is a generic type allowing to omit some property from model, which we're e.g. extending
// It's native in TS 3.5, so can be deleted once we update angular and typescript

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
