import { BaseEvent, BaseEventImplement } from './base-interaction';
export declare class DataCellMultiSelection extends BaseEvent implements BaseEventImplement {
    private isMultiSelection;
    bindEvents(): void;
    private bindKeyboardDown;
    private bindKeyboardUp;
    private getSelectedCells;
    private bindDataCellClick;
}
