angular.module('monFormulaire').controller('monFormulaireController', [function($scope) {
		let monFormulaireCollection;
		this.controlName = /\b[A-Za-z][a-z\-]{1,50}/;
		this.controlAge = /^\d{1,3}/;
		this.controlAdress = /[\b0-9]{0,3} [a-zA-Z ,]{5,30}\b[0-9]{5}\b \b[A-Z][a-z\-]{1,50}/;
		this.controlEmail;

		
		$scope.test = function() {
			$scope.incomplete = false;
			if ($scope.myBtn && (!$scope.firstname.length ||
					!$scope.lastname.length ||
					!$scope.Age.length || !$scope.address.length)) {
				$scope.incomplete = true;
			}
		};
	}])
	// angular.module("monFormulaire").controller('monFormulaireController', ['$http', function monFormulaireController($http){
	// 	let monFormulaireCollection;
	// 	this.controlName ;
	// 	this.controlAge;
	// 	this.controlAdress;
	// 	this.controlEmail;
	// 	this.add = () => {
	// 		if (this.student.lastname) {
	// 			this.students.push(new Student(this.student))
	// 		} else {
	// 			alert("lastname can't be empty")
	// 		}
	// 	}
	// }])