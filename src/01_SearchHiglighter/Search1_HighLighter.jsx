import React, {useState} from 'react';
import Highlighter from "react-highlight-words";

const Search1_HighLighter = () => {

    const text = 'The world is constantly changing and evolving, driven by technological advancements, social and political movements, and other factors. From the rise of artificial intelligence and machine learning to the push for greater diversity and inclusivity, we are seeing profound shifts in how we live, work, and interact with one another. At the same time, we face a host of challenges, including climate change, economic inequality, and political polarization. Yet, despite these difficulties, there is reason for hope. With innovation and collaboration, we can tackle these issues and build a brighter future for ourselves and generations to come.';

    const [words, setWords] = useState([])


    const handleChange = (e) => {
        setWords([e.target.value])
    }


    return (
        <div className="jumbotron vertical-center">
            <div className='container'>

                <div className="card-body">
                    <h2>Basic Highlighter from "react-highlight-words"</h2>
                        <div className='row mt-5'>
                            <div className="input-group mb-3">
                                <input type="text"
                                       className="form-control"
                                       placeholder="Search..."
                                       aria-label="Search..."
                                       aria-describedby="basic-addon2"
                                       onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <Highlighter
                                highlightClassName="yellow_bg"
                                searchWords={words}
                                autoEscape={true}
                                textToHighlight={text}
                            />
                        </div>
                    </div>

            </div>
        </div>

    );
};

export default Search1_HighLighter;