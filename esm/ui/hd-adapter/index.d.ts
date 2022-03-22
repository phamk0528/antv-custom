import type { SpreadSheet } from "../../sheet-type";
export declare class HdAdapter {
    private viewport;
    private devicePixelRatioMedia;
    private spreadsheet;
    constructor(spreadsheet: SpreadSheet);
    init: () => void;
    destroy: () => void;
    private initDevicePixelRatioListener;
    private removeDevicePixelRatioListener;
    private initDeviceZoomListener;
    private removeDeviceZoomListener;
    private renderByDevicePixelRatioChanged;
    private renderByDevicePixelRatio;
    private renderByZoomScale;
}
