import { ShapeAttrs } from '@antv/g-canvas';
import { InteractionStateName } from '../constant';
import { CellTypes } from "../constant/interaction";
export declare type TextAlign = 'left' | 'center' | 'right';
export declare type TextBaseline = 'top' | 'middle' | 'bottom';
export interface Palette {
    basicColors: string[];
    semanticColors: {
        red?: string;
        green?: string;
        [key: string]: string;
    };
}
export interface Padding {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}
export interface Background {
    opacity?: number;
    color?: string;
}
export interface InteractionStateTheme {
    backgroundOpacity?: number;
    backgroundColor?: string;
    textOpacity?: number;
    borderColor?: string;
    borderWidth?: number;
    borderOpacity?: number;
    opacity?: number;
}
export declare type InteractionState = {
    [K in InteractionStateName]?: InteractionStateTheme;
};
export declare type Margin = Padding;
export interface TextAlignCfg {
    textAlign?: TextAlign;
    textBaseline?: TextBaseline;
}
export interface TextTheme extends TextAlignCfg {
    fontFamily?: string;
    fontSize?: number;
    fontWeight?: number | 'normal' | 'bold' | 'bolder' | 'lighter';
    fill?: string;
    linkTextFill?: string;
    opacity?: number;
}
export interface CellTheme {
    crossBackgroundColor?: string;
    backgroundColor?: string;
    backgroundColorOpacity?: number;
    horizontalBorderColor?: string;
    horizontalBorderColorOpacity?: number;
    verticalBorderColor?: string;
    verticalBorderColorOpacity?: number;
    horizontalBorderWidth?: number;
    verticalBorderWidth?: number;
    padding: Padding;
    interactionState?: InteractionState;
    miniBarChartHeight?: number;
    miniBarChartFillColor?: string;
}
export interface IconTheme {
    fill?: string;
    downIconColor?: string;
    upIconColor?: string;
    size?: number;
    margin?: Margin;
}
export interface ResizeArea {
    size?: number;
    background?: string;
    guideLineColor?: string;
    guideLineDash?: number[];
    backgroundOpacity?: number;
    interactionState?: InteractionState;
}
export interface ScrollBarTheme {
    trackColor?: string;
    thumbHoverColor?: string;
    thumbColor?: string;
    size?: number;
    hoverSize?: number;
    /** 指定如何绘制每一条线段末端，lineCap?: 'butt' | 'round' | 'square'; */
    lineCap?: ShapeAttrs['lineCap'];
}
export interface SplitLine {
    horizontalBorderColor?: string;
    horizontalBorderColorOpacity?: number;
    horizontalBorderWidth?: number;
    verticalBorderColor?: string;
    verticalBorderColorOpacity?: number;
    verticalBorderWidth?: number;
    showShadow?: boolean;
    shadowWidth?: number;
    shadowColors?: {
        left: string;
        right: string;
    };
}
export interface DefaultCellTheme extends GridAnalysisCellTheme {
    bolderText?: TextTheme;
    text?: TextTheme;
    cell?: CellTheme;
    icon?: IconTheme;
    seriesNumberWidth?: number;
}
export interface GridAnalysisCellTheme {
    minorText?: TextTheme;
    derivedMeasureText?: {
        mainUp: string;
        mainDown: string;
        minorUp: string;
        minorDown: string;
    };
}
export declare type CellThemes = {
    [K in CellTypes]?: DefaultCellTheme;
};
export interface S2Theme extends CellThemes {
    resizeArea?: ResizeArea;
    scrollBar?: ScrollBarTheme;
    splitLine?: SplitLine;
    prepareSelectMask?: InteractionStateTheme;
    background?: Background;
}
export declare type ThemeName = 'default' | 'colorful' | 'gray';
export interface ThemeCfg {
    theme?: S2Theme;
    palette?: Palette;
    name?: ThemeName;
}
