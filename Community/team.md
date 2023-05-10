<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/caoxiemeihao.png',
    name: '草鞋没号',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/caoxiemeihao' },
      { icon:{svg:'<svg t="1682974367201" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8525" width="500" height="500"><path d="M535.9 216.7l-22.9 23-22.9-23.1c-89.2-89.7-234.3-90.1-323.9-0.8l-0.8 0.8c-89.7 90.1-89.7 235.8 0 326L476 859.3c20.1 20.4 52.9 20.7 73.4 0.7l0.7-0.7 310.7-316.7c89.7-90.1 89.7-235.8 0-326-89.2-89.7-234.3-90.1-323.9-0.9l-1 1z" p-id="8526"></path></svg>'}, link: 'https://github.com/sponsors/caoxiemeihao' },
    ]
  },{
    avatar: 'https://github.com/astoilkov.png',
    name: 'Antonio Stoilkov',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/astoilkov' },
    ]
  },{
    avatar: 'https://github.com/bluwy.png',
    name: 'Bjorn Lu',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/bluwy' },
    ]
  },
    {
    avatar: 'https://github.com/lzdyes.png',
    name: 'lzdyes',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/lzdyes' },
    ]
  },
    {
    avatar: 'https://github.com/mollerzhu.png',
    name: 'Moller Zhu',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/mollerzhu' },
    ]
  },
    {
    avatar: 'https://github.com/oceanlvr.png',
    name: 'oceanlvr',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/oceanlvr' },
    ]
  },
    {
    avatar: 'https://github.com/PAXANDDOS.png',
    name: 'Paul',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/PAXANDDOS' },
    ]
  },
    {
    avatar: 'https://github.com/RSS1102.png',
    name: '阿菜 Cai',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/RSS1102' },
    ]
  },
    {
    avatar: 'https://github.com/snowuly.png',
    name: 'Snow Chen',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/snowuly' },
    ]
  },
      {
    avatar: 'https://github.com/watonyweng.png',
    name: 'Wáng Wěi Tāo',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/watonyweng' },
    ]
  }, {
    avatar: 'https://github.com/xhayper.png',
    name: 'hayper',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/xhayper' },
    ]
  },
      {
    avatar: 'https://github.com/yi-Xu-0100.png',
    name: 'yi_Xu',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/yi-Xu-0100' },
    ]
  },
        {
    avatar: 'https://github.com/youngleish.png',
    name: 'younglei',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/youngleish' },
    ]
  },
      {
    avatar: 'https://github.com/ZiGmaX809.png',
    name: 'ZiGma',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/ZiGmaX809' },
    ]
  },
]
</script>

# Team Page

Thank you to the following individuals who have made outstanding contributions to [Electron ⚡️ Vite](https://github.com/orgs/electron-vite), making it even stronger.

<VPTeamMembers size="small" :members="members" />
