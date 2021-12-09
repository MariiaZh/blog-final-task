
import { Route, Routes } from "react-router-dom";
import Layout from './components/Layout';

import ArticlesScreen from './screens/ArticlesScreen';
import FullArticleScreen from "./screens/FullArticleScreen";
import HomeScreen from './screens/HomeScreen';
//import Authentication from './screens/Authentication';


function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<ArticlesScreen />} />
                <Route path="articles" element={<ArticlesScreen />} />
                <Route path=':id' element={<FullArticleScreen />} />
                <Route path="home" element={<HomeScreen />} />
            </Route>
        </Routes >
    );
}

export default App;
