# LedgerLine Website - Deployment Checklist

## Pre-Deployment Checklist

### 1. Content Review
- [ ] Review all page copy for accuracy
- [ ] Verify case study details are NDA-safe
- [ ] Check that all internal links work correctly
- [ ] Ensure brand assets (logos, images) are properly optimized

### 2. Technical Verification
- [ ] Run `npm run build` to ensure production build succeeds
- [ ] Test all pages in production mode (`npm run start`)
- [ ] Verify responsive design on mobile, tablet, and desktop
- [ ] Test contact form submission
- [ ] Check browser console for errors
- [ ] Verify all navigation links work

### 3. SEO & Metadata
- [ ] Confirm unique title and description for each page
- [ ] Add OpenGraph images (optional but recommended)
- [ ] Generate and add favicon files
- [ ] Create sitemap.xml (optional)
- [ ] Add robots.txt (optional)

### 4. Performance
- [ ] Run Lighthouse audit (target: 90+ on all metrics)
- [ ] Optimize images if needed (already using Next/Image)
- [ ] Ensure fonts are loading efficiently

### 5. Contact Form Integration
- [ ] Replace stub API endpoint with production email service
- [ ] Options: SendGrid, Resend, Mailgun, or direct SMTP
- [ ] Set up email notifications for new submissions
- [ ] Configure form submission tracking (optional)
- [ ] Test production contact form thoroughly

## Deployment to Vercel (Recommended)

### Setup
1. Push code to GitHub repository
2. Visit [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

### Environment Variables (if needed)
- `CONTACT_EMAIL_API_KEY` (for email service integration)
- Any other service API keys

### Custom Domain
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Wait for SSL certificate provisioning

## Alternative Deployment Options

### Netlify
```bash
npm run build
# Deploy the .next folder
```

### AWS Amplify
1. Connect Git repository
2. Select Next.js as framework
3. Configure build settings
4. Deploy

### Self-Hosted (Node.js)
```bash
npm run build
npm run start
# Use PM2 or similar for process management
```

## Post-Deployment

### Immediate Tasks
- [ ] Test all pages on production URL
- [ ] Submit test contact form
- [ ] Verify analytics are tracking (if configured)
- [ ] Check performance on real-world connection

### Optional Enhancements
- [ ] Set up Google Analytics or Plausible
- [ ] Configure monitoring (Sentry, LogRocket)
- [ ] Set up uptime monitoring
- [ ] Create Google Search Console property
- [ ] Submit sitemap to search engines

## Maintenance

### Regular Tasks
- Keep dependencies updated: `npm update`
- Monitor contact form submissions
- Review and update case studies as needed
- Monitor site performance

### Contact Form Production Setup

Replace the stub in `/app/api/contact/route.ts` with a real email service. Example with Resend:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const data = await request.json();
  
  await resend.emails.send({
    from: 'contact@ledgerline.com',
    to: 'hello@ledgerline.com',
    subject: 'New Contact Form Submission',
    html: `
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company}</p>
      <p><strong>Replacing:</strong> ${data.replacing}</p>
      <p><strong>Workflow:</strong> ${data.workflow}</p>
      <p><strong>Timeline:</strong> ${data.timeline}</p>
      <p><strong>Budget:</strong> ${data.budget}</p>
    `
  });
  
  return NextResponse.json({ message: "Success" });
}
```

## Troubleshooting

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Clear node_modules: `rm -rf node_modules && npm install`
- Check TypeScript errors: `npm run type-check`

### Image Loading Issues
- Verify images are in `/public` directory
- Check Next.js image optimization settings
- Ensure proper file paths (case-sensitive on Linux servers)

## Support

For issues or questions:
- Check Next.js documentation: https://nextjs.org/docs
- Vercel support: https://vercel.com/support
- Review deployment logs for specific error messages
