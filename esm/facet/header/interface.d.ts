import { Formatter, SortParam } from '../../common/interface';
import { Hierarchy } from '../layout/hierarchy';
import { SpreadSheet } from "../../sheet-type";
export interface CornerData {
    x: number;
    y: number;
    width: number;
    height: number;
    /** 字段展示 */
    label: string;
    /** 字段id */
    field: string;
}
export interface Cfg {
    data: Hierarchy[] | CornerData[];
    position: {
        x: number;
        y: number;
    };
    width: number;
    height: number;
    viewportWidth: number;
    viewportHeight: number;
    scrollX?: number;
    scrollY?: number;
    hScrollX?: number;
    cornerWidth?: number;
    hierarchyType?: string;
    formatter?: (f: string) => Formatter;
    /** 列维度字段 */
    cols?: string[];
    linkFields?: string[];
    seriesNumberWidth?: number;
    sortParam?: SortParam;
    scrollContainsRowHeader?: boolean;
    spreadsheet?: SpreadSheet;
}
