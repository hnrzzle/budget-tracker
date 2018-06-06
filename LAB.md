Budget Tracker - Lab 1 "Categories"
===

## Requirements  
#### Configuration  
Your lab must include the normal setup and config items
 
#### Feature Tasks 
##### category 
* in this app a category should contain at least the following properties
  * `id` a uuid
  * `timestamp` a date from when the category was created
  * `name` a string that is the name of the category
  * `budget` a number that is the total amount of $ in the category 
  * fell free to add more to your categories if you want

##### redux
###### reducer
* create a category reducer in your your reducer direcoty
* this reducer should support the following interactions 
  * `CATEGORY_CREATE`
  * `CATEGORY_UPDATE`
  * `CATEGORY_DESTORY`

###### action creators
* you should create an action creator for each interaction supported by your category reducer

###### store
* in `src/store.js` export a function  that will return a new redux store from your category reducer

##### Components
Create the following components and structure them according to the following diagram.  
``` 
App
  Provider 
    BrowserRouter
      Route / Dashboard
        CategoryForm -- for creating categorys
        [Category Item]
           CategoryForm  -- for updating categorys
```

###### App Component 
The App component should set up the Provider for the redux store and the Router. 

###### Dashboard Component 
* should be displayed on the `/` route
* should use react-redux's `connect` to map state and dispatchable methods to props
* should display a `CategoryForm` for adding categories to the app state
* should display a `CategoryItem` for each category in the app state

###### CategoryForm Component
* should expect an `onComplete` prop to be a function
  * that function should be invoked with the CategoryForms State when the form is submited
* should expect a `buttonText` prop to be configure the submit buttons text
* should support and optional `category` prop that will initialize the state of the form

###### CategoryItem Component
* should display the category's name and budget
* should display a delete button
  * `onClick` the category should be removed from the application state
* should display a CategoryForm  
  * `onComplete` the form should update the component in the application state

#### Test
* Test category reducer

####  Documentation  
Write a description of the project in your README.md


####  Devsign Notes
See our [classwork repo](https://github.com/acl-devsign-winter-2018/classwork/tree/master/frontend/week02_state-redux/class02_devsign-notes)
