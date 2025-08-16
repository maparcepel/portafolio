import { About } from './components/About';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { NavBar } from './components/parts/NavBar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { LanguageProvider } from './LanguageProvider';
import './styles/styles.scss';

function App() {
    return (
        <LanguageProvider>
            <div>
                <div>
                    <div id="navbar">
                        <NavBar />
                    </div>

                    <div id="about">
                        <About />
                    </div>
                    <div id="experience">
                        <Experience />
                    </div>
                    <div id="education">
                        <Education />
                    </div>
                    <div id="skills">
                        <Skills />
                    </div>

                    <div id="projects">
                        <Projects />
                    </div>

                    <div id="contact">
                        <Contact />
                    </div>
                </div>
            </div>
        </LanguageProvider>
    );
}

export default App;
