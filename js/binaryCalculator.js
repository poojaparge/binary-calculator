function initialise() {
	
	var resDiv = document.createElement("div");
	resDiv.setAttribute("id", "res");
	document.body.appendChild(resDiv);
	
	var btnDiv = document.createElement("div");
	btnDiv.setAttribute("id", "btns");
	
	// Creating 8 Buttons
	var btnArr = [0, 1, "Clr", "Eql", "Sum", "Sub", "Mul", "Div"];
	var labels = [0, 1, "C", "=", "+", "-", "*", "/"];
	btnArr.forEach( function (i, index) {
		var btn = document.createElement("button");
		btn.setAttribute("id", "btn" + i);
		btn.innerHTML = labels[index];
		btn.addEventListener("click", calculate);
		btnDiv.appendChild(btn);
	}, this);
	document.body.appendChild(btnDiv);
}

function calculate() {
	var res = document.getElementById("res");
	if (this.innerHTML == "C")
		res.innerHTML = "";
	else if (this.innerHTML == "=")
		result(res);
	else
		res.innerHTML+=this.innerHTML;
}

function result(res) {
	var answer = "";
	var expression = res.innerHTML;
	var tmp = "", field1, field2, operator;
	for (var i = 0; i < expression.length; i++) {
	  if(expression.charAt(i) == "0" || expression.charAt(i) == "1")
		  tmp+=expression.charAt(i);
	  else {
		  operator = expression.charAt(i);
		  field1 = tmp;
		  tmp = "";
	  }
	  field2 = tmp;
	}
	
	switch (operator) {
		case '+':
			answer = parseInt(field1, 2) + parseInt(field2, 2);
			break;
		
		case '-':
			answer = parseInt(field1, 2) + parseInt(field2, 2);
			break;
		
		case '*':
			answer = parseInt(field1, 2) + parseInt(field2, 2);
			break;
		
		case '/':
			answer = parseInt(field1, 2) + parseInt(field2, 2);
			break;
	}

	res.innerHTML = answer.toString(2);
}

initialise();
