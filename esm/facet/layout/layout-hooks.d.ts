import { Node } from "./node";
import { LayoutResult, SpreadSheetFacetCfg } from "../../common/interface";
import { Hierarchy } from "./hierarchy";
/**
 * re-arrange field values by custom arrange hooks
 * @param fieldValues
 * @param facetCfg
 * @param parent
 * @param field
 */
export declare const layoutArrange: (fieldValues: string[], facetCfg: SpreadSheetFacetCfg, parent: Node, field: string) => string[];
/**
 * Push node directly or custom push according to Hierarchy Hooks
 * @param facetCfg
 * @param parentNode
 * @param currentNode
 * @param hierarchy
 */
export declare const layoutHierarchy: (facetCfg: SpreadSheetFacetCfg, parentNode: Node, currentNode: Node, hierarchy: Hierarchy) => boolean;
/**
 * custom control every header node's coordinates
 * @param facetCfg
 * @param rowNode
 * @param colNode
 */
export declare const layoutCoordinate: (facetCfg: SpreadSheetFacetCfg, rowNode: Node, colNode: Node) => void;
/**
 * Custom position cell's data
 * @param facetCfg
 * @param layoutResult
 */
export declare const layoutDataPosition: (facetCfg: SpreadSheetFacetCfg, layoutResult: LayoutResult) => LayoutResult;
