import { Node } from "../facet/layout/node";
import { Event as CanvasEvent } from '@antv/g-canvas';
import { SpreadSheet } from './spread-sheet';
import { S2Options, SpreadSheetFacetCfg } from "../common/interface";
export declare class TableSheet extends SpreadSheet {
    getDataSet(options: S2Options): any;
    /**
     * Check if is pivot mode
     */
    isPivotMode(): boolean;
    /**
     * Check if is pivot mode
     */
    isTableMode(): boolean;
    /**
     * tree type must be in strategy mode
     */
    isHierarchyTreeType(): boolean;
    /**
     * Check whether scroll contains row header
     * For now contains row header in ListSheet mode by default
     */
    isScrollContainsRowHeader(): boolean;
    /**
     * Scroll Freeze Row Header
     */
    isFrozenRowHeader(): boolean;
    clearDrillDownData(): void;
    /**
     * Check if the value is in the columns
     */
    isValueInCols(): boolean;
    protected bindEvents(): void;
    protected initPanelGroupChildren(): void;
    protected getFacetCfgFromDataSetAndOptions(): SpreadSheetFacetCfg;
    protected buildFacet(): void;
    protected clearFrozenGroups(): void;
    destroy(): void;
    onSortTooltipClick: ({ key }: {
        key: any;
    }, meta: any) => void;
    handleGroupSort(event: CanvasEvent, meta: Node): void;
}
