import { useLanguage } from "../../LanguageProvider";
import { experienceTranslations } from "../../locales/experience";
import ToolItem from "./ToolItem";

const ExperienceCard = ({exp}) => {
  const { lang } = useLanguage();
  const t = experienceTranslations[lang];

  return (
    <div className='experience-card mb-5'>
      <div className='row'>
        <div className='col-lg-3'>
          <div className='company-card'>
            <div className='title'>
              <h2>{exp.company}</h2>
            </div>

            <div className='content mb-3'>
              <p>
                {t[exp.id].company_info}
              </p>
              <p>
                <a href={exp.url} target="_blank" rel="noopener noreferrer">{exp.web}</a>
              </p>
            </div>
          </div>
        </div>

        <div className='col-lg-9 job-details'>
          <div className='row'>
            <h4>{t[exp.id].position}</h4> <span>{t[exp.id].period}</span>

            <ul>
              {t[exp.id].tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>

            <div className='row mb-5'>
              <div className='col-lg-6'>
                <ul className='tool-list mb-0'>
                  {t[exp.id].tools1?.map((tool, index) => (
                    <ToolItem key={index} tool={tool}/>
                  ))}
                </ul>
              </div>

              <div className='col-lg-6'>
                <ul className='tool-list'>
                  {t[exp.id].tools2?.map((tool, index) => (
                    <ToolItem key={index} tool={tool}/>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default ExperienceCard
