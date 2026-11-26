> **Legacy version.** This branch keeps the original single-file calculator (`baking.html`) for Home Assistant `/local/` pages. The app has moved on: see **Bake** at https://bake.juringari.com and the `main` branch.

# Home Assistant Baking Calculator

A simple, mobile-friendly Home Assistant dashboard page for bread, sourdough, instant yeast, and Neapolitan-style pizza dough calculations.

This is a single-file HTML baking calculator made for Home Assistant dashboards. It works well on phone screens, remembers useful bread values, and gives fast ingredient amounts for sourdough bread, instant yeast bread, and pizza dough. It's very usable also outside Home Assistant.

## Features

- Home Assistant dashboard-friendly single HTML file
- Works as a Webpage card at `/local/baking.html`
- Mobile-first layout for phones and wall tablets
- Material-style touch controls
- Sourdough bread calculator
- Instant yeast bread calculator
- Neapolitan pizza dough calculator
- Pizza dough balls stepper
- Same day and next day pizza proofing options
- Instant dry yeast and sourdough pizza modes
- Flour, water, starter, yeast, salt, hydration, and total dough outputs
- Small bake-plan tips for each mode
- No server, no build step, no external dependencies

## Live preview

- https://slovenec88.github.io/home-assistant-baking-calculator

## Screens

The page has three tabs:

- **Sourdough** for basic sourdough bread
- **Instant yeast** for quick bread
- **Pizza** for Neapolitan-style pizza dough

<img width="405" height="806" alt="image" src="https://github.com/user-attachments/assets/de74a002-c5f6-4b11-b8a4-857547ee8b10" />

<img width="402" height="835" alt="image" src="https://github.com/user-attachments/assets/f9715ba5-a800-467b-9727-019e3340b7ee" />



It is designed to fit nicely inside a Home Assistant dashboard card, especially on mobile.

## Install In Home Assistant

Copy the HTML file into your Home Assistant `www` folder.

For most Home Assistant installs, the file should be placed here:

```text
/config/www/baking.html
```

Some systems expose the same folder as:

```text
/www/baking.html
```

Home Assistant serves files from the `www` folder under `/local/`, so the dashboard URL becomes:

```text
/local/baking.html
```

## Add As A Home Assistant Dashboard

In Home Assistant:

1. Open **Settings**.
2. Go to **Dashboards**.
3. Click **Add dashboard**.
4. Choose **Webpage** as the dashboard type.
5. For the webpage URL, enter:

```text
/local/baking.html
```

6. Enter a title, for example:

```text
baking
```

7. Home Assistant will automatically populate the dashboard URL/path with something like:

```text
dashboard-baking
```

You can keep the automatically generated dashboard URL/path.

## Direct Test URL

After copying the file, test it directly in a browser:

```text
http://homeassistant.local:8123/local/baking.html
```

Or with your Home Assistant IP address:

```text
http://YOUR_HA_IP:8123/local/baking.html
```

## Sourdough Bread Calculator

The sourdough tab lets you enter:

- Flour weight
- Hydration
- Starter percentage

It calculates:

- Required water
- Sourdough starter
- Salt
- Final hydration
- Total dough weight

The starter is treated as 100% hydration starter.

## Instant Yeast Bread Calculator

The instant yeast tab lets you enter:

- Flour weight
- Hydration

It calculates:

- Required water
- Instant yeast
- Salt
- Final hydration
- Total dough weight

## Pizza Dough Calculator

The pizza tab is inspired by Neapolitan pizza dough calculators.

You choose:

- Number of dough balls
- Yeast type: instant dry or sourdough
- Proofing time: same day or next day
- Hydration
- Instant yeast percentage when using instant dry yeast

The ball weight is fixed at `300 g`.

Pizza defaults:

- Dough balls: `8`
- Ball weight: `300 g`
- Hydration: `64%`
- Salt: `2%`
- Instant dry yeast, next day: `0.11%`
- Instant dry yeast, same day: `0.5%`
- Sourdough starter, next day: `20%`
- Sourdough starter, same day: `25%`

It calculates:

- Flour
- Required water
- Instant yeast or sourdough starter
- Salt
- Final hydration
- Total dough weight

## What Gets Remembered

The bread calculators remember practical values like flour, hydration, and starter amount.

Pizza hydration and instant yeast percentage reset to defaults when the page is reopened, so quick experiments do not permanently change the recipe.

## Troubleshooting

### `/local/baking.html` gives 404

Make sure the file is in the Home Assistant `www` folder:

```text
/config/www/baking.html
```

or, on systems where it is exposed directly:

```text
/www/baking.html
```

Do not put the file in:

```text
/www/community/
```

That folder is usually for HACS frontend files.

### The page opens directly but not in a dashboard

Use a Webpage card and set the URL to:

```text
/local/baking.html
```

### I changed the file but Home Assistant still shows the old version

Refresh the browser/app. If needed, change the URL temporarily to:

```text
/local/baking.html?v=2
```

## Search Keywords

Home Assistant baking calculator, Home Assistant sourdough calculator, Home Assistant pizza dough calculator, Home Assistant Neapolitan pizza calculator, Home Assistant bread dashboard, Home Assistant Webpage card baking, sourdough starter calculator, instant yeast dough calculator, pizza hydration calculator, Ooni style pizza dough calculator.

## License

Use, copy, and adapt freely.
