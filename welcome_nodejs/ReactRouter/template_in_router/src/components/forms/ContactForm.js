import {useState} from "react";

export default function ContactForm () {

    const [isDisabled, setIsDisabled] = useState(true)
    const btnClassNames = () => {
        if (isDisabled)
            return "btn btn-primary disabled"
        return "btn btn-primary"
    }

    // Регулярний вираз для перевірки email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const checkValidEmail = (ev) => {
        const inputValue = ev.target.value;

        // Перевірка валідності email
        if (emailRegex.test(inputValue)) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }


    return (
        <form className="form-signup" id="contactForm">

            <div className="row input-group-newsletter">
                <div className="col"><input className="form-control" id="emailAddress" type="email"
                                            placeholder="Enter email address..."
                                            aria-label="Enter email address..."
                                            onChange={checkValidEmail}/></div>
                <div className="col-auto">
                    <button className={btnClassNames()} id="submitButton" type="submit">Notify
                        Me!
                    </button>
                </div>
            </div>
            <div className="invalid-feedback mt-2" data-sb-feedback="emailAddress:required">An email is
                required.
            </div>
            <div className="invalid-feedback mt-2" data-sb-feedback="emailAddress:email">Email is not
                valid.
            </div>

            <div className="d-none" id="submitSuccessMessage">
                <div className="text-center mb-3 mt-2 text-white">
                    <div className="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br/>
                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                </div>
            </div>

            <div className="d-none" id="submitErrorMessage">
                <div className="text-center text-danger mb-3 mt-2">Error sending message!</div>
            </div>
        </form>

    )
}