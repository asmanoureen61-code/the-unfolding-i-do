# The Unfolding I Do

# PROJECT: LUXURY INTERACTIVE ANIMATED WEDDING INVITATION

Act as an expert creative frontend developer, senior UI/UX designer, and cinematic motion designer specializing in realistic 3D interactive digital invitations.

Create a premium, single-screen, interactive wedding invitation experience using the TWO EXACT IMAGES attached to this prompt.

This is NOT a full wedding website. It is a realistic animated digital wedding card that physically opens when the guest interacts with it.

## 1. MOST IMPORTANT — STRICT ORIGINAL DESIGN PRESERVATION

I have attached two final, professionally designed wedding invitation images.

IMAGE 1:
The closed black and gold wedding invitation featuring embossed black floral textures, metallic gold borders, black flowers, golden leaves, and a circular M&M golden monogram in the center.

IMAGE 2:
The opened wedding invitation featuring black and gold side panels, burgundy flowers, golden lanterns, a champagne ivory central invitation, and all wedding information.

Both images are FINAL APPROVED DESIGNS.

You MUST use these exact uploaded images as the primary visual assets.

STRICT RULES:

- Do not redesign either image.
- Do not regenerate the images using AI.
- Do not replace the images with stock images.
- Do not recreate the card using CSS-based illustrations.
- Do not modify the original artwork.
- Do not change the colors.
- Do not change the floral decorations.
- Do not change the golden borders.
- Do not change the original typography.
- Do not remove or add any text inside the images.
- Do not change the M&M monogram on the front card.
- Do not add the M&M monogram to the inner card.
- Do not change the card proportions.
- Do not stretch, distort, or permanently crop the images.
- Do not apply permanent filters that change their appearance.
- Do not place unnecessary interface elements over the artwork.

Preserve every original visual detail exactly as provided.

The ONLY creative work required is the surrounding interface, interactive behavior, and realistic opening animation.

The initial closed state must visually match Image 1.

The final opened state must visually match Image 2.

## 2. Wedding Information

The wedding details already included in the original inner card are:

Groom: Muhammad Ali

Bride: Misbah Noureen

Event: Baraat Ceremony

Date: Friday, 25 December 2026

Venue: Al Hameed Marriage Hall

Location: Rawalpindi, Pakistan

Do not modify these details or recreate them visually over the existing image.

Do not invent an event time.

## 3. Overall Experience

Create a cinematic, elegant, luxurious experience based on the following interaction:

Open Link → Closed Invitation Appears → Tap M&M Seal → Seal Unlocks → Left and Right Panels Open → Original Inner Wedding Card Reveals → Animation Settles.

The entire experience should resemble opening a real, expensive, handcrafted royal wedding invitation.

Keep the interface minimal, sophisticated, romantic, and immersive.

Use modern 2026 motion design principles including realistic 3D transforms, layered animations, cinematic easing, subtle micro-interactions, and seamless image transitions.

Do not make the experience unnecessarily flashy.

## 4. Main Interface and Background

Create a full-screen interface with the invitation perfectly centered.

Use:

- Deep matte black background: #080808
- Subtle black silk-inspired ambient background.
- Very soft radial warm golden illumination behind the invitation.
- Natural cinematic shadows.
- Minimal visual distractions.

The original uploaded card image must remain the main focal point.

Do not add large headings, hero sections, navigation bars, menus, or additional content above the invitation.

The surrounding background should blend naturally with the dark background of the original images.

Avoid visible rectangular image boundaries where possible without altering the source artwork.

## 5. Initial Card Loading Animation

Preload both original images before enabling the opening interaction.

When the page loads:

1. Display a clean black background.
2. Gradually reveal the exact uploaded closed invitation image.
3. Animate its opacity from 0 to 1.
4. Apply a gentle scale animation from 0.96 to 1.
5. Add a soft cinematic shadow beneath the card.
6. Allow the image to settle naturally in the center.

Duration: approximately 700–900ms.

Do not create an unnecessary loading screen or a long waiting animation.

## 6. Closed Invitation State

Display the FIRST uploaded image exactly as provided.

The entire black and gold gatefold invitation must be visible.

The central M&M golden seal should act as the primary interactive opening trigger.

Place a transparent interactive hotspot over the exact location of the existing golden seal.

Do not replace the existing seal with a CSS button or a different graphic.

Calculate the hotspot position relative to the original image dimensions so it remains correctly aligned at every screen size.

Also allow the guest to tap anywhere on the card to open it.

Below the original image, outside the card artwork, display a small elegant instruction:

"TAP TO OPEN"

Use thin antique gold typography with generous letter spacing.

Add a tiny, subtle animated indicator if necessary.

Do not add a large conventional website button.

On desktop, the cursor should indicate that the card is interactive.

On hover, use a minimal golden light reflection across the seal.

On mobile, use a very subtle breathing glow around the seal.

Do not permanently change the appearance of the original image.

## 7. Signature Opening Animation

This is the most important part of the project.

When the guest taps the card or the M&M seal, execute a realistic, coordinated 3D gatefold opening animation.

DO NOT simply hide Image 1 and replace it with Image 2 using an ordinary fade transition.

Create the illusion that the exact black and gold invitation physically opens from the middle and reveals the original inner card.

### Phase A — Seal Activation

Duration: 0–300ms.

- The existing central M&M seal receives a brief, subtle metallic golden highlight.
- The card responds with a very small press-and-release scale effect.
- The "TAP TO OPEN" instruction gently fades away.
- The invitation becomes temporarily non-interactive to prevent repeated clicks during animation.

### Phase B — Seal and Ribbon Release

Duration: 300–650ms.

- Create the visual illusion that the central golden seal unlocks.
- The gold ribbon appears to release from the center.
- Use a soft highlight moving horizontally along the original golden ribbon.
- Transition the seal and ribbon away before the two panels open.

If necessary, use carefully masked copies or extracted regions of the original uploaded front image as temporary animation layers.

Do not generate replacement seal or ribbon artwork.

Do not permanently edit the original image.

Avoid leaving visible duplicate seals or ribbon fragments during the opening animation.

### Phase C — Realistic 3D Gatefold Opening

Duration: 650–2000ms.

Use the first uploaded image to create two temporary animated visual layers:

LEFT COVER PANEL:
The left half of the original closed invitation.

RIGHT COVER PANEL:
The right half of the original closed invitation.

Use image clipping, SVG masks, CSS masks, background positioning, or layered image elements to isolate the actual cover panels.

Important:

The uploaded image includes a surrounding black fabric background. Isolate the actual card panels as accurately as possible so that the background fabric does not rotate with the doors.

Follow the existing center seam of the original card rather than blindly splitting the complete image at the middle of the viewport.

Use a stationary dark background layer underneath the rotating card elements.

Set realistic 3D perspective between 1200px and 1800px.

Use transform-style: preserve-3d.

Left cover panel:

- Transform origin: left outer hinge.
- Initial rotation: rotateY(0deg).
- Final rotation: approximately rotateY(-105deg).

Right cover panel:

- Transform origin: right outer hinge.
- Initial rotation: rotateY(0deg).
- Final rotation: approximately rotateY(105deg).

Adjust the rotation direction if required by the actual 3D coordinate system.

Both panels must physically appear to open outward from the center seam.

Use dynamic shadows and subtle perspective depth.

Use backface-visibility: hidden where appropriate.

The animation should resemble opening the two doors of a real gatefold invitation.

Do not use a basic horizontal slide animation.

Do not make the panels fly away, disappear suddenly, or rotate unnaturally.

### Phase D — Inner Invitation Reveal

Duration: 1000–2400ms.

Place the SECOND uploaded original image underneath the temporary animated front cover layers.

As the two panels open:

- Gradually reveal the champagne ivory center of the original inner invitation.
- Reveal the burgundy floral decorations naturally.
- Allow the golden lanterns and black side panels to become visible.
- Add a very subtle warm golden illumination during the transition.
- Smoothly align the opened cover animation with the perspective of the original inner card.
- Crossfade the temporary rotating cover layers into the actual opened side panels shown in Image 2.

The crossfade should be carefully timed so there is no awkward jump between the animated panels and the final image.

Because Image 2 is already a complete opened-card composition, do not leave additional rotating panels visible after the transition finishes.

The final result must display the complete SECOND uploaded image exactly as supplied.

### Phase E — Cinematic Settling Animation

Duration: 2200–2900ms.

After the original inner invitation is fully revealed:

- Apply a very gentle scale transition from approximately 0.97 to 1.
- Gradually reduce any temporary golden illumination.
- Allow the invitation to settle in its final centered position.
- Add a natural soft shadow.
- Optionally show three to five subtle burgundy rose petals drifting outside the edges of the invitation.
- Fade away the petals completely.

Do not let particles cover the couple's names, wedding date, or venue.

The final card must remain clear, sharp, stable, and identical to the original second image.

Use cinematic easing curves such as cubic-bezier(0.65, 0.05, 0.22, 1).

The entire opening animation should take approximately 2.5–3 seconds.

## 8. Final Opened Invitation State

Once the opening animation has completed:

Display the second uploaded image in its original aspect ratio.

Preserve all existing visual elements:

- Champagne ivory central invitation.
- Golden Mughal-inspired frame.
- Black embossed side panels.
- Golden hanging lanterns.
- Burgundy flowers.
- Original wedding typography.
- Muhammad Ali and Misbah Noureen names.
- Original wedding date.
- Original venue information.
- Decorative royal architecture at the bottom.

Do not add any additional text or design inside the original card.

The final opened image should occupy as much available screen space as possible without cropping important content.

Make the wedding information easy to read.

On smaller screens, allow users to zoom the card naturally or provide a discreet fullscreen viewing option.

Do not continuously animate, pulse, or move the card after the opening animation has completed.

## 9. Subtle Ambient Effects

Use tasteful, restrained visual effects.

Permitted effects:

- Very subtle warm golden ambient light.
- A few slow-moving golden particles outside the card.
- Gentle rose petals during the opening transition.
- Soft metallic shine over the original central seal.
- Realistic dynamic shadows during the 3D opening.
- Minimal background vignette.

Avoid:

- Excessive confetti.
- Fireworks.
- Flashing lights.
- Neon glow.
- Heavy particle storms.
- Cartoon effects.
- Excessive sparkles.
- Bright color overlays.
- Continuous distracting animations.

The original artwork is already highly decorative. The animation should complement it rather than compete with it.

## 10. Optional Background Music

Add a discreet music toggle in the bottom-right corner, outside the original invitation artwork.

If an actual licensed instrumental audio file is supplied, support soft romantic piano, flute, or royal instrumental music.

Audio may begin after the guest explicitly enables sound.

Use a smooth volume fade-in and fade-out.

Do not automatically play loud music.

Do not use broken audio sources.

If no audio file is provided, hide the music control.

## 11. Minimal Interface Controls

After the card is opened, display two small elegant controls below the image:

- Replay Animation
- Share Invitation

Use thin gold icons and refined typography.

Do not use oversized buttons.

Replay Animation must:

- Reset all animation states.
- Restore the exact original closed image.
- Allow the guest to open the invitation again.

Share Invitation must:

- Use native mobile sharing where available.
- Fall back to copying the current invitation URL.
- Provide a small, tasteful confirmation message after copying.

Do not place these controls inside the original card image.

Optionally add a discreet fullscreen viewing control outside the artwork.

## 12. Mobile-First Responsive Design

This invitation will primarily be shared through WhatsApp.

Optimize the entire experience for mobile browsers.

Requirements:

- Preserve the exact original aspect ratios of both images.
- Use object-fit: contain, never object-fit: cover for the final invitation images.
- Never stretch either image.
- Keep the invitation centered horizontally and vertically whenever screen space permits.
- Use 100dvh for viewport-aware layouts with suitable fallbacks.
- Respect mobile safe areas.
- Ensure there is no horizontal overflow.
- Allow natural vertical scrolling on small screens when necessary.
- Ensure the card remains large enough to read comfortably.
- Keep the interaction hotspot accurately aligned with the golden seal.
- Prevent accidental double-tap interactions during animation.
- Ensure the 3D opening works smoothly on iOS Safari, Android Chrome, and WhatsApp in-app browsers.

Test at 320px, 375px, 390px, 430px, 768px, 1024px, and 1440px viewport widths.

Use responsive animation geometry based on the rendered image dimensions.

Do not use fixed pixel positions that only work on desktop.

## 13. Technical Implementation

Use the Lovable-supported frontend stack:

- React
- TypeScript
- Tailwind CSS
- GSAP Timeline or Motion
- CSS 3D transforms
- CSS clipping and masking
- Responsive image layers

Prefer GSAP Timeline for precise synchronization of the opening animation phases.

Use one coordinated animation timeline rather than unrelated animations with inconsistent timing.

Create reusable components such as:

- InvitationExperience
- ClosedInvitation
- InteractiveSeal
- GatefoldOpeningAnimation
- OpenedInvitation
- AmbientEffects
- InvitationControls

Use a clear state machine:

- loading
- closed
- unlocking
- opening
- revealing
- opened

Prevent conflicting animations and repeated clicks while the card is opening.

Store the original uploaded assets locally within the project, using clear filenames such as:

- invitation-front.png
- invitation-inner.png

Map the first attached image to invitation-front.png.

Map the second attached image to invitation-inner.png.

Use the exact uploaded image files rather than generated substitutes or remote placeholder URLs.

Preload both images to prevent flickering, blank frames, or delayed image replacement during the opening sequence.

Keep the original images available without destructive processing.

Any temporary masking, cropping, or panel extraction must be used only for the transition animation.

## 14. Accessibility and Performance

- Make the opening interaction keyboard accessible.
- Support Enter and Space keys.
- Add meaningful accessible labels.
- Provide accessible text describing the wedding details without visually modifying the original image.
- Respect prefers-reduced-motion.
- For reduced-motion users, provide a short, gentle transition directly to the original opened invitation.
- Avoid unnecessary JavaScript libraries.
- Avoid large video files.
- Use GPU-friendly transform and opacity animations.
- Maintain smooth performance on mid-range mobile devices.
- Clean up all animation timelines and temporary layers.
- Keep both original images sharp and high quality.
- Never leave the interface stuck if an animation fails.

If the advanced 3D masking cannot work reliably on a particular browser, use a graceful simplified gatefold reveal as a fallback while preserving both original images.

## 15. Strict Scope Restrictions

DO NOT create a complete website.

DO NOT create:

- Navigation bars.
- Header sections.
- Hero sections.
- Wedding countdown timers.
- RSVP forms.
- Photo galleries.
- Guest books.
- Admin dashboards.
- Wedding event timelines.
- Registration pages.
- Additional wedding sections.
- Large footer sections.
- Multiple pages.
- Backend databases.

This project is ONLY a single interactive animated wedding invitation.

## 16. Final Acceptance Criteria

The project is complete only when all these requirements are satisfied:

1. Opening the link displays the exact first uploaded image.
2. The original M&M golden seal is interactive.
3. Tapping the invitation triggers a cinematic opening sequence.
4. The left and right cover panels visually open with realistic 3D hinge motion.
5. The seal and ribbon release naturally during the animation.
6. The exact second uploaded image is revealed seamlessly.
7. No duplicate panels remain after the transition.
8. Both original designs remain completely unchanged.
9. All original wedding text remains preserved.
10. The experience works smoothly on mobile and desktop.
11. Replay functionality works correctly.
12. Sharing functionality works correctly.
13. There are no unnecessary website sections.
14. The final invitation looks elegant, realistic, premium, and professionally animated.

FINAL INSTRUCTION:

Treat both attached images as immutable, final-approved artwork.

Your job is NOT to design a wedding invitation.

Your job is to bring my existing wedding invitation to life through an exceptionally smooth, realistic, cinematic 3D opening animation.

Do not redesign anything.

Do not replace anything.

Do not modify the original card artwork.

Focus entirely on creating the most seamless and beautiful transition possible between the exact closed invitation image and the exact opened invitation image.

Begin implementation now using both attached original images.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/97dad503-c1c3-4f13-838b-af4a513c79fc).

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
