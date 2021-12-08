import React, { useState } from "react";
import dummy_users from "../models/dummy_users";
import dummy_posts from "../models/dummy_posts";
import { Tabs, Tab, Typography, Box } from '@mui/material';
import PreviewCard from '../components/PreviewCard';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// Later logic of genres will be work with reducers

type Comment = {
    author: boolean,
    nickName: string,
    date: string,
    text: string
}

type ArticleBlock = {
    authorId: string;
    image: string;
    title: string;
    text: string;
    date: string;
    categories: string[];
    comments: Comment[];
    likes: number;
}

const lastAddedList: ArticleBlock[] = [];
const mostLikedList: ArticleBlock[] = dummy_posts.sort((a, b) => a.likes < b.likes ? 1 : -1);
let genreSortedList: ArticleBlock[] = [];

for (let i = 4; i > 0; i--) {
    lastAddedList.push(dummy_posts[dummy_posts.length - i]);
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const genresArray: string[] = ['Action', "Mystery", 'Thriller', "Drama", 'Fantasy', 'Horror', 'Comedy', 'Adventure', 'Biography', "History",
];


const ArticlesScreen = () => {
    const [value, setValue] = useState(0);
    const [isGenreTab, setIsGenreTab] = useState(false);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const [genre, setGenre] = useState('');


    const selectChangeHandler = (event: SelectChangeEvent) => {
        genreSortedList = [];

        dummy_posts.forEach(post => {
            let isGenreExist = post.categories.find(
                genre => genre === event.target.value
            );
            if (isGenreExist) {
                genreSortedList.push(post);
            }
        });

        setGenre(event.target.value);

        console.log(' genreSortedList:', genreSortedList)
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Last Added" {...a11yProps(0)} onClick={() => { setIsGenreTab(false); }} />
                    <Tab label="Top-Liked" {...a11yProps(1)} onClick={() => { setIsGenreTab(false); }} />
                    <Tab label="Genres" {...a11yProps(2)} onClick={() => { setIsGenreTab(true); }} />
                </Tabs>
                {isGenreTab ? (
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
                                {genresArray.map(
                                    genre => <MenuItem
                                        key={genre}
                                        value={genre}>
                                        {genre}
                                    </MenuItem>
                                )}
                            </Select>
                        </FormControl>
                    </Box>
                ) : ''}
            </Box>
            <TabPanel value={value} index={0}>
                <Box style={{ display: "flex", flexFlow: "row wrap", justifyContent: "space-around" }}>
                    {lastAddedList.map(post => {
                        let postAuthor: string | void = dummy_users.find(user => user.userId === post.authorId)?.nickName;
                        if (typeof postAuthor === "undefined") {
                            postAuthor = "Incognita";
                        }
                        const postText = post.text.split('.');
                        const postTitle = post.title.split(' ');
                        return (
                            <PreviewCard
                                key={postTitle[0] + post.date}
                                title={post.title}
                                text={postText[0] + '...'}
                                likes={post.likes}
                                image={post.image}
                                author={postAuthor}
                                date={post.date}
                            />
                        )
                    })}
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Box style={{ display: "flex", flexFlow: "row wrap", justifyContent: "space-around" }}>
                    {mostLikedList.map(post => {
                        let postAuthor: string | void = dummy_users.find(user => user.userId === post.authorId)?.nickName;
                        if (typeof postAuthor === "undefined") {
                            postAuthor = "Incognita";
                        }
                        const postText = post.text.split('.');
                        const postTitle = post.title.split(' ');
                        return (
                            <PreviewCard
                                key={postTitle[0] + post.date}
                                title={post.title}
                                text={postText[0] + '...'}
                                likes={post.likes}
                                image={post.image}
                                author={postAuthor}
                                date={post.date}
                            />
                        )
                    })}
                </Box>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Box style={{ display: "flex", flexFlow: "row wrap", justifyContent: "space-around" }}>
                    {genreSortedList.map(post => {
                        let postAuthor: string | void = dummy_users.find(user => user.userId === post.authorId)?.nickName;
                        if (typeof postAuthor === "undefined") {
                            postAuthor = "Incognita";
                        }
                        const postText = post.text.split('.');
                        const postTitle = post.title.split(' ');
                        return (
                            <PreviewCard
                                key={postTitle[0] + post.date}
                                title={post.title}
                                text={postText[0] + '...'}
                                likes={post.likes}
                                image={post.image}
                                author={postAuthor}
                                date={post.date}
                            />
                        )
                    })}
                </Box>
            </TabPanel>
        </Box >
    );
}

export default ArticlesScreen;