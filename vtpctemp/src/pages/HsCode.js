import React from 'react';
import './HsCode.css';
import styled from 'styled-components';

const Box = styled.div`
background: #CBC3E3;
padding-left: 5px;
margin-top: 5px;
height: 55px;
width: 155px;
font-size: 20px;
`

function HsCode() {
    return (
        <div className = 'page-container'>
            <div className = 'heading'>
                <h1> HS Code Analysis </h1>
            </div>
            <div className = 'buttons-nav'>
                <button className = 'button'>Month-Wise</button>
                <button className = 'button'>Quarter-Wise</button>
                <button className = 'button'>Half-year-Wise</button>
                <button className = 'button'>Annual</button>
            </div>
            <div className = 'main-data-row'>
                <div className = 'main-data-column'>
                    <Box><p>State</p></Box>
                    <Box><p>Country</p></Box>
                    <Box><p>Products(HSNC)</p></Box>
                    <Box><p>FTA</p></Box>
                    <Box><p>Tariffs</p></Box>
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
                </div>
                <div className = 'main-data-column'>
                    <Box><p>Market Size</p></Box>
                    <Box><p>Volume</p></Box>
                    <Box><p>Regulations</p></Box>
                    <Box><p>Incentives</p></Box>
                    <Box><p>Tariffs</p></Box>
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
                </div>
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

export{HsCode} 
