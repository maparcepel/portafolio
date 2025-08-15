import { experiences } from "../data/experiences";
import { useLanguage } from "../LanguageProvider";
import { experienceTranslations } from "../locales/experience";
import ExperienceCard from "./parts/ExperienceCard";
import SectionTitle from "./parts/SectionTitle";

export const Experience = () => {
    const { lang } = useLanguage();
    const t = experienceTranslations[lang];

    return (
        <div className='container mt-5 animate__animated animate__fadeIn'>
            <SectionTitle title={t.section_title} />

            {experiences.map((exp, index) => (
                <ExperienceCard exp={exp} key={index}/>
            ))}
        </div>
    )
}
