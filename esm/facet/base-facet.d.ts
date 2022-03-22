/// <reference types="lodash" />
import type { IGroup } from '@antv/g-canvas';
import { Wheel } from '@antv/g-gesture';
import { Timer } from 'd3-timer';
import { CornerBBox } from './bbox/cornerBBox';
import { PanelBBox } from './bbox/panelBBox';
import type { S2WheelEvent, ScrollOffset } from "../common/interface/scroll";
import { ColHeader, CornerHeader, Frame, RowHeader, SeriesNumberHeader } from "./header";
import { ViewCellHeights } from "./layout/interface";
import { Node } from "./layout/node";
import { SpreadSheet } from "../sheet-type";
import { ScrollBar } from "../ui/scrollbar";
import { LayoutResult, OffsetConfig, SpreadSheetFacetCfg, ViewMeta, S2CellType } from "../common/interface";
import { PanelIndexes } from "../utils/indexes";
export declare abstract class BaseFacet {
    spreadsheet: SpreadSheet;
    cornerBBox: CornerBBox;
    panelBBox: PanelBBox;
    backgroundGroup: IGroup;
    panelGroup: IGroup;
    foregroundGroup: IGroup;
    cfg: SpreadSheetFacetCfg;
    layoutResult: LayoutResult;
    viewCellWidths: number[];
    viewCellHeights: ViewCellHeights;
    protected mobileWheel: Wheel;
    protected timer: Timer;
    hScrollBar: ScrollBar;
    hRowScrollBar: ScrollBar;
    vScrollBar: ScrollBar;
    rowHeader: RowHeader;
    columnHeader: ColHeader;
    cornerHeader: CornerHeader;
    rowIndexHeader: SeriesNumberHeader;
    centerFrame: Frame;
    protected abstract doLayout(): LayoutResult;
    abstract getViewCellHeights(layoutResult: LayoutResult): ViewCellHeights;
    protected scrollFrameId: ReturnType<typeof requestAnimationFrame>;
    get scrollBarTheme(): import("../common/interface").ScrollBarTheme;
    get scrollBarSize(): number;
    protected preCellIndexes: PanelIndexes;
    constructor(cfg: SpreadSheetFacetCfg);
    hideScrollBar: () => void;
    delayHideScrollBar: import("lodash").DebouncedFunc<() => void>;
    delayHideScrollbarOnMobile: () => void;
    showVerticalScrollBar: () => void;
    showHorizontalScrollBar: () => void;
    onContainerWheel: () => void;
    onContainerWheelForPc: () => void;
    onContainerWheelForMobile: () => void;
    bindEvents: () => void;
    /**
     * Start render, call from outside
     */
    render(): void;
    /**
     * 在每次render, 校验scroll offset是否在合法范围中
     * 比如在滚动条已经滚动到100%的状态的前提下：（ maxAvailableScrollOffsetX = colsHierarchy.width - viewportBBox.width ）
     *     此时changeSheetSize，sheet从 small width 变为 big width
     *     导致后者 viewport 区域更大，其结果就是后者的 maxAvailableScrollOffsetX 更小
     *     此时就需要重置 scrollOffsetX，否则就会导致滚动过多，出现空白区域
     */
    protected adjustScrollOffset(): void;
    getSeriesNumberWidth(): number;
    getCanvasHW(): {
        width: number;
        height: number;
    };
    getContentHeight(): number;
    updateScrollOffset(offsetConfig: OffsetConfig): void;
    getPaginationScrollY(): number;
    destroy(): void;
    setScrollOffset: (scrollOffset: ScrollOffset) => void;
    getScrollOffset: () => ScrollOffset;
    emitPaginationEvent: () => void;
    private unbindEvents;
    clipPanelGroup: () => void;
    calculateCellWidthHeight: () => void;
    /**
     * The purpose of this rewrite is to take into account that when rowHeader supports scrollbars
     the panel viewable area must vary with the horizontal distance of the scroll
     * @param scrollX
     * @param scrollY
     * @public
     */
    calculateXYIndexes(scrollX: number, scrollY: number): PanelIndexes;
    getRealScrollX: (scrollX: number, hRowScroll?: number) => number;
    protected calculateCornerBBox(): void;
    protected calculatePanelBBox: () => void;
    getRealWidth: () => number;
    getCellRange(): {
        start: number;
        end: number;
    };
    getRealHeight: () => number;
    clearAllGroup: () => void;
    scrollWithAnimation: (offsetConfig: OffsetConfig, duration?: number, cb?: () => void) => void;
    scrollImmediately: (offsetConfig: OffsetConfig) => void;
    startScroll: (newX: number, newY: number) => void;
    getRendererHeight: () => number;
    private getAdjustedRowScrollX;
    private getAdjustedScrollX;
    private getAdjustedScrollY;
    private getAdjustedScrollOffset;
    renderRowScrollBar: (rowScrollX: number) => void;
    getValidScrollBarOffset: (offset: number, maxOffset: number) => number;
    renderHScrollBar: (width: number, realWidth: number, scrollX: number) => void;
    private getScrollbarPosition;
    renderVScrollBar: (height: number, realHeight: number, scrollY: number) => void;
    getScrollBarOffset: (offset: number, scrollbar: ScrollBar) => number;
    isScrollOverThePanelArea: ({ layerX, layerY }: Partial<S2WheelEvent>) => boolean;
    isScrollOverTheCornerArea: ({ layerX, layerY }: Partial<S2WheelEvent>) => boolean;
    updateHorizontalRowScrollOffset: ({ offset, layerX, layerY }: {
        offset: any;
        layerX: any;
        layerY: any;
    }) => void;
    updateHorizontalScrollOffset: ({ offset, layerX, layerY }: {
        offset: any;
        layerX: any;
        layerY: any;
    }) => void;
    isScrollToLeft: (deltaX: number) => boolean;
    isScrollToRight: (deltaX: number) => boolean;
    isScrollToTop: (deltaY: number) => boolean;
    isScrollToBottom: (deltaY: number) => boolean;
    isVerticalScrollOverTheViewport: (deltaY: number) => boolean;
    isHorizontalScrollOverTheViewport: (deltaX: number) => boolean;
    /**
      在当前表格滚动分两种情况:
      1. 当前表格无滚动条: 无需阻止外部容器滚动
      2. 当前表格有滚动条:
        - 未滚动到顶部或底部: 当前表格滚动, 阻止外部容器滚动
        - 滚动到顶部或底部: 恢复外部容器滚动
    */
    isScrollOverTheViewport: (deltaX: number, deltaY: number, layerY: number) => boolean;
    cancelScrollFrame: () => boolean;
    clearScrollFrameIdOnMobile: () => void;
    onWheel: (event: S2WheelEvent) => void;
    protected clip(scrollX: number, scrollY: number): void;
    /**
     * Translate panelGroup, rowHeader, cornerHeader, columnHeader ect
     * according to new scroll offset
     * @param scrollX
     * @param scrollY
     * @param hRowScroll
     * @protected
     */
    protected translateRelatedGroups(scrollX: number, scrollY: number, hRowScroll: number): void;
    addCell: (cell: S2CellType<ViewMeta>) => void;
    realCellRender: (scrollX: number, scrollY: number) => void;
    /**
     * How long about the delay period, need be re-considered,
     * for now only delay, oppose to immediately
     * @private
     */
    debounceRenderCell: (scrollX: number, scrollY: number) => void;
    protected init(): void;
    protected renderBackground(): void;
    /**
     * Render all scrollbars, default horizontal scrollbar only control viewport
     * area(it means not contains row header)
     * 1. individual row scrollbar
     * 2. horizontal scroll bar(can control whether contains row header)
     * 3. vertical scroll bar
     */
    protected renderScrollBars(): void;
    /**
     * Render all headers in {@link #foregroundGroup}, contains:
     * 1. row header
     * 2. col header
     * 3. center frame
     * 4. corner header
     * 5. series number header
     */
    protected renderHeaders(): void;
    protected getRowHeader(): RowHeader;
    protected getColHeader(): ColHeader;
    protected getCornerHeader(): CornerHeader;
    protected getSeriesNumberHeader(): SeriesNumberHeader;
    protected getCenterFrame(): Frame;
    /**
     * When scroll behavior happened, only render one time in a period,
     * but render immediately in initiate
     * @param delay debounce render cell
     * @protected
     */
    protected dynamicRenderCell(delay?: boolean): void;
    protected onAfterScroll: import("lodash").DebouncedFunc<() => void>;
    protected saveInitColumnLeafNodes(columnNodes?: Node[]): void;
}
