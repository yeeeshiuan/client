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
        this.getData();
    }

    getData() {

        const options = {
            method: 'GET',
            url: `https://quality.data.gov.tw/dq_download_json.php?nid=29947&md5_url=9ddc3290bbec618eadd9f53869acf542`,
        };

        axios(options)
        .then(res => { 
            this.setState({ data:res.data });
            console.log(res.data);
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
