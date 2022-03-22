import { ValueRanges } from "../../common/interface";
import { SpreadSheet } from "../../sheet-type";
/**
 * @desc clear all value ranges
 */
export declare const clearValueRangeState: (spreadsheet: SpreadSheet) => void;
/**
 * @desc merge new value ranges with old values
 * @param spreadsheet sheet instance
 * @param updatedRanges updated value ranges
 */
export declare const setValueRangeState: (spreadsheet: SpreadSheet, updatedRanges: ValueRanges) => void;
/**
 * @desc get target value ranges
 * @param spreadsheet sheet instance
 * @param valueField target field
 */
export declare const getValueRangeState: (spreadsheet: SpreadSheet, valueField: string) => import("../../common/interface").ValueRange;
