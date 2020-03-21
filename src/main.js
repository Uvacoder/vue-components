import * as components from './export/components'

export { getNavHeight } from './components/Nav'
export { default as ScrollToAnchor } from './components/ScrollToAnchor'

const Plugin = {
  install(Vue) {
    Object.keys(components).forEach(key => Vue.component(key, components[key]))
  }
}

function autoInstall() {
  let GlobalVue
  if (typeof window !== 'undefined') GlobalVue = window.Vue
  else if (typeof global !== 'undefined') GlobalVue = global.Vue
  if (GlobalVue) GlobalVue.use(Plugin)
}

autoInstall()

export default Plugin
