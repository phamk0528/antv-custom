import { CellMeta } from "../../common/interface";
import { SpreadSheet } from "../../sheet-type";
import { DataType } from "../../data-set/interface";
export declare function keyEqualTo(key: string, compareKey: string): boolean;
export declare const convertString: (v: string) => string;
export declare const processCopyData: (displayData: DataType[], cells: CellMeta[][], spreadsheet: SpreadSheet) => string;
export declare const getTwoDimData: (cells: CellMeta[]) => CellMeta[][];
export declare const getSelectedData: (spreadsheet: SpreadSheet) => string;
