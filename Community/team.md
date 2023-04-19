<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/caoxiemeihao.png',
    name: '草鞋没号',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/caoxiemeihao' },
      { icon: 'github', link: 'https://github.com/sponsors/caoxiemeihao' },
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
