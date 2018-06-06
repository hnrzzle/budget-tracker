Budget Tracker - Lab 1 "Categories"
===

## Configuration  

Your lab must include the normal setup and config items
 
## Category 

In this app a category should contain at least the following properties:

* `id` a uuid
* `timestamp` a date from when the category was created
* `name` a string that is the name of the category
* `budget` a number that is the total amount of $ in the category 
* feel free to add more to your categories if you want

### Redux

#### reducer

This reducer should support the following interactions 

* `CATEGORIES_LOAD`
* `CATEGORY_ADD`
* `CATEGORY_REMOVE`
* STRETCH: `CATEGORIES_UPDATE`

#### action creators

Create an action creator for each interaction supported by your category reducer

#### store

In `src/store.js` export a function  that will return a new redux store from your category reducer

### Components

Create the following components and structure them according to the following diagram.  

``` 
Provider
  App
    Dashboard
      CategoryForm -- for creating categorys
      Categories -- list of categories
        Category Item -- display of category
```

#### Provider/App 

The Provider should wrap App component in `index.js`

#### Dashboard Component 

* should use react-redux's `connect` to map state and dispatchable methods to props
* should display a `CategoryForm` for adding categories to the app state
* should display a `Catgories` component that displays `CategoryItem` for each category in the app state

#### CategoryForm Component

Only need to handle add for today!

* should expect an `onComplete` prop to be a function
  * that function should be invoked with the CategoryForm state when the form is submited
* should expect a `buttonText` prop to be configure the submit buttons text
* should support and optional `category` prop that will initialize the state of the form

#### CategoryItem Component
* should display the category's name and budget
* should display a delete button
  * `onClick` the category should be removed from the application state
* ~~should display a CategoryForm  ~~
  * ~~`onComplete` the form should update the component in the application state~~
* STRETCH: Provide an edit button to toggle editing state

#### Test
* Test each reducer and action

####  Documentation  

Write a description of the project in your README.md

