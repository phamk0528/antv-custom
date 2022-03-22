import { Node } from './node';
/**
 * Row and Column hierarchy to handle all contained nodes
 */
export declare class Hierarchy {
    rows: string[];
    width: number;
    height: number;
    maxLevel: number;
    sampleNodesForAllLevels?: Node[];
    sampleNodeForLastLevel?: Node;
    private allNodesWithoutRoot;
    private indexNode;
    getLeaves(): Node[];
    /**
     * Get all or level-related nodes in hierarchy
     * @param level
     */
    getNodes(level?: number): Node[];
    /**
     * Get all or less than level-related nodes in hierarchy
     * @param lessThanLevel
     */
    getNodesLessThanLevel(lessThanLevel: number): Node[];
    /**
     * Add new node
     * @param value
     * @param insetIndex
     */
    pushNode(value: Node, insetIndex?: number): void;
    pushIndexNode(value: Node): void;
    getIndexNodes(): Node[];
}
