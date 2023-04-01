import React, { useState } from 'react';

function OnlyJS_01() {

    const text = 'The world is constantly changing and evolving, driven by technological advancements, social and political movements, and other factors. From the rise of artificial intelligence and machine learning to the push for greater diversity and inclusivity, we are seeing profound shifts in how we live, work, and interact with one another. At the same time, we face a host of challenges, including climate change, economic inequality, and political polarization. Yet, despite these difficulties, there is reason for hope. With innovation and collaboration, we can tackle these issues and build a brighter future for ourselves and generations to come.';

    const [searchTerms, setSearchTerms] = useState(['', '']);
    const [highlightedText, setHighlightedText] = useState(text);

    const handleSearchChange = (event, index) => {
        const newTerms = [...searchTerms];
        newTerms[index] = event.target.value;
        setSearchTerms(newTerms);
    };

    const highlightText = (text, highlight, color) => {
        if (typeof text === 'string') {
            const regex = new RegExp(`(${highlight})`, 'gi');
            return text.split(regex).map((part, i) => part.match(regex) ? <mark key={i} style={{ backgroundColor: color }}>{part}</mark> : part);
        } else {
            return text.map((part, i) => {
                if (typeof part === 'string') {
                    const regex = new RegExp(`(${highlight})`, 'gi');
                    return part.split(regex).map((innerPart, j) => innerPart.match(regex) ? <mark key={`${i}-${j}`} style={{ backgroundColor: color }}>{innerPart}</mark> : innerPart);
                } else {
                    return part;
                }
            });
        }
    };


    const handleSearchClick = () => {
        let highlightedText = text;
        for (let i = 0; i < searchTerms.length; i++) {
            if (searchTerms[i]) {
                highlightedText = highlightText(highlightedText, searchTerms[i], ['pink', 'yellow'][i]);
            }
        }
        setHighlightedText(highlightedText);
    };

    return (
        <div className="jumbotron vertical-center">
            <div className='container'>

                <div className="card-body">
                    <h2>Highlight with 2 colors. Only JS</h2>

                    <div className='row mt-5'>
                        <div className='d-flex justify-content-center'>
                            <div className="input-group mb-3">
                                {searchTerms.map((term, i) => (
                                    <input type="text"
                                           className="form-control me-2"
                                           key={i}
                                           value={term}
                                           onChange={(event) => handleSearchChange(event, i)}
                                           placeholder={`Search ${['pink', 'yellow'][i]}...`}
                                    />
                                ))}

                                <div className="input-group-append">
                                    <button className="btn btn-outline-primary" type="button" onClick={handleSearchClick}>
                                        Search
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='row mt-3'>
                        <p>
                            {highlightedText}
                        </p>
                    </div>
                </div>


            </div>

        </div>

        // <div className="jumbotron vertical-center">
        //     <div className='container'>
        //
        //         <div className="card-body">
        //             <h2>Highlight 2 colors, only JS</h2>
        //             <div className='row mt-5'>
        //                 <div className="input-group mb-3">
        //
        //                     {searchTerms.map((term, i) => (
        //                     <input type="text"
        //                            className="form-control"
        //                            key={i}
        //                            value={term}
        //                            onChange={(event) => handleSearchChange(event, i)}
        //                            placeholder={`Search ${['pink', 'yellow'][i]}...`}
        //                     />)}
        //                     <div className="input-group-append">
        //                         <button className="btn btn-outline-secondary" type="button" onClick={handleSearchClick}>
        //                             Search
        //                         </button>
        //                     </div>
        //                 </div>
        //             </div>
        //
        //             <div className='row mt-3'>
        //                 {highlightedText}
        //
        //             </div>
        //         </div>
        //
        //     </div>
        // </div>
    );
}

export default OnlyJS_01;
