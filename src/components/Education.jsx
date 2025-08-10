import { useLanguage } from "../LanguageProvider";
import { educationTranslations } from "../locales/education";
import ContinuingEducationCard from "./parts/ContinuingEducationCard";
import SectionTitle from "./parts/SectionTitle";

export const Education = () => {
    const { lang } = useLanguage();
    const t = educationTranslations[lang];

    return (
        <div className='container mt-5 animate__animated animate__fadeIn'>
            <SectionTitle title={t.section_title} />

            <h3 className='section-subtitle blue'>{t.continuing_education_title}</h3>

            {t.continuing_education.map(edu => (
                <ContinuingEducationCard edu={edu} />
            ))}
        </div>
    )
}
