import { Node } from "../facet/layout/node";
export declare const getSubTotalNodeWidthOrHeightByLevel: (sampleNodesForAllLevels: Node[], level: number, key: 'width' | 'height') => number;
/**
 * 根据视窗高度计算需要展示的数据数组下标
 * 如有2个节点，每个高度30
 * @param heights 所有单元格的高度偏移量数组 [0, 30, 60]
 * @param minHeight 视窗高度起点
 * @param maxHeight 视窗高度终点
 * @returns
 */
export declare const getIndexRangeWithOffsets: (heights: number[], minHeight: number, maxHeight: number) => {
    start: number;
    end: number;
};
