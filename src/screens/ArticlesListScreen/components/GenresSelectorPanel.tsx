import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import { articlesWorkerActions } from "../../../store/articlesWorker";

import { Box, MenuItem, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import genres_array from '../../../models/genres_array';


const GenresSelectorPanel: React.FC = () => {


    const dispatch = useDispatch();
    const [genre, setGenre] = useState('');

    const selectChangeHandler = (event: SelectChangeEvent) => {

        dispatch(articlesWorkerActions.changeSelectedGenre(event.target.value));
        setGenre(event.target.value);
    };

    return (
        <Box style={{ marginLeft: 212 }}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 170 }}>
                <Select
                    labelId="label"
                    id="select-standard"
                    value={genre}
                    onChange={selectChangeHandler}
                    label="Genres"
                >
                    <MenuItem value="">
                        <em>Select Genre</em>
                    </MenuItem>
                    {genres_array.map(
                        genre => <MenuItem
                            key={genre}
                            value={genre}>
                            {genre}
                        </MenuItem>
                    )}
                </Select>
            </FormControl>
        </Box>
    )
}

export default GenresSelectorPanel;