import { Component } from 'react';
//Lets Create a Class component with State Property
export default class A extends Component{
    //1. Property
    //Every JS Object have 2 Member
    // Decleration and Initialization
    state={
        //1.Properties
        //P:V
        name:'Anil',
        'surname':"dollor",
        "address":'Neemuch'
        //2. Methods
    };

    //2. Constructor
    constructor(){
        //Call the parent constructor via super Method
        super();
        this.state.name = 'Ravi';
        /*
        this.setState((state, props) => {
            //return {state.name = 'ravi'};
        });
        */
        //. The Role of Constructor is to initialize the members
    }

    //3. Methods
    //Hur Class component ke andar render method hota hai
    // Render Method html return krta hai
    render(){  // JSX Javascript XML
        return (
            <p>
                <h1>Hello</h1>
                <h2>{ this.state.name }</h2>
            </p>
        );
    }
}
