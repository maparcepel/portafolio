import { useLanguage } from "../../LanguageProvider";
import { educationTranslations } from "../../locales/education";

const EducationCard = ({edu}) => {
  const { lang } = useLanguage();
  const t = educationTranslations[lang];

  return (
    <div className='education-card mb-5'>
      <h2>{t[edu.id].title}</h2>
      <hr className='mt-0'/>

      <p>
        {t[edu.id].school}
      </p>
      {t[edu.id].description && (
        <p>{t[edu.id].description}</p>
      )}
      {edu.web && (
        <p>
          <a href={edu.url} target="_blank" rel="noopener noreferrer">{edu.web}</a>
        </p>
      )}
      <p>
        {edu.period}
      </p>
    </div>
  )
}

export default EducationCard
