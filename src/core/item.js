import { warning } from '../utils'
import store from './store'

export default {
  name: 'FormRenderItem',

  render(h) {
    const { item, $FormRenderUI } = this
    const Item = $FormRenderUI.item || {}
    const Widget = $FormRenderUI[item.component] || {
      component: item.component
    }

    return (
      <Item.component label={item.label}>
        {item.status === 'preview' ? (
          <span style="color: #606266;">
            {Widget.option && item.options
              ? item.options.map(
                  i => i.value === store.value[item.model] && i.label
                )
              : store.value[item.model]}
          </span>
        ) : (
          <Widget.component
            {...{
              props: Object.assign({}, Widget.props, item.props)
            }}
            onInput={value => store.updateValue({ [item.model]: value })}
            value={store.value[item.model]}
            disabled={item.status === 'disabled'}
          >
            {Array.isArray(item.options) &&
              Widget.option &&
              item.options.map(opt => {
                return (
                  <Widget.option.component
                    label={opt.label || opt.value}
                    value={opt.value}
                  >
                    {opt.label}
                  </Widget.option.component>
                )
              })}
          </Widget.component>
        )}
      </Item.component>
    )
  },

  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },

  mounted() {
    const { item } = this

    if (!item.model) {
      warning('Missing required prop: `model`', { ...item })
      return
    }

    if (item.value) {
      store.updateValue({ [item.model]: item.value })
    }
  }
}
