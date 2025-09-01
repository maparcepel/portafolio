import { useLanguage } from "../LanguageProvider";
import { educationPrograms } from "../data/educationPrograms";
import { educationTranslations } from "../locales/education";
import ContinuingEducationCard from "./parts/ContinuingEducationCard";
import EducationCard from "./parts/EducationCard";
import SectionTitle from "./parts/SectionTitle";

export const Education = () => {
    const { lang } = useLanguage();
    const t = educationTranslations[lang];

    return (
        <div className='container mt-5 animate__animated animate__fadeIn'>
            <SectionTitle title={t.section_title} />

            {educationPrograms.map((edu, index) => (
                <EducationCard edu={edu} key={index} />
            ))}

            <ContinuingEducationCard edu={t.continuing_education} title={t.continuing_education_title}/>
        </div>
    )
}
