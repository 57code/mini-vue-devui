import type { PropType, ExtractPropTypes } from "vue";

export interface TreeItem {
  label: string;
  children?: TreeData;
  disableToggle?: boolean;
  disabled?: boolean;
  checked?: boolean, // 是否勾选
  [key: string]: any;
}

export type TreeData = Array<TreeItem>;

export const treeProps = {
  data: {
    type: Array as PropType<TreeData>,
    default: () => [],
  },
  // 新增
  checkable: {
    type: Boolean,
    default: false
  },
} as const;

export type TreeProps = ExtractPropTypes<typeof treeProps>;
