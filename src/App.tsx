import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen text-white">
      {/* 背景层容器 */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
        {/* 渐变背景层 */}
        <div className="absolute inset-0 gradient-bg" />

        {/* 网格纹理层 */}
        <div className="absolute inset-0 grid-pattern" />

        {/* 背景光晕装饰 - 带动画，增强颜色 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="glow-blob w-[600px] h-[600px] bg-violet-600/30 top-[-10%] left-[-5%]" style={{ animationDelay: '0s' }} />
          <div className="glow-blob w-[500px] h-[500px] bg-cyan-500/25 top-[30%] right-[-8%]" style={{ animationDelay: '-5s' }} />
          <div className="glow-blob w-[700px] h-[700px] bg-blue-600/20 bottom-[-15%] left-[30%]" style={{ animationDelay: '-10s' }} />
          <div className="glow-blob w-[450px] h-[450px] bg-fuchsia-500/25 top-[60%] left-[5%]" style={{ animationDelay: '-15s' }} />
          <div className="glow-blob w-[400px] h-[400px] bg-indigo-500/20 top-[20%] left-[40%]" style={{ animationDelay: '-7s' }} />
        </div>

        {/* 噪点纹理层 */}
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
