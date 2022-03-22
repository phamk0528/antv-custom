import { CustomTreeHeaderParams } from "./interface";
/**
 * 自定义🌲结构设计原则：
 * 1、渲染的节点全部跟着定义的数据结构走，如果需要结构变（数据挂父节点）等场景，建议直接改
 * 传入的customTreeItems配置
 * 2、没有总计小计的概念，如果有类似的，建议也是直接改customTreeItems配置
 * 3、是否展开和收起完全由 customTreeItem.collapsed 来控制（默认都展开）
 * @param params
 */
export declare const buildRowCustomTreeHierarchy: (params: CustomTreeHeaderParams) => void;
