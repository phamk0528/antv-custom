/**
 * LRU cache, can specify cache size
 */
export declare class LruCache<T, P> {
    private cache;
    private readonly limit;
    constructor(limit?: number);
    get(key: T): P;
    put(key: T, value: P, deleteCallback?: (value: P) => void): void;
    has(key: T): boolean;
    hasValue(value: P): boolean;
    getAllValues(): IterableIterator<P>;
    clear(): void;
    size(): number;
}
