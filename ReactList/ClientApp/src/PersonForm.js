import React from 'react';

class PersonForm extends React.Component {
    
    render() { 
        return ( 
            <div className= "container">
                <div className= "row jumbotron mt-5">
                <div className= "col-md-3">
                    <input type="text" className="form-control" value={this.props.person.firstName} onChange={this.props.onFirstNameChange} placeholder="First Name"/>
                    </div>
                    <div className= "col-md-3">
                    <input type="text" className="form-control" value={this.props.person.lastName} onChange={this.props.onLastNameChange} placeholder="Last Name"/>
                    </div>
                    <div className= "col-md-3">
                    <input type="text" className="form-control" value={this.props.person.age} onChange={this.props.onAgeChange} placeholder="Age"/>
                    </div>
               
                <div className= "col-md-1">
                    <button style={{fontSize:20}} className="btn btn-outline-info" onClick={this.props.onAddClick}>Add</button>
                    </div>
                    <div className= "col-md-1">
                    <button style={{fontSize:20}} className="btn btn-outline-warning" onClick={this.props.onClearClick}>Clear</button>
                    </div>
        
                </div>
            </div>
         );
    }
}
 
export default PersonForm;