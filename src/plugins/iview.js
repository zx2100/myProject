import Vue from 'vue'
import { Row, Col, Icon,MenuItem,Layout, Menu,Content, Sider, Header,Avatar,DropdownItem, Dropdown,
  DropdownMenu, Badge, Tabs, TabPane,Drawer, Button, Submenu, Form,  FormItem, Input,
  Message,Card,Switch,ButtonGroup,Collapse,Panel}  from 'view-design'

// console.log("导入Iview")
Vue.prototype.$Message = Message
// Vue.use(Message)
// Vue.use(Message)
Vue.component("Switch1", Switch)
Vue.component("ButtonGroup", ButtonGroup)
Vue.component("Collapse", Collapse)
Vue.component("Panel", Panel)
Vue.component("Col", Col)
Vue.component("Card", Card)
Vue.component("Form", Form)
Vue.component("FormItem", FormItem)
Vue.component("Input", Input)
Vue.component("Row", Row)
Vue.component("Icon", Icon)
Vue.component("MenuItem", MenuItem)
Vue.component("Layout", Layout)
Vue.component("Menu", Menu)
Vue.component("Avatar", Avatar)
Vue.component("Submenu", Submenu)
Vue.component("Sider", Sider)
Vue.component("Content", Content)
Vue.component("Header", Header)
Vue.component("DropdownItem", DropdownItem)
Vue.component("Dropdown", Dropdown)
Vue.component("Tabs", Tabs)
Vue.component("TabPane", TabPane)
Vue.component("Drawer", Drawer)
Vue.component("Badge", Badge)
Vue.component("DropdownMenu", DropdownMenu)
Vue.component("Button", Button)

import 'view-design/dist/styles/iview.css'
