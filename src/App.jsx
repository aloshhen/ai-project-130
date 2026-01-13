import { useState } from 'react'
import { motion } from 'framer-motion'
import { Coffee, Zap, Globe, ShieldCheck } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-coffee">
      <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-2">
            <Coffee className="text-amber-500" />
            <span className="font-bold text-xl">CoffeeEco</span>
          </div>
          <div className="space-x-4">
            {['Технология', 'Экосистема', 'Контакты'].map((item, index) => (
              <a 
                key={index} 
                href={`#section-${index}`}
                className="hover:text-amber-500 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(`#section-${index}`).scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <motion.section 
        id="section-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex items-center justify-center text-center px-4"
      >
        <div>
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-amber-400"
          >
            Кофейная Революция
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto text-xl mb-8"
          >
            Высокотехнологичная экосистема, которая превращает каждую чашку кофе в уникальный опыт
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-500 text-black px-8 py-3 rounded-full font-bold hover:bg-amber-600 transition-colors"
          >
            Начать Путешествие
          </motion.button>
        </div>
      </motion.section>

      <motion.section 
        id="section-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen bg-black/20 py-16 px-4"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-400">
            Технологии Будущего
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: 'Умный Помол', desc: 'Точный помол с лазерной прецизионностью' },
              { icon: Globe, title: 'Глобальная Сеть', desc: 'Связь фермеров и кофеманов по всему миру' },
              { icon: Coffee, title: 'Кастомизация', desc: 'Персональные рецепты под ваш вкус' },
              { icon: ShieldCheck, title: 'Безопасность', desc: 'Криптозащита каждой транзакции' }
            ].map(({ icon: Icon, title, desc }, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-black/40 p-6 rounded-xl text-center hover:bg-black/60 transition-all"
              >
                <Icon className="mx-auto mb-4 text-amber-500" size={48} />
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-300">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <footer className="bg-black/30 py-8 text-center">
        <p>© 2024 CoffeeEco. Все права защищены.</p>
      </footer>
    </div>
  )
}

export default App