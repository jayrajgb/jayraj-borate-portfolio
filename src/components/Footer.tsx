"use client"

import React, { useState } from 'react'
import { z } from 'zod';
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from 'react-toastify';
import Link from 'next/link';

const trusted_domains = ["gmail.com", "yahoo.com", "yahoo.in", "outlook.com", "github.com", "icloud.com"];

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters!" }).regex(/^[a-zA-Z\s]*$/, { message: "Name should not contain special characters!" }),
    email: z.string()
        .email({ message: "Please enter a valid email address!" })
        .refine((email) => {
            const domain = email.split('@')[1]?.toLowerCase();
            return trusted_domains.includes(domain);
        }, {
            message: "Please use a valid email address from a trusted provider (Gmail, Yahoo, Outlook, etc.)"
        }),
    message: z.string()
        .min(4, { message: "Message must be at least 5 characters!" })
        .max(200, { message: "Message must not exceed 200 characters!" })
        .regex(/^[a-zA-Z\s.,!?'"-]*$/, { message: "Message should not contain unsupported special characters!" })
        .regex(/^(?!.*(.)\1{5,}).*$/, { message: "Message contains too many repeated characters!" })
})

const Footer = () => {
    const [isSubmitting, setSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        },
    });

    const resetForm = () => {
        reset();
    };

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setSubmitting(true);
            await sendEmail(values);
        } catch (error) {
            console.error("Form submission error:", error);
            toast.error("Submission Failed!", {
                position: 'bottom-right'
            })
            resetForm();
        } finally {
            setSubmitting(false);
        }
    };

    const sendEmail = async (values: z.infer<typeof formSchema>) => {
        const formData = new FormData();

        try {
            formData.append('userFirstName', values.name);
            formData.append('loginDate', new Date().toISOString());
            formData.append('userMessage', values.message);
            formData.append('userEmail', values.email);

            const response = await fetch("/api/sendEmail", {
                method: "POST",
                body: formData
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            toast.success("Thank you. Visit Again.", {
                position: 'bottom-right'
            })

            resetForm();

        } catch (error) {
            toast.error("Something went wrong!", {
                position: 'bottom-right'
            })
            console.error("Form submission error:", error);
        }
    };

    return (
        <div className='px-10 md:px-12'>
            <footer id="footer" className='pt-24'>
                <div className="footer">
                    <h1 className="header text-5xl sm:text-[5rem]">Contact me</h1>
                    <form className='py-6 flex flex-col w-full sm:w-3/5' onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-2">Name</label>
                            <input 
                                {...register("name")} 
                                type="text" 
                                placeholder="Enter name"
                                className="w-full p-2 border rounded" 
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                        </div>
                        
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2">Email</label>
                            <input 
                                {...register("email")} 
                                type="email" 
                                placeholder="Enter email"
                                className="w-full p-2 border rounded" 
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                        
                        <div className="mb-4">
                            <label htmlFor="message" className="block mb-2">Message</label>
                            <textarea 
                                {...register("message")} 
                                rows={4} 
                                placeholder="Enter message"
                                className="w-full p-2 border rounded"
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                        </div>
                        
                        <button 
                            type="submit" 
                            className="contact mt-4 px-4 py-2 text-base max-w-1/2 self-center" 
                            id="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                    </form>
                </div>

                <div className="links">
                    <Link href="https://github.com/jayrajgb" target='_blank'><img src="./assets/github.svg" alt="github" /></Link>
                    <Link href="https://in.linkedin.com/in/jayraj-borate-433035232" target='_blank'><img src="./assets/linkedin.svg" alt="linkedin" /></Link>
                    <Link href="" target='_blank'><img src="./assets/twitter.svg" alt="twitter" /></Link>
                    <Link href="" target='_blank'><img src="./assets/discord.svg" alt="twitter" /></Link>
                </div>

                <div className="foot">
                    <div className="line"></div>
                    <div className="foot-div px-0 py-2">
                        <div className="hidden md:block">
                            <img src="/assets/JR.png" alt="JR" className='h-5' />
                        </div>
                        <ul className='flex flex-col md:flex-row w-full md:w-auto md:text-3xl md:gap-x-8 text-xl'>
                            <div className='flex w-full justify-between md:gap-x-8'>
                                <li className=""><Link href="/#">HOME</Link></li>
                                <li className=""><Link href="/#about">ABOUT</Link></li>
                                <li className=""><Link href="/#skills">PORTFOLIO</Link></li>
                            </div>
                            <div className='flex w-full justify-around md:gap-x-8'>
                                <li className=""><Link target="_blank" href="/Jayraj_Borate_Resume.pdf">RESUME</Link></li>
                                <li className=""><Link href="/#footer">CONTACT</Link></li>
                            </div>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer