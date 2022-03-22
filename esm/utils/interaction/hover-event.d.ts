import { ColCell, RowCell } from "../../cell";
/**
 * @description Return all the row cells or column cells which are needed to be highlighted.
 * @param id rowId or colId
 * @param headerCells all the rowHeader cells or all the colHeader cells
 * @param isRowInHierarchyTreeType  The tree mode will only highlight the leaf nodes at the head of the row
 */
export declare const getActiveHoverRowColCells: (id: string, headerCells: ColCell[] | RowCell[], isRowInHierarchyTreeType?: boolean) => (ColCell | RowCell)[];
