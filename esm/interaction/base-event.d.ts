import { SpreadSheet } from "../sheet-type";
export interface BaseEventImplement {
    bindEvents: () => void;
}
export declare abstract class BaseEvent {
    spreadsheet: SpreadSheet;
    constructor(spreadsheet: SpreadSheet);
    abstract bindEvents(): void;
}
