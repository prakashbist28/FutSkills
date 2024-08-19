# Help Center API Assignment

The assignment is fully responsive and functional. 


Technologies used:


1. Reactjs
2. Nodejs
3. MongoDB
4. TailwindCSS
5. Express
6. Mongoose
7. Packages like toastify, cors, axios and many more.





Screenshots :


Main page:


![localhost_3000_ (1)](https://github.com/user-attachments/assets/d690d546-3283-462f-89a1-4f943cb584f0)




Search Bar:

User can search cards based on their titles. As user keeps typing, all the cards which have such continuos string as titlse are displayed as suggestions. On clicking on any of those will fill the search bar with their full title. And on clicking search button(right arrow button) cards component which is below search compnent will get updated and show only those cards with search title name.



![localhost_3000_ (3)](https://github.com/user-attachments/assets/d892cd13-cea5-4073-b18d-de4d17106723)



![image](https://github.com/user-attachments/assets/65e8e3d9-efb9-474f-9ec8-8f58fd222f7d)



![image](https://github.com/user-attachments/assets/9b73272c-75e2-4e75-ba29-fae5b0d6f556)



![image](https://github.com/user-attachments/assets/92ea6b4e-e156-4b43-8432-fe12072e6bec)









CardDetails page:


On clicking on any card we can open a page with details of that particular card


![image](https://github.com/user-attachments/assets/0fbc50bf-1cec-4e36-9647-1a0adf526afc)



![image](https://github.com/user-attachments/assets/05aeaffd-1cd1-4cc2-b8d1-a6f00aee7c10)










Add cards /  Submit request :

There was no mention of what needs to be done with submit request button in header component. So I made it work in such a way that User can add new cards by clicking on submit request button and navigating to addcards pages where he can add new cards. made use of Link property of react-router-dom



![image](https://github.com/user-attachments/assets/223a9080-94fb-4da1-a3d1-07a29d4aa6ff)



![image](https://github.com/user-attachments/assets/fac7ad5d-3fb7-4139-8e8a-4853dc90ba96)




=> Added processing animation


![image](https://github.com/user-attachments/assets/2dabdfc5-34ed-4a94-bc1e-1258b0c4c891)




=> Made use of toastify to show success messages


![image](https://github.com/user-attachments/assets/efa0d85b-415e-4b2b-988d-113b0b19b15d)




=> New cards have been added


![image](https://github.com/user-attachments/assets/70690f3f-7831-4bd5-8dd1-2cc0b4108d98)



WORKING OF SERVER WITH THE HELP OF POSTMAN 


get all cards api:


![image](https://github.com/user-attachments/assets/fc1ba703-d270-4865-b29f-dcfcb25640db)



get single card using title as parameter


![image](https://github.com/user-attachments/assets/4cee91e4-af54-4303-b1c2-a71d0c23cd4e)




post - Adding new cards


![image](https://github.com/user-attachments/assets/fcf8406e-2570-485a-bc6f-f0b427cde379)



card has been added

![image](https://github.com/user-attachments/assets/5f275896-690e-4ac1-98f4-79ed5f5c7b2f)




Schema :  In the Card schema I didnot include id as id would be provided by default. 






## Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/iAmritMalviya/fullstack-assignment
   cd fullstack-assignment
   ```

2. **Frontend:**
   - Create a React app in the `frontend` folder.
   - Follow the instructions in `frontend.md` to complete the frontend.

3. **Backend:**
   - Create a Node.js app in the `backend` folder.
   - Follow the `backend.md` instructions to complete the backend.

4. **Push Your Work:**
   - Push both the frontend and backend apps to the same repository.
   - Make sure the repository is public.

5. **Submit Your Work:**
   - Paste the GitHub repository link in the Google form you received after pushing your code.

---

