import { useLanguage } from "../../LanguageProvider";
import { experienceTranslations } from "../../locales/experience";

const ExperienceCard = ({exp}) => {
  const { lang } = useLanguage();
    const t = experienceTranslations[lang];

  return (
    <div className='row experience-card mb-5' key={exp.id}>
      <h2>{exp.company}</h2>
      <hr />
      <div className='col-lg-3 blue'>
        <p>
          {t[exp.id].company_info}
        </p>
        <p>
          <a href={exp.url} target="_blank" rel="noopener noreferrer">{exp.web}</a>
        </p>
        <p>
          {exp.period}
        </p>
      </div>

      <div className='col-lg-9'>
        <h4>
          {t[exp.id].position}
        </h4>
        <ul>
          {t[exp.id].tasks.map(task => (
              <li>{task}</li>
          ))}
        </ul>
        <ul className='tool-list blue'>
          {t[exp.id].tools.map(tool => (
              <li>{tool}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ExperienceCard
