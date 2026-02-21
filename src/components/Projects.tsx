import { useState } from 'react'
import { projects } from '../data/projects'
import { motion } from 'framer-motion'

// 容器动画
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

// 卡片动画
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

// 技术标签颜色映射
const techColors: Record<string, string> = {
  React: 'from-cyan-400/20 to-cyan-600/20 text-cyan-400 border-cyan-400/30',
  TypeScript: 'from-blue-400/20 to-blue-600/20 text-blue-400 border-blue-400/30',
  'Tailwind CSS': 'from-teal-400/20 to-teal-600/20 text-teal-400 border-teal-400/30',
  'Vue.js': 'from-green-400/20 to-green-600/20 text-green-400 border-green-400/30',
  'Node.js': 'from-lime-400/20 to-lime-600/20 text-lime-400 border-lime-400/30',
  MongoDB: 'from-emerald-400/20 to-emerald-600/20 text-emerald-400 border-emerald-400/30',
  Python: 'from-yellow-400/20 to-yellow-600/20 text-yellow-400 border-yellow-400/30',
  TensorFlow: 'from-orange-400/20 to-orange-600/20 text-orange-400 border-orange-400/30',
  Flask: 'from-red-400/20 to-red-600/20 text-red-400 border-red-400/30',
  'Next.js': 'from-gray-400/20 to-gray-600/20 text-gray-400 border-gray-400/30',
  'Socket.io': 'from-white/20 to-white/30 text-white border-white/30',
}

// 获取技术标签颜色
const getTechColor = (tech: string) => {
  return techColors[tech] || 'from-purple-400/20 to-purple-600/20 text-purple-400 border-purple-400/30'
}

const Projects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* 标题 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              项目展示
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            这里是我参与开发的一些项目，每个项目都凝聚了我的技术热情和创造力
          </p>
        </motion.div>

        {/* 项目卡片网格 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group"
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <motion.div
                className="h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm"
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 40px rgba(34, 211, 238, 0.15)',
                  borderColor: 'rgba(34, 211, 238, 0.5)',
                }}
                transition={{ duration: 0.3 }}
              >
                {/* 项目截图 */}
                <div className="relative aspect-video overflow-hidden">
                  {project.image ? (
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-cyan-400/10 via-purple-500/10 to-pink-500/10 flex items-center justify-center">
                      <motion.span
                        className="text-6xl"
                        animate={
                          hoveredId === project.id
                            ? { rotate: [0, -10, 10, -10, 0], scale: [1, 1.1, 1] }
                            : {}
                        }
                        transition={{ duration: 0.5 }}
                      >
                        🚀
                      </motion.span>
                    </div>
                  )}
                  {/* 悬停遮罩 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* 卡片内容 */}
                <div className="p-6">
                  {/* 项目标题 */}
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* 项目描述 */}
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* 技术栈标签 */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs px-3 py-1.5 rounded-full bg-gradient-to-r border ${getTechColor(
                          tech
                        )}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* 项目链接 */}
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <span>查看项目</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
