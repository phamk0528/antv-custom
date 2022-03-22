export declare enum InteractionName {
    DATA_CELL_CLICK = "dataCellClick",
    MERGED_CELLS_CLICK = "mergedCellsClick",
    ROW_COLUMN_CLICK = "rowColumnClick",
    ROW_TEXT_CLICK = "rowTextClick",
    HOVER = "hover",
    BRUSH_SELECTION = "brushSelection",
    COL_ROW_RESIZE = "rowColResize",
    DATA_CELL_MULTI_SELECTION = "dataCellMultiSelection",
    RANGE_SELECTION = "rangeSelection",
    SELECTED_CELL_MOVE = "selectedCellMove"
}
export declare enum InteractionStateName {
    ALL_SELECTED = "allSelected",
    SELECTED = "selected",
    UNSELECTED = "unselected",
    HOVER = "hover",
    HOVER_FOCUS = "hoverFocus",
    PREPARE_SELECT = "prepareSelect"
}
export declare enum CellTypes {
    DATA_CELL = "dataCell",
    HEADER_CELL = "headerCell",
    ROW_CELL = "rowCell",
    COL_CELL = "colCell",
    CORNER_CELL = "cornerCell",
    MERGED_CELL = "mergedCell"
}
export declare const HOVER_FOCUS_TIME = 800;
export declare const SHAPE_STYLE_MAP: {
    textOpacity: string;
    backgroundOpacity: string;
    backgroundColor: string;
    borderOpacity: string;
    borderColor: string;
    borderWidth: string;
    opacity: string;
};
export declare const SHAPE_ATTRS_MAP: {
    textShape: string[];
    linkFieldShape: string[];
    interactiveBgShape: string[];
    interactiveBorderShape: string[];
};
export declare const INTERACTION_STATE_INFO_KEY = "interactionStateInfo";
export declare enum InteractionBrushSelectionStage {
    CLICK = "click",
    UN_DRAGGED = "unDragged",
    DRAGGED = "dragged"
}
export declare enum InteractionKeyboardKey {
    SHIFT = "Shift",
    COPY = "c",
    ESC = "Escape",
    META = "Meta",
    CONTROL = "Control",
    ARROW_UP = "ArrowUp",
    ARROW_DOWN = "ArrowDown",
    ARROW_LEFT = "ArrowLeft",
    ARROW_RIGHT = "ArrowRight"
}
export declare enum SortMethodType {
    ASC = "ASC",
    DESC = "DESC"
}
export declare enum InterceptType {
    HOVER = "hover",
    CLICK = "click",
    BRUSH_SELECTION = "brushSelection",
    MULTI_SELECTION = "multiSelection",
    RESIZE = "resize"
}
export declare const BRUSH_AUTO_SCROLL_INITIAL_CONFIG: {
    x: {
        value: number;
        scroll: boolean;
    };
    y: {
        value: number;
        scroll: boolean;
    };
};
export declare enum ScrollbarPositionType {
    CONTENT = "content",
    CANVAS = "canvas"
}
export declare enum ScrollDirection {
    LEADING = "leading",
    TRAILING = "trailing"
}
