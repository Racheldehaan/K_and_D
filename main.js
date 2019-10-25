angular.module('KRRclass', [ 'chart.js']).controller('MainCtrl', ['$scope','$http', mainCtrl]);

function mainCtrl($scope, $http){
	$scope.Groups = ["Fruits", "Fats", "Meat and dairy", "Grains", "Vegetables"];
	$scope.State = [1, 1, 1, 1, 1];
	$scope.Options = {
		scale: {
			ticks: {
				beginAtZero: true,
				min: 0,
				max: 4,
				stepSize: 1
			}
		}
	};

	$scope.visual = function(){
		var checkBox1 = document.getElementById("Ras");
		var checkBox2 = document.getElementById("Spi");
		var checkBox3 = document.getElementById("Bro");
		var checkBox4 = document.getElementById("Let");
		var checkBox5 = document.getElementById("Sal");
		var checkBox6 = document.getElementById("Tom");
		if (checkBox1.checked == true || checkBox2.checked == true || checkBox3.checked == true || checkBox4.checked == true || checkBox5.checked == true || checkBox6.checked == true){
			$scope.State[4] = 4
		}
		else{
			$scope.State[4] = 1
		}

		var checkBox7 = document.getElementById("Bre");
		var checkBox8 = document.getElementById("Pas");
		var checkBox9 = document.getElementById("Ric");
		var checkBox10 = document.getElementById("Pot");
		if (checkBox7.checked == true || checkBox8.checked == true || checkBox9.checked == true || checkBox10.checked == true){
			$scope.State[3] = 4	
		}
		else{
			$scope.State[3] = 1
		}

		var checkBox11 = document.getElementById("Che");
		var checkBox12 = document.getElementById("Egg");
		var checkBox13 = document.getElementById("Fis");
		var checkBox14 = document.getElementById("Mea");
		var checkBox15 = document.getElementById("Nut");
		var checkBox16 = document.getElementById("Mil");
		var checkBox17 = document.getElementById("Yog");
		if (checkBox11.checked == true || checkBox12.checked == true || checkBox13.checked == true || checkBox14.checked == true || checkBox15.checked == true || checkBox16.checked == true || checkBox17.checked == true){
			$scope.State[2] = 4
		}
		else{
			$scope.State[2] = 1
		}

		var checkBox18 = document.getElementById("But");
		var checkBox19 = document.getElementById("Coo");
		var checkBox20 = document.getElementById("Oli");
		var checkBox21 = document.getElementById("Mar");
		var checkBox22 = document.getElementById("Sun");
		if (checkBox18.checked == true || checkBox19.checked == true || checkBox20.checked == true || checkBox21.checked == true || checkBox22.checked == true){
			$scope.State[1] = 4
		}
		else{
			$scope.State[1] = 1
		}
		

		var checkBox23 = document.getElementById("Ban");
		var checkBox24 = document.getElementById("App");
		var checkBox25 = document.getElementById("Str");
		var checkBox26 = document.getElementById("Gra");
		var checkBox27 = document.getElementById("Pea");
		if (checkBox23.checked == true || checkBox24.checked == true || checkBox25.checked == true || checkBox26.checked == true ||checkBox27.checked == true){
			$scope.State[0] = 4
		}
		else{
			$scope.State[0] = 1
		}
	}

	$scope.launchMyGreatApp = function(){
		var checkBox1 = document.getElementById("Ras");
		var checkBox2 = document.getElementById("Spi");
		var checkBox3 = document.getElementById("Bro");
		var checkBox4 = document.getElementById("Let");
		var checkBox5 = document.getElementById("Sal");
		var checkBox6 = document.getElementById("Tom");
		if (checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == false && checkBox5.checked == false && checkBox6.checked == false){
			$scope.mySparqlElement1 = "<http://www.semanticweb.org/hannahvisser/25/milestone2/Vegetables>";
			$scope.mySparqlQuery = encodeURI("SELECT (SAMPLE(?id) AS ?recipe_id)  WHERE{ {"+ $scope.mySparqlElement1 + " <http://www.semanticweb.org/hannahvisser/25/milestone2/consistOf> ?ingredient_recipe .} UNION{" + $scope.mySparqlElement1 + " <http://example.com/resource/ingredients> ?ingredient_recipe.} ?id  <http://example.com/resource/ingredients> ?ingredient_recipe.    } GROUP BY ?id ORDER BY RAND() LIMIT 1").replace(/#/, '%23');
		}

		var checkBox7 = document.getElementById("Bre");
		var checkBox8 = document.getElementById("Pas");
		var checkBox9 = document.getElementById("Ric");
		var checkBox10 = document.getElementById("Pot");
		if (checkBox7.checked == false && checkBox8.checked == false && checkBox9.checked == false && checkBox10.checked == false){
			$scope.mySparqlElement2 = "<http://www.semanticweb.org/hannahvisser/25/milestone2/Grains>";
			$scope.mySparqlQuery = encodeURI("SELECT (SAMPLE(?id) AS ?recipe_id)  WHERE{ {"+ $scope.mySparqlElement2 + " <http://www.semanticweb.org/hannahvisser/25/milestone2/consistOf> ?ingredient_recipe .} UNION {" + $scope.mySparqlElement2 + " <http://example.com/resource/ingredients> ?ingredient_recipe.} ?id  <http://example.com/resource/ingredients> ?ingredient_recipe.    } GROUP BY ?id ORDER BY RAND() LIMIT 1").replace(/#/, '%23');
		}

		var checkBox11 = document.getElementById("Che");
		var checkBox12 = document.getElementById("Egg");
		var checkBox13 = document.getElementById("Fis");
		var checkBox14 = document.getElementById("Mea");
		var checkBox15 = document.getElementById("Nut");
		var checkBox16 = document.getElementById("Mil");
		var checkBox17 = document.getElementById("Yog");
		if (checkBox11.checked == false && checkBox12.checked == false && checkBox13.checked == false && checkBox14.checked == false && checkBox15.checked == false && checkBox16.checked == false && checkBox17.checked == false){
			$scope.mySparqlElement3 = "<http://www.semanticweb.org/hannahvisser/25/milestone2/Meat_and_dairy>";
			$scope.mySparqlQuery = encodeURI("SELECT (SAMPLE(?id) AS ?recipe_id)  WHERE{ {"+ $scope.mySparqlElement3 + " <http://www.semanticweb.org/hannahvisser/25/milestone2/consistOf> ?ingredient_recipe .} UNION {" + $scope.mySparqlElement3 + " <http://example.com/resource/ingredients> ?ingredient_recipe.} ?id  <http://example.com/resource/ingredients> ?ingredient_recipe.    } GROUP BY ?id ORDER BY RAND() LIMIT 1").replace(/#/, '%23');
		}

		var checkBox18 = document.getElementById("But");
		var checkBox19 = document.getElementById("Coo");
		var checkBox20 = document.getElementById("Oli");
		var checkBox21 = document.getElementById("Mar");
		var checkBox22 = document.getElementById("Sun");
		if (checkBox18.checked == false && checkBox19.checked == false && checkBox20.checked == false && checkBox21.checked == false && checkBox22.checked == false){
			$scope.mySparqlElement4 = "<http://www.semanticweb.org/hannahvisser/25/milestone2/Fats>";
			$scope.mySparqlQuery = encodeURI("SELECT (SAMPLE(?id) AS ?recipe_id)  WHERE{ {"+ $scope.mySparqlElement4 + " <http://www.semanticweb.org/hannahvisser/25/milestone2/consistOf> ?ingredient_recipe .} UNION {" + $scope.mySparqlElement4 + " <http://example.com/resource/ingredients> ?ingredient_recipe.} ?id  <http://example.com/resource/ingredients> ?ingredient_recipe.    } GROUP BY ?id ORDER BY RAND() LIMIT 1").replace(/#/, '%23');
		}
		

		var checkBox23 = document.getElementById("Ban");
		var checkBox24 = document.getElementById("App");
		var checkBox25 = document.getElementById("Str");
		var checkBox26 = document.getElementById("Gra");
		var checkBox27 = document.getElementById("Pea");
		if (checkBox23.checked == false && checkBox24.checked == false && checkBox25.checked == false && checkBox26.checked == false && checkBox27.checked == false){
			$scope.mySparqlElement5 = "<http://www.semanticweb.org/hannahvisser/25/milestone2/Fruits>";
			$scope.mySparqlQuery = encodeURI("SELECT (SAMPLE(?id) AS ?recipe_id)  WHERE{ {"+ $scope.mySparqlElement5 + " <http://www.semanticweb.org/hannahvisser/25/milestone2/consistOf> ?ingredient_recipe .} UNION {" + $scope.mySparqlElement5 + " <http://example.com/resource/ingredients> ?ingredient_recipe.} ?id  <http://example.com/resource/ingredients> ?ingredient_recipe.    } GROUP BY ?id ORDER BY RAND() LIMIT 1").replace(/#/, '%23');
		}
		
		if ((checkBox1.checked == false || checkBox2.checked == false || checkBox3.checked == false || checkBox4.checked == false || checkBox5.checked == false || checkBox6.checked == false) && (checkBox7.checked == false || checkBox8.checked == false || checkBox9.checked == false || checkBox10.checked == false ) && ( checkBox11.checked == false || checkBox12.checked == false || checkBox13.checked == false || checkBox14.checked == false || checkBox15.checked == false || checkBox16.checked == false || checkBox17.checked == false) && (checkBox18.checked == false || checkBox19.checked == false || checkBox20.checked == false || checkBox21.checked == false || checkBox22.checked == false) && (checkBox23.checked == false || checkBox24.checked == false || checkBox25.checked == false || checkBox26.checked == false || checkBox27.checked == false)){
			$scope.mySparqlQuery = encodeURI("SELECT (SAMPLE(?id) AS ?recipe_id) where { ?id <http://example.com/resource/id> ?id2 .} GROUP BY ?id ORDER BY RAND() LIMIT 1").replace(/#/, '%23');
		}
    	
    $http( {
     	method: "GET",
      	url : "http://localhost:7200/repositories/finalProject?query=" + $scope.mySparqlQuery,
			headers : {'Accept':'application/sparql-results+json', 'Content-Type':'application/sparql-results+json'}
    	} )
    	.success(function(data, status ) {
			//$scope.myDynamicLabels = [];
			$scope.myId = "";

			// now iterate on the results
			angular.forEach(data.results.bindings, function(val) {
				$scope.myId = val.recipe_id.value;
				$scope.mySparqlQuery2 = encodeURI("SELECT * WHERE{ <" + $scope.myId + ">  <http://example.com/resource/cuisine> ?cuisine. <" +$scope.myId + ">  <http://example.com/resource/ingredients> ?ingredient.} ").replace(/#/, '%23');
		
			//$scope.myDynamicData.push(val.nbr_courses.value);
			});
			$http( {
				method: "GET",
				 url : "http://localhost:7200/repositories/finalProject?query=" + $scope.mySparqlQuery2,
				   headers : {'Accept':'application/sparql-results+json', 'Content-Type':'application/sparql-results+json'}
			   } )
			   .success(function(data, status ) {
				   
				   $scope.myDynamicLabels = [];
				   $scope.myDynamicData = "";
	   
				   // now iterate on the results
				   angular.forEach(data.results.bindings, function(val) {
					$scope.myDynamicLabels.push(val.ingredient.value )
					console.log(val.ingredient.value)
				   $scope.myDynamicData = val.cuisine.value.toUpperCase();
				   });
			 })
			   .error(function(error ){
				   console.log('Error '+$scope.myId +error);
			   });

      })
    	.error(function(error ){
    	    console.log('Error '+error);
    	});

	};

}


	function myFunction($scope) {

		var text1 = document.getElementById("text1");
		var text2 = document.getElementById("text2");
		var text3 = document.getElementById("text3");
		var text4 = document.getElementById("text4");
		var text5 = document.getElementById("text5");
		var textWRONG = document.getElementById("textWRONG");
		var textGOOD = document.getElementById("textGOOD");

		var checkBox1 = document.getElementById("Ras");
		var checkBox2 = document.getElementById("Spi");
		var checkBox3 = document.getElementById("Bro");
		var checkBox4 = document.getElementById("Let");
		var checkBox5 = document.getElementById("Sal");
		var checkBox6 = document.getElementById("Tom");
		if (checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == false && checkBox5.checked == false && checkBox6.checked == false){
			text1.style.display = "block";
		} else {
		   text1.style.display = "none";
		}
		

		var checkBox7 = document.getElementById("Bre");
		var checkBox8 = document.getElementById("Pas");
		var checkBox9 = document.getElementById("Ric");
		var checkBox10 = document.getElementById("Pot");
		if (checkBox7.checked == false && checkBox8.checked == false && checkBox9.checked == false && checkBox10.checked == false){
			text2.style.display = "block";
		} else {
		   text2.style.display = "none";
		}
		

		var checkBox11 = document.getElementById("Che");
		var checkBox12 = document.getElementById("Egg");
		var checkBox13 = document.getElementById("Fis");
		var checkBox14 = document.getElementById("Mea");
		var checkBox15 = document.getElementById("Nut");
		var checkBox16 = document.getElementById("Mil");
		var checkBox17 = document.getElementById("Yog");
		if (checkBox11.checked == false && checkBox12.checked == false && checkBox13.checked == false && checkBox14.checked == false && checkBox15.checked == false && checkBox16.checked == false && checkBox17.checked == false){
			text3.style.display = "block";
		} else {
		   text3.style.display = "none";
		}
		

		var checkBox18 = document.getElementById("But");
		var checkBox19 = document.getElementById("Coo");
		var checkBox20 = document.getElementById("Oli");
		var checkBox21 = document.getElementById("Mar");
		var checkBox22 = document.getElementById("Sun");
		if (checkBox18.checked == false && checkBox19.checked == false && checkBox20.checked == false && checkBox21.checked == false && checkBox22.checked == false){
			text4.style.display = "block";
		} else {
		   text4.style.display = "none";
		}
		

		var checkBox23 = document.getElementById("Ban");
		var checkBox24 = document.getElementById("App");
		var checkBox25 = document.getElementById("Str");
		var checkBox26 = document.getElementById("Gra");
		var checkBox27 = document.getElementById("Pea");
		if (checkBox23.checked == false && checkBox24.checked == false && checkBox25.checked == false && checkBox26.checked == false && checkBox27.checked == false){
			text5.style.display = "block";
		} else {
		   text5.style.display = "none";
		}

		if ((checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == false && checkBox4.checked == false && checkBox5.checked == false && checkBox6.checked == false) || (checkBox7.checked == false && checkBox8.checked == false && checkBox9.checked == false && checkBox10.checked == false )|| ( checkBox11.checked == false && checkBox12.checked == false && checkBox13.checked == false && checkBox14.checked == false && checkBox15.checked == false && checkBox16.checked == false && checkBox17.checked == false) || (checkBox18.checked == false && checkBox19.checked == false && checkBox20.checked == false && checkBox21.checked == false && checkBox22.checked == false) || (checkBox23.checked == false && checkBox24.checked == false && checkBox25.checked == false && checkBox26.checked == false && checkBox27.checked == false)){
			textGOOD.style.display = "none";
			textWRONG.style.display = "block";
		} else {
			textGOOD.style.display = "block";
			textWRONG.style.display = "none";	
		}
		
	  }
	
	
