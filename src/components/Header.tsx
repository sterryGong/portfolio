import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// 导航菜单项
const navItems = [
  { id: 'home', label: '首页', icon: '🏠' },
  { id: 'about', label: '关于', icon: '👤' },
  { id: 'projects', label: '项目', icon: '🚀' },
  { id: 'contact', label: '联系', icon: '✉️' },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // 监听滚动状态
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 监听当前可见区域，更新激活状态
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    navItems.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  // 平滑滚动到指定区域
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3'
          : 'py-5'
      }`}
    >
      {/* 背景装饰 */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/40 backdrop-blur-xl border-b border-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30'
            : 'bg-transparent'
        }`}
      >
        {/* 顶部渐变线 */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />
      </div>

      <nav className="container mx-auto px-6 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('home')}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                PORTFOLIO
              </span>
              {/* Logo 光晕 */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.button>

          {/* 导航菜单 */}
          <ul className="flex items-center gap-2">
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 group overflow-hidden ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {/* 背景渐变 */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transition-all duration-500 ${
                      activeSection === item.id
                        ? 'opacity-100'
                        : 'opacity-0 group-hover:opacity-30'
                    }`}
                  />

                  {/* 边框光效 */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/50 via-purple-400/50 to-pink-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

                  {/* 内容 */}
                  <span className="relative flex items-center gap-2">
                    <span className="text-base">{item.icon}</span>
                    <span>{item.label}</span>
                  </span>

                  {/* 激活状态指示器 */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-xl"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/40 via-purple-500/40 to-pink-500/40 rounded-xl" />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-md" />
                    </motion.div>
                  )}
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
