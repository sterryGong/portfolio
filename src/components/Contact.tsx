import { motion } from 'framer-motion'

const Contact = () => {
  const contactLinks = [
    {
      name: 'Email',
      value: 'your.email@example.com',
      icon: '✉️',
      href: 'mailto:your.email@example.com',
      gradient: 'from-cyan-400 to-cyan-600',
      gradientBg: 'from-cyan-500/20 via-cyan-500/10 to-transparent',
      borderColor: 'border-cyan-400/30',
      glowColor: 'rgba(34, 211, 238, 0.4)',
    },
    {
      name: 'GitHub',
      value: 'github.com/yourusername',
      icon: '🐙',
      href: 'https://github.com/yourusername',
      gradient: 'from-purple-400 to-purple-600',
      gradientBg: 'from-purple-500/20 via-purple-500/10 to-transparent',
      borderColor: 'border-purple-400/30',
      glowColor: 'rgba(168, 85, 247, 0.4)',
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      icon: '💼',
      href: 'https://linkedin.com/in/yourprofile',
      gradient: 'from-pink-400 to-pink-600',
      gradientBg: 'from-pink-500/20 via-pink-500/10 to-transparent',
      borderColor: 'border-pink-400/30',
      glowColor: 'rgba(236, 72, 153, 0.4)',
    },
  ]

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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  }

  return (
    <section id="contact" className="py-32 relative">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
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
              联系我
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto">
            如果你有任何问题或合作意向，欢迎随时与我联系！
          </p>
        </motion.div>

        {/* 联系卡片 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {contactLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              className="group relative"
              whileHover={{ y: -12 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {/* 卡片背景层 */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm border border-white/10" />

              {/* 悬停时渐变背景 */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${link.gradientBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* 顶部发光线 */}
              <div
                className={`absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r ${link.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* 内部光晕 */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div
                  className="absolute inset-0 rounded-2xl blur-xl"
                  style={{ backgroundColor: link.glowColor }}
                />
              </div>

              {/* 卡片内容 */}
              <div className="relative p-8 flex flex-col items-center">
                {/* 图标容器 */}
                <motion.div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${link.gradient} p-0.5 mb-6`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center">
                    <span className="text-4xl">{link.icon}</span>
                  </div>
                </motion.div>

                {/* 名称 */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">
                  {link.name}
                </h3>

                {/* 联系方式 */}
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {link.value}
                </p>

                {/* 点击提示 */}
                <div className="mt-4 flex items-center gap-2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span>点击联系</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>

              {/* 边框光效 */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                style={{
                  boxShadow: `0 0 30px ${link.glowColor}, inset 0 0 20px ${link.glowColor}20`,
                }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* 底部文字 */}
        <motion.p
          className="text-center text-gray-500 mt-16 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          期待与您的交流与合作 ✨
        </motion.p>
      </div>
    </section>
  )
}

export default Contact
