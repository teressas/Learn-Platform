import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const subjects = ['Math', 'Science', 'Reading & Writing', 'Geography', 'Social Studies'];

const SubjectDropdown = () => {
    const [subject, setSubject] = useState(subjects[0])

    const handleChange = (e) => {
        setSubject(e.target.value);
    };

    return (
        <>
            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                <InputLabel id="subject-select-label">Subject</InputLabel>
                <Select
                    labelId="subject-select-label"
                    id="subject-select"
                    value={ subject }
                    label="Subject"
                    onChange={ handleChange }
                >
                    {subjects.sort().map((subject, idx) =>
                        <MenuItem key={idx} value={subject}>{subject}</MenuItem>
                    )}
                </Select>
            </FormControl>
        </>
    )
}

export default SubjectDropdown