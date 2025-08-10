
const ContinuingEducationCard = ({edu}) => {
  return (
    <div>
      <h4>
        <a href={edu.url} target='_blank' rel='noopener noreferrer'>{edu.title}</a> - <span className='author-small'>{edu.author}</span>

      </h4>
    </div>
  )
}

export default ContinuingEducationCard
