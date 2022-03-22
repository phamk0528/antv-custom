import { BaseEvent, BaseEventImplement } from './base-interaction';
export declare class RangeSelection extends BaseEvent implements BaseEventImplement {
    private isRangeSelection;
    bindEvents(): void;
    private bindKeyboardDown;
    private bindKeyboardUp;
    private bindColCellClick;
    private bindDataCellClick;
    private handleColClick;
    private handleSeriesNumberRowSelected;
    private handleRowSelected;
    private handleColSelected;
}
