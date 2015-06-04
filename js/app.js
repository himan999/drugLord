'use strict';

// Declare app level module which depends on views, and components
var drugLord = angular.module('drugLord', ['ngRoute']);

drugLord.service('drugCityService', function(){
    this.drugs = [
        {
            name:"Cocaine",
            qty : 0,
            price: 0
        },
        
        {
            name:"Crack",
            qty : 0,
            price: 0
        },
        
        {
            name:"Ecstacy",
            qty : 0,
            price: 0
        },
        
        {
            name:"Hashish",
            qty : 0,
            price: 0
        },
        
        {
            name:"Heroin",
            qty : 0,
            price: 0
        },
        
        {
            name:"Ice",
            qty : 0,
            price: 0
        },
        
        {
            name:"KAT",
            qty : 0,
            price: 0
        },
        
        {
            name:"LSD",
            qty : 0,
            price: 0
        },
        
        {
            name:"MDA",
            qty : 0,
            price: 0
        },
        
        {
            name:"Morphine",
            qty : 0,
            price: 0
        },
        
        {
            name:"Mushrooms",
            qty : 0,
            price: 0
        },
        
        {
            name:"Opium",
            qty : 0,
            price: 0
        },
        
        {
            name:"PCP",
            qty : 0,
            price: 0
        },
        
        {
            name:"Peyote",
            qty : 0,
            price: 0
        },
        
        {
            name:"Pot",
            qty : 0,
            price: 0
        },
        
        {
            name:"Special K",
            qty : 0,
            price: 0
        },
        
        {
            name:"Speed",
            qty : 0,
            price: 0
        }
    ];
    this.cities = ["Austin, USA", "Beijing, China", "Boston, USA", "Detroit, USA", "London, England", "Los Angeles, USA", "Miami, USA", "Moscow, Russia", "New York, USA", "Paris, France", "San Francisco, USA", "St. Peteresburg, Russia", "Sydney, Australia", "Toronto, Canada", "Vancouver, Canada"];
});

drugLord.controller('gameController',['$scope','drugCityService',function(scope,dcs){
    scope.start = false;
    scope.drugs = dcs.drugs;
    
    scope.startNewGame = function() {
        scope.start = false;
        scope.start = true;
    };

    scope.prevTarget = [];
    scope.selectedDrug = function(e) {
        var flag=0;
        if(scope.prevTarget.length < 1) {
            scope.prevTarget.push(e.currentTarget);
            e.currentTarget.className="list-group-item active";
        } else if(isNotPrevObj(e.currentTarget)){
            for (var i = 0, n=scope.prevTarget.length; i < n; i++) {
                scope.prevTarget[i].className = "list-group-item";
            };
            scope.prevTarget.push(e.currentTarget);
            e.currentTarget.className = "list-group-item active";
        } else if(!isNotPrevObj(e.currentTarget)) {
            e.currentTarget.className = "list-group-item active";
            for (var i = 0, n=scope.prevTarget.length; i < n; i++) {
                if(scope.prevTarget[i] == e.currentTarget) {
                    continue;
                } else {
                    scope.prevTarget[i].className = "list-group-item";
                }
            };
        }
        
    };

    function isNotPrevObj(objec) {
        for(var i=0, n = scope.prevTarget.length; i < n; i++) {
            if(scope.prevTarget[i] == objec) {
                return false;
            }
        }
        return true;
    }
}]);