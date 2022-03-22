import { Point } from '@antv/g-canvas';
import { HeaderCell } from './header-cell';
import { CellTypes } from "../common/constant";
import { TextTheme } from "../common/interface";
import { ColHeaderConfig } from "../facet/header/col";
export declare class ColCell extends HeaderCell {
    protected headerConfig: ColHeaderConfig;
    /** 文字区域（含icon）绘制起始坐标 */
    protected textAreaPosition: Point;
    get cellType(): CellTypes;
    protected initCell(): void;
    protected drawBackgroundShape(): void;
    protected drawInteractiveBgShape(): void;
    private getOriginalTextStyle;
    protected getTextStyle(): TextTheme;
    protected getMaxTextWidth(): number;
    protected getIconPosition(): Point;
    protected getTextPosition(): Point;
    protected getActionIconsWidth(): number;
    protected getColResizeAreaKey(): string;
    protected getColResizeArea(): import("@antv/g-canvas").IGroup;
    protected getHorizontalResizeAreaName(): string;
    protected drawHorizontalResizeArea(): void;
    protected shouldAddVerticalResizeArea(): boolean;
    protected getVerticalResizeAreaOffset(): {
        x: number;
        y: number;
    };
    protected drawVerticalResizeArea(): void;
    private drawResizeArea;
    protected drawHorizontalBorder(): void;
    protected drawVerticalBorder(): void;
    protected drawBorders(): void;
    protected hasHiddenColumnCell(): boolean;
    private getExpandIconTheme;
    private addExpandColumnSplitLine;
    private addExpandColumnIconShapes;
    private addExpandColumnIcon;
    private getExpandColumnIconConfig;
    private isLastColumn;
}
