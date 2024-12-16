import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import QuizLogin from "./pages/QuizLogin";
import Quiz from "./pages/Quiz";
import SubmittedQuiz from "./pages/submittedQuiz";

const Router = () => (
    <BrowserRouter>
    <Routes>
        <Route element={<MainLayout/>}>
            <Route index element={<QuizLogin />} />
            <Route path="quiz" element={<Quiz/>} />
            <Route path="submittedquiz" element={<SubmittedQuiz/>} />
        </Route>
    </Routes>
    </BrowserRouter>
)


export default Router