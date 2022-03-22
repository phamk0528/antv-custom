import { Point } from '@antv/g-canvas';
import { HeaderCell } from './header-cell';
import { CellTypes } from "../common/constant";
import { TextTheme } from "../common/interface";
import { RowHeaderConfig } from "../facet/header/row";
export declare class RowCell extends HeaderCell {
    protected headerConfig: RowHeaderConfig;
    private gm;
    get cellType(): CellTypes;
    destroy(): void;
    protected initCell(): void;
    protected drawBackgroundShape(): void;
    protected drawInteractiveBgShape(): void;
    private showTreeIcon;
    protected drawTreeIcon(): void;
    protected drawTextShape(): void;
    protected drawLinkFieldShape(): void;
    protected drawRectBorder(): void;
    protected drawResizeAreaInLeaf(): void;
    protected getContentIndent(): number;
    protected getTextIndent(): number;
    protected getTextStyle(): TextTheme;
    protected getIconPosition(): {
        x: any;
        y: any;
    };
    protected getMaxTextWidth(): number;
    private getTextArea;
    protected getTextPosition(): Point;
    private getIconYPosition;
}
