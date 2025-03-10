import { useState, FormEvent, ChangeEvent } from 'react';
import '../styles/ContactPage.css';
import HeroSection from "../components/HeroSection/HeroSection";
import home2 from "../assets/images/home2.jpg";
import { ToastContainer, toast } from 'react-toastify';
import { FaSpinner } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const initialFormData: FormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
};

function ContactPage() {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
            };

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            toast.success('Message sent successfully! We will get back to you shortly.');
            setFormData(initialFormData);
        } catch (error) {
            console.error('Submission error:', error);
            toast.error('Error sending message. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-page-wrapper">
            <ToastContainer 
                position="top-center" 
                autoClose={5000} 
                hideProgressBar={false} 
                newestOnTop={false} 
                closeOnClick 
                rtl={false} 
                pauseOnFocusLoss 
                draggable 
                pauseOnHover 
            />
            <HeroSection
                backgroundImage={home2}
                title="Contact Us"
            />
            <div className="contact-container">
                <div className="contact-form-container">
                    <h2 className="header-text">Send us a message</h2>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder="Name*" 
                            value={formData.name}
                            onChange={handleChange} 
                            required
                            disabled={isSubmitting}
                        />
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Email Address*" 
                            value={formData.email}
                            onChange={handleChange} 
                            required
                            disabled={isSubmitting}
                        />
                        <input 
                            type="text" 
                            id="subject" 
                            name="subject" 
                            placeholder="Subject*"
                            value={formData.subject} 
                            onChange={handleChange} 
                            required
                            disabled={isSubmitting}
                        />
                        <textarea 
                            id="message" 
                            name="message" 
                            placeholder="Message" 
                            value={formData.message}
                            onChange={handleChange} 
                            required
                            disabled={isSubmitting}
                        />
                        <button 
                            type="submit" 
                            className="submit-btn"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <FaSpinner className="spinner" />
                                    Sending...
                                </>
                            ) : (
                                'Submit'
                            )}
                        </button>
                        <p className="form-disclaimer">
                            Your data is always safe with us. We will only contact you in
                            conjunction with your enquiry and your details are stored securely in the meantime. We do
                            not work with third party marketing organisations.
                        </p>
                    </form>
                </div>
                <div className="contact-info">
                    <div className="contact-method">
                        <h2 className="header-text">Call us</h2>
                        <p>Our lines are open 8:30am – 5pm Monday to Friday for sales and general enquiries.</p>
                        <p className="contact-highlight">+234 (0)8054 528088</p>
                    </div>
                    <div className="contact-method">
                        <h2 className="header-text">Email us</h2>
                        <p>Send us an email at any time with your enquiry, complete the form and a member of our team
                            will come back to you shortly.</p>
                        <p className="contact-highlight">zac_y56@yahoo.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
