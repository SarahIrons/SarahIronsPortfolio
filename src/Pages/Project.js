import ContentSection from "../components/ContentSection";

const Project = (props) =>{
    return (
    <ContentSection id={props.id} className="project">
        <h1>{props.id}</h1>
        {props.details && <p class="project__details">{props.details}</p>}
        {props.imageUrl && <img class="project__screenshot" src={props.imageUrl}  alt={`still of ${props.id} app`}/>}
        {props?.tags?.length > 0  &&  
        <ul class="project__tags">
           { props?.tags.map(tag=><li>{tag}</li>)}
        </ul>}
    </ContentSection>
)}

export default Project;