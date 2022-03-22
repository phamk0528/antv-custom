import { Fields, FilterParam, Meta, SortParams } from "./index";
/** use for gridAnalysisSheet
 *  eg. { label: '余额女',
        values: [
          ['最近7天登端天数', 1, 3423423, 323],
          ['自然月新登用户数', 1, 3423423, 323],
          ['最近7天登端天数', 1, 3423423, 323],
          ['自然月新登用户数', 1, 3423423, 323],
        ],
      }
 */
export interface MultiData {
    values: (string | number)[][];
    originalValues?: (string | number)[][];
    label?: string;
    [key: string]: unknown;
}
export declare type SimpleDataItem = string | number;
export declare type DataItem = SimpleDataItem | MultiData;
export declare type Data = Record<string, DataItem>;
export interface CustomTreeItem {
    key: string;
    title: string;
    collapsed?: boolean;
    description?: string;
    children?: CustomTreeItem[];
}
export interface S2DataConfig {
    data: Data[];
    totalData?: Data[];
    fields: Fields;
    meta?: Meta[];
    sortParams?: SortParams;
    filterParams?: FilterParam[];
    [key: string]: unknown;
}
