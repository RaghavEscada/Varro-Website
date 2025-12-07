# 📧 Email Setup Guide for Varro Group Contact Form

## ✨ What's Been Implemented

Your contact form now sends emails to **raghavkrishnaiiitk27@gmail.com** using Resend! 

### 🎯 Features Added:
- ✅ Beautiful email template with Varro Group branding
- ✅ Form validation (First Name, Email, Subject are required)
- ✅ Loading states while sending
- ✅ Success/Error messages
- ✅ Reply-to functionality (you can reply directly to the sender)
- ✅ Form reset after successful submission
- ✅ Disabled form inputs while submitting

---

## 🚀 Setup Instructions

### Step 1: Get Your Resend API Key

1. Go to [Resend.com](https://resend.com) and sign up for a free account
2. Navigate to **API Keys** in your dashboard
3. Click **Create API Key**
4. Copy your API key (it starts with `re_`)

### Step 2: Add API Key to Your Project

Create a `.env.local` file in your project root:

```bash
RESEND_API_KEY=re_your_actual_api_key_here
```

**Important:** Never commit this file to Git! It's already in `.gitignore`.

### Step 3: Verify Domain (For Production)

For testing, Resend allows you to use `onboarding@resend.dev` as the sender.

For production:
1. Add and verify your domain in Resend dashboard
2. Update the `from` field in `/app/api/send-email/route.ts`:

```typescript
from: 'Varro Group <hello@varro.com.au>',
```

---

## 📁 Files Created/Modified

### New Files:
- ✅ `/components/email-template.tsx` - Beautiful email template
- ✅ `/app/api/send-email/route.ts` - API endpoint for sending emails
- ✅ `EMAIL_SETUP_GUIDE.md` - This guide!

### Modified Files:
- ✅ `/components/Footer.tsx` - Added form handling logic
- ✅ `/package.json` - Added Resend dependency

---

## 🧪 Testing

1. Start your development server:
```bash
npm run dev
```

2. Navigate to your website and scroll to the footer
3. Fill out the contact form
4. Click "SEND MESSAGE"
5. Check raghavkrishnaiiitk27@gmail.com for the email! 📬

---

## 🎨 Email Template Preview

The email includes:
- **Varro Group branding** with your color scheme (#0AAAA8)
- **Sender information** (Name and Email)
- **Subject line**
- **Message content**
- **Reply-to functionality** - Just hit reply in your email client!

---

## 🔧 Customization Options

### Change Recipient Email:
Edit `/app/api/send-email/route.ts` line 33:
```typescript
to: 'your-new-email@example.com',
```

### Change Email Subject Format:
Edit `/app/api/send-email/route.ts` line 35:
```typescript
subject: `Your Custom Subject: ${subject}`,
```

### Modify Email Template:
Edit `/components/email-template.tsx` to customize the email design

---

## 🎉 You're All Set!

Your contact form is now fully functional and will send emails to raghavkrishnaiiitk27@gmail.com with all the information from the footer form!

### Need Help?
- [Resend Documentation](https://resend.com/docs)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

---

**Made with ❤️ for Varro Group**


