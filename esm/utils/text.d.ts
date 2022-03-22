/// <reference types="lodash" />
import { CellCfg, MultiData, S2CellType } from "../common/interface";
/**
 * 计算文本在画布中的宽度
 */
export declare const measureTextWidth: ((text: number | string, font: unknown) => number) & import("lodash").MemoizedFunction;
/**
 * 获取文本的 ... 文本。
 * 算法（减少每次 measureText 的长度，measureText 的性能跟字符串时间相关）：
 * 1. 先通过 STEP 逐步计算，找到最后一个小于 maxWidth 的字符串
 * 2. 然后对最后这个字符串二分计算
 * @param text 需要计算的文本, 由于历史原因 除了支持string，还支持空值,number和数组等
 * @param maxWidth
 * @param font
 */
export declare const getEllipsisTextInner: (text: any, maxWidth: number, font: CSSStyleDeclaration) => any;
/**
 * 追求性能，粗略的计算文本的宽高！
 *
 * 算法逻辑：
 * 计算一个字符串中，符号[0-255]，中文（其他）的个数
 * 然后分别乘以中文、符号的宽度
 * @param text
 * @param font
 */
export declare const measureTextWidthRoughly: (text: any, font?: any) => number;
/**
 * @desc 改良版 获取文本的 ... 文本（可传入 优先文本片段）
 * @param text 需要计算的文本
 * @param maxWidth
 * @param font optional 文本字体 或 优先显示的文本
 * @param priority optional 优先显示的文本
 */
export declare const getEllipsisText: ({ text, maxWidth, fontParam, priorityParam, placeholder, }: {
    text: string | number;
    maxWidth: number;
    fontParam?: unknown;
    priorityParam?: string[];
    placeholder?: string;
}) => any;
/**
 * To decide whether the data is positive or negative.
 * Two cases needed to be considered since  the derived value could be number or string.
 * @param value
 * @param font
 */
export declare const isUpDataValue: (value: number | string) => boolean;
/**
 * @desc draw text shape of object
 * @param cell
 * @multiData 自定义文本内容
 * @disabledConditions 是否禁用条件格式
 */
export declare const drawObjectText: (cell: S2CellType, multiData?: MultiData, disabledConditions?: boolean) => void;
/**
 * 根据 cellCfg 配置获取当前单元格宽度
 */
export declare const getCellWidth: (cellCfg: CellCfg, labelSize?: number) => number;
export declare const safeJsonParse: (val: string) => any;
