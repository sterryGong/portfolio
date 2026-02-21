export interface Skill {
  name: string
  category?: string
}

export const skills: Skill[] = [
  // 前端
  { name: 'React', category: 'frontend' },
  { name: 'Vue.js', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'HTML/CSS', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  // 后端
  { name: 'Node.js', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'Express', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  // 工具
  { name: 'Git', category: 'tools' },
  { name: 'Docker', category: 'tools' },
  { name: 'VS Code', category: 'tools' },
]
