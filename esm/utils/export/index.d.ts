import { SpreadSheet } from "../../sheet-type";
export declare const copyToClipboardByExecCommand: (str: string) => Promise<void>;
export declare const copyToClipboardByClipboard: (str: string) => Promise<void>;
export declare const copyToClipboard: (str: string, sync?: boolean) => Promise<void>;
export declare const download: (str: string, fileName: string) => void;
/**
 * Copy data
 * @param sheetInstance
 * @param isFormat
 * @param split
 */
export declare const copyData: (sheetInstance: SpreadSheet, split: string, isFormat?: boolean) => string;
