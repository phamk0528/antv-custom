import { Conditions } from './condition';
import { FilterDataItemCallback, HeaderActionIcon, CustomSVGIcon } from './basic';
import { Tooltip } from './tooltip';
import { InteractionOptions } from './interaction';
import { ColHeaderConfig } from "../../facet/header/col";
import { RowHeaderConfig } from "../../facet/header/row";
import { CornerHeaderConfig } from "../../facet/header/corner";
import { CellCallback, CornerHeaderCallback, DataCellCallback, FrameCallback, MappingDataItemCallback, MergedCellInfo, Pagination, Style, Totals } from "./basic";
import { LayoutArrange, LayoutCoordinate, LayoutDataPosition, LayoutHierarchy } from "./hooks";
import { BaseDataSet } from "../../data-set";
import { SpreadSheet } from "../../sheet-type";
export interface S2BasicOptions<T = Element | string> {
    readonly width?: number;
    readonly height?: number;
    readonly debug?: boolean;
    readonly hierarchyType?: 'grid' | 'tree' | 'customTree';
    readonly conditions?: Conditions;
    readonly totals?: Totals;
    readonly tooltip?: Tooltip<T>;
    readonly interaction?: InteractionOptions;
    readonly pagination?: Pagination;
    readonly frozenRowHeader?: boolean;
    readonly showSeriesNumber?: boolean;
    readonly showDefaultHeaderActionIcon?: boolean;
    readonly headerActionIcons?: HeaderActionIcon[];
    readonly customSVGIcons?: CustomSVGIcon[];
    readonly style?: Partial<Style>;
    readonly hierarchyCollapse?: boolean;
    readonly hdAdapter?: boolean;
    readonly mergedCellsInfo?: MergedCellInfo[][];
    readonly placeholder?: string;
    readonly cornerText?: string;
    readonly supportCSSTransform?: boolean;
    readonly devicePixelRatio?: number;
    /** ***********CUSTOM CELL/HEADER HOOKS**************** */
    readonly dataCell?: DataCellCallback;
    readonly cornerCell?: CellCallback<CornerHeaderConfig>;
    readonly rowCell?: CellCallback<RowHeaderConfig>;
    readonly colCell?: CellCallback<ColHeaderConfig>;
    readonly frame?: FrameCallback;
    readonly cornerHeader?: CornerHeaderCallback;
    /** ***********CUSTOM LIFECYCLE HOOKS**************** */
    layoutHierarchy?: LayoutHierarchy;
    layoutArrange?: LayoutArrange;
    layoutCoordinate?: LayoutCoordinate;
    layoutDataPosition?: LayoutDataPosition;
    /** ***********CUSTOM DATA CELL RENDER HOOKS**************** */
    filterDisplayDataItem?: FilterDataItemCallback;
    mappingDisplayDataItem?: MappingDataItemCallback;
}
export interface S2TableSheetOptions {
    readonly frozenRowCount?: number;
    readonly frozenColCount?: number;
    readonly frozenTrailingRowCount?: number;
    readonly frozenTrailingColCount?: number;
}
export interface S2PivotSheetOptions {
}
export interface S2Options<T = Element | string> extends S2BasicOptions<T>, S2TableSheetOptions, S2PivotSheetOptions {
    readonly dataSet?: (spreadsheet: SpreadSheet) => BaseDataSet;
}
