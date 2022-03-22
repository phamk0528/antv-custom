/**
 * 自动格式化
 * 规则
 *  1，小于1w，使用逗号分割，例如 3,459
 *  2，大于1w，使用语义化，例如 3.2万，3.4亿 2,234万
 * @param v
 * @param fixed
 * @param formatter
 */
export declare const auto: (v: number, fixed?: number, formatter?: any) => string;
export declare const parseNumberWithPrecision: (value: number | string) => number;
