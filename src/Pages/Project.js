import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContentSection from "../components/ContentSection";
import './project.scss';
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

const Project = ({id, tags, details, gitLink, imageUrl}) =>{
    return (
    <ContentSection id={id} className="project">
        <div className="project__copy">
            <h1 className="project__title">{id}</h1>
            {tags?.length > 0  && 
               <ul className="project__tags">
                {tags.map(tag=><li className="project__tag">{tag}</li>)}
            </ul>}
            {details && <p className="project__details">{details}</p>}
            <a className="project__gitLink link--icon" href={gitLink}><FontAwesomeIcon icon={faSquareGithub}/></a>
        </div>
        {imageUrl && <img className="project__screenshot" src={imageUrl}  alt={`still of ${id} app`}/>}
    </ContentSection>
)}

export default Project;