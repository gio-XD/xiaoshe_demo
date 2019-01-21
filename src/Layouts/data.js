
// module.exports=[
//      <Menu.Item key="index" style={{ fontSize: 14 }}>首页</Menu.Item>,
//      <Menu.Item key="main" style={{ fontSize: 14 }}>基础数据</Menu.Item>,
//      <Menu.Item key="schoolBefore" style={{ fontSize: 14 }}>前期项目管理</Menu.Item>,
//      <Menu.Item key="apply" style={{ fontSize: 14 }}>修缮项目申请</Menu.Item>,
//      <Menu.Item key="examine" style={{ fontSize: 14 }}>修缮项目审核</Menu.Item>,
//      <Menu.Item key="project" style={{ fontSize: 14 }}>修缮项目管理</Menu.Item>,
// ]

module.exports=[
  {
    name:'首页',
    url:'/',
    key:'index',
  },
  {
    name:'基础数据',
    url:'/main/:0',
    key:'main',
  },
  {
    name:'前期项目管理',
    url:'/schoolBefore',
    key:'schoolBefore',
  },
  {
    name:'修缮项目申请',
    url:'/apply',
    key:'apply',
  },
  {
    name:'修缮项目审核',
    url:'/examine',
    key:'examine',
  },
  {
    name:'修缮项目管理',
    url:'/project',
    key:'project',
  },
]
