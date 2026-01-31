import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Identity from '@/components/Identity'
import WhyDeveloper from '@/components/WhyDeveloper'
import Career from '@/components/Career'
import QAExperience from '@/components/QAExperience'
import ProblemSolving from '@/components/ProblemSolving'
import Skills from '@/components/Skills'
import Goals from '@/components/Goals'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Identity />
      <WhyDeveloper />
      <Career />
      <QAExperience />
      <ProblemSolving />
      <Skills />
      <Goals />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
