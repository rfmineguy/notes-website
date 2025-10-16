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
                        { text: 'Aug27', link: '/school/fall_25/linux/aug27' },
                        { text: 'Sep3', link: '/school/fall_25/linux/sep3' },
                      { text: 'Sep8', link: '/school/fall_25/linux/sep8' },
                      { text: 'Sep24', link: '/school/fall_25/linux/sep24' },
                      { text: 'Sep29', link: '/school/fall_25/linux/sep29' },
                      { text: 'Oct1', link: '/school/fall_25/linux/oct1' },
                      { text: 'Oct6', link: '/school/fall_25/linux/oct6' },
                      { text: 'Oct13', link: '/school/fall_25/linux/oct13' },
                      { text: 'Oct15', link: '/school/fall_25/linux/oct15' },
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
                collapsed: false,
                items: [
                  { text: '', link: '/school/fall_25/ai/index' },
                  { text: 'Sep 3', collapsed: false, 
                    items: [
                      { text: 'Beginning', link: '/school/fall_25/ai/sep3' },
                      { text: 'Lisp', link: '/school/fall_25/ai/sep3_lisp' },
                    ] 
                  },
                  { text: 'Sep 8', collapsed: false, 
                    items: [
                      { text: 'Beginning', link: '/school/fall_25/ai/sep8_lisp' },
                      { text: 'Agents', link: '/school/fall_25/ai/sep8_agents' },
                    ] 
                  },
                  { text: 'Sep 10', collapsed: false, 
                    items: [
                      { text: 'Beginning', link: '/school/fall_25/ai/sep10' },
                    ] 
                  },
                  { text: 'Sep 15', collapsed: false, 
                    items: [
                      { text: 'Beginning', link: '/school/fall_25/ai/sep15' },
                    ] 
                  },
                  { text: 'Sep 24', collapsed: false, 
                    items: [
                      { text: 'Beginning', link: '/school/fall_25/ai/sep24' },
                    ] 
                  },
                  { text: 'Sep 29', collapsed: false, 
                    items: [
                      { text: 'Beginning', link: '/school/fall_25/ai/sep29' },
                    ] 
                  },
                  { text: 'Oct 8', link: '/school/fall_25/ai/oct8' },
                ]
              },
              {
                text: 'Web Dev',
                collapsed: false,
                items: [
                  { text: 'Class Sessions',
                    collapsed: false,
                    items: [
                      { text: 'Aug 26 (Introduction/Syllabus)', link: '/school/fall_25/web/aug_26' },
                      { text: 'Aug 28', link: '/school/fall_25/web/aug28' },
                      { text: 'Sep 11', link: '/school/fall_25/web/sep11' },
                      { text: 'Sep 16', link: '/school/fall_25/web/sep16' },
                      { text: 'Sep 23', link: '/school/fall_25/web/sep23' }
                    ]
                  }
                ]
              },
            ]
          }
        ]
      }
    ]
  }
})

