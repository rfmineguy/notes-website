// .vitepress/config.ts
import { defineConfig } from 'vitepress'

export default defineConfig({
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
                collapsed: true,
                items: [
                  { text: 'Debian Setup', link: '/school/fall_25/linux/debian_setup' }
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

