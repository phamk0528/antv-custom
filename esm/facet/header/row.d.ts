import { S2Options } from '../../common/interface';
import { BaseHeader, BaseHeaderConfig } from './base';
export interface RowHeaderConfig extends BaseHeaderConfig {
    hierarchyType: S2Options['hierarchyType'];
    linkFields: string[];
    seriesNumberWidth: number;
}
/**
 * Row Header for SpreadSheet
 */
export declare class RowHeader extends BaseHeader<RowHeaderConfig> {
    private gm;
    constructor(cfg: RowHeaderConfig);
    destroy(): void;
    protected layout(): void;
    protected offset(): void;
    protected clip(): void;
}
