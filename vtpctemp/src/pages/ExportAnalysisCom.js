import React from 'react';
import './ExportAnalysisCom.css';
import styled from 'styled-components';

const Box = styled.div`
background: #CBC3E3;
padding-left: 5px;
margin-top: 5px;
height: 55px;
width: 250px;
font-size: 20px;
`

function ExportAnalysisCom() {
    return (
        <div>
            <div className = 'page-container'>
            <div className = 'heading'>
                <h1> Export Analysis ( Commodity-Wise ) </h1>
            </div>
            <div className = 'buttons-nav'>
                <button className = 'button'>Month-Wise</button>
                <button className = 'button'>Quarter-Wise</button>
                <button className = 'button'>Half-year-Wise</button>
                <button className = 'button'>Annual</button>
            </div>
            <div className = 'main-data-row'>
                <div className = 'main-data-column'>
                    <Box><p>Specific Commodity</p></Box>
                    <Box><p>Other Commodities</p></Box>
                    <Box><p>State</p></Box>
                    <Box><p>Port</p></Box>
                    <Box><p>Countries</p></Box>
                    <Box><p>Sort On</p></Box>
                    <Box><p>Display Records</p></Box>
                </div>
                <div className = 'main-data-column'>
                    <div class="dropdown">  
                        <button class="dropbtn"> Select </button>  
                        <div class="dropdown-content">  
                        <a href="/"> Option 1 </a>  
                        <a href="/"> Option 2 </a>  
                        <a href="/"> Option 3 </a>  
                        </div>  
                    </div>
                    <div class="dropdown">  
                        <button class="dropbtn"> Select</button>  
                        <div class="dropdown-content">  
                        <a href="/"> Option 1 </a>  
                        <a href="/"> Option 2 </a>  
                        <a href="/"> Option 3 </a>  
                        </div>  
                    </div>
                    <div class="dropdown">  
                        <button class="dropbtn"> Select</button>  
                        <div class="dropdown-content">  
                        <a href="/"> Option 1 </a>  
                        <a href="/"> Option 2 </a>  
                        <a href="/"> Option 3 </a>  
                        </div>  
                    </div>
                    <div class="dropdown">  
                        <button class="dropbtn"> Select</button>  
                        <div class="dropdown-content">  
                        <a href="/"> Option 1 </a>  
                        <a href="/"> Option 2 </a>  
                        <a href="/"> Option 3 </a>  
                        </div>  
                    </div>
                    <div class="dropdown">  
                        <button class="dropbtn"> Select</button>  
                        <div class="dropdown-content">  
                        <a href="/"> Option 1 </a>  
                        <a href="/"> Option 2 </a>  
                        <a href="/"> Option 3 </a>  
                        </div>  
                    </div>
                    <div class="dropdown">  
                        <button class="dropbtn"> Select</button>  
                        <div class="dropdown-content">  
                        <a href="/"> Option 1 </a>  
                        <a href="/"> Option 2 </a>  
                        <a href="/"> Option 3 </a>  
                        </div>  
                    </div>
                    <div class="dropdown">  
                        <button class="dropbtn"> Select</button>  
                        <div class="dropdown-content">  
                        <a href="/"> Option 1 </a>  
                        <a href="/"> Option 2 </a>  
                        <a href="/"> Option 3 </a>  
                        </div>  
                    </div>
                </div>
            </div>
            </div>
            <div className = 'main-data-row'>
            <table>
                <tr>
                    <th>Value</th>
                    <th>In Rs</th>
                    <th>US$</th>
                </tr>
                <tr>
                    <td>Quantity</td>
                    <td>In Crore</td>
                    <td>In Lac</td>
                </tr>
            </table>
            </div>
            <div className = 'main-data-row'>
                <button className = 'generate-buttons'>Click To Generate Rank</button>
            </div>
            <div className = 'main-data-row'>
                <button className = 'generate-buttons'>Click To Generate Analysis Report And Download</button>
            </div>
            <div className = 'main-data-row'>
                <button className = 'bottom-buttons1'>Export Value</button>
                <button className = 'bottom-buttons2'>Commodities</button>
                <button className = 'bottom-buttons3'>Total States</button>
            </div>
            <div className = 'main-data-row'>
                <button className = 'bottom-buttons4'>UT's</button>
                <button className = 'bottom-buttons5'>Port</button>
            </div>
        </div>
    )
}

export {ExportAnalysisCom}
