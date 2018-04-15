var app = angular.module('chatApp', ['ngMaterial']);
app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('purple')
        .accentPalette('green');
});
app.controller('chatController', function ($scope) {
    $scope.messages = [
        {
            'sender': 'USER',
            'text': 'Hello'
},
        {
            'sender': 'BOT',
            'text': 'Hiii'
},
        {
            'sender': 'USER',
            'text': 'Whats up'
},
        {
            'sender': 'BOT',
            'text': 'Nothing much. you tell?'
}
];
});