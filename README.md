#### Puppet Labs - Tricor  / 18.10.1 CT Release and 1.3.0 SPA Release  (0415) - Last Updated: 10/16/15
======== 

##### Important Note! 
The domain is actually shop.puppetlabs.com ( the /store was added just so we can access & create overrides if necessary )

##### Developers
Four51: Miranda, Jen, Max

##### Github URL
* github.com/tricorprint/Tricor

##### Product Detail Template 
* PuppetLabs - combined PDT for automagic matrix and lightbox 

##### Images
* logo - css/images/PuppetLabs/PuppetLabsLogo.png
* size charts - css/images/PuppetLabs/SizeCharts

##### Miscellaneous
TRT-01901 Required Fields - Angular validation has been removed (customer did not want buttons disabled) - using a combination of HTML5 validation and alerts / error messaging

##### OrderCloud modules
`lib/oc/mandrill.js`, `lib/oc/mandrillTemplate.js`
- Mandrill

`lib/oc/productMatrix.js`
- Order Matrix

`lib/oc/productLightbox.js`
- Product Lightbox

`lib/oc/securityModal.js`
- Security Modal

`lib/oc/sameAsShippingCheckbox.js`
- same as shipping checkbox

##### Custom Views
`partials/controls/FAQ.html`
- FAQ

##### Hamburger Navigation (mobile)
`js/directives/nav.js`
`partials/controls/nav.html`
`partials/controls/nav-burger.html`

##### js
`js/app.js` 
* inject OC Modules

`js/controllers/contactUsCtrl.js` 
* Mandrill 

`js/controllers/checkOutViewCtrl.js` 
* TRT-02121 invisibly create a user on the backend when selecting guest checkout so that the user receives the email notifications / lines 20-94
* TRT-01901 Required Fields (see note under MISCELLANEOUS) / lines 96-107

`js/controllers/shortProductViewCtrl.js` 
* TRT-01898 Product name wrapping in chrome / lines 7-25

`js/controllers/userEditCtrl.js` 
* * Guest checkout (remove anon router configuration)

`js/directives/login.js` 
* added a custom directive for prefix instead of overwriting the whole file / lines 18-30

`js/directives/ordershipping.js` 
* auto-toggle to billing when shipping is completed / line 207

`js/directives/quantityfield.js` 
* change error from inline  / lines 12-13
* changing qty exceeds verbiage / line 72

`js/routing.js` 
* add FAQ path / line 47

##### html
`index.html`
* remove Google Webfonts (2 default and 1 custom) / lines 16-18
* OC Modules / lines 78-81

`partials/cartView.html`
* change delete icon to x

`partials/categoryView.html`
* hide category tree
* adjust margins / line 2 

`partials/checkOutView.html`
* removed error messaging
* TRT-01901 Required Fields (see note under MISCELLANEOUS)

`partials/controls/accountNav.html`
* add contact us
* remove the logout button

`partials/controls/addressInput.html`
* reorder fields 
* remove address name from save button
* TRT-01901 Required Fields (see note under MISCELLANEOUS)

`partials/controls/cartButtons.html`  
* Guest checkout button
* remove save and cancel order buttons

`partials/controls/checkoutButtons.html`  
* remove save and cancel order buttons
* TRT-01901 Required Fields (see note under MISCELLANEOUS)

`partials/controls/FAQ.html`   
* custom view

`partials/controls/giftCardRedemption.html`   
* design: removing checkmark and dollar icons

`partials/controls/nav.html`  
* add About Us (external link) / lines 8-11
* move contact us to top level / lines 12-17
* add FAQ / lines 18-23
* hide the dropdown-mega
* remove dropdowns from my account

`partials/controls/orderBilling.html`  
* same as shipping checkbox / line 13
* add payment selection (new address button) 
* valid vs. invalid icons (remove conditional color classes)
* TRT-01901 Required Fields (see note under MISCELLANEOUS)

`partials/controls/orderShipping.html`  
* valid vs. invalid icons (remove conditional color classes)
* TRT-01901 Required Fields (see note under MISCELLANEOUS)

`partials/controls/orderSummary.html`  
* design: removing checkmark icons / line 35
* security modal / line 69
* Guest Checkout / ExternalOrderDetailRecipients field (hidden)

`partials/controls/paymentSelection.html`  
* removed payment selection (new address button) - moved to orderBilling
* default to credit card payment method / line 22 

`partials/controls/shortProductViewMinimal.html`
* adjust margins 
* TRT-01898 Product name wrapping in chrome / lines 14-17

`partials/categoryView.html`
* hide category tree
* adjust margins / line 2 

`partials/copyrightView.html`
* fixed footer 

`partials/favoriteOrderListView.html`
* verbage and styling when no orders

`partials/orderSearchView.html`
* verbage and styling when no orders

`partials/Messages/contact.html`   
* Mandrill
* TRT-01901 Required Fields (see note under MISCELLANEOUS)

`partials/productListView.html`
* remove panel header 

`partials/reporting/orderHistoryView.html`
* verbage and button colors

`partials/reporting/orderHistoryDetailsView.html`
* misc base app fixes for showing first / last name under shipping and billing sections

`partials/userView.html`
* updates for Required fields (see note under MISC) 
* added prefix directive to username fields
