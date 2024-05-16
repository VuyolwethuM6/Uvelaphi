import React, { useState, useEffect } from 'react';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import './Templates.css'; // Importing CSS file for styles
import SkeletonCard from '../SkeletonCard/SkeletonCard'; // Importing SkeletonCard component
// import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';

const Templates = ({ imageUrls}) => {
    // State variables to manage current tab and its corresponding images
    const [currentTab, setCurrentTab] = useState('all');
    const [currentTabImages, setCurrentTabImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // State variable for loading state
    const history = useHistory();

    useEffect(() => {
        // Function to fetch images from Firebase Storage based on the selected tab
        const fetchImages = async (folderName) => {
            const storage = getStorage();
            const folderRef = ref(storage, folderName);
            try {
                const res = await listAll(folderRef);
                const promises = res.items.map((itemRef) => getDownloadURL(itemRef));
                const urls = await Promise.all(promises);
                setCurrentTabImages(urls);
                setIsLoading(false); // Set loading state to false once images are fetched
            } catch (error) {
                console.error(`Error listing images in ${folderName}:`, error);
            }
        };

        // Fetch images when the current tab changes
        if (currentTab !== 'all') {
            setIsLoading(true); // Set loading state to true before fetching images
            fetchImages(currentTab);
        } else {
            setCurrentTabImages(imageUrls); // Use provided image URLs for "All Templates" tab
            setIsLoading(false); // Set loading state to false when using provided image URLs
        }
    }, [currentTab, imageUrls]);

    // Function to handle tab clicks
    const openTab = (event, tabName) => {
        setCurrentTab(tabName);
    }

    // const openImageInNewTab = (imageUrl) => {
    //     // Logic to open the image in a new tab
    //     window.open(imageUrl, '_blank');
    //   };

  const handleLinkClick = (event, imageUrl) => {
    // event.preventDefault();
    const newUrl = `/editor?imageUrl=${imageUrl}`;
    history.push(newUrl);
  };
  const handleCustomizeClick = (event) => {
    event.preventDefault();
    history.push('/editor'); // Redirect to the editor page
  };


    return (
        <div className="templates-container">
            {/* Tab buttons */}
            <div className="tab">
                <button className={`tablinks ${currentTab === 'all' ? 'active' : ''}`} onClick={(e) => openTab(e, 'all')}>All Templates</button>
                <button className={`tablinks ${currentTab === 'posters' ? 'active' : ''}`} onClick={(e) => openTab(e, 'posters')}>Posters</button>
                <button className={`tablinks ${currentTab === 'invitation-cards' ? 'active' : ''}`} onClick={(e) => openTab(e, 'invitation-cards')}>Invitation Cards</button>
            </div>

            {/* Content section */}
            <div className="tabcontent">
                {isLoading ? ( // Display skeleton cards while loading
                    <div className="card-grid">
                        {[...Array(7)].map((_, index) => <SkeletonCard key={index} />)} {/* Display 10 skeleton cards */}
                    </div>
                ) : (
                    <div className="card-grid">
                        {/* Mapping through current tab images */}
                        {currentTabImages.map((imageUrl, index) => (
                            <div className="card" key={index}>
                                {/* Image */}
                                <img src={imageUrl} alt={currentTab === 'posters' ? 'Poster' : 'Invitation Card'} />

                                {/* Link to customize */}
                                {/* <a className="card-link" href="/editor" onClick={() => openImageInNewTab(imageUrl)}>Customize</a> */}
                                {/* <button className="card-link" onClick={() => openImageInEditor(imageUrl)}>Customize</button> */}
                                {/* <Link className="card-link" to="#" onClick={() => openImageInEditor(imageUrl)}>Customize</Link> */}
                                {/* <Link to={`/editor?imageUrl=${imageUrl}`} className="card-link" key={imageUrl} >Customize</Link> */}
                                {/* <Link to={`/editor?imageUrl=${imageUrl}`} className="card-link" onClick={(event) => handleLinkClick(event, imageUrl)}>
                                    Customize
                                </Link> */}
                                <a className="card-link" href="#" onClick={handleCustomizeClick}>Customize</a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Templates;
