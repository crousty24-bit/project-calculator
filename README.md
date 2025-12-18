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



**Next, I'll add some extra features, then go on step 7 for gotchas, bug fixes, reinforce logic : WORKING ON ..**



* first, I'll focus on adding :

&nbsp;	- **handle divide by 0** **✅**

 	- **add decimals, add a . button**

 	- **add undo button** (backspace)

 	- reinforce logic



* then, I'll go on step 7 :





*last update 18/12/25*

