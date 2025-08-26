// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import multimdTable from 'markdown-it-multimd-table'

export default defineConfig({
  base: '/notes-website/',
  title: "Notes",
  description: "A notes site",
  markdown: {
    config: (md) => {
      md.use(multimdTable, {
        multiline: true,
        rowspan: true,
        colspan: true,
        headerless: true
      })
    }
  },
  themeConfig: {
    outline: {
      level: 'deep',
      label: 'On this page'
    },
    sidebar: [
      {
        text: 'Classes',
        items: [
          { text: 'Fall 2025',
            collapsed: false,
            items: [
              { text: 'Linux', 
                collapsed: false,
                items: [
                  { text: 'Class Sessions',
                    collapsed: false,
                    items: [
                      { text: 'Aug25', link: '/school/fall_25/linux/aug25' },
                    ]
                  },
                  { text: 'Topics',
                    collapsed: false,
                    items: [
                      { text: 'Debian Setup', link: '/school/fall_25/linux/debian_setup' },
                      { text: 'Commands', link: '/school/fall_25/linux/commands' },
                      { text: 'Network', link: '/school/fall_25/linux/network' },
                      { text: 'Bash', link: '/school/fall_25/linux/bash' },
                    ]
                  }
                ]
              },
              {
                text: 'AI',
                collapsed: true,
                items: [
                  { text: '', link: '/school/fall_25/ai/index' }
                ]
              },
              {
                text: 'Web Dev',
                collapsed: true,
                link: '/school/fall_25/web/index' 
              },
            ]
          }
        ]
      }
    ]
  }
})

