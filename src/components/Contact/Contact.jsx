import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const formElements = form.current;
    const userName = formElements.user_name.value;
    const userEmail = formElements.user_email.value;
    const subject = formElements.subject.value;
    const message = formElements.message.value;

    const payload = {
      Name: userName,
      Email: userEmail,
      Subject: subject,
      Message: message,
      _replyto: userEmail,
      _subject: `Portfolio Message from ${userName}: ${subject}`,
      _captcha: "false",
      _template: "table",
    };

    // 1. Try sending directly to anushlodam@gmail.com via FormSubmit
    try {
      const response = await fetch("https://formsubmit.co/ajax/anushlodam@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success === "true" || data.success === true) {
        setIsSending(false);
        formElements.reset();
        toast.success("Message sent successfully to anushlodam@gmail.com! 🚀", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
        return;
      }

      // Check if FormSubmit needs 1-time activation
      if (data.message && data.message.toLowerCase().includes("activation")) {
        setIsSending(false);
        toast.warning(
          "Activation required! Please check anushlodam@gmail.com and click 'Activate Form' once.",
          {
            position: "top-right",
            autoClose: 8000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          }
        );
        return;
      }

      throw new Error(data.message || "FormSubmit failed");
    } catch (err) {
      console.warn("FormSubmit attempt failed, attempting EmailJS fallback...", err);

      // 2. Fallback to EmailJS
      try {
        await emailjs.sendForm(
          "service_8fi4iov",
          "template_6aqusyb",
          formElements,
          "ATS0QR0jjiI3OPVUs"
        );
        setIsSending(false);
        formElements.reset();
        toast.success("Message sent successfully! 🚀", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      } catch (emailJsError) {
        setIsSending(false);
        console.error("Both services failed:", err, emailJsError);

        toast.error(
          "Unable to send automatically. Please check your Gmail activation or click below to email directly.",
          {
            position: "top-right",
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          }
        );

        // Fallback open mailto
        window.open(
          `mailto:anushlodam@gmail.com?subject=${encodeURIComponent(
            subject
          )}&body=${encodeURIComponent(
            `Name: ${userName}\nEmail: ${userEmail}\n\nMessage:\n${message}`
          )}`,
          "_blank"
        );
      }
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center font-sans relative"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          CONTACT
        </h2>
        <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-300/80 mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal">
          I’d love to hear from you—reach out for any collaborations, opportunities, or questions!
        </p>
      </div>

      {/* Contact Form Card */}
      <div className="w-full max-w-xl bg-[#0d081f]/90 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl border border-purple-500/20 shadow-purple-950/30">
        <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-2">
          Connect With Me <span className="inline-block animate-bounce">🚀</span>
        </h3>
        <p className="text-center text-xs sm:text-sm text-gray-400 mb-6">
          Send me a message and I will get back to you as soon as possible.
        </p>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4 sm:space-y-5">
          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
              Your Name
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="e.g. John Doe"
              required
              className="w-full p-3.5 rounded-xl bg-[#131025] text-white placeholder-gray-500 border border-gray-700/80 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
              Your Email
            </label>
            <input
              type="email"
              name="user_email"
              placeholder="e.g. john@example.com"
              required
              className="w-full p-3.5 rounded-xl bg-[#131025] text-white placeholder-gray-500 border border-gray-700/80 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="e.g. Project Collaboration / Job Opportunity"
              required
              className="w-full p-3.5 rounded-xl bg-[#131025] text-white placeholder-gray-500 border border-gray-700/80 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              rows="4"
              required
              className="w-full p-3.5 rounded-xl bg-[#131025] text-white placeholder-gray-500 border border-gray-700/80 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition resize-none text-sm sm:text-base"
            />
          </div>

          {/* Send Button */}
          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 py-3.5 text-white font-bold rounded-xl hover:opacity-95 active:scale-[0.99] transition shadow-lg shadow-purple-600/30 disabled:opacity-50 flex items-center justify-center gap-2 text-base sm:text-lg"
          >
            {isSending ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
                <span>Sending...</span>
              </>
            ) : (
              <span>Send Message 🚀</span>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;