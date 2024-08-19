## React Assignment

1. How can you implement shared functionality across a component tree?

  Ans. We can implement contextAPI or make use of redux library ( use redux only if the application is complex). We can also make use of state uplifting mechanism to make sharing between two siblings possible (siblings are those which are present in the same level and have common parent node). In frontend>Pages>Mainpage I made use of state uplifting. I made a state filteredCards and passed it as prop to CARDS component and passed the function which handles function of that state to SEARCH component. Now depending on what is searched in SEARCH component the CARD component can either display filteredcards or alla the cards. 

3. Why is the `useState` hook appropriate for handling state in a complex component?
   Ans. Just as discussed in above answer and also useState makes state be scoped locally meaning other compnents cannot modify this state directly. Only in the particular component where the state is present it can be modified this ensures that state doesnot have any inconsistencies leading to errors.

5. Design a user interface resembling the provided page. Fetch the data from the server and dynamically map the information cards to the fetched data. Ensure that the search functionality is also implemented.

![Logo](UI-Screen-1.png)
