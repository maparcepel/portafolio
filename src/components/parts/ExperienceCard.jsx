import { useLanguage } from "../../LanguageProvider";
import { experienceTranslations } from "../../locales/experience";

const ExperienceCard = ({exp}) => {
  const { lang } = useLanguage();
  const t = experienceTranslations[lang];

  return (
    <div className='experience-card mb-5'>
      <div className='row'>
        <div className='col-lg-3 '>
          <h2>{exp.company}</h2>
        </div>

        <div className='col-lg-9 d-flex align-items-end'>
          <h4>{t[exp.id].position}</h4>
        </div>
      </div>

      <hr className='mt-0'/>

      <div className='row'>
        <div className='col-lg-3 '>
          <p>
            {t[exp.id].company_info}
          </p>
          <p>
            <a href={exp.url} target="_blank" rel="noopener noreferrer">{exp.web}</a>
          </p>
          <p>
            {t[exp.id].period}
          </p>
        </div>

        <div className='col-lg-9 ps-0'>
          <ul>
            {t[exp.id].tasks.map((task, index) => (
                <li key={index}>{task}</li>
            ))}
          </ul>
          <div className='row'>
            <div className='col-lg-6'>
              <ul className='tool-list mb-0'>
                {t[exp.id].tools1?.map((tool, index) => (
                    <li className='bg-yellow' key={index}>{tool}</li>
                ))}
              </ul>
            </div>
            <div className='col-lg-6'>
              <ul className='tool-list'>
                {t[exp.id].tools2?.map((tool, index) => (
                    <li className='bg-yellow' key={index}>{tool}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard
