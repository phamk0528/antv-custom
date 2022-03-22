import { TreeHeaderParams } from "./interface";
/**
 * Only row header has tree hierarchy, in this scene:
 * 1、value in rows is not work => valueInCols is ineffective
 * 2、can't add extra sub total node in row
 * @param params
 */
export declare const buildRowTreeHierarchy: (params: TreeHeaderParams) => void;
