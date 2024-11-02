import React from "react";
import contactCss from "./contact.module.css";
import Swal from 'sweetalert2';


const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "6f64d16b-4a65-460d-9811-780a2012d987");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success",
                text: "The message was successfully sent.",
                icon: "success"
            });            
        }
    };

    return (
        <div className={contactCss.section}>
            <h2 className={contactCss.title}>Contact Me</h2>

            <form onSubmit={onSubmit} className={contactCss.container} name="from the Personal website">
                <div className={contactCss.input_box}>
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" className={contactCss.field} placeholder="Enter Your Name" name="Full Name" required />
                </div>

                <div className={contactCss.input_box}>
                    <label htmlFor="email">Email</label>
                    <input type="email" className={contactCss.field} placeholder="Enter Your Email" name="Email" required />
                </div>

                <div className={contactCss.input_box}>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="Message" className={contactCss.field} placeholder="Enter Your Message" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
