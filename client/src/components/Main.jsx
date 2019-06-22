import React, { Component } from 'react';

import axios from 'axios';

import MyResponsivePie from './charts/MyResponsivePie';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            indexThermalPowerGenerationCO2: 0,
            dataChoosed : [],
        };

        this.data = {};

        this.getData = this.getData.bind(this);
        this.thermalPowerGenerationCO2 = this.thermalPowerGenerationCO2.bind(this);
        this.thermalPowerGenerationCO2Action = this.thermalPowerGenerationCO2Action.bind(this);
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
            this.thermalPowerGenerationCO2(response.data);
        })
    }
    // 處理得到的資料
    thermalPowerGenerationCO2(data) {

        let result = [];
        let count = 0;
        let colorSet = ["hsl(130, 70%, 50%)", "hsl(81, 70%, 50%)", "hsl(186, 70%, 50%)"];
        data.message.forEach(function(element) {
            let colorIndex = count % 3;
            let year = {};
            let nowYear =  element["年度"];
            let isYearExist = false;
            for (let index = 0; index < result.length; ++index) {
                if ( element["年度"] in result[index] ) {
                    isYearExist = true;
                    year = result[index];
                    break;
                }
            }
            if ( ! isYearExist ) {
                year[nowYear] = [];
            }

            let e = {"id": element["發電方式"], 
                     "label": element["占比(%)"], 
                     "value": parseInt(element["排放量(萬噸)"]), 
                     "color": colorSet[colorIndex]};

            year[nowYear].push(e);
            
            if ( ! isYearExist ) {
                result.push(year);
            }
            
            count += 1;
        });
        
        this.data = result;
        this.thermalPowerGenerationCO2Action(0);
    }
    // 選擇呈現的資料
    thermalPowerGenerationCO2Action(index) {
        this.setState({ dataChoosed: this.data[index][Object.keys(this.data[index])[0]] });
    }

    render() {
        return (
                <div>
                    <p>This is my App.(Main)</p>
                    <div style={{height: 200}}>
                        <MyResponsivePie data={this.state.dataChoosed} />
                    </div>
                </div>
        )
    }
}

export default Main;
