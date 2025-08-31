
const ContinuingEducationCard = ({edu, title}) => {
  return (
    <div className='mb-5'>
      <h3 className='section-subtitle blue'>{title}</h3>
      <hr className='mt-0 blue'/>
      {edu.map((e, index) => (
        <p key={index}>
          <a href={e.url} target='_blank' rel='noopener noreferrer'>{e.title}</a> - <span className='author-small'>{e.author}</span>
        </p>
      ))}


    </div>
  )
}

export default ContinuingEducationCard
