import { NextRequest, NextResponse } from 'next/server';
import https from 'https';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Helper function to make HTTPS POST request with SSL verification disabled
function httpsPost(url: string, data: any): Promise<any> {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(data);
    
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
      },
      rejectUnauthorized: false, // Disable SSL verification
    };

    const req = https.request(url, options, (res) => {
      let responseData = '';

      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        try {
          const parsed = JSON.parse(responseData);
          resolve(parsed);
        } catch (e) {
          resolve(responseData);
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(postData);
    req.end();
  });
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Try Web3Forms first (easiest, no signup needed)
    const web3formsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || process.env.WEB3FORMS_KEY;
    
    if (web3formsKey) {
      console.log('📧 Sending via Web3Forms...');
      console.log('Using key:', web3formsKey.substring(0, 8) + '...');
      
      try {
        const web3Data = await httpsPost('https://api.web3forms.com/submit', {
          access_key: web3formsKey,
          name: name,
          email: email,
          message: message,
          subject: `New Portfolio Message from ${name}`,
          from_name: name,
        });

        console.log('Web3Forms response:', web3Data);

        if (web3Data.success) {
          console.log('✅ Web3Forms: Email sent successfully');
          return NextResponse.json(
            { 
              success: true, 
              message: 'Message sent successfully! I\'ll get back to you soon.' 
            },
            { status: 200 }
          );
        } else {
          console.error('❌ Web3Forms error:', web3Data);
          throw new Error(web3Data.message || 'Web3Forms submission failed');
        }
      } catch (fetchError) {
        console.error('❌ Web3Forms request error:', fetchError);
        throw fetchError;
      }
    }

    // If no service configured
    console.log('⚠️  No email service configured. Message logged:');
    console.log({
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    });
    
    return NextResponse.json(
      { 
        error: 'Email service not configured. Please email me directly at anandkumarsingh2413@gmail.com'
      },
      { status: 503 }
    );

  } catch (error) {
    console.error('❌ Contact form error:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again or email me directly at anandkumarsingh2413@gmail.com',
        details: errorMessage
      },
      { status: 500 }
    );
  }
}
