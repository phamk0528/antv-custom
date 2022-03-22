import { BaseEvent, BaseEventImplement } from "../../base-event";
export declare class RowColumnClick extends BaseEvent implements BaseEventImplement {
    private isMultiSelection;
    bindEvents(): void;
    private bindKeyboardDown;
    private bindKeyboardUp;
    private bindRowCellClick;
    private bindColCellClick;
    private handleRowColClick;
    private showTooltip;
    private getTooltipOperator;
    private bindTableColExpand;
    private getHideColumnField;
    /**
     * 隐藏选中的列
     * 每次点击存储两个信息
     * 1. [hiddenColumnFields]: 当前选中 (单/多选) 的 field, 对应 dataCfg 里面的 column
     *    用于点击展开按钮后还原, 区别于 options.hiddenColumnFields, 这里需要分段存储, 比如现在有两个隐藏的列
     *    [1,2, (3隐藏), 4, 5, (6隐藏), 7]
     *    展开按钮在 4, 7, 点击任意按钮, 应该只展开所对应的那组 : 4 => [3], 7 => [6]
     * 2. [displaySiblingNode]: 当前这一组的列隐藏后, 需要将展开按钮显示到对应的兄弟节点
     * 这样不用每次 render 的时候实时计算, 渲染列头单元格 直接取数据即可
     */
    hideSelectedColumns(): void;
    private handleExpandIconClick;
}
