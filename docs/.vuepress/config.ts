import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  bundler: viteBundler(),

  lang: 'zh-CN',
  title: 'NJU SICP 生存手册',
  description: '写给南大计科萌新的 SICP 生存手册',

  head: [
    ['link', { rel: 'icon', href: '/icon.svg' }] // 设置 favicon
  ],

  theme: plumeTheme({
    blog: false,
    logo: '/icon.svg',

    sidebar: {
      'guides' : [
        { text: '写在前面', icon: 'ep:guide', link: 'intro/' },
        {
          text: '工欲善其事，必先利其器',
          icon: 'fluent:window-dev-tools-16-regular',
          collapsed: false,
          items: [
          ],
        },
        {
          text: '敏而好学，智慧提问',
          icon: 'wpf:ask-question',
          collapsed: false,
          items: [
          ],
        },
        {
          text: '达则兼济天下',
          icon: 'la:hands-helping',
          collapsed: false,
          items: [
          ],
        },
      ],
      'notes' : [
        { text: '写在前面', icon: 'tdesign:book', link: 'intro/' },
        {
          text: '程序的构造：函数抽象',
          icon: 'game-icons:lambda',
          collapsed: false,
          items: [
          ],
        },
        {
          text: '程序的构造：数据抽象',
          icon: 'carbon:data-class',
          collapsed: false,
          items: [
          ],
        },
        {
          text: '程序的解释：REPL',
          icon: 'ix:interpreter',
          collapsed: false,
          items: [
          ],
        },
        {
          text: '程序的构造：申述式编程',
          icon: 'mdi:sql-inner-join',
          collapsed: false,
          items: [
          ],
        },
      ]
    },

    navbar: [
      { text: '首页', icon: 'material-symbols:home', link: '/' },
      { text: '指南', icon: 'icon-park-solid:guide-board', link: '/guides/intro/' },
      { text: '知识', icon: 'tdesign:book-filled', link: '/notes/intro/' },
    ],

    plugins: { 
      git: true 
    },

    // comment: {
    //   // 服务提供商
    //   provider: "Waline",
    //   // 是否默认启用评论
    //   comment: true,

    //   // 其它配置，根据服务提供商进行配置
    //   // ...
    // }
  }),
})
