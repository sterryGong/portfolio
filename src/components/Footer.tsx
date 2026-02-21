import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', href: 'https://github.com/yourusername' },
    { name: 'Email', icon: '✉️', href: 'mailto:your.email@example.com' },
    { name: 'LinkedIn', icon: '💼', href: 'https://linkedin.com/in/yourprofile' },
  ]

  return (
    <footer className="relative">
      {/* 顶部渐变分隔线 */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-8">
            {/* 社交链接 */}
            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-slate-900/50 border border-white/10 flex items-center justify-center text-xl hover:border-cyan-500/50 transition-all duration-300"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* 分隔线 */}
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* 版权信息 */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-gray-500 text-sm">
                &copy; {currentYear}{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-medium">
                  Portfolio
                </span>
                . All rights reserved.
              </p>
              <p className="text-gray-600 text-xs mt-2">
                Made with ❤️ using React & TypeScript
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
