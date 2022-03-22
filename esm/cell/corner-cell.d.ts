import { IShape, Point } from '@antv/g-canvas';
import { HeaderCell } from './header-cell';
import { CellTypes } from "../common/constant";
import { TextTheme } from "../common/interface";
import { CornerHeaderConfig } from "../facet/header/corner";
import { CornerNodeType } from "../common/interface/node";
export declare class CornerCell extends HeaderCell {
    protected headerConfig: CornerHeaderConfig;
    protected textShapes: IShape[];
    cornerType: CornerNodeType;
    get cellType(): CellTypes;
    update(): void;
    protected initCell(): void;
    protected drawCellText(): void;
    /**
     * 绘制折叠展开的icon
     */
    private drawTreeIcon;
    private drawBackgroundShape;
    /**
     * Render cell horizontalBorder border
     * @private
     */
    protected drawBorderShape(): void;
    private isLastRowCornerCell;
    private getResizeAreaEffect;
    private drawResizeArea;
    private showTreeIcon;
    protected getIconPosition(): Point;
    private getTreeIconWidth;
    protected getTextStyle(): TextTheme;
    protected getMaxTextWidth(): number;
    protected getTextPosition(): Point;
    protected getCornerText(label: string): string;
}
