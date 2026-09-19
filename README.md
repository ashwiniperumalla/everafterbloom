# Ever After Bloom

# PROJECT EVER AFTER

Create a premium luxury interactive wedding website for an Indian couple.

This should NOT look like a template.

It should feel like an award-winning editorial experience that combines luxury, emotion, storytelling, and modern web design.

Think of it as a digital keepsake rather than an invitation.

--------------------------------------------------

TECH STACK

--------------------------------------------------

Use:

• React

• Tailwind CSS

• Framer Motion

• Lucide Icons

Responsive for:

Desktop

Tablet

Mobile

Use reusable React components throughout.

Create clean, maintainable code.

--------------------------------------------------

DESIGN LANGUAGE

--------------------------------------------------

Design Style:

Luxury Editorial Botanical

Inspired by:

• Apple

• Vogue Weddings

• Dior

• Minimal Fine Art Wedding Photography

The feeling should be:

Elegant

Timeless

Soft

Warm

Premium

Minimal

Never flashy.

--------------------------------------------------

COLOR PALETTE

--------------------------------------------------

Background

#FAF7F2

Soft Cream

#F4EFE7

Champagne Gold

#D4B483

Muted Sage

#A8B59A

Deep Charcoal

#2F2B28

Warm Gray

#6B655E

Soft Gold

#E7D7B5

Avoid harsh black.

Avoid bright white.

--------------------------------------------------

TYPOGRAPHY

--------------------------------------------------

Headings

Cormorant Garamond

Names

Great Vibes

Body

Poppins

Large whitespace.

Elegant typography hierarchy.

--------------------------------------------------

GLOBAL CONFIGURATION

--------------------------------------------------

Create ONE editable configuration object.

const weddingConfig = {

groomName: "Anil",

brideName: "Susmitha",

weddingDate: "Coming Soon",

marriageTime: "Coming Soon",

receptionTime: "Coming Soon",

venueName: "To Be Announced",

city: "Mahabubabad",

address: "Coming Soon",

googleMaps: "",

gallery: [],

music: "",

heroImage: "",

storyImages: []

}

Every section must read values from this configuration object.

Do NOT hardcode dates or venue details.

--------------------------------------------------

BACKGROUND SYSTEM

--------------------------------------------------

Do NOT use a plain background.

Create layered depth.

Layer 1

Warm ivory paper texture.

Layer 2

Soft silk texture.

Layer 3

Very subtle botanical illustrations.

Layer 4

Gentle floating golden particles.

Everything must remain elegant and understated.

--------------------------------------------------

HEADER

--------------------------------------------------

Transparent at the top.

Turns into a soft ivory glass navigation after scrolling.

Navigation:

Home

Our Story

Celebration

Gallery

Blessings

Contact

Desktop:

Centered navigation.

Mobile:

Elegant hamburger menu with smooth animation.

--------------------------------------------------

OPENING EXPERIENCE

--------------------------------------------------

This is the signature feature.

Do NOT immediately show the website.

Instead:

Fade in from white.

Slowly reveal a luxurious floral corridor.

Warm morning sunlight.

Soft atmosphere.

Very gentle floating particles.

Display this quote:

"Every love story is beautiful, but ours is our favorite."

After two seconds...

A circular gold wax seal appears.

Text:

Break the Seal

When clicked:

The seal gently cracks.

Soft golden particles appear.

Bride and Groom names are revealed elegantly.

A button appears:

Begin the Journey

If the visitor does nothing, automatically reveal everything after five seconds.

The experience must feel smooth and luxurious.

Never childish.

--------------------------------------------------

HERO SECTION

--------------------------------------------------

After the opening...

Display a full-screen editorial hero section.

Large elegant couple portrait placeholder.

Use a graceful image container with rounded corners and soft shadows.

Large typography:

Anil

♡

Susmitha

Subtitle:

A celebration of love, family, and forever.

Use editable values from weddingConfig.

Display a premium information card below:

📅 Wedding Date

Coming Soon

🕙 Register Marriage

Coming Soon

🎉 Reception

Coming Soon

📍 Location

Mahabubabad, Telangana

🏛 Venue

To Be Announced

Use elegant cards with soft borders and subtle hover effects.

--------------------------------------------------

BUTTON STYLE

--------------------------------------------------

Primary

Champagne Gold

Rounded pill

Soft shadow

Secondary

Ivory outline

Hover:

Lift 3px

Very smooth animation

--------------------------------------------------

ANIMATIONS

--------------------------------------------------

Use Framer Motion.

No bouncing.

No spinning.

Use:

Fade

Slide

Scale

Float

Parallax

Reveal

Everything should feel calm and cinematic.

--------------------------------------------------

RESPONSIVE

--------------------------------------------------

Desktop first.

Tablet optimized.

Mobile should feel premium, not compressed.

Spacing must remain luxurious.

--------------------------------------------------

CODE QUALITY

--------------------------------------------------

Use reusable components.

Separate sections cleanly.

Keep code organized.

Do not generate placeholder lorem ipsum.

Use meaningful placeholder wedding text.

--------------------------------------------------

FINAL GOAL

--------------------------------------------------

The homepage should feel like a luxury wedding editorial website worthy of an award.

Visitors should immediately feel emotion, elegance, and anticipation.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://everafterbloom.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/431eaa3e-b977-47a5-9985-1f2e4a5cb0b2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
