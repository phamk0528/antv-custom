import { BBox } from '@antv/g-canvas';
import { BaseFacet } from "../base-facet";
import { LayoutResult } from "../../common/interface";
import { SpreadSheet } from "../../sheet-type";
export declare abstract class BaseBBox implements BBox {
    protected spreadsheet: SpreadSheet;
    protected facet: BaseFacet;
    protected layoutResult: LayoutResult;
    x: number;
    y: number;
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
    width: number;
    height: number;
    originalWidth: number;
    originalHeight: number;
    viewportHeight: number;
    viewportWidth: number;
    constructor(facet: BaseFacet, autoCalculateBBoxWhenCreated?: boolean);
    abstract calculateBBox(): void;
}
