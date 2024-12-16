import { useEffect, useState } from "react";
import Question from "../components/Question";
import { useNavigate } from "react-router";

const Quiz = () => {

    const navigate = useNavigate();
    const onSubmit = () => {
        navigate('/submittedquiz', {state: {
            userScore: questionsCorrect,
        }}); // Disallowing users to change their choices after selecting submit by taking them to a new webpage
    }

    const [questionsCorrect, setquestionsCorrect] = useState<number>(0); // Scoring variable
    const updateScore = (isCorrect: boolean) => { // Used for real-time scoring, updates automatically via function passing
        if(isCorrect === true){
            setquestionsCorrect(currentCorrectness => {return currentCorrectness + 1})
        } else {
            setquestionsCorrect(currentCorrectness => {return currentCorrectness - 1}) // Used only when the user unselects the correct answer
        }
    }
    useEffect(() => { // Helped with testing
        console.log(questionsCorrect);
    }, [questionsCorrect])

    return (
        <div className="websiteTopper">
            <h1 className="title">Quiz</h1>

            <h1 className="questionTopper">Question 1</h1>
            <div className="questionBubble"><Question questionOptions={['China','Russia','India','Canada']} question="What is the largest country in the world?" correctOption="Russia" isCorrect={updateScore} alreadyCorrect={false} /></div>
            <br />
            
            <h1 className="questionTopper">Question 2</h1>
            <div className="questionBubble"><Question questionOptions={['5','4','3','6']} question="How many great lakes are there?" correctOption="5" isCorrect={updateScore} alreadyCorrect={true} /></div>
            <br />

            <h1 className="questionTopper">Question 3</h1>
            <div className="questionBubble"><Question questionOptions={['China','India','USA','Iceland']} question="What country has the highest population on Earth?" correctOption="India" isCorrect={updateScore} alreadyCorrect={false} /></div>
            
            <h1 className="questionTopper">Question 4</h1>
            <div className="questionBubble"><Question questionOptions={['4','5','6']} question="How many toes do cats have on their back paws?" correctOption="4" isCorrect={updateScore} alreadyCorrect={true} /></div>

            <h1 className="questionTopper">Question 5</h1>
            <div className="questionBubble"><Question questionOptions={['Pluto','Saturn','Uranus','Jupiter']} question="Which planet, in our solar system, has the longest day?" correctOption="Jupiter" isCorrect={updateScore} alreadyCorrect={false} /></div>
            
            <h1 className="questionTopper">Question 6</h1>
            <div className="questionBubble"><Question questionOptions={['Yes','No']} question="Is it possible to see the Great Wall of China from space?" correctOption="No" isCorrect={updateScore} alreadyCorrect={false} /></div>

            <h1 className="questionTopper">Question 7</h1>
            <div className="questionBubble"><Question questionOptions={['Ox','On','Oxy','O']} question="What is the chemical symbol for Oxygen?" correctOption="O" isCorrect={updateScore} alreadyCorrect={false} /></div>
            
            <h1 className="questionTopper">Question 8</h1>
            <div className="questionBubble"><Question questionOptions={['Venus','Mars','Pluto','Mercury']} question="What is the only planet in our solar system that rotates clockwise?" correctOption="Venus" isCorrect={updateScore} alreadyCorrect={true} /></div>

            <h1 className="questionTopper">Question 9</h1>
            <div className="questionBubble"><Question questionOptions={['East','South','West','North']} question="What direction does the sun rise, everyday?" correctOption="East" isCorrect={updateScore} alreadyCorrect={true} /></div>
            
            <h1 className="questionTopper">Question 10</h1>
            <div className="questionBubble"><Question questionOptions={['Iceland','Madagascar','Greenland','New Guinea']} question="What is the largest island in the world?" correctOption="Greenland" isCorrect={updateScore} alreadyCorrect={false} /></div>

            <br />
            <div className="centerBox"><button onClick={onSubmit} className="submitButton2" type="submit">Submit Quiz</button></div>
            
        </div>
    )
}

export default Quiz;