// Vercel Serverless Function for Waitlist
// This replaces the need for a separate backend server!

const nodemailer = require('nodemailer');

// MongoDB connection (optional - you can remove this if you don't want database)
const { MongoClient } = require('mongodb');

// CORS headers for API
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).json({ success: true });
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed' 
    });
  }

  try {
    const { email, isTuroHost, wouldUse, howDidYouHear, referralDetails, otherSource, additionalInfo } = req.body;

    // Validate required fields
    if (!email || !isTuroHost || !wouldUse || !howDidYouHear) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields'
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address'
      });
    }

    // STEP 1: Save to MongoDB (OPTIONAL - comment out if not using database)
    let savedToDatabase = false;
    if (process.env.MONGODB_URI) {
      try {
        const client = await MongoClient.connect(process.env.MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        
        const db = client.db(process.env.DB_NAME || 'turnover-manager');
        const collection = db.collection('waitlists');
        
        // Check for duplicate
        const existing = await collection.findOne({ email: email.toLowerCase() });
        if (existing) {
          await client.close();
          return res.status(200).json({
            success: false,
            message: 'This email is already on the waitlist!'
          });
        }
        
        await collection.insertOne({
          email: email.toLowerCase(),
          isTuroHost,
          wouldUse,
          howDidYouHear,
          referralDetails: referralDetails || '',
          otherSource: otherSource || '',
          additionalInfo,
          emailSent: false,
          createdAt: new Date(),
        });
        
        await client.close();
        savedToDatabase = true;
        console.log(`✅ Saved to database: ${email}`);
      } catch (dbError) {
        console.error('Database error:', dbError);
        // Don't fail - continue with email even if DB fails
      }
    }

    // STEP 2: Send Emails
    let emailSent = false;
    let emailError = null;
    
    // Debug logging
    console.log('🔍 Email Config Check:');
    console.log('GMAIL_USER exists:', !!process.env.GMAIL_USER);
    console.log('GMAIL_APP_PASSWORD exists:', !!process.env.GMAIL_APP_PASSWORD);
    console.log('GMAIL_USER value:', process.env.GMAIL_USER);
    
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      try {
        // Remove spaces from password (common issue with Gmail app passwords)
        const cleanPassword = process.env.GMAIL_APP_PASSWORD.replace(/\s+/g, '');
        
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.GMAIL_USER,
            pass: cleanPassword,
          },
        });
        
        console.log('✅ Transporter created successfully');

        // Email to owner
        await transporter.sendMail({
          from: `"Turnover Manager" <${process.env.FROM_EMAIL || process.env.GMAIL_USER}>`,
          replyTo: process.env.FROM_EMAIL || process.env.GMAIL_USER,
          to: process.env.GMAIL_USER,
          subject: `🎯 New Waitlist Signup - ${email}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #4F46E5; border-bottom: 3px solid #4F46E5; padding-bottom: 10px;">
                🎉 New Waitlist Signup!
              </h2>
              
              <div style="background: #F3F4F6; padding: 20px; border-radius: 10px; margin: 20px 0;">
                <h3 style="color: #1F2937; margin-top: 0;">Contact Information</h3>
                <p><strong>Email:</strong> ${email}</p>
              </div>

              <div style="background: #EEF2FF; padding: 20px; border-radius: 10px; margin: 20px 0;">
                <h3 style="color: #1F2937; margin-top: 0;">Responses</h3>
                
                <div style="margin-bottom: 15px;">
                  <strong style="color: #4F46E5;">Are they a Turo host?</strong>
                  <p style="margin: 5px 0;">${isTuroHost}</p>
                </div>

                <div style="margin-bottom: 15px;">
                  <strong style="color: #4F46E5;">Would they use Turnover Manager?</strong>
                  <p style="margin: 5px 0;">${wouldUse}</p>
                </div>

                <div style="margin-bottom: 15px;">
                  <strong style="color: #4F46E5;">How did they hear about us?</strong>
                  <p style="margin: 5px 0;">${howDidYouHear}</p>
                  ${referralDetails ? `<p style="margin: 5px 0; padding-left: 20px; color: #6B7280;">↳ Referred by: ${referralDetails}</p>` : ''}
                  ${otherSource ? `<p style="margin: 5px 0; padding-left: 20px; color: #6B7280;">↳ Details: ${otherSource}</p>` : ''}
                </div>

                ${additionalInfo ? `
                  <div style="margin-bottom: 15px;">
                    <strong style="color: #4F46E5;">Additional Information:</strong>
                    <p style="margin: 5px 0; padding: 10px; background: white; border-radius: 5px;">${additionalInfo}</p>
                  </div>
                ` : ''}
              </div>

              <div style="background: #FEF3C7; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #F59E0B;">
                <p style="margin: 0; color: #92400E;">
                  <strong>💡 Action Required:</strong> Follow up with this lead soon!
                </p>
              </div>

              <div style="text-align: center; padding: 20px; color: #6B7280; font-size: 12px;">
                <p>Submitted on ${new Date().toLocaleString()}</p>
                <p>Turnover Manager Waitlist System</p>
              </div>
            </div>
          `,
        });

        // Confirmation email to user
        await transporter.sendMail({
          from: `"Turnover Manager Team" <${process.env.FROM_EMAIL || process.env.GMAIL_USER}>`,
          replyTo: process.env.FROM_EMAIL || process.env.GMAIL_USER,
          to: email,
          subject: '🚀 Welcome to the Turnover Manager Waitlist!',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; text-align: center; border-radius: 10px 10px 0 0;">
                <h1 style="color: white; margin: 0;">🎉 You're on the List!</h1>
              </div>
              
              <div style="background: white; padding: 40px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <p style="font-size: 18px; color: #1F2937;">Hi there!</p>
                
                <p style="color: #4B5563; line-height: 1.6;">
                  Thank you for joining the <strong>Turnover Manager</strong> waitlist! We're thrilled to have you as part of our community.
                </p>

                <div style="background: #F3F4F6; padding: 20px; border-radius: 10px; margin: 20px 0;">
                  <h3 style="color: #4F46E5; margin-top: 0;">What's Next?</h3>
                  <ul style="color: #4B5563; line-height: 1.8;">
                    <li>We'll keep you updated on our launch progress</li>
                    <li>You'll get early access before the public launch</li>
                    <li>Exclusive founding member benefits</li>
                    <li>Direct line to our team for feedback</li>
                  </ul>
                </div>

                <p style="color: #4B5563; line-height: 1.6;">
                  In the meantime, if you have any questions or want to share more about your Turo hosting needs, feel free to reply to this email!
                </p>

                <div style="text-align: center; margin: 30px 0;">
                  <a href="https://turnover-manager.com" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 50px; font-weight: bold; display: inline-block;">
                    Visit Our Website
                  </a>
                </div>

                <p style="color: #6B7280; font-size: 14px; border-top: 1px solid #E5E7EB; padding-top: 20px; margin-top: 30px;">
                  Best regards,<br>
                  <strong>The Turnover Manager Team</strong>
                </p>
              </div>
            </div>
          `,
        });

        emailSent = true;
        console.log(`📧 Emails sent successfully to: ${email}`);
      } catch (err) {
        console.error('❌ Email error:', err);
        console.error('Error details:', err.message);
        emailError = err.message;
        // Don't fail - we still have the data
      }
    } else {
      console.log('⚠️ Email credentials not configured');
      emailError = 'Email credentials missing';
    }

    // STEP 3: Return success
    return res.status(200).json({
      success: true,
      message: emailSent 
        ? 'Successfully joined the waitlist! Check your email for confirmation.'
        : 'You\'re on the waitlist! (Note: Email notifications are being configured)',
      savedToDatabase,
      emailSent,
      debug: {
        emailConfigured: !!(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD),
        emailError: emailError || null
      }
    });

  } catch (error) {
    console.error('Waitlist error:', error);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.',
    });
  }
};
