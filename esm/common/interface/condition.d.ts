import { IconTheme } from './theme';
export interface ValueRange {
    minValue?: number;
    maxValue?: number;
}
export declare type ValueRanges = Record<string, ValueRange>;
export interface MappingResult extends ValueRange {
    icon?: string;
    fill: string;
    isCompare?: boolean;
}
export declare type MappingFunction = (fieldValue: number | string, data: Record<string, any>) => MappingResult;
/**
 * One field can hold a condition
 */
export interface Condition {
    readonly field: string | RegExp;
    readonly mapping: MappingFunction;
}
export declare type IconPosition = 'left' | 'right';
export interface IconCondition extends Condition {
    readonly position?: IconPosition;
}
export interface Conditions {
    readonly text?: Condition[];
    readonly background?: Condition[];
    readonly interval?: Condition[];
    readonly icon?: IconCondition[];
}
export declare type IconCfg = Pick<IconTheme, 'size' | 'margin'> & Pick<IconCondition, 'position'>;
