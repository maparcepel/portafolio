
const ContinuingEducationCard = ({edu, title}) => {
  return (
    <div className='mb-5'>
      <h3 className='section-subtitle blue'>{title}</h3>
      <hr className='mt-0 mb-2 blue'/>
      <ul>
        {edu.map((e, index) => (
          <li key={index}>
            <a href={e.url} target='_blank' rel='noopener noreferrer'>{e.title}</a> - <span className='author-small'>{e.author}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContinuingEducationCard
