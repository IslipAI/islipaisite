import '../body/bodycontainer.css';

function BodyContainer(props) {
    return (
      <div className="bodycontainer">
        <h3>{props.title}</h3>
        <div>
            <p>Body Content</p>
        </div>
      </div>
    );
  }
  
  export default BodyContainer;