import { SetStateAction, useEffect, useState } from "react";

interface QuestionDetails {
    question?: string;
    questionOptions: Array<string>;
    correctOption: string;
    isCorrect: (arg: boolean) => void; // Passing this function allowed two-way communication between parent component and child component
    alreadyCorrect: boolean;
}

const MappingOptions = ({questionOptions, correctOption, isCorrect, alreadyCorrect}: QuestionDetails) => {

    const [selection, setSelection] = useState(''); // Keeps track of currently selected option
    const [selectedCorrectly, setselectedCorrectly] = useState(false); // Vital for checking if user unselected correct option
    const handleSelection = (event: { target: { value: SetStateAction<string>; }; }) => { // VSCode autofilled this prop type
    setSelection(event.target.value) // Updates selection variable
    }
    useEffect(() => { // Updates your current test score in real time
        if(selection === correctOption){
            isCorrect(true);
            setselectedCorrectly(true);
        }
        else if (selection !== correctOption && selectedCorrectly === true){
            isCorrect(false);
        }
    }, [selection])

    useEffect(() => { // Handles questions that were on the correct option immediately
        if(alreadyCorrect === true){
            isCorrect(true);
            setselectedCorrectly(true);
        }
    }, [])

    return (
        <div>
        <select className="selectionStyles" onChange={handleSelection}>
        {
            questionOptions.map(questionOption => { // Maps out all of the question options into select/option tags
                return (
                    <option value={questionOption}>{questionOption}</option>
                )
            })
        }
        </select>
    </div>
    )  
};

const Question = (prop: QuestionDetails) => {
    return (
        <div className="questionBox">
            <label className="questionLabel">{prop.question}</label>
            <br/>
            <br/>
            <MappingOptions questionOptions={prop.questionOptions} correctOption={prop.correctOption} isCorrect={prop.isCorrect} alreadyCorrect={prop.alreadyCorrect} />
        </div>
    )
}

export default Question;
