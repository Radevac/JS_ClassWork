import ContactForm from "../components/forms/ContactForm";
import {usePageContext} from "../context/PageContext";

export default function ContactPage (props) {

    props.setByPropsPageName (' Contact ')

    const { setByContextPageName } = usePageContext();
    setByContextPageName('Contact by Context from Component');

    return(
        <section className="signup-section" id="signup">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-10 col-lg-8 mx-auto text-center">
                        <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
                        <h2 className="text-white mb-5">Subscribe to receive updates!</h2>

                        <ContactForm />

                    </div>
                </div>
            </div>
        </section>

    )
}