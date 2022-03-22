import { Data } from "../common/interface/s2DataConfig";
import { Fields, TotalsStatus, Totals } from "../common/interface/index";
export declare const getListBySorted: (list: string[], sorted: string[]) => string[];
export declare const filterUndefined: (values: string[]) => string[];
export declare const flattenDeep: (data: Record<any, any>[] | Record<any, any>) => any[];
export declare const flatten: (data: Record<any, any>[] | Record<any, any>) => any[];
export declare const isEveryUndefined: (data: string[] | undefined[]) => boolean;
export declare const getFieldKeysByDimensionValues: (dimensionValues: string[] | undefined[], dimensions: string[] | undefined[]) => any[];
/**
 * arr1包含arr2，将arr2排到最后
 *
 */
export declare const sortByItems: (arr1: string[], arr2: string[]) => string[];
/**
 * 判断是普通单元格数据还是总计或小计
 * @param ids
 * @param data
 * @returns
 */
export declare const isTotalData: (ids: string[], data: Data) => boolean;
/**
 * split total data from origin list data.
 */
export declare function splitTotal(rawData: Data[], fields: Fields): Data[];
export declare function getAggregationAndCalcFuncByQuery(totalsStatus: TotalsStatus, totalsOptions: Totals): {
    aggregation: any;
    calcFunc: any;
};
