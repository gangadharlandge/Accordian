import React, {useState} from 'react';

const Accordion = ({question,ans}) => {

    const [selected, setSelected] = useState(false)

    return (
        <div>
            <div className='title'>
              <h1> {question} </h1>
              <span  onClick={() => setSelected(!selected)}> {selected? "▲" : "▼"} </span>
            </div>
            
              {selected && <p className='content'>{ans}</p>}
        </div>
    );
}

export default Accordion;
