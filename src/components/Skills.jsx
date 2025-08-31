import ToolItem from "../components/parts/ToolItem";
import { skills } from "../data/skills";
import { useLanguage } from "../LanguageProvider";
import { skillsTranslations } from "../locales/skills";
import SectionTitle from "./parts/SectionTitle";

export const Skills = () => {
    const { lang } = useLanguage();
    const t = skillsTranslations[lang];

    return (
        <div className='container animate__animated animate__fadeIn mb-5'>
            <SectionTitle title={t.section_title} />

            <div className='row mt-5'>
                <div className='col-md-12 col-lg-6'>
                    <div className='skills'>
                        <h4>{t.languages}</h4>
                        <ul className='tool-list mt-3'>
                            {skills.languages?.map((tool, index) => (
                                <ToolItem key={index} tool={tool}/>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='col-md-12 col-lg-6'>
                    <div className='skills'>
                        <h4>{t.frameworks}</h4>
                        <ul className='tool-list mt-3'>
                            {skills.frameworks?.map((tool, index) => (
                                <ToolItem key={index} tool={tool}/>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='col-md-12 col-lg-6'>
                    <div className='skills'>
                        <h4>{t.databases}</h4>
                        <ul className='tool-list mt-3'>
                            {skills.databases?.map((tool, index) => (
                                <ToolItem key={index} tool={tool}/>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='col-md-12 col-lg-6'>
                    <div className='skills'>
                        <h4>{t.others}</h4>
                        <ul className='tool-list mt-3'>
                            {skills.others?.map((tool, index) => (
                                <ToolItem key={index} tool={tool}/>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
