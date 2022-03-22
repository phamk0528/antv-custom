import { Point } from '@antv/g-canvas';
import { BaseHeader, BaseHeaderConfig } from './base';
import { PanelBBox } from "../bbox/panelBBox";
import { CornerBBox } from "../bbox/cornerBBox";
import { LayoutResult, S2Options, SpreadSheetFacetCfg } from "../../common/interface";
import { BaseDataSet } from "../../data-set";
import { Hierarchy } from "../layout/hierarchy";
import { Node } from "../layout/node";
import { SpreadSheet } from "../../sheet-type";
export interface CornerHeaderConfig extends BaseHeaderConfig {
    hierarchyType: S2Options['hierarchyType'];
    hierarchyCollapse: boolean;
    rows: string[];
    columns: string[];
    seriesNumberWidth: number;
}
/**
 * Corner Header for SpreadSheet
 */
export declare class CornerHeader extends BaseHeader<CornerHeaderConfig> {
    /**
     * Get corner Header by config
     * @param panelBBox
     * @param cornerBBox
     * @param seriesNumberWidth
     * @param cfg
     * @param layoutResult
     * @param s2 spreadsheet
     */
    static getCornerHeader(panelBBox: PanelBBox, cornerBBox: CornerBBox, seriesNumberWidth: number, cfg: SpreadSheetFacetCfg, layoutResult: LayoutResult, s2: SpreadSheet): CornerHeader;
    static getCornerNodes(position: Point, width: number, height: number, rows: string[], columns: string[], rowsHierarchy: Hierarchy, colsHierarchy: Hierarchy, dataSet: BaseDataSet, seriesNumberWidth: number, s2: SpreadSheet): Node[];
    constructor(cfg: CornerHeaderConfig);
    /**
     *  Make cornerHeader scroll with hScrollBar
     * @param scrollX
     */
    onCorScroll(scrollX: number, type: string): void;
    destroy(): void;
    protected layout(): void;
    protected renderCells(): void;
    protected offset(): void;
    protected clip(): void;
    protected addBgRect(): void;
}
