import { BaseEvent, BaseEventImplement } from '../base-event';
import { ViewMeta } from "../../common/interface";
/**
 * @description Hover event for data cells, row cells and col cells
 */
export declare class HoverEvent extends BaseEvent implements BaseEventImplement {
    bindEvents(): void;
    updateRowColCells(meta: ViewMeta): void;
    /**
     * @description change the data cell state from hover to hover focus
     * @param cell
     * @param event
     * @param meta
     */
    private changeStateToHoverFocus;
    /**
     * @description handle the row or column header hover state
     * @param event
     */
    private handleHeaderHover;
    private getCellInfo;
    bindDataCellHover(): void;
    bindRowCellHover(): void;
    bindColCellHover(): void;
}
