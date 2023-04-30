import React, { useState } from "react";
import styled from "styled-components";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const Search=()=>{
    const [trip, setTrip] = useState('');
    const handleChange = (event) => {
        setTrip(event.target.value);
    };

    return(
        <>
            <Wrapper>
            <div className="container grid-row-Search">
                <div className="r">
                    <h3>Where are you flying?</h3>
                </div>
                    <div className="r">
                        <Box className="container grid-columns-Search4">
                            <div className="c">
                                    <TextField id="outlined-basic" label='From-To' varient='outlined' />
                            </div>
                            <div className="c">
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Trip</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={trip}
                                        label="Trip"
                                        onChange={handleChange}
                                        >
                                        <MenuItem value={10}>Round</MenuItem>
                                        <MenuItem value={20}>One-Way</MenuItem>
                                        
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                            <div className="c">
                                <TextField id="outlined-basic" label='Depart-Return' varient='outlined' />
                            </div>
                            <div className="c">
                                <TextField id="outlined-basic" label='Passenger-Class' varient='outlined' />
                                
                            </div> 
                        </Box>
                        
                    </div>
                    <div className="r rlast">
                            <Button variant="text">+ Add Promo Code</Button>
                            <Button variant="container">Show Flights</Button>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}


const Wrapper=styled.section`
    input{
        width:322px;
    }

    button{
        width: 142px;
        height:48px;
    }
    .c{
        display:flex;
        flex-direction:column;
        justify-content:center;
    }
    .grid-row-Search{
        height:228px;
        display:grid;
        grid-template-row:.5fr .5fr 3fr;
    }
    .grid-columns-Search4{
        
        display:grid;
        grid-template-columns:1fr .5fr 1fr 1fr;
        gap:32px;
    }
    .r h3{
        font-weight: 600;
        font-size: 20px;
    }
    
    .rlast{
        display:flex;
        flex-direction:row;
        justify-content:right;
    }
`;
export default Search;