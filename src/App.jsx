import styles from './App.module.css';
import { Hero } from './Components/Hero/Hero';
import { Navbar } from './Components/Navbar/Navbar';
import { Projects } from './Components/Projects/Projects';
import { Skills } from './Components/Skills/Skills';
import { Contact } from './Contact/Contact';

function App() {

  return (
    <>
      <div className={styles.App}>
        <Navbar/>
        <Hero/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    </>
  )
}

export default App
