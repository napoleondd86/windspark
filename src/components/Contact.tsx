import React, { ForwardedRef, useEffect } from 'react'
import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = React.forwardRef(({ }, ref: ForwardedRef<HTMLDivElement>) => {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        // intialize emailjs
        emailjs.init("ckB0XAhgG8gqguVtO");
    }, []);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const result = await emailjs.sendForm(
                'service_jn9o0bn',
                'template_ma5gnao',
                e.target as HTMLFormElement,
                'ckB0XAhgG8gqguVtO'
            );
            console.log(result.text);
            setResult("Message sent successfully! We'll get back to you soon.");
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            console.error(error);
            setResult("An error occurred. Please try again or email us directly.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div id="contact" ref={ref} className="bg-gradient-to-r from-[#1e1b4b] to-cyan-500 min-h-screen text-white w-full pt-16">
            <div className='container mx-auto px-4 max-w-5xl'>
                <div className='mt-4 gap-4 flex flex-col p-4 w-full mx-auto items-center'>
                    <p className='text-left opacity-90 max-w-3xl text-2xl'>Let's talk about your project. We're here to help.</p>
                </div>
                <div className='flex flex-col max-w-6xl mx-auto  justify-center items-center'>
                    <section className="p-4 justify-center items-center flex flex-col gap-4 max-w-3xl flex-1 w-full">
                        <form className="contact-form flex flex-col gap-6 w-full" onSubmit={sendEmail}>
                            <div className="relative">
                                <input
                                    className='w-full rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all'
                                    type="text"
                                    name="user_name"
                                    id='user_name'
                                    placeholder='Name'
                                    required
                                />
                            </div>
                            <div className="relative">
                                <input
                                    className='w-full rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all'
                                    type="email"
                                    name="reply_to"
                                    id='reply_to'
                                    placeholder='Email'
                                    required
                                />
                            </div>
                            <div className="relative">
                                <textarea
                                    className='w-full rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all'
                                    name="message"
                                    id='message'
                                    placeholder='Tell us about your project'
                                    rows={8}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className='rounded-full py-3 px-8 bg-white text-blue-600 font-semibold hover:bg-opacity-90 transition-all transform  disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100'
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Sending...
                                    </span>
                                ) : 'Send Message'}
                            </button>
                        </form>
                        {result && (
                            <div className={`text-white font-semibold mt-4 p-4 rounded-lg ${result.includes('error') ? 'bg-red-500/20' : 'bg-green-500/20'
                                }`}>
                                {result}
                            </div>
                        )}
                    </section>
                    <div className='flex flex-col py-4 gap-8'>
                        <div className='flex flex-col gap-4'>
                            <h3 className='text-3xl font-semibold'>Our Location</h3>
                            <p className='opacity-90'>Devils Lake, North Dakota</p>
                        </div>
                        {/* <div className='flex flex-col md:items-end gap-4'>
                            <h3 className='text-3xl font-semibold mb-4 md:pr-8'>Connect With Us</h3>
                            <SocialLinks className="text-white hover:text-blue-200 transition-colors duration-200"/>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Contact;