'use strict';
angular.module("monFormulaire").component("monFormulaire", {
	templateUrl: "js/components/monFormulaire/monFormulaireTemplate.html",
	// controller: "monFormulaireController"
	controller: function monFormulaireController() {
		
		this.controlName = /\b[A-Za-z][a-z\-]{1,50}/;
		this.controlAge = /^\d{1,3}/;
		this.controlAddress = /[\b0-9]{0,3} [a-zA-Z ,]{5,30}\b[0-9]{5}\b \b[A-Z][a-z\-]{1,50}/;
		this.controlEmail;
		console.log('studentForm', studentForm);

		this.rowCollection = [];
		let lastId = this.rowCollection.length;
		this.addRow =() =>{
			let newRow = {
				"id": lastId,
				"firstname": this.firstname,
				"lastname": this.lastname,
				"age": this.age,
				"address": this.address,
				"email": this.email
			};
			this.rowCollection.push(newRow);
			lastId ++;	
			console.log('newRow', newRow);
			newRow = {};
			this.studentForm = {}
    		this.studentForm.$setPristine();
    		this.studentForm.$setInvalid();
    		this.studentForm.$setUntouched();
    		this.studentForm.$submitted = false;
		}
	 	this.reset = () => {
    		this.studentForm = {}
    		this.studentForm.$setPristine();
    		this.studentForm.$setInvalid();
    		this.studentForm.$setUntouched();
    		this.studentForm.$submitted = false;
    		// this.help-block.$hide = false;

   		}

	}
});



