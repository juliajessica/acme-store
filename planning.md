## WORK AND CO Code Assesment Planning:

- [x] Add readme with notes on planning and ideas
- [x] Update props in all the files, and organize files
- [x] Add eslint and prettier to project
- [x] Install Chivo and Helvetica Neue fonts
- [x] Pascal Case all directories in App
- [x] Create Stylesheets for all components that need styles
- [x] Add all svgs and images into Assets folder
- [x] Identify and create reusable components and add all the different states to them
- [x] Build from mobile first
- [ ] Verify the tax percentage and calculate it for the cart total
- [x] Look up modals in React
- [x] Add states for loading - for a better UX Experience
- [ ] Note to self: I can use any react library to add to the app

**_RESEARCH/DISCOVER:_**

Work on the modal was pulled from React Bootstrap: https://react-bootstrap.netlify.com/components/modal/#modal-props
Animations are pulled from the React-Fade-In Library: https://www.npmjs.com/package/react-fade-in
For routing through the application I simply used React-Router-Dom: https://www.npmjs.com/package/react-router-dom
Having to toggle between the modal for the full-screen shopping cart view I have to figure out the window.inner width to change the display: https://developer.mozilla.org/en-US/docs/Web/API/window/innerWidth

**_START HERE:_**

**\*\*** Listing items: make sure the image is placed in the rights place

_Button Types:_

| Types                          | States                   | SVG          |
| ------------------------------ | ------------------------ | ------------ |
| Primary                        | default, hover, disabled | None         |
| Secondary-minus, Secondary-add | default, hover, disabled | Minus, Add   |
| TextLink                       | default, hover, disabled | ShoppingCart |

_SKETCH:_

1. Download file
2. Sketch - install font buddy
3. Install Chivo and Helvetica Neue

_CODE:_

Components:

1. Reusable Button: (props:) children, svg, theme, cutomClass, type, rest,
2. Modal - only comes up for desktop view - empty state is icon and text - full state looks like
3. Item - image, title, total, price, addButton
4. Nav - name, button theme='textLink'
5. Shopping cart - image, title, price, - btn, total div?, + btn, update btn, checkout btn, subtotal, taxes, total

PAGES:

1. ItemList
   1. Maps over items, maps over images
2. Item -
3. Cart -modal for web, and seperate page on mobile

QUESTIONS TO ASK:

What is the state tax? - https://pocketsense.com/how-to-calculate-sales-tax-backwards-from-total-13712245.html
Based off of the designs it seems that the application is adding a tax value to the total. The desings example shows $40.34 is applied to the $500.01 total. I calculated that the tax is a total of 8% for each item. - verfiy that this is correct with Diana.

Does this require adding additional testing?

### Cart:

I noticed that the numeric total quantity for each item in the cart had the font set to `Lora Regular` in the sketch file. I made a design decision to keep the font aligned with the stlye guidelines and set it to `font-family: 'Chivo', sans-serif;`.
