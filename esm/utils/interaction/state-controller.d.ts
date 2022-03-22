import { InteractionStateInfo } from "../../common/interface";
import { SpreadSheet } from "../../sheet-type";
/**
 * @desc clear the interaction state information
 * @param spreadsheet sheet instance
 */
export declare const clearState: (spreadsheet: SpreadSheet) => void;
/**
 * @desc set the interaction state information
 * @param spreadsheet sheet instance
 * @param interactionStateInfo
 */
export declare const setState: (spreadsheet: SpreadSheet, interactionStateInfo: InteractionStateInfo) => void;
