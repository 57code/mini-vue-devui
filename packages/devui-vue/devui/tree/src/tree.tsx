import { defineComponent, toRefs } from 'vue'
import { treeProps, TreeProps, TreeData, TreeItem } from './tree-types'
import IconOpen from './components/icon-open'
import IconClose from './components/icon-close'
import useToggle from './composables/use-toggle'
import './tree.scss'

export default defineComponent({
  name: 'DTree',
  props: treeProps,
  emits: [],
  setup(props: TreeProps, ctx) {
    const { data } = toRefs(props)
    const { openedData, toggle } = useToggle(data.value)

    // 增加缩进的展位元素
    const Indent = () => {
      return <span style="display: inline-block; width: 16px; height: 16px;"></span>
    }

    const renderNode = (item: TreeItem) => {
      return (
        <div
          class={['devui-tree-node', item.open && 'devui-tree-node__open']}
          style={{ paddingLeft: `${24 * (item.level - 1)}px` }}
        >
          <div class="devui-tree-node__content">
            <div class="devui-tree-node__content--value-wrapper">
              {
                item.children
                  ? item.open
                    ? <IconOpen class="mr-xs" onClick={() => toggle(item)} /> // 给节点绑定点击事件
                    : <IconClose class="mr-xs" onClick={() => toggle(item)} /> // 给节点绑定点击事件
                  : <Indent />
              }
              <span class="devui-tree-node__title">{item.label}</span>
            </div>
          </div>
        </div>
      )
    }

    return () => {
      return (
        <div class="devui-tree">
          {openedData.value.map((item: TreeItem) => renderNode(item))}
        </div>
      )
    }
  }
})

