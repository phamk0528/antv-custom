import { BaseEvent, BaseEventImplement } from "../../base-event";
export declare class DataCellClick extends BaseEvent implements BaseEventImplement {
    bindEvents(): void;
    private bindDataCellClick;
    private getTooltipOperator;
    private showTooltip;
    private emitLinkFieldClickEvent;
}
