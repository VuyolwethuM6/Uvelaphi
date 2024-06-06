import React, { useState, useEffect } from 'react';
import Templates from './components/Templates/Templates';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Editor from './components/Editor/Editor';
import SkeletonCard from './components/SkeletonCard/SkeletonCard';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAMDMueFyKy8CZEnUT-UgFpWJ_wJYVRySo",
  authDomain: "uvelaphi-designs.firebaseapp.com",
  projectId: "uvelaphi-designs",
  storageBucket: "uvelaphi-designs.appspot.com",
  messagingSenderId: "407368206430",
  appId: "1:407368206430:web:6df77e45b3881f5b620ccf",
  measurementId: "G-38MR0Q3L8W"
};

initializeApp(firebaseConfig);

function App() {
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        // Fetch all image URLs from Firebase Storage
        const storage = getStorage();
        const storageRef = ref(storage);
        listAll(storageRef)
            .then((res) => {
                const promises = res.items.map((itemRef) => getDownloadURL(itemRef));
                Promise.all(promises)
                    .then((urls) => {
                        setImageUrls(urls);
                    })
                    .catch((error) => {
                        console.error('Error getting image URLs:', error);
                    });
            })
            .catch((error) => {
                console.error('Error listing images:', error);
            });
    }, []); // Empty dependency array to run only once when the component mounts



    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    {/* Render your Templates component */}
                    <Navbar />
                    <Header /> 
                    <Templates imageUrls={imageUrls}/>
                    <Footer />
                </Route>
                <Route path="/editor">
                    <Editor />
                </Route>
            </Switch>
        </Router>





    );
}

export default App;
