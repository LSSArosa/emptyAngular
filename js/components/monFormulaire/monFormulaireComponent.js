'use strict';
angular.module("monFormulaire").component("monFormulaire", {
	templateUrl: "js/components/monFormulaire/monFormulaireTemplate.html",
	// controller: "monFormulaireController"
	controller: function monFormulaireController() {
		
		this.controlName = /\b[A-Za-z][a-z\-]{1,50}/;
		this.controlAge = /^\d{1,3}/;
		this.controlAddress = /[\b0-9]{0,3} [a-zA-Z ,]{5,30}\b[0-9]{5}\b \b[A-Z][a-z\-]{1,50}/;
		this.controlEmail;

		this.rowCollection = [];
		this.addRow =() =>{
			let newRow = {
				"firstname": this.firstname,
				"lastname": this.lastname,
				"age": this.age,
				"address": this.address,
				"email": this.email
			};
			this.rowCollection.push(newRow);
		
		console.log('')
		}
	 	this.reset = () => {
    		this.studentForm = {}
   		}

	}
});



