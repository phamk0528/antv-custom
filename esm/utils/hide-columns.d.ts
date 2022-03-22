import { HiddenColumnsInfo } from "../common/interface/store";
import { SpreadSheet } from "../sheet-type";
import { Node } from "../facet/layout/node";
export declare const getHiddenColumnFieldKey: (field: string) => keyof Node;
/**
 * @name 获取需要隐藏的 field 转成对应的 Node
 */
export declare const getHiddenColumnNodes: (spreadsheet: SpreadSheet, hiddenColumnFields?: string[]) => Node[];
/**
 * @name 获取隐藏列兄弟节点
 * @description 获取当前隐藏列(兼容多选) 所对应为未隐藏的兄弟节点
 * @param hideColumns 经过分组的连续隐藏列
   [ 1, 2, 3, -, -, -, (7 √), 8, 9 ]
  [ 1, 2, 3, (4 √), - ]
 */
export declare const getHiddenColumnDisplaySiblingNode: (spreadsheet: SpreadSheet, hiddenColumnFields?: string[]) => HiddenColumnsInfo['displaySiblingNode'];
/**
 * @name 获取隐藏列组
 * @description 如果给定的隐藏列不是连续的, 比如原始列是 [1,2,3,4,5,6,7], 隐藏列是 [2,3,6], 那么其实在表格上需要显示两个展开按钮
   [[2,3],[6]]
 */
export declare const getHiddenColumnsThunkGroup: (columns: string[], hiddenColumnFields: string[]) => string[][];
/**
 * @name 隐藏指定列
 * @description 1. 通过分析组件隐藏, 2. 点击列头隐藏
   存储: 1.隐藏列所对应的兄弟节点 (显示展开按钮), 2.当前隐藏列 (点击展开按钮恢复隐藏)
   重置交互: 比如选中当前列, 显示高亮背景色, 隐藏后需要取消高亮
   钩子: 提供当前被隐藏的列, 和全量的隐藏组
 */
export declare const hideColumns: (spreadsheet: SpreadSheet, selectedColumnFields?: string[], forceRender?: boolean) => void;
/**
 * @name 获取配置的列头
 * @description 明细表: 配置的是 field,直接使用, 透视表: 需要将 field 转成布局之后的唯一id
 */
export declare const getColumns: (spreadsheet: SpreadSheet) => string[];
/**
 * @name 根据分组隐藏指定列
 * @description 根据配置的隐藏列自动分组, 批量隐藏
 */
export declare const hideColumnsByThunkGroup: (spreadsheet: SpreadSheet, hiddenColumnFields?: string[], forceRender?: boolean) => void;
export declare const isLastColumnAfterHidden: (spreadsheet: SpreadSheet, columnField: string) => boolean;
export declare const getValidDisplaySiblingNode: (displaySiblingNode: HiddenColumnsInfo['displaySiblingNode']) => Node;
export declare const getValidDisplaySiblingNodeId: (displaySiblingNode: HiddenColumnsInfo['displaySiblingNode']) => string;
export declare const isEqualDisplaySiblingNodeId: (displaySiblingNode: HiddenColumnsInfo['displaySiblingNode'], nodeId: string) => boolean;
