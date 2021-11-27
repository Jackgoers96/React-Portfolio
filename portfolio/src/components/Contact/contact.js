import React, { useState } from "react";
import "./contact.css";
import { validateEmail } from "../../utils/validate";


function Contact() {
    let [userName, setUserName] = useState("");
    let [email, setEmail] = useState("");
    let [text, setText] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;

        if (name === "email") {
            setEmail(value);
        } else if (name === "userName") {
            setUserName(value);
        } else {
            setText(value);
        }
        return;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Button clicked");

        if (!userName) {
            setErrorMessage("Name is a required field!");
        } else if (!email) {
            setErrorMessage("Email is a required field!");
        } else if (!text) {
            setErrorMessage("Message is a required field!");
        } else {
            setErrorMessage("");
        }

        const isValid = validateEmail(email);

        if (!isValid) {
            setErrorMessage("Please, eneter a valid email!");
        }

        setUserName("");
        setEmail("");
        setText("");
    };

    return (
        <div>
            <div className="contact">
                <h1 className="contact-text">Connect with me!</h1>
                <form className="form">
                    <div Id="name">
                        <label className="labelText">
                            Name
                        </label>
                        <input
                            className="contact-input"
                            type="text"
                            placeholder="Enter name"
                            name="userName"
                        />
                    </div>
                    <div Id="email">
                        <div className="labelText">
                            Email address
                        </div>
                        <input
                            type="email"
                            placeholder="name@example.com"
                            onChange={handleInputChange}
                            value={email}
                            name="email"
                        />
                    </div>
                    <div Id="Message">
                        <div className="labelText">
                            Message
                        </div>
                        <input
                            id="textarea"
                            as="textarea"
                            rows={3}
                            onChange={handleInputChange}
                            value={text}
                            name="text"
                        />
                    </div>
                    <button
                        className="submit"
                        as="input"
                        type="submit"
                        value="Submit"
                        onClick={handleFormSubmit}
                    >{" "}Submit</button>
                </form>

            </div >
        </div >
    );
}

export default Contact;