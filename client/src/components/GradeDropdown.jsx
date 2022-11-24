import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const createGradeLevels = () => {
    let levels = ['K'];
    for (let i = 0; i <= 5; i++) {
        let sum = 0;
        sum += i;
        levels.push(sum);
    }
    return levels;
}

const gradeLevels = createGradeLevels();

const GradeDropdown = () => {

    const [grade, setGrade] = useState(gradeLevels[0])

    const handleChange = (e) => {
        setGrade(e.target.value);
    };

    return (
        <>
            <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
                <InputLabel id="grade-select-label">Grade</InputLabel>
                <Select
                    labelId="grade-select-label"
                    id="grade-select"
                    value={ grade }
                    label="Grade"
                    onChange={ handleChange }
                >     
                    {gradeLevels.map((grade, idx) =>
                        <MenuItem key={idx} value={ grade }>{grade}</MenuItem>
                    )}
                    
                </Select>
            </FormControl>
        </>
    )
}

export default GradeDropdown