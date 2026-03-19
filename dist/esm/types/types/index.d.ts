export type Remove<T, S> = T extends T ? (S extends T ? never : T) : never;
