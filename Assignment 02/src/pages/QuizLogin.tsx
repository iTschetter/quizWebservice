import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

interface QuizLoginForm {
    firstName: string;
    lastName: string;
    quizLoginKey: string;
}

const QuizLogin = () => {

    const{register, handleSubmit, formState: {errors}} = useForm<QuizLoginForm>()
    const navigate = useNavigate();

    const onSubmit = (data: QuizLoginForm) => {
        console.log(data)
        navigate('/Quiz'); // That way, the only way to access the quiz is through the quizloginkey
    }

    return (
        <div className="websiteTopper">
            <h1 className="title">Quiz Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="formStyles">

                <br />
                <input className="loginBoxes" placeholder="First Name" {...register("firstName", {
                    required: "Your First Name is Required!!"
                })}/>
                <br />
                {errors.firstName?.message && <span className="error">{errors.firstName?.message}</span>}
                {errors.firstName?.message && <br />}
                <br />

                <input className="loginBoxes" placeholder="Last Name" {...register("lastName", {
                    required: "Your Last Name is Required!!"
                })}/>
                <br />
                {errors.lastName?.message && <span className="error">{errors.lastName?.message}</span>}
                {errors.lastName?.message && <br />}
                <br />

                <input className="loginBoxes" placeholder="Quiz Login Key" {...register("quizLoginKey", {
                    required: "The Quiz Login Key is Required!",
                    minLength: {
                        value: 12,
                        message: "Invalid login key, must be 12 characters!",
                    },
                    maxLength: {
                        value: 12,
                        message: "Invalid login key, must be 12 characters!",
                    }
                })}/>
                <br />
                {errors.quizLoginKey?.message && <span className="error">{errors.quizLoginKey?.message}</span>}
                {errors.quizLoginKey?.message && <br />}
                <br />

                <button className="submitButton" type="submit">Login</button>

            </form>
            <br />
            <br />
        </div>
    )
}

export default QuizLogin;