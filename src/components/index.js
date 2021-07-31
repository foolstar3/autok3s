import Alert from './Alert'
import Button from './Button'
import {Collapse, CollapseItem} from './Collapse'
import ComboBox from './ComboBox'
import {Dropdown, DropdownMenu, DropdownMenuItem} from './Dropdown'
import Icon from './Icon'
import {PasswordInput, Input} from './Input'
import Loading from './Loading'
import Modal from './Modal'
import Notification from './Notification'
import Pagination from './Pagination'
import Progress from './Progress'
import { Radio, RadioButton, RadioGroup } from './Radio'
import {Select, Option} from './Select'
import { BaseTable, TableColumn, Table } from './Table'
import { Tabs, TabPane } from './Tabs'
import Tag from './Tag'
import Tooltip from './Tooltip'
import Upload from './Upload'

const components = [
  Alert,
  Button,
  Collapse,
  CollapseItem,
  ComboBox,
  Dropdown,
  DropdownMenu,
  DropdownMenuItem,
  Icon,
  PasswordInput,
  Input,
  Loading,
  Modal,
  Notification,
  Pagination,
  Progress,
  Radio,
  RadioButton,
  RadioGroup,
  Select,
  Option,
  BaseTable,
  TableColumn,
  Table,
  Tabs,
  TabPane,
  Tag,
  Tooltip,
  Upload
]

const install = (app) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  Alert,
  Button,
  Collapse,
  CollapseItem,
  ComboBox,
  Dropdown,
  DropdownMenu,
  DropdownMenuItem,
  Icon,
  PasswordInput,
  Input,
  Loading,
  Modal,
  Notification,
  Pagination,
  Progress,
  Radio,
  RadioButton,
  RadioGroup,
  Select,
  Option,
  BaseTable,
  TableColumn,
  Table,
  Tabs,
  TabPane,
  Tag,
  Tooltip,
  Upload
}
export default { install }