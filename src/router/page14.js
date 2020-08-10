import page14 from '../page/14/list'
import page14View from '../page/14/view'
import page14Update from '../page/14/update'
import page14Add from '../page/14/add1'
import page14Add2 from '../page/14/add2'

export default [{
  path: '/page14',
  component: page14,
  children: [{
    path: 'view',
    component: page14View
  }, {
    path: 'update',
    component: page14Update
  }]
}, {
  path: '/page14/add',
  component: page14Add,
  children: [{
    path: 'add2',
    component: page14Add2
  }]
}]