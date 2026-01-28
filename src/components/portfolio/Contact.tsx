'use client';

/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import emailjs from '@emailjs/browser';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ContactSection = styled.section`
  padding: 5rem 1.5rem;
  background: white;

  @media (max-width: 768px) {
    padding: 3.5rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const ContactInfo = styled.div`
  animation: ${fadeInUp} 0.8s ease-out;
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

const ContactDescription = styled.p`
  font-size: clamp(0.95rem, 2vw, 1.125rem);
  color: var(--text-secondary);
  margin-bottom: 2rem;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`;

const ContactIcon = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const ContactItemText = styled.div`
  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 0.95rem;
    color: var(--text-secondary);
    margin: 0;
  }
`;

const ContactFormWrapper = styled.div`
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;
`;

const ContactForm = styled.form`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  label {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-primary);
  }

  input,
  textarea {
    padding: 0.875rem 1rem;
    border: 2px solid var(--border-color);
    border-radius: 8px;
    font-size: 1rem;
    font-family: inherit;
    background: white;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    @media (max-width: 768px) {
      padding: 0.75rem 0.875rem;
      font-size: 0.95rem;
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }
`;

const SubmitButton = styled.button<{ disabled?: boolean }>`
  width: 100%;
  padding: 1rem;
  background: ${props => props.disabled 
    ? 'linear-gradient(135deg, #a0aec0 0%, #718096 100%)' 
    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    padding: 0.875rem;
    font-size: 0.95rem;
  }
`;

const FormStatus = styled.p<{ success?: boolean; error?: boolean }>`
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  background: ${props => {
    if (props.error) return '#f8d7da';
    if (props.success) return '#d4edda';
    return '#fff3cd';
  }};
  color: ${props => {
    if (props.error) return '#721c24';
    if (props.success) return '#155724';
    return '#856404';
  }};
  border: 1px solid ${props => {
    if (props.error) return '#f5c6cb';
    if (props.success) return '#c3e6cb';
    return '#ffeaa7';
  }};
  animation: ${fadeInUp} 0.4s ease-out;
`;

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS with public key
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
      console.log('✅ EmailJS initialized');
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const fieldName = e.target.name === 'from_name' ? 'name' : 
                      e.target.name === 'from_email' ? 'email' : 
                      e.target.name;
    setFormData({
      ...formData,
      [fieldName]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    // Check if EmailJS is configured
    if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 
        !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 
        !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 
        !formRef.current) {
      setStatus('❌ Email service not configured. Please contact directly at anandkumarsingh2413@gmail.com');
      setIsSubmitting(false);
      return;
    }

    try {
      // Send email using sendForm (bypasses CORS issues)
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current
      );

      console.log('✅ EmailJS Success:', result.text);
      setStatus('✅ Message sent successfully! I\'ll get back to you soon.');
      
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setStatus('');
      }, 3000);
    } catch (error) {
      console.error('❌ EmailJS Error:', error);
      setStatus('❌ Failed to send message. Please email me directly at anandkumarsingh2413@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactSection id="contact">
      <Container>
        <ContactGrid>
          <ContactInfo>
            <SectionTitle>Contact Me</SectionTitle>
            <ContactDescription>Get in touch for opportunities or just to say hi!</ContactDescription>
            
            <ContactDetails>
              <ContactItem>
                <ContactIcon>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </ContactIcon>
                <ContactItemText>
                  <h4>LinkedIn</h4>
                  <p>linkedin.com/in/anand-singh13</p>
                </ContactItemText>
              </ContactItem>
            </ContactDetails>
          </ContactInfo>
          
          <ContactFormWrapper>
            <ContactForm ref={formRef} onSubmit={handleSubmit}>
              <FormRow>
                <FormGroup>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </FormRow>
              
              <FormGroup>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </SubmitButton>
              
              {status && (
                <FormStatus 
                  success={status.includes('✅')} 
                  error={status.includes('❌')}
                >
                  {status}
                </FormStatus>
              )}
            </ContactForm>
          </ContactFormWrapper>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact;
