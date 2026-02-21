export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  image?: string
  link?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'React 任务管理应用',
    description: '一个功能强大的任务管理应用，支持拖拽排序、标签分类和实时同步功能，帮助用户高效管理日常任务。',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/yourusername/task-manager',
  },
  {
    id: 2,
    title: '全栈电商平台',
    description: '完整的电商解决方案，包含商品展示、购物车、订单系统和支付集成，采用前后端分离架构。',
    technologies: ['Vue.js', 'Node.js', 'MongoDB'],
    link: 'https://github.com/yourusername/ecommerce',
  },
  {
    id: 3,
    title: 'AI 数据分析工具',
    description: '基于机器学习的智能数据分析平台，提供数据可视化、预测分析和报表生成功能。',
    technologies: ['Python', 'TensorFlow', 'Flask'],
    link: 'https://github.com/yourusername/ai-analytics',
  },
  {
    id: 4,
    title: '实时聊天应用',
    description: '支持多人实时聊天、文件分享和语音消息的即时通讯应用，使用 WebSocket 技术实现低延迟通信。',
    technologies: ['React', 'Node.js', 'Socket.io'],
    link: 'https://github.com/yourusername/chat-app',
  },
  {
    id: 5,
    title: '个人博客系统',
    description: '支持 Markdown 编辑、代码高亮和主题切换的现代化博客平台，内置 SEO 优化功能。',
    technologies: ['TypeScript', 'Next.js', 'Tailwind CSS'],
    link: 'https://github.com/yourusername/blog',
  },
  {
    id: 6,
    title: '天气可视化面板',
    description: '集成多数据源的天气信息展示平台，提供 7 天预报、空气质量指数和天气趋势图表。',
    technologies: ['React', 'TypeScript', 'Python'],
    link: 'https://github.com/yourusername/weather-dashboard',
  },
]
