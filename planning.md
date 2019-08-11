## WORK AND CO Code Assesment Planning:

- [x] Add readme with notes on planning and ideas
- [x] Update props in all the files, and organize files
- [x] Add eslint and prettier to project
- [x] Install Chivo and Helvetica Neue fonts
- [x] Pascal Case all directories in App
- [ ] Create Stylesheets for all components that need styles
- [x] Add all svgs and images into Assets folder
- [x] Identify and create reusable components and add all the different states to them
- [x] Build from mobile first
- [ ] Verfiy the tax percentage and calculate it for the cart total
- [ ] Add states for loading - for a better UX Experience
- [ ] Note to self: I can use any react library to add to the app

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
