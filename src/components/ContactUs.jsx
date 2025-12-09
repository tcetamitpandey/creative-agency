import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../style/contactUs.css";

export default function ContactUs() {
  const [userDetails, setUserDetails] = useState({
    user_name: "",
    user_company: "",
    user_position: "",
    user_number: "",
    user_email: "",
    user_request: "",
  });

  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");


  function handle_form_value_change(e) {
    setUserDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function validateForm() {
    let newErrors = {};

    if (!userDetails.user_name.trim()) newErrors.user_name = "Name is required";
    if (!userDetails.user_company.trim()) newErrors.user_company = "Company is required";
    if (!userDetails.user_position.trim()) newErrors.user_position = "Position is required";

    if (!userDetails.user_number.trim()) {
      newErrors.user_number = "Phone number is required";
    } else if (!/^[0-9+\-\s]{7,15}$/.test(userDetails.user_number)) {
      newErrors.user_number = "Enter a valid phone number";
    }

    if (!userDetails.user_email.trim()) {
      newErrors.user_email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(userDetails.user_email)) {
      newErrors.user_email = "Invalid email format";
    }

    if (!userDetails.user_request.trim())
      newErrors.user_request = "Please describe your request";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleContactUsForm(e) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await emailjs.send(
        "service_yarmy4z",
        "template_daqhrdx",
        userDetails,
        "y65WhCpW3xViHVQQY"
      );

      setStatusMessage("Your message has been sent successfully!");
      console.log("EmailJS Response:", response);

      setTimeout( ()=>{
        setStatusMessage()
      }  , 5000)


      // Reset form
      setUserDetails({
        user_name: "",
        user_company: "",
        user_position: "",
        user_number: "",
        user_email: "",
        user_request: "",
      });

      setErrors({});
    } catch (error) {

      setTimeout( ()=>{
        setStatusMessage()
      }  , 5000)

      console.error("EmailJS Error:", error);
      setStatusMessage("Failed to send email. Please try again later.");

    }
  }

  return (
    <section className="contactUs_section">
      <form className="contactUs_form" onSubmit={handleContactUsForm}>
    <div className="contactUs_desktop">
      <p>Hello! I'm</p>
      <input type="text" name="user_name" value={userDetails.user_name} placeholder="[YOUR NAME]" onChange={handle_form_value_change} />
      {errors.user_name && <span className="error">{errors.user_name}</span>}

      <p>and I'm contacting you from</p>
      <input type="text" name="user_company" value={userDetails.user_company} placeholder="[COMPANY NAME]" onChange={handle_form_value_change} />
      {errors.user_company && <span className="error">{errors.user_company}</span>}

      <p>as the</p>
      <input type="text" name="user_position" value={userDetails.user_position} placeholder="[POSITION]" onChange={handle_form_value_change} />
      {errors.user_position && <span className="error">{errors.user_position}</span>}

      <p>My phone number is</p>
      <input type="text" name="user_number" value={userDetails.user_number} placeholder="[CONTACT NUMBER]" onChange={handle_form_value_change} />
      {errors.user_number && <span className="error">{errors.user_number}</span>}

      <p>and email</p>
      <input type="email" name="user_email" value={userDetails.user_email} placeholder="[EMAIL]" onChange={handle_form_value_change} />
      {errors.user_email && <span className="error">{errors.user_email}</span>}

      <p>I’m looking to get your help with</p>
      <input type="text" name="user_request" value={userDetails.user_request} placeholder="[REQUEST]" onChange={handle_form_value_change} />
      {errors.user_request && <span className="error">{errors.user_request}</span>}
    </div>

  {/* MOBILE STACKED VERSION */}
  <div className="contactUs_mobile">
    <label>Name</label>
    <input type="text" name="user_name" value={userDetails.user_name} placeholder="Your Name" onChange={handle_form_value_change} />
    {errors.user_name && <span className="error">{errors.user_name}</span>}

    <label>Company</label>
    <input type="text" name="user_company" value={userDetails.user_company} placeholder="Company Name" onChange={handle_form_value_change} />
    {errors.user_company && <span className="error">{errors.user_company}</span>}

    <label>Position</label>
    <input type="text" name="user_position" value={userDetails.user_position} placeholder="Position" onChange={handle_form_value_change} />
    {errors.user_position && <span className="error">{errors.user_position}</span>}

    <label>Phone</label>
    <input type="text" name="user_number" value={userDetails.user_number} placeholder="Contact Number" onChange={handle_form_value_change} />
    {errors.user_number && <span className="error">{errors.user_number}</span>}

    <label>Email</label>
    <input type="email" name="user_email" value={userDetails.user_email} placeholder="Email Address" onChange={handle_form_value_change} />
    {errors.user_email && <span className="error">{errors.user_email}</span>}

    <label>Request</label>
    <textarea name="user_request" value={userDetails.user_request} placeholder="How can we help?" onChange={handle_form_value_change} />
    {errors.user_request && <span className="error">{errors.user_request}</span>}
  </div>

  <div className="contact_button_wrapper">
    <button type="submit">GET IN TOUCH</button>
  </div>

  {statusMessage && <p className="status_message">{statusMessage}</p>}
</form>

    </section>
  );
}
