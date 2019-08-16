# WORK AND CO Code Assesment Planning:

- [x] Add readme with notes on planning and ideas
- [x] Update props in all the files, and organize files
- [x] Add eslint and prettier to project
- [x] Install Chivo and Helvetica Neue fonts
- [x] Pascal Case all directories in App
- [x] Create Stylesheets for all components that need styles
- [x] Add all svgs and images into Assets folder
- [x] Identify and create reusable components and add all the different states to them
- [x] Build from mobile first
- [x] Verify the tax percentage and calculate it for the cart total
- [x] Look up modals in React
- [x] Add states for loading - for a better UX Experience
- [x] Note to self: I can use any react library to add to the app
- [x] Look at how to add Sass into the App
- [x] Verify that the app is responsive in Chrome, Firefox, and Safari
- [x] Add util function to update px to em
- [] Run `npm run test` and verify that all the tests are still passing - **_in progress_**
- [] Add additional tests for the add and remove added functionality
- [] Add a test for the get API call and verify the response is returning as expected

TASK LIST REQUIREMENTS

- [x] task 01 - responsive design
- [] task 02 - cart enhancements - **_in progress_**
- [] task 03 - product api

## Button Types:

| Types                          | States                   | SVG          |
| ------------------------------ | ------------------------ | ------------ |
| Primary                        | default, hover, disabled | None         |
| Secondary-minus, Secondary-add | default, hover, disabled | Minus, Add   |
| TextLink                       | default, hover, disabled | ShoppingCart |

## SKETCH:

1. Download file
2. Sketch - install font buddy
3. Install Chivo and Helvetica Neue

## Reusable Components:

1. Reusable Button: (props:) children, svg, theme, cutomClass, type, rest,
2. Modal - only comes up for desktop view - empty state is icon and text - full state looks like
3. Spinner - reusable spinner that is accessable anywhere in the application

## Product Related Components:

1. ProductContainer - uses the ProductsList to map over the ProductItems. It displays the Navbar and has a loading state to act like it's waiting for a get request from an API call. It also is the link between redux/react to handle the `mapStateToProps` obtaining the products from the reducer.
2. Product List - container for the product items
3. ProductItem - renders the image, title, total, price, addButton
4. Nav - displays the store name, and cart logic depending on screen size with a button `theme='textLink'`.
5. Shopping cart - image, title, price, - btn, total div?, + btn, update btn, checkout btn, subtotal, taxes, total

## Cart Realated Components:

1. CartContainer - It is a wrapper for the Cart component and it also is the link between redux/react to handle `mapStateToProps` obtaining the products and totals calling both `getCartProducts()` and `getTotal()` (reducer functions) at the highest level passing them into the Cart component.
2. Product - renders the products image, title, total, price, and addButton
3. CalculatedTotals - Seperate the calculation logic to keep the cart file small and clean.

## RESEARCH/DISCOVER:

Work on the modal was pulled from React Bootstrap: https://react-bootstrap.netlify.com/components/modal/#modal-props
Animations are pulled from the React-Fade-In Library: https://www.npmjs.com/package/react-fade-in
For routing through the application I simply used React-Router-Dom: https://www.npmjs.com/package/react-router-dom
Having to toggle between the modal for the full-screen shopping cart view I have to figure out the window.inner width to change the display: https://developer.mozilla.org/en-US/docs/Web/API/window/innerWidth

### Cart:

I noticed that the numeric total quantity for each item in the cart had the font set to `Lora Regular` in the sketch file. I made a design decision to keep the font aligned with the stlye guidelines and set it to `font-family: 'Chivo', sans-serif;`.

### NOTES:

I also went ahead and created a Utils directory where I created an array of image objects with urls, titles, and alt tags. Since the actual mock projucts JSON object didn't provide images and without manipulating the data I thought I would be best to create a seperate file for the images so they could be updated/changed at any time for each product. I do want to note the reson I didn't add a new key to the JSON data object for an image for each product is because if I were going to be making an API call I noticed that their wasn't already an image key so I thought about building a smart application that I wouln't have to refactor later to seperatly obtain an image.

I created a util function for calculating px to em. Since the application is expected to grow and we want to scale acrss all browsers it's importnat to handle the font sizes accordingly.

**_QUESTIONS TO ASK:_**

What is the state tax? - https://pocketsense.com/how-to-calculate-sales-tax-backwards-from-total-13712245.html
Based off of the designs it seems that the application is adding a tax value to the total. The desings example shows $40.34 is applied to the $500.01 total. I calculated that the tax is a total of 8% for each item. - verfiy that this is correct with Diana.

Does this require adding additional testing?
