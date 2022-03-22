import { SortMethod, SortParam } from "../common/interface";
import { DataType, SortActionParams } from "../data-set/interface";
export declare const isAscSort: (sortMethod: any) => boolean;
export declare const isDescSort: (sortMethod: any) => boolean;
/**
 * 执行排序
 * @param list - 待排序数组
 * @param sortMethod - 升、降序
 * @param key - 根据key数值排序，如果有key代表根据维度值排序，故按数字排，如果没有按照字典排
 */
export declare const sortAction: (list: Array<string | number | DataType>, sortMethod?: SortMethod, key?: string) => (string | number | DataType)[];
export declare const sortByFunc: (params: SortActionParams) => string[];
export declare const sortByCustom: (params: SortActionParams) => string[];
export declare const sortByMethod: (params: SortActionParams) => string[];
export declare const processSort: (params: SortActionParams) => string[];
export declare const handleSortAction: (params: SortActionParams) => string[];
export declare const getSortTypeIcon: (sortParam: SortParam, isSortCell?: boolean) => "groupAsc" | "groupDesc" | "SortDown";
