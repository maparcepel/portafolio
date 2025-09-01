import { useLanguage } from "../../LanguageProvider";
import { educationTranslations } from "../../locales/education";

const EducationCard = ({edu}) => {
  const { lang } = useLanguage();
  const t = educationTranslations[lang];

  return (
    <div className='education-card mb-5'>
      <h2>{t[edu.id].title}</h2>
      <hr className='mt-0 mb-2'/>

      <p className='mb-0'>
        {t[edu.id].school}
      </p>

      {edu.web && (
        <p className='mb-0'>
          <a href={edu.url} target="_blank" rel="noopener noreferrer">{edu.web}</a>
        </p>
      )}

      {t[edu.id].description && (
        <p className='mb-0'>{t[edu.id].description}</p>
      )}

      <p>
        {t[edu.id].period}
      </p>
    </div>
  )
}

export default EducationCard
