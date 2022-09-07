import React, { useState } from 'react';
import Auth from '../utils/auth';
import { validateEmail } from '../../utils/helpers';

function AccountInfo() {
    const [formState, setFormState] = useState({ name: '', email: '', cart: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, cart } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
        setFormState({ [e.target.name]: e.target.value });
        console.log('Form', formState);
        }
    
    };
    if(!Auth.loggedIn()) {
        return(
          <h1> 
            Go to Cart
          </h1>  
        )
    }

    return (
        <section>
        <h1 data-testid="h1tag">Account Info</h1>
        <form id="account-form" onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
            </div>
            <div>
            <label htmlFor="email">Email address:</label>
            <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
            </div>
            <div>
            <label htmlFor="message">Message: Checkout Here</label>
            <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
            </div>
            {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
            )}
            <button data-testid="button" type="submit">Submit</button>
        </form>
        </section>
    );
}
	

export default Account