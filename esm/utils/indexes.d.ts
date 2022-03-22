export declare type Indexes = [number, number, number, number];
export declare type PanelIndexes = {
    center: Indexes;
    frozenRow?: Indexes;
    frozenCol?: Indexes;
    frozenTrailingRow?: Indexes;
    frozenTrailingCol?: Indexes;
};
export interface Diff {
    add: [number, number][];
    remove: [number, number][];
}
/**
 * 是否在 视窗索引范围中
 * @param x
 * @param y
 * @param indexes
 */
export declare const isXYInRange: (x: number, y: number, indexes: number[]) => boolean;
export declare const allIndexes: (indexes: Indexes) => any[];
/**
 * 计算两个 indexes 的 diff，获取 sourceIndexes -> targetIndexes 过程中新增的和移除的index
 * @param sourceIndexes
 * @param targetIndexes
 */
export declare const diffIndexes: (sourceIndexes: Indexes, targetIndexes: Indexes) => Diff;
/**
 * 计算 Panel 下所有子 Group的 Indexes Diff
 */
export declare const diffPanelIndexes: (sourceIndexes: PanelIndexes, targetIndexes: PanelIndexes) => Diff;
