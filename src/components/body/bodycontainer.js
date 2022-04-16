import '../body/bodycontainer.css';
import Biography from './biography';

function BodyContainer(props) {
    return (
      <div className="bodycontainer">
        <h3 className="title">{props.title}</h3>
        <div className="containerdata">
            { 
              (() => {
                if(props.containerId === "biography") {
                  return (<Biography/>);
                }else if(props.containerId === "hardskills"){
                  return(<div>Hard skills</div>)
                }else if(props.containerId === "resume"){
                  return(<div>Resume</div>)
                }else if(props.containerId === "portfolio"){
                  return(<div>Portfolio</div>)
                }else{
                  return("Empty Container")
                }
              })()
            }
        </div>
      </div>
    );
  }
  
  export default BodyContainer;