
import { Route, Routes } from "react-router-dom";
import Layout from './components/Layout';

import ArticlesScreen from './screens/ArticlesListScreen/ArticlesListScreen';
import FullArticleScreen from "./screens/FullArticleScreen/FullArticleScreen";
import UserScreen from './screens/UserScreen/UserScreen';
//import Authentication from './screens/Authentication';


function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<ArticlesScreen />} />
                <Route path="articles" element={<ArticlesScreen />} />
                <Route path=':id' element={<FullArticleScreen />} />
                <Route path="home" element={<UserScreen />} />
            </Route>
        </Routes >
    );
}

export default App;
