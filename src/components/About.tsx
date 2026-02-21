import { skills } from '../data/skills'
import { motion } from 'framer-motion'

// 按分类组织技能
const skillsByCategory = {
  frontend: skills.filter(s => s.category === 'frontend'),
  backend: skills.filter(s => s.category === 'backend'),
  tools: skills.filter(s => s.category === 'tools'),
}

const categoryNames = {
  frontend: '前端开发',
  backend: '后端开发',
  tools: '开发工具',
}

// 技能标签颜色配置
const skillColors: Record<string, { gradient: string; border: string; glow: string }> = {
  React: { gradient: 'from-cyan-400/20 to-cyan-600/20', border: 'border-cyan-400/50', glow: 'shadow-cyan-400/30' },
  'Vue.js': { gradient: 'from-green-400/20 to-green-600/20', border: 'border-green-400/50', glow: 'shadow-green-400/30' },
  TypeScript: { gradient: 'from-blue-400/20 to-blue-600/20', border: 'border-blue-400/50', glow: 'shadow-blue-400/30' },
  'Tailwind CSS': { gradient: 'from-teal-400/20 to-teal-600/20', border: 'border-teal-400/50', glow: 'shadow-teal-400/30' },
  'HTML/CSS': { gradient: 'from-orange-400/20 to-orange-600/20', border: 'border-orange-400/50', glow: 'shadow-orange-400/30' },
  JavaScript: { gradient: 'from-yellow-400/20 to-yellow-600/20', border: 'border-yellow-400/50', glow: 'shadow-yellow-400/30' },
  'Node.js': { gradient: 'from-lime-400/20 to-lime-600/20', border: 'border-lime-400/50', glow: 'shadow-lime-400/30' },
  Python: { gradient: 'from-indigo-400/20 to-indigo-600/20', border: 'border-indigo-400/50', glow: 'shadow-indigo-400/30' },
  Express: { gradient: 'from-gray-400/20 to-gray-600/20', border: 'border-gray-400/50', glow: 'shadow-gray-400/30' },
  MongoDB: { gradient: 'from-emerald-400/20 to-emerald-600/20', border: 'border-emerald-400/50', glow: 'shadow-emerald-400/30' },
  PostgreSQL: { gradient: 'from-sky-400/20 to-sky-600/20', border: 'border-sky-400/50', glow: 'shadow-sky-400/30' },
  Git: { gradient: 'from-red-400/20 to-red-600/20', border: 'border-red-400/50', glow: 'shadow-red-400/30' },
  Docker: { gradient: 'from-blue-500/20 to-blue-700/20', border: 'border-blue-500/50', glow: 'shadow-blue-500/30' },
  'VS Code': { gradient: 'from-violet-400/20 to-violet-600/20', border: 'border-violet-400/50', glow: 'shadow-violet-400/30' },
}

const getSkillStyle = (name: string) => {
  return skillColors[name] || { gradient: 'from-purple-400/20 to-purple-600/20', border: 'border-purple-400/50', glow: 'shadow-purple-400/30' }
}

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      {/* 背景光晕 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* 标题 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              关于我
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
        </motion.div>

        {/* 个人介绍 */}
        <motion.div
          className="max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-sm border border-white/10">
            {/* 装饰光晕 */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed relative">
              你好！我是一名充满热情的<span className="text-cyan-400 font-semibold">全栈开发者</span>，
              专注于打造优雅、高效的 Web 应用。我对编程有着浓厚的兴趣，
              喜欢探索新技术，解决复杂的技术挑战。
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-6 relative">
              在过去的几年里，我参与了多个项目的开发，从<span className="text-purple-400 font-semibold">前端界面</span>到
              <span className="text-pink-400 font-semibold">后端架构</span>，
              都有涉猎。我相信好的代码不仅要能运行，更要易于维护和扩展。
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-6 relative">
              工作之余，我喜欢阅读技术博客、参与开源项目，在<span className="text-cyan-400 font-semibold">GitHub</span>上
              分享我的代码。如果你对技术有热情，欢迎一起交流学习！
            </p>
          </div>
        </motion.div>

        {/* 技能展示 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">
            技能栈
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {Object.entries(skillsByCategory).map(([category, categorySkills], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="relative group"
              >
                {/* 卡片背景 */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-slate-800/50 rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-cyan-500/30 transition-colors duration-500" />

                {/* 卡片内容 */}
                <div className="relative p-6">
                  {/* 分类标题 */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                      {category === 'frontend' && '🎨'}
                      {category === 'backend' && '⚙️'}
                      {category === 'tools' && '🛠️'}
                    </div>
                    <h4 className="text-lg font-semibold text-white">
                      {categoryNames[category as keyof typeof categoryNames]}
                    </h4>
                  </div>

                  {/* 技能标签 */}
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => {
                      const style = getSkillStyle(skill.name)
                      return (
                        <motion.span
                          key={skill.name}
                          className={`relative px-3 py-1.5 rounded-lg bg-gradient-to-r ${style.gradient} border ${style.border} text-sm font-medium text-white/90 backdrop-blur-sm`}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                        >
                          {skill.name}
                        </motion.span>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
