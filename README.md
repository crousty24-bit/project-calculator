# project-calculator

final odin project





This project is about creating a calculator. It should :



* basic math operators : add, subtract, multiply, divide
* take only 2 Numbers, 1 operator THEN return the result =
* each new input will go for a new operator (it clears the last displayed result): only one operator at the time !
* operators and result displays digits on screen
* UI have buttons for each digits, operators, including (=) and a clear button
* beware of a numerous potentials bugs, etc.



**For now, I'll only focus on the first 4 steps : DONE✅**



* **create 4 functions** for each basic math operators : add, subtract, multiply, divide **✅**
* define whats a **calculator operation** : num (operators) num = result **✅**
* **create a function "operate"** that takes an operation and calls one of the 4 functions operators **✅**
* **create a basic HTML structure** that contains : **✅**

 	- div buttons for each digits, operators and =

 	- div clear button

 	- display calculator : Numbers, operation, results



*--> structure and code is set and safe to continue further.*



**Next, I'll focus on step 5 \& 6 : DONE ✅**



* **make the buttons works** accordingly with JS, **each buttons displays when clicked** : num, operators and THEN the result **✅**
* **add eventListener** for our buttons when "**click**"

 	- done for digits buttons **✅**

 	- done for operators, equal ✅



* the num1, num2, operator are **stored inside variables ✅**
* WHEN the **=** button is clicked : **triggers the func operate ✅**

 	- func operate takes our stored variables as parameters, THEN run accordingly to operator (add, sub, etc.)**✅**

 	- output the Result and THEN **update the display with that Result ✅**

* **add func clear button** : when "click" it resets everything and display **✅**



*--> code is working as intended for now. We have a basic calculator, yay !*

*--> at this point, I spent around 30min just to go around my whole code, from the beginning of the process, on each steps
to review everything I've done : this is to assure I have a "complete" understanding of what I've been doing/ learning from mistakes.
The real struggle was on step 6.4 when I had to figure out how to "verify" that num1, num1, operator actualy **exists** in order to be True
to call our Operate function. Well, solution was a lot simpler than I imagined.*



**Next, I'll add some extra features, then go on step 7 for gotchas, bug fixes, reinforce logic : DONE ✅**



* first, I'll focus on adding :

 	- **handle divide by 0** **✅**

 	- **add decimals, add a . button ✅**

 	- **add undo button** (backspace) **✅**

 	- **reinforce logic** **✅**



* then, I'll go on step 7 :

 	- **following TOP lists of things to verify and fix**

 	- base logic of single pair of Numbers evaluated, even if : (from step 7.3 to 7.6)

 		- **enter a second operator should evaluate intial pair of Numbers** **✅**

&nbsp;		- **equal should not operate anything if pressed multiple times** **✅**
		- **should not be able to add digits directly to a display result** **✅**

		**- consecutive operators should not calc anything ✅**



	**-** bug fixes : *(this was a sweat)*

&nbsp;		- when a Result is calculated after pressing "=" : **press a new operator should not take previous num and adding it to Result✅**

&nbsp;		- when a Result is calculated after pressing "=" : **press digits should start automaticly a new operation✅**

&nbsp;		- when a Result is calculated after pressing "=" : **press "=" again should not calc anything (from previous operation)✅**

&nbsp;		- same as been verified when a Result if calculated after an intermediate operation such as : 10 + 10 *(20)* - 2 = … **✅**

&nbsp;		
	- last, round answers with long decimals (display) : **add logic to roundup answers to 2 decimals ✅**

*--> code is working as intended. Now, the base logic is reinforced and all(?) potentials bugs have been fixed accordingly.*

*--> some parts in step 7 were really difficult to come around but in the end, I managed to make it work. I've learned a lot during this process.
The main aspect I'm proud of : even when I felt lost or doing the 'wrong' thing, struggling hard etc. => most of time I always come with the good logic, the right mindset and process to get to the bottom of an issue, even if I use the wrong method (e.g. no you cant use that the way you think it will work) or messed up syntax.
--> at this point, we meet every requirements from TOP project : a fully functionnal calculator !*





**Last, the dessert : adding Flexbox and CSS properties. This is our step 8 :** **DONE ✅**



* **add display flex on divs** : make it looks like a "standard iphone calculator" layout **✅**

&nbsp;	- minor bug fix : flex-end was causing my upper row blocs of buttons being slightly offset comparing to the bottom-row (undo, ac, "=")

&nbsp;	removing it simply fixed issue, it's now aligned.



* **add colors and style** (borders, size, font) to match that iphone calculator **✅**
* **change text display** (result) **✅**
* **add a small highlight effect** when a digit/operator button is pressed : use of .classList.add() and setTimeout **✅**



Alright, I think we are.. done !

(add keyboard)





*last update 19/12/25.*

