import { PanelBBox } from '../bbox/panelBBox';
import { BaseHeader, BaseHeaderConfig } from './base';
import { Node } from "../layout/node";
import { SpreadSheet } from "../../sheet-type/index";
export declare class SeriesNumberHeader extends BaseHeader<BaseHeaderConfig> {
    private backgroundShape;
    private leftBorderShape;
    /**
     * Get seriesNumber header by config
     * @param viewportBBox
     * @param seriesNumberWidth
     * @param leafNodes
     * @param spreadsheet
     * @param cornerWidth
     */
    static getSeriesNumberHeader(viewportBBox: PanelBBox, seriesNumberWidth: number, leafNodes: Node[], spreadsheet: SpreadSheet, cornerWidth: number): SeriesNumberHeader;
    constructor(cfg: BaseHeaderConfig);
    clip(): void;
    layout(): void;
    protected offset(): void;
    private addBackGround;
    private addBorder;
    private addText;
    private getTextPadding;
}
