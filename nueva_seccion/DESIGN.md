---
name: Industrial Precision
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf1'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fa'
  on-surface: '#111c2c'
  on-surface-variant: '#424752'
  inverse-surface: '#263142'
  inverse-on-surface: '#ebf1ff'
  outline: '#727784'
  outline-variant: '#c2c6d4'
  surface-tint: '#115cb9'
  primary: '#003f87'
  on-primary: '#ffffff'
  primary-container: '#0056b3'
  on-primary-container: '#bbd0ff'
  inverse-primary: '#acc7ff'
  secondary: '#00629e'
  on-secondary: '#ffffff'
  secondary-container: '#77bbfd'
  on-secondary-container: '#004a79'
  tertiary: '#39434a'
  on-tertiary: '#ffffff'
  tertiary-container: '#505a62'
  on-tertiary-container: '#c7d1db'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#acc7ff'
  on-primary-fixed: '#001a40'
  on-primary-fixed-variant: '#004491'
  secondary-fixed: '#cfe5ff'
  secondary-fixed-dim: '#99cbff'
  on-secondary-fixed: '#001d34'
  on-secondary-fixed-variant: '#004a78'
  tertiary-fixed: '#dae4ee'
  tertiary-fixed-dim: '#bec8d1'
  on-tertiary-fixed: '#131d24'
  on-tertiary-fixed-variant: '#3e4850'
  background: '#f9f9ff'
  on-background: '#111c2c'
  surface-variant: '#d8e3fa'
typography:
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.1'
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
spacing:
  unit: 8px
  gutter: 24px
  margin-edge: 40px
  grid-line-weight: 1px
---

## Brand & Style

This design system is built for an industrial engineering context, emphasizing technical mastery, structural integrity, and corporate reliability. The brand personality is authoritative and precise, evoking the feeling of a blueprint or a high-end technical specification. 

The visual style is a blend of **Corporate Modern** and **Technical Minimalism**. It utilizes a structured "blueprint" aesthetic characterized by fine lines, grid systems, and geometric overlays. The emotional response is one of trust and expertise, positioning the product as a leader in hydraulic infrastructure and specialized welding technologies.

Key stylistic pillars include:
- **Structural Integrity:** Heavy use of alignment and geometric containment.
- **Technical Clarity:** Information is presented with generous spacing and clear, wide-set typography.
- **Industrial Sophistication:** A palette rooted in engineering materials—metals, plastics, and water—refined for a professional digital environment.

## Colors

The color palette is derived from the heavy-duty materials found in hydraulic engineering. 

- **Primary (Industrial Blue):** A deep, saturated blue used for primary actions and brand emphasis, reflecting the color of industrial valves and pipes.
- **Secondary (Corporate Blue):** A brighter, mid-tone blue used for structural blocks and informational overlays.
- **Tertiary (Technical Wash):** A very light, airy blue used for section backgrounds to provide soft contrast against pure white.
- **Neutrals:** A range of technical grays (from cool steel to dark slate) used for typography and fine-line grid details.

The default mode is **Light**, ensuring a clean, high-contrast environment that mimics technical documentation.

## Typography

The typography system is designed to look "engineered." 

**Headlines** use a wide, geometric sans-serif with a futuristic edge. They should almost always be presented in uppercase with slight tracking to increase the "technical" feel. 

**Body Text** is set in a highly legible, professional sans-serif to ensure that complex technical information is easily digestible.

**Labels and Data Points** utilize a monospaced font to reinforce the precision of the design system, mimicking the look of serial numbers and technical measurements found on industrial equipment.

## Layout & Spacing

This design system uses a **Fixed Grid** model based on a 12-column structure for desktop. 

- **The Blueprint Grid:** A subtle background grid (8px or 16px squares) should be used as a recurring visual pattern, particularly in headers or featured sections.
- **Technical Lines:** Thin 1px lines in light blue or gray are used to separate content sections, creating the appearance of a technical drawing.
- **Rhythm:** All spacing must be a multiple of 8px. Gutters are fixed to maintain a rigid, architectural feel even as the browser scales.
- **Mobile Reflow:** On mobile, the 12-column grid collapses to a single column with 20px margins, but the background grid pattern remains to anchor the brand identity.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Hard Borders** rather than traditional soft shadows.

- **Stacking:** Use different shades of blue and technical grays to indicate depth. Secondary Blue surfaces sit "above" the white background.
- **Outlines:** Instead of shadows, use 1px technical borders to define card edges.
- **Overlays:** Map graphics and grid boxes should appear as geometric overlays with sharp edges, reinforcing the "layout on paper" aesthetic.
- **Zero Blur:** If depth must be signaled via shadow, use a high-offset, zero-blur "hard" shadow to maintain the brutalist, industrial character.

## Shapes

The shape language is strictly **Sharp (0px roundedness)**. 

Rectangular boxes, buttons, and input fields should have 90-degree corners to reflect the rigid nature of steel and construction. 

The only exception to this rule is **Circular Iconography**. Technical icons should be contained within perfect circles with thin, consistent strokes. This contrast between sharp-edged containers and circular internal elements mimics the intersection of pipes and flanges.

## Components

### Buttons
Buttons are rectangular with zero corner radius. Use the Primary Color for main actions with white text. Hover states should shift to a darker blue or include a subtle "crosshair" corner detail.

### Cards
Cards should be styled as "Technical Blocks." They can either be solid Secondary Blue with white text for high emphasis, or white with a 1px technical border for standard content.

### Circular Iconography
Icons must be line-based (stroke-weight: 1.5px or 2px) and centered within circular containers. Use Primary Blue for the icon and a light tertiary blue or white for the background.

### Input Fields
Inputs are defined by a 1px border on all sides or just a bottom border to mimic a fillable form. Labels should always be in the Label/Monospaced font style.

### Technical Sections
Use vertical and horizontal 1px lines that extend slightly beyond the content area to create the feeling of an unfinished blueprint. This pattern should be used to anchor statistics or key technical features.