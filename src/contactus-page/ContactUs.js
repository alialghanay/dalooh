import React from "react";
import Cboard from "./components/cboard/Cboard";
import ContactUsForm from "./components/contact-us-form/ContactUsForm";
import VisitUs from "./components/visit-us/VisitUs";

function ContactUs() {
    return (
      <main>
          <Cboard />
          <ContactUsForm />
          <VisitUs />
      </main>
    )
}

export default ContactUs;