import { motion } from 'framer-motion'

// 文字淡入动画
const textVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

const Hero = () => {
  // 滚动到关于我部分
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      {/* 英雄区域专属光晕 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* 头像 */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto">
            {/* 旋转的渐变边框 */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear' as const,
              }}
            />
            {/* 内层渐变边框 */}
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-cyan-400/50 to-purple-600/50" />
            {/* 头像内容 */}
            <div className="absolute inset-2 rounded-full bg-slate-900/80 backdrop-blur-sm flex items-center justify-center">
              <span className="text-5xl md:text-6xl">👨‍💻</span>
            </div>
          </div>
        </motion.div>

        {/* 大标题 */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          variants={textVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          你好，我是开发者
        </motion.h1>

        {/* 简介文字 */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          variants={textVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          热爱编程，专注于构建优雅的 Web 应用
        </motion.p>

        {/* CTA 按钮 */}
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={scrollToAbout}
            className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <span className="relative z-10">了解更多</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.div>

        {/* 向下滚动指示器 */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1, duration: 0.8 },
            y: { duration: 1.5, repeat: Infinity },
          }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-cyan-400 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
