# EmailJS Setup Verification Checklist

## ✅ Step 1: Verify Public Key

1. Go to: https://dashboard.emailjs.com/admin/account
2. Look for **"API Keys"** section
3. Copy the **Public Key** (should look like: `user_xxxxxxxxxxxxx` or similar)
4. Paste it here: ___________________

## ✅ Step 2: Verify Service ID

1. Go to: https://dashboard.emailjs.com/admin
2. Click **"Email Services"** (left sidebar)
3. Click on your Gmail service
4. Copy the **Service ID** (shows at the top, like: `service_xxxxx`)
5. Paste it here: ___________________

## ✅ Step 3: Verify Template ID

1. Go to: https://dashboard.emailjs.com/admin/templates
2. Click on your template
3. Copy the **Template ID** (shows at the top, like: `template_xxxxx`)
4. Paste it here: ___________________

## ✅ Step 4: Check Template Variables

Your template MUST have these EXACT variable names:
- `{{from_name}}`
- `{{from_email}}`
- `{{message}}`

Open your template and verify!

## Current values in .env.local:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_kg2udfv
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_wqw80uq
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=i9H_Xi5zZbQOZQYps
```

---

## 🔍 Things to Check:

### Check 1: Is Gmail Service Connected?
- Email Services → Your service → Should show "Connected" status
- If not, click "Connect Account" and re-authorize

### Check 2: Is Template Active?
- Email Templates → Your template → Should be "Active"
- If not, activate it

### Check 3: Browser Console Error
Open browser console (F12) and look for the actual error message.
Common errors:
- "Invalid public key" → Public key is wrong
- "Service not found" → Service ID is wrong
- "Template not found" → Template ID is wrong

---

## 🎯 Quick Test:

1. Go to EmailJS Dashboard
2. Click "Email Templates"
3. Open your template
4. Click "TEST IT" button
5. Fill in test values
6. See if test email sends successfully

If test email works in dashboard but not in your app = credentials mismatch
If test email fails = service setup issue

---

Let me know what you find!
