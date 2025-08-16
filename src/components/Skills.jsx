import { useLanguage } from "../LanguageProvider";
import { skillsTranslations } from "../locales/skills";
import SectionTitle from "./parts/SectionTitle";

export const Skills = () => {
    const { lang } = useLanguage();
    const t = skillsTranslations[lang];

    return (
        <div className='container animate__animated animate__fadeIn mb-5'>
            <SectionTitle title={t.section_title} />

            <div className='row mt-5  justify-content-center'>
                <div className='col-xs-12 col-sm-6 col-lg-3 d-flex justify-content-lg-center'>
                    <div className='skills'>
                        <h4>{t.languages}</h4>
                        <ul>
                            <li>PHP</li>
                            <li>SQL</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>CSS</li>
                            <li>Html</li>
                        </ul>

                    </div>

                </div>

                <div className='col-xs-12 col-sm-6 col-lg-3 d-flex justify-content-lg-center'>
                    <div className='skills'>

                        <h4>{t.frameworks}</h4>
                        <ul>
                            <li>Laravel</li>
                            <li>ReactJS</li>
                            <li>Redux</li>
                            <li>Express</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                </div>

                <div className='col-xs-12 col-sm-6 col-lg-3 d-flex justify-content-lg-center'>
                    <div className='skills'>
                        <h4>{t.databases}</h4>
                        <ul>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </div>

                <div className='col-xs-12 col-sm-6 col-lg-3 d-flex justify-content-lg-center'>
                    <div className='skills'>
                        <h4>{t.others}</h4>
                        <ul>
                            <li>SOLID</li>
                            <li>Clean Code</li>
                            <li>Testing</li>
                            <li>Git</li>
                            <li>Scrum</li>
                            <li>Photoshop</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
