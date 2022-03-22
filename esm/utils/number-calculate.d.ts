import { Aggregation } from '../common/interface';
declare type DataItem = Record<string, any>;
export declare const isNotNumber: (value: unknown) => boolean;
/**
 * 计算数据项的和
 * @param data 数据项
 * @param field 值字段
 * @returns 算术和
 */
export declare const getDataSumByField: (data: DataItem[], field: string) => number;
/**
 * 计算数据项的极值
 * @param method 最大值(max)或最小值(min)
 * @param data 数据项
 * @param field 值字段
 * @returns 最值
 */
export declare const getDataExtremumByField: (method: 'min' | 'max', data: DataItem[], field: string) => number;
/**
 * 计算数据项的平均值
 * @param data 数据项
 * @param field 值字段
 * @returns 算术平均值
 */
export declare const getDataAvgByField: (data: DataItem[], field: string) => number;
/**
 * totals 计算方法集合
 */
export declare const calcActionByType: {
    [type in Aggregation]: (data: DataItem[], field: string) => number;
};
export {};
