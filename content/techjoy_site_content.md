# TECHJOY WEBSITE CONTENT EXPORT
Version: 1.0
Site: https://techjoy.com
Entity: TechJoy
Purpose: SEO + AI SEO optimized pages for static-site generation

---

# GLOBAL SITE METADATA

```yaml
site:
  name: TechJoy
  url: https://techjoy.com
  description: Sell, recycle, or donate electronics with TechJoy. Earn rewards and reduce e-waste.
  keywords:
    - recycle electronics
    - phone buyback
    - sell used phone
    - device recycling
    - e-waste recycling
  organization:
    name: TechJoy
    email: support@techjoy.com
```

---

# GLOBAL SCHEMA

```json
{
 "@context": "https://schema.org",
 "@type": "Organization",
 "name": "TechJoy",
 "url": "https://techjoy.com",
 "logo": "https://techjoy.com/assets/logo.png",
 "contactPoint": {
   "@type": "ContactPoint",
   "contactType": "customer support",
   "email": "support@techjoy.com"
 }
}
```

---

# PAGE: HOW IT WORKS

```yaml
slug: /how-it-works
title: How TechJoy Works — Sell, Recycle & Donate Devices
description: Turn old electronics into cash or impact. Instant quotes, free shipping, secure data wipe.
```

# How TechJoy Works

TechJoy helps you turn unused electronics into value.
You can **sell devices, recycle responsibly, or donate them to communities**.

## Step 1 — Get an Instant Quote
Enter the device model and condition to receive an instant valuation.

## Step 2 — Ship Your Device
Use the prepaid label to ship your device safely.

## Step 3 — Get Paid or Donate
Choose your reward:
* Cash
* TechJoy rewards
* Charity donation

---

# PAGE: RECYCLE DEVICES

```yaml
slug: /recycle-devices
title: Recycle Electronics Responsibly
description: Secure electronic recycling for phones, laptops and tablets.
```

# Recycle Electronics
Electronic waste is one of the fastest growing environmental problems.
TechJoy helps recycle electronics safely and responsibly.

---

# PAGE: PHONE BUYBACK

```yaml
slug: /phone-buyback
title: Phone Buyback — Sell Your Phone Fast
description: Sell your used phone instantly. Free shipping and quick payouts.
```

# Sell Your Phone
Turn your unused smartphone into cash.

---

# PAGE: CORPORATE

```yaml
slug: /corporate
title: Corporate Device Recycling & IT Asset Recovery
description: Secure corporate electronics recycling and IT asset recovery services.
```

# Corporate Recycling
TechJoy helps companies manage outdated electronics securely.

---

# PAGE: DONATE

```yaml
slug: /donate
title: Donate Devices — Support Communities
description: Donate old phones and laptops to schools and nonprofits.
```

# Donate Devices
Old electronics can help close the digital divide.

---

# PAGE: REWARDS

```yaml
slug: /rewards
title: TechJoy Rewards Program
description: Earn rewards for recycling electronics.
```

# TechJoy Rewards
Earn **TechJoy Points** every time you recycle or sell a device.

---

# PAGE: IMPACT

```yaml
slug: /impact
title: TechJoy Environmental Impact
description: See how TechJoy reduces e-waste globally.
```

# Our Impact
TechJoy tracks the environmental impact of device recycling.

---

# PAGE: BLOG

```yaml
slug: /blog
title: TechJoy Blog
description: Guides on recycling electronics and selling devices.
```

# Blog
Articles covering phone resale tips, e-waste stats, and sustainable technology.

---

# PAGE: CONTACT

```yaml
slug: /contact
title: Contact TechJoy
description: Customer support and corporate inquiries.
```

# Contact TechJoy
Email: support@techjoy.com

---

# PROGRAMMATIC SEO TEMPLATE

```yaml
template: device-page
slug_pattern: /sell/{brand}-{model}
```

---

# BLOG TOPIC SEEDS

* How to recycle old phones
* Best way to sell used smartphones
* What happens to recycled electronics
* How to factory reset a phone before selling
* Corporate IT asset disposal best practices
* Is phone recycling profitable?

---

# INTERNAL LINKING STRUCTURE

* How It Works → Phone Buyback
* Recycle Devices → Impact
* Corporate → Impact
* Donate → Rewards
* Blog → All service pages

---

# DEPLOYMENT NOTES FOR CODEX

1. Parse YAML front matter
2. Convert each section into page templates
3. Inject JSON-LD schema into page head
4. Generate sitemap.xml automatically
5. Enable canonical URLs
6. Build internal links automatically
7. Optimize images during build
