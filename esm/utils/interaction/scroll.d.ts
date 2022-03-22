import { SpreadSheet } from "../../sheet-type";
import { ScrollDirection } from "../../common/constant/interaction";
export declare const getScrollOffsetForCol: (colIndex: number, direction: ScrollDirection, spreadsheet: SpreadSheet) => number;
export declare const getScrollOffsetForRow: (rowIndex: number, direction: ScrollDirection, spreadsheet: SpreadSheet) => number;
