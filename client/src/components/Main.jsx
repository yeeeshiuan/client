import React, { Component } from 'react';
import axios from 'axios';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            data : {},
        };

        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
    // if there is no channel name there, get the top stream channel
        this.getData("thermalPowerGenerationCO2");
    }

    getData(apiKey) {

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            url: `${process.env.REACT_APP_API_DOMAIN_NAME_URL}/base/api/` + apiKey,
        };

        axios(options)
        .then(response => { 

            this.setState({ data:response.data });
            console.log(response.data);
        })
    }

    render() {
        return (
                <div>
                    <p>This is my App.(Main)</p>
                    
                </div>
        )
    }
}

export default Main;
