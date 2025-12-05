import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  subject,
  message,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
    <div style={{ backgroundColor: '#0B1525', padding: '30px', borderRadius: '8px' }}>
      <h1 style={{ color: '#0AAAA8', fontSize: '28px', marginBottom: '20px' }}>
        New Contact Form Submission 📬
      </h1>
      
      <div style={{ backgroundColor: '#152238', padding: '25px', borderRadius: '4px', color: '#ffffff' }}>
        <div style={{ marginBottom: '20px' }}>
          <p style={{ color: '#0AAAA8', fontWeight: 'bold', marginBottom: '5px', fontSize: '14px' }}>
            FROM:
          </p>
          <p style={{ fontSize: '16px', margin: '0' }}>
            {firstName} ({email})
          </p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <p style={{ color: '#0AAAA8', fontWeight: 'bold', marginBottom: '5px', fontSize: '14px' }}>
            SUBJECT:
          </p>
          <p style={{ fontSize: '16px', margin: '0' }}>
            {subject}
          </p>
        </div>

        <div>
          <p style={{ color: '#0AAAA8', fontWeight: 'bold', marginBottom: '5px', fontSize: '14px' }}>
            MESSAGE:
          </p>
          <p style={{ fontSize: '16px', margin: '0', lineHeight: '1.6' }}>
            {message || 'No message provided'}
          </p>
        </div>
      </div>

      <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <p style={{ color: '#ffffff', opacity: '0.6', fontSize: '12px', textAlign: 'center', margin: '0' }}>
          © {new Date().getFullYear()} Varro Group. All rights reserved.
        </p>
      </div>
    </div>
  </div>
);

