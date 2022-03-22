import { BaseEvent, BaseEventImplement } from '../../base-event';
/**
 * Row header click navigation interaction
 */
export declare class RowTextClick extends BaseEvent implements BaseEventImplement {
    bindEvents(): void;
    private bindRowCellClick;
    private getRowData;
    private getOriginalRowData;
    private getRowIndex;
}
