import * as React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return (
        <div>
            <h1>Synergy Privacy Policy</h1>
            <p>Last Revised: 23 November, 2019</p>
            <p>
                Our privacy policy applies to information we collect when you use or access our website, application, or just interact with us.
                We may change this privacy policy from time to time. Whenever we make changes to this privacy policy,
                the changes are effective one week after we post the revised privacy policy
                (as indicated by revising the date at the top of our privacy policy).
                We encourage you to review our privacy policy whenever you access our services to stay informed about our information practices and
                the ways you can help protect your privacy.
            </p>

            <hr />

            <h2>Collection of Information</h2>
            <h4>Information You Provide to Us</h4>
            <p>
                We collect information you provide directly to us. For example, we collect information when you participate in any interactive features of our services,
                fill out a form, request customer support, provide any contact or identifying information or otherwise communicate with us.
                The types of information we may collect include your name, email address, and other contact or identifying information you choose to provide.
            </p>
            <h4>Information We Collect Automatically When You Use the Services</h4>
            <p>
                When you access or use our services, we automatically collect information about you, including:
            </p>
            <ul className="ml-5">
                <li>
                    Log Information: We log information about your use of our services, including the type of browser you use, access times, and pages viewed.
                </li>
                <li>
                    Information Collected by Cookies: We use various technologies to collect information, and this may include sending cookies to your computer. Cookies are small data files stored on your hard drive or in your device memory that helps us to improve our services and your experience, see which areas and features of our services are popular and count visits.
                </li>
            </ul>
            <h4>Information We Collect From Other Sources</h4>
            <p>In order to provide you with access to the Service, or to provide you with better service in general, we may combine information obtained from other sources (for example, a third-party service whose application you have authorized or used to sign in) and combine that with information we collect through our services.</p>
            
            <hr />

            <h2>Use of Information</h2>
            <p>
                We use information about you for various purposes, including to:
            </p>
            <ul className="ml-5">
                <li>
                    Provide, maintain and improve our services;
                </li>
                <li>
                    Provide services you request and to send you related information;
                </li>
                <li>
                    Send you technical notices, updates, security alerts and support and administrative messages;
                </li>
                <li>
                    Respond to your comments, questions and requests and provide customer service;
                </li>
                <li>
                    Communicate with you about news and information related to our service;
                </li>
                <li>
                    Monitor and analyze trends, usage and activities in connection with our services; and
                </li>
                <li>
                    Personalize and improve our services.
                </li>
            </ul>
            <p>
                By accessing and using our services, you consent to the processing and transfer of your information in and to the United States and other countries.
            </p>

            <hr />

            <h2>Sharing of Information</h2>
            <p>
                We may share personal information about you as follows:
            </p>
            <ul className="ml-5">
                <li>
                    If we believe disclosure is reasonably necessary to comply with any applicable law, regulation, legal process or governmental request;
                </li>
                <li>
                    To enforce applicable user agreements or policies, including our <Link to="/terms-of-service" >Terms of Service</Link>; and to protect us, our users or the public from harm or illegal activities;
                </li>
            </ul>
            <p>
                We may also share aggregated or anonymized information that does not directly identify you ONLY FOR RESEARCH PURPOSES.
            </p>

            <hr />

            <h2>Security</h2>
            <p>
                We take reasonable measures to help protect personal information from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
            </p>

            <hr />

            <h2>Your Information Choices</h2>
            <h4>Location Information</h4>
            <p>
                We never collect and store your location information.
            </p>
            <h4>Cookies</h4>
            <p>
                Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject browser cookies. Please note that if you choose to remove or reject cookies, this could affect the availability and functionality of our services.
            </p>

            <hr />

            <h2>Promotional Communications</h2>
            <p>
                Synergy never carris out promotional activities. You will never receive any promotional emails from us.
            </p>

            <hr />

            <h2>Contact Us</h2>
            <p>Questions or comments about the Service may be directed to us at the email address synergylearn@gmail.com.</p>

        </div>
    )
}

export default PrivacyPolicy;