// app/controller/news.js
const Controller = require('egg').Controller;

class NewsController extends Controller {
  async cache() {
    const dataList = {
      projectSchema: {
        version: '1.0.0',
        componentsMap: [
          { devMode: 'lowCode', componentName: 'Page' },
          {
            package: '@alilc/antd-lowcode-materials',
            version: '1.1.1',
            exportName: 'Button',
            main: '',
            destructuring: true,
            componentName: 'Button',
          },
          {
            package: '@seada/antd-materials',
            version: '1.0.0-rc.26',
            exportName: 'ProPopconfirm',
            main: '',
            destructuring: true,
            subName: '',
            componentName: 'ProPopconfirm',
          },
          {
            package: '@alilc/antd-lowcode-materials',
            version: '1.1.1',
            exportName: 'Icon',
            main: '',
            destructuring: true,
            componentName: 'Icon',
          },
          {
            package: '@seada/antd-materials',
            version: '1.0.0-rc.26',
            exportName: 'ProTable',
            main: '',
            destructuring: true,
            subName: '',
            componentName: 'ProTable',
          },
        ],
        componentsTree: [
          {
            componentName: 'Page',
            id: 'node_dockcviv8fo1',
            props: { ref: 'outerView', style: { height: '100%' } },
            fileName: '/',
            dataSource: {
              list: [
                {
                  type: 'fetch',
                  isInit: true,
                  options: {
                    params: {},
                    method: 'GET',
                    isCors: true,
                    timeout: 5000,
                    headers: {},
                    uri: 'mock/info.json',
                  },
                  id: 'info',
                },
              ],
            },
            state: {
              text: { type: 'JSExpression', value: '"outer"' },
              isShowDialog: { type: 'JSExpression', value: 'false' },
            },
            css: 'body {\n  font-size: 12px;\n}\n\n.button {\n  width: 100px;\n  color: #ff00ff\n}',
            lifeCycles: {
              componentDidMount: {
                type: 'JSFunction',
                value:
                  "function componentDidMount() {\n  console.log('did mount');\n}",
              },
              componentWillUnmount: {
                type: 'JSFunction',
                value:
                  "function componentWillUnmount() {\n  console.log('will unmount');\n}",
              },
            },
            methods: {
              testFunc: {
                type: 'JSFunction',
                value: "function testFunc() {\n  console.log('test func');\n}",
              },
              onClick: {
                type: 'JSFunction',
                value:
                  'function onClick() {\n  this.setState({\n    isShowDialog: true\n  });\n}',
              },
              closeDialog: {
                type: 'JSFunction',
                value:
                  'function closeDialog() {\n  this.setState({\n    isShowDialog: false\n  });\n}',
              },
            },
            originCode:
              'class LowcodeComponent extends Component {\n  state = {\n    "text": "outer",\n    "isShowDialog": false\n  }\n  componentDidMount() {\n    console.log(\'did mount\');\n  }\n  componentWillUnmount() {\n    console.log(\'will unmount\');\n  }\n  testFunc() {\n    console.log(\'test func\');\n  }\n  onClick() {\n    this.setState({\n      isShowDialog: true\n    })\n  }\n  closeDialog() {\n    this.setState({\n      isShowDialog: false\n    })\n  }\n}',
            hidden: false,
            title: '',
            isLocked: false,
            condition: true,
            conditionGroup: '',
            children: [
              {
                componentName: 'ProTable',
                id: 'node_oclglyzfv21',
                props: {
                  cardBordered: true,
                  dataSource: [
                    {
                      id: '1',
                      name: '肖战',
                      age: 30,
                      avatar:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Xiao_Zhan_at_the_Weibo_Night_Ceremony_January_11_2020.jpg/1280px-Xiao_Zhan_at_the_Weibo_Night_Ceremony_January_11_2020.jpg',
                      link: 'https://en.wikipedia.org/wiki/Xiao_Zhan',
                      loan: 700000,
                      trade_progress: 17,
                      address: '西湖区湖底公园1号',
                      create_time: '2022-04-21 21:00',
                      status: 'close',
                    },
                    {
                      id: '2',
                      name: '王一博',
                      age: 28,
                      avatar:
                        'https://upload.wikimedia.org/wikipedia/commons/9/9a/%E7%8E%8B%E4%B8%80%E5%8D%9A.jpg',
                      link: 'https://en.wikipedia.org/wiki/Wang_Yibo',
                      loan: 600000,
                      trade_progress: 36,
                      address: '滨江区网商路699号',
                      create_time: '2022-04-21 22:00',
                      status: 'running',
                    },
                  ],
                  columns: [
                    { title: '姓名', dataIndex: 'name', valueType: 'text' },
                    { title: '年龄', dataIndex: 'age', valueType: 'digit' },
                    { title: '头像', dataIndex: 'avatar', valueType: 'avatar' },
                    {
                      title: '状态',
                      dataIndex: 'status',
                      renderTag: true,
                      valueEnum: {
                        all: { text: '全部', status: 'Default' },
                        close: { text: '关闭', status: 'Default' },
                        running: { text: '运行中', status: 'Processing' },
                        online: { text: '已上线', status: 'Success' },
                        error: { text: '异常', status: 'Error' },
                      },
                    },
                    {
                      title: '贷款金额',
                      dataIndex: 'loan',
                      valueType: 'money',
                    },
                    {
                      title: '交易进度',
                      dataIndex: 'trade_progress',
                      valueType: 'progress',
                    },
                    {
                      title: '个人简介',
                      dataIndex: 'link',
                      valueType: 'link',
                      copyable: true,
                    },
                    { title: '地址', dataIndex: 'address', valueType: 'tag' },
                    {
                      title: '创建时间',
                      dataIndex: 'create_time',
                      valueType: 'dateTime',
                    },
                    {
                      title: '操作',
                      dataIndex: 'options',
                      valueType: 'option',
                      align: 'left',
                      fixed: '',
                      render: {
                        type: 'JSSlot',
                        params: ['text', 'record', 'index'],
                        value: [
                          {
                            componentName: 'Button',
                            id: 'node_oclglyzfv2c',
                            props: {
                              type: 'link',
                              children: '编辑',
                              htmlType: 'button',
                              size: 'small',
                              shape: 'default',
                              block: false,
                              danger: false,
                              ghost: false,
                              disabled: false,
                              icon: '',
                              __component_name: 'Button',
                            },
                            hidden: false,
                            title: '',
                            isLocked: false,
                            condition: true,
                            conditionGroup: '',
                          },
                          {
                            componentName: 'ProPopconfirm',
                            id: 'node_oclglyzfv2d',
                            props: {
                              title: '确定删除?',
                              okType: 'primary',
                              okText: '确定',
                              cancelText: '取消',
                              __component_name: 'ProPopconfirm',
                            },
                            hidden: false,
                            title: '',
                            isLocked: false,
                            condition: true,
                            conditionGroup: '',
                            children: [
                              {
                                componentName: 'Button',
                                id: 'node_oclglyzfv2e',
                                props: {
                                  children: '删除',
                                  htmlType: 'button',
                                  type: 'link',
                                  size: 'small',
                                  shape: 'default',
                                  block: false,
                                  danger: true,
                                  ghost: false,
                                  disabled: false,
                                  icon: '',
                                  __component_name: 'Button',
                                },
                                hidden: false,
                                title: '',
                                isLocked: false,
                                condition: true,
                                conditionGroup: '',
                              },
                            ],
                          },
                        ],
                        id: 'node_oclglyzfv2b',
                      },
                    },
                  ],
                  rowKey: 'id',
                  pagination: {
                    defaultPageSize: 10,
                    showSizeChanger: false,
                    showQuickJumper: false,
                    simple: false,
                    size: 'default',
                  },
                  search: {
                    defaultCollapsed: false,
                    resetText: '',
                    searchText: '',
                    labelWidth: 'auto',
                  },
                  toolBarRender: {
                    type: 'JSSlot',
                    params: ['currentPageData'],
                    value: [
                      {
                        componentName: 'Button',
                        id: 'node_oclglyzfv2f',
                        props: {
                          type: 'primary',
                          children: '新增',
                          htmlType: 'button',
                          size: 'middle',
                          shape: 'default',
                          icon: {
                            type: 'JSSlot',
                            value: [
                              {
                                componentName: 'Icon',
                                id: 'node_oclglyzfv2i',
                                props: {
                                  type: 'PlusOutlined',
                                  size: 16,
                                  rotate: 0,
                                  spin: false,
                                  __component_name: 'Icon',
                                },
                                hidden: false,
                                title: '',
                                isLocked: false,
                                condition: true,
                                conditionGroup: '',
                              },
                            ],
                            id: 'node_oclglyzfv2g',
                          },
                          block: false,
                          danger: false,
                          ghost: false,
                          disabled: false,
                          __component_name: 'Button',
                        },
                        hidden: false,
                        title: '',
                        isLocked: false,
                        condition: true,
                        conditionGroup: '',
                      },
                    ],
                    id: 'node_oclglyzfv26',
                  },
                  intl: 'zhCNIntl',
                  __component_name: 'ProTable',
                  ref: 'pro_table_h6ln2xtcyqr',
                  manualRequest: false,
                  showHeader: true,
                  size: 'default',
                  tableLayout: '',
                  scroll: { scrollToFirstRowOnChange: true },
                  rowSelection: false,
                  dateFormatter: 'string',
                },
                hidden: false,
                title: '',
                isLocked: false,
                condition: true,
                conditionGroup: '',
              },
            ],
          },
        ],
        i18n: {},
      },
      packages: [
        {
          package: 'moment',
          version: '2.24.0',
          urls: ['https://g.alicdn.com/mylib/moment/2.24.0/min/moment.min.js'],
          library: 'moment',
        },
        {
          package: 'lodash',
          library: '_',
          urls: ['https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js'],
        },
        {
          package: 'iconfont-icons',
          urls: '//at.alicdn.com/t/font_2369445_ukrtsovd92r.js',
        },
        {
          package: '@ant-design/icons',
          version: '4.7.0',
          urls: [
            '//g.alicdn.com/code/npm/@ali/ant-design-icons-cdn/4.5.0/index.umd.min.js',
          ],
          library: 'icons',
        },
        {
          package: 'antd',
          version: '4.23.0',
          urls: [
            '//g.alicdn.com/code/lib/antd/4.23.0/antd.min.js',
            '//g.alicdn.com/code/lib/antd/4.23.0/antd.min.css',
          ],
          library: 'antd',
        },
        {
          title: 'fusion组件库',
          package: '@alifd/next',
          version: '1.26.4',
          urls: [
            'https://g.alicdn.com/code/lib/alifd__next/1.26.4/next.min.css',
            'https://g.alicdn.com/code/lib/alifd__next/1.26.4/next-with-locales.min.js',
          ],
          library: 'Next',
        },
        {
          package: '@alilc/antd-lowcode-materials',
          version: '1.1.1',
          library: 'AntdLowcode',
          urls: [
            'https://alifd.alicdn.com/npm/@alilc/antd-lowcode-materials@1.1.1/build/lowcode/view.js',
            'https://alifd.alicdn.com/npm/@alilc/antd-lowcode-materials@1.1.1/build/lowcode/view.css',
          ],
          editUrls: [
            'https://alifd.alicdn.com/npm/@alilc/antd-lowcode-materials@1.1.1/build/lowcode/view.js',
            'https://alifd.alicdn.com/npm/@alilc/antd-lowcode-materials@1.1.1/build/lowcode/view.css',
          ],
        },
        {
          package: '@seada/antd-materials',
          version: '1.0.0-rc.27',
          library: 'SeadaAntdMaterials',
          urls: [
            'https://unpkg.com/@seada/antd-materials@1.0.0-rc.27/build/lowcode/view.js',
            'https://unpkg.com/@seada/antd-materials@1.0.0-rc.27/build/lowcode/view.css',
          ],
          editUrls: [
            'https://unpkg.com/@seada/antd-materials@1.0.0-rc.27/build/lowcode/view.js',
            'https://unpkg.com/@seada/antd-materials@1.0.0-rc.27/build/lowcode/view.css',
          ],
        },
        {
          package: '@seada/formily-materials',
          version: '1.0.0-rc.27',
          library: 'SeadaFormilyMaterials',
          urls: [
            'https://unpkg.com/@seada/formily-materials@1.0.0-rc.27/build/lowcode/view.js',
            'https://unpkg.com/@seada/formily-materials@1.0.0-rc.27/build/lowcode/view.css',
          ],
          editUrls: [
            'https://unpkg.com/@seada/formily-materials@1.0.0-rc.27/build/lowcode/view.js',
            'https://unpkg.com/@seada/formily-materials@1.0.0-rc.27/build/lowcode/view.css',
          ],
        },
      ],
    };
    this.ctx.response.headers['cess-Control-Allow-Origin'] = '*';
    this.ctx.body = { code: 0, dataList };
  }
}

module.exports = NewsController;
