import EE from '@antv/event-emitter';
import { Canvas, Event as CanvasEvent, IGroup } from '@antv/g-canvas';
import { LayoutWidthType, OffsetConfig, Pagination, S2CellType, S2DataConfig, S2MountContainer, S2Options, SpreadSheetFacetCfg, ThemeCfg, TooltipContentType, TooltipData, TooltipOptions, TooltipShowOptions, Totals } from "../common/interface";
import { EmitterType } from "../common/interface/emitter";
import { Store } from "../common/store";
import { BaseDataSet } from "../data-set";
import { BaseFacet } from "../facet";
import { Node } from "../facet/layout/node";
import { S2Theme } from "../common/interface";
import { RootInteraction } from "../interaction/root";
import { HdAdapter } from "../ui/hd-adapter";
import { BaseTooltip } from "../ui/tooltip";
export declare abstract class SpreadSheet extends EE {
    theme: S2Theme;
    store: Store;
    dataCfg: S2DataConfig;
    options: S2Options;
    /**
     * processed data structure, include {@link Fields}, {@link Meta}
     * {@link Data}, {@link SortParams}
     */
    dataSet: BaseDataSet;
    /**
     * Facet: determine how to render headers/cell
     */
    facet: BaseFacet;
    tooltip: BaseTooltip;
    container: Canvas;
    backgroundGroup: IGroup;
    panelGroup: IGroup;
    panelScrollGroup: IGroup;
    frozenRowGroup: IGroup;
    frozenColGroup: IGroup;
    frozenTrailingRowGroup: IGroup;
    frozenTrailingColGroup: IGroup;
    frozenTopGroup: IGroup;
    frozenBottomGroup: IGroup;
    foregroundGroup: IGroup;
    interaction: RootInteraction;
    hdAdapter: HdAdapter;
    private untypedOn;
    private untypedEmit;
    on: <K extends keyof EmitterType>(event: K, listener: EmitterType[K]) => this;
    emit: <K extends keyof EmitterType>(event: K, ...args: Parameters<EmitterType[K]>) => boolean;
    constructor(dom: S2MountContainer, dataCfg: S2DataConfig, options: S2Options);
    private setDebug;
    private initTheme;
    private getMountContainer;
    private initHdAdapter;
    private initInteraction;
    private initTooltip;
    private renderTooltip;
    protected abstract bindEvents(): void;
    abstract getDataSet(options: S2Options): BaseDataSet;
    /**
     * Check if is pivot mode
     */
    abstract isPivotMode(): boolean;
    /**
     * tree type must be in strategy mode
     */
    abstract isHierarchyTreeType(): boolean;
    /**
     * Check whether scroll contains row header
     * For now contains row header in ListSheet mode by default
     */
    abstract isScrollContainsRowHeader(): boolean;
    /**
     * Scroll Freeze Row Header
     */
    abstract isFrozenRowHeader(): boolean;
    /**
     * Check if is pivot mode
     */
    abstract isTableMode(): boolean;
    /**
     * Check if the value is in the columns
     */
    abstract isValueInCols(): boolean;
    /**
     * 避免每次新增、变更dataSet和options时，生成SpreadSheetFacetCfg
     * 要多出定义匹配的问题，直接按需&部分拆分options/dataSet合并为facetCfg
     */
    protected abstract getFacetCfgFromDataSetAndOptions(): SpreadSheetFacetCfg;
    protected abstract buildFacet(): void;
    abstract clearDrillDownData(rowNodeId?: string, preventRender?: boolean): void;
    abstract handleGroupSort(event: CanvasEvent, meta: Node): void;
    showTooltip<T = TooltipContentType>(showOptions: TooltipShowOptions<T>): void;
    showTooltipWithInfo(event: CanvasEvent | MouseEvent, data: TooltipData[], options?: TooltipOptions): void;
    hideTooltip(): void;
    destroyTooltip(): void;
    registerIcons(): void;
    /**
     * Update data config and keep pre-sort operations
     * Group sort params kept in {@see store} and
     * Priority: group sort > advanced sort
     * @param dataCfg
     */
    setDataCfg(dataCfg: S2DataConfig): void;
    setOptions(options: Partial<S2Options>): void;
    render(reloadData?: boolean, reBuildDataSet?: boolean): void;
    destroy(): void;
    /**
     * Update theme config, if the {@param type} is exists, re-use it,
     * otherwise create new one {@see theme}
     * @param type string
     * @param theme
     */
    setThemeCfg(themeCfg: ThemeCfg): void;
    /**
     * Update pagination config which store in {@see options}
     * @param pagination
     */
    updatePagination(pagination: Pagination): void;
    /**
     * 获取当前表格实际内容高度
     */
    getContentHeight(): number;
    /**
     * @param width
     * @param height
     * @deprecated 该方法将会在2.0被移除, 请使用 changeSheetSize 代替
     */
    changeSize(width?: number, height?: number): void;
    /**
     * 修改表格画布大小，不用重新加载数据
     * @param width
     * @param height
     */
    changeSheetSize(width?: number, height?: number): void;
    getLayoutWidthType(): LayoutWidthType;
    getRowNodes(level?: number): Node[];
    /**
     * get columnNode in levels,
     * @param level -1 = get all
     */
    getColumnNodes(level?: number): Node[];
    getColumnLeafNodes(): Node[];
    /**
     * Update scroll's offset, the value can be undefined,
     * indicate not update current value
     * @param offsetConfig
     * default offsetX(horizontal scroll need animation)
     * but offsetY(vertical scroll don't need animation)
     */
    updateScrollOffset(offsetConfig: OffsetConfig): void;
    getTooltipDataItemMappingCallback(): import("../common/interface").MappingDataItemCallback;
    getCell<T extends S2CellType = S2CellType>(target: CanvasEvent['target']): T;
    getCellType(target: CanvasEvent['target']): import("../common/constant").CellTypes;
    /**
     * get total's config by dimension id
     * @param dimension unique dimension id
     */
    getTotalsConfig(dimension: string): Partial<Totals['row']>;
    /**
     * Create all related groups, contains:
     * 1. container -- base canvas group
     * 2. backgroundGroup
     * 3. panelGroup -- main facet group belongs to
     * 4. foregroundGroup
     * @param dom
     * @private
     */
    protected initGroups(dom: S2MountContainer): void;
    protected updateContainerStyle(): void;
    protected initPanelGroupChildren(): void;
    getInitColumnLeafNodes(): Node[];
    private initHiddenColumnsDetail;
    private clearCanvasEvent;
}
