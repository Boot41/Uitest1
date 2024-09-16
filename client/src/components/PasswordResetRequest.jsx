import React, { useState } from 'react';

const PasswordResetRequest = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const response = await fetch('/api/request-password-reset/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setMessage('Please check your email for the password reset link.');
            } else {
                setMessage('Failed to request password reset. Please try again.');
            }
        } catch (error) {
            setMessage('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '16px' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Enter your email" 
                    aria-label="Email address" 
                    required 
                    style={{
                        borderRadius: '8px',
                        padding: '12px',
                        marginBottom: '16px',
                        width: '100%',
                        fontSize: window.innerWidth < 768 ? '14px' : '16px',
                    }} 
                />
                <button 
                    type="submit" 
                    disabled={loading} 
                    aria-label="Request Password Reset" 
                    style={{
                        backgroundColor: '#340487',
                        color: '#fff',
                        borderRadius: '8px',
                        padding: '12px',
                        fontSize: window.innerWidth < 768 ? '14px' : '16px',
                        cursor: loading ? 'not-allowed' : 'pointer',
                    }} 
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#4a0a9a'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#340487'}
                >
                    {loading ? 'Loading...' : 'Request Password Reset'}
                </button>
            </form>
            {message && (
                <div 
                    style={{
                        marginTop: '16px',
                        color: '#340487',
                        fontSize: window.innerWidth < 768 ? '14px' : '16px',
                    }}
                    role="alert"
                >
                    {message}
                </div>
            )}
        </div>
    );
};

export default PasswordResetRequest;