var appp = angular.module('myApp', ['ngRoute',"ngAnimate"]);
appp.config(function($routeProvider){
    // $locationProvider.hashPrefix('');
$routeProvider
.when("/books", {
    templateUrl:" partials/booklist.html",
    controller: "bookListCtrl"
})
.when("/kart",{
    templateUrl: "partials/karlist.html",
    controller: "kartListCtrl"

})
.otherwise({
    redirectTo: "/books"
})
});
appp.factory("kartservice",function(){
var kart = [];
return {
    getkart: function(){
        return kart;
    },
    addToKart:function(bookItem){
        kart.push(bookItem);
    },
    buy: function(bookItem){
        alert("Thanks for buying",bookItem.name);

    }
}
});
appp.factory("bookservice",function(){
var books=[
        {
            imgUrl:"css/John.jpg",
            name:"The Rooster Bar",
            author: "by John Grisham and Ari Fliakos",
            price:"17",
            rating:"4.5",
            binding:"Hardcover"
        },
                {
            imgUrl:"css/che.jpg",
            name:"One Indian Girl",
            author: "by Chetan Bhagat",
            price:"7.69",
            rating:"3.5",
            binding:"Hardcover"
        },
        {
            imgUrl:"css/Dan.jpg",
            name:"Origin: A Novel",
            author: "by Dan Brown",
            price:"17.87",
            rating:"4.6",
            binding:"Hardcover"
        },
        {
            imgUrl:"css/stephen.jpg",
            name:"Sleeping Beauties: A Novel",
            author: "by Stephen King and Owen King",
            price:"14",
            rating:"4.5",
            binding:"Hardcover"
        },
    ];
return {
getbooks:function(){
    console.log("In return!!!!!!!!!!!!!");
    return books;
}
}
} 
);
appp.controller('HeaderCtrl', ['$scope',function($scope,$location) {
    $scope.title = "BookKart";
    $scope.tagline = "we have 1 million books for you";

    $scope.nav={};
    $scope.nav.isActive=function(path){
        if(path==$location.path()){
        return true; }

        return false;
    }
    
}]);
appp.controller('bookListCtrl', [ '$scope' ,'bookservice', 'kartservice',function($scope,bookservice,kartservice) {
    $scope.booklist=bookservice.getbooks(); 

    $scope.addToKart = function(bookItem){
      kartservice.addToKart(bookItem);
    }
}]);

appp.controller("kartListCtrl", [ '$scope' ,'kartservice',function($scope,kartservice){
$scope.kart=kartservice.getkart();
$scope.buy=function(bookItem){
    kartservice.buy(bookItem);
}
}]);




