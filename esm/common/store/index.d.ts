import { StoreKey } from "../interface";
/**
 * Store something in {@link SpreadSheet} temporary along with it's lifecycle
 * All the keys need be declare in {@see StoreKey} first
 */
export declare class Store {
    private store;
    set<T extends keyof StoreKey>(key: T, value: StoreKey[T]): void;
    get<T extends keyof StoreKey>(key: T, defaultValue?: StoreKey[T]): StoreKey[T];
    clear(): void;
    size(): number;
}
