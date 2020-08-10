export const UserInfo = {
  name: 'Clover',
  userId: '19900008888'
}


export const Menus = [
  {
    id: '1',
    name: '业务管理中心',
    menus: [{
      id: '10',
      name: '保障计划维护',
      menus: [{
        id: '10-add',
        name: '创建保障计划',
        route: '/page10/add'
      }, {
        id: '10-list',
        name: '保障计划列表',
        route: '/page10'
      }]
    }, {
      id: '14',
      name: '提额任务管理',
      menus: [{
        id: '14-add',
        name: '创建提额任务',
        route: '/page14/add'
      }, {
        id: '14-list',
        name: '提额任务列表',
        route: '/page14'
      }]
    }]
  }, {
    id: "2",
    name: '交易中心',
    menus: [{
      id: '9',
      name: '交易统计',
      route: ''
    }, {
      id: '16',
      name: '订单管理',
      route: ''
    }]
  }, {
    id: '3',
    name: 'App配置中心',
    menus: [{
      id: '11',
      name: '通知管理',
      route: ''
    }, {
      id: '14',
      name: '通知管理',
      route: ''
    }, {
      id: '15',
      name: '帮助管理',
      route: ''
    }, {
      id: '12',
      name: '保障计划产品配置',
      route: ''
    }]
  }, {
    id: '4',
    name: '设置中心',
    menus: [{
      id: '8',
      name: '个人中心',
      route: ''
    }, {
      id: '17',
      name: '权限管理',
      route: ''
    }]
  }
]