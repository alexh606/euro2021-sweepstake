/* Euro 2021 team selector 

Quick dirty script to assign random teams to a group of players. 
Each player is assigned as an object with two properties; team1 and team2. 
If you're playing with enough people, you can choose to assign only one team per player. 

Note: the lowest two ranked teams have been removed - North Macedonia and Slovenia. 

*/

//variable containing teams - two lowest ranking
var teams = ['Turkey', 
                'Italy', 
                'Wales', 
                'Switzerland', 
                'Denmark', 
                'Finland', 
                'Belgium', 
                'Russia', 
                'Netherlands', 
                'Ukraine', 
                'Austria', 
                'England', 
                'Croatia', 
                'Scotland', 
                'Czech Republic', 
                'Spain', 
                'Sweden', 
                'Poland', 
                'Hungary', 
                'Portugal', 
                'France', 
                'Germany'];

//function used to create players. 
function player(name, team1, team2) {
    this.name = name;
    this.team1 = team1;
    this.team2 = team2;
}; 

//creation of players
var player1 = new player('Alex');
var player2 = new player('Nikki');
var player3 = new player('James');
var player4 = new player('Ben');
var player5 = new player('Pete');
var player6 = new player('Josh');
var player7 = new player('Harry');
var player8 = new player('Newts');
var player9 = new player('Harv');
var player10 = new player('Louis');
var player11 = new player('Ryan');

//test logs
console.log('before function');
console.log(teams);

//function to assign first random team pick to player. Then removes the team from the teams array. 
function pickFirstTeam(t, p){
        let randTeam = t[Math.floor(Math.random()*t.length)];
        p.team1 = randTeam;
        for (let i = 0; i < t.length; i++){
            if (t[i] == randTeam) {
                teams.splice(i, 1); 
                //test logs
                //console.log('inside function');
                //console.log(teams);
            }
        }
};

//function to assign second random team pick to player. Then removes the team from teams array. 
function pickSecondTeam(t, p){
    let randTeam = t[Math.floor(Math.random()*t.length)];
    p.team2 = randTeam;
    for (let i = 0; i < t.length; i++){
        if (t[i] == randTeam) {
            teams.splice(i, 1); 
            //test logs
            //console.log('inside second function');
            //console.log(teams);
        }
    }
};

//call to function to select teams for player 7
pickFirstTeam(teams, player1);
pickSecondTeam(teams, player1);
pickFirstTeam(teams, player2);
pickSecondTeam(teams, player2);
pickFirstTeam(teams, player3);
pickSecondTeam(teams, player3);
pickFirstTeam(teams, player4);
pickSecondTeam(teams, player4);
pickFirstTeam(teams, player5);
pickSecondTeam(teams, player5);
pickFirstTeam(teams, player6);
pickSecondTeam(teams, player6);
pickFirstTeam(teams, player7);
pickSecondTeam(teams, player7);
pickFirstTeam(teams, player8);
pickSecondTeam(teams, player8);
pickFirstTeam(teams, player9);
pickSecondTeam(teams, player9);
pickFirstTeam(teams, player10);
pickSecondTeam(teams, player10);
pickFirstTeam(teams, player11);
pickSecondTeam(teams, player11);

//test logs
console.log(player1);
console.log(player2);
console.log(player3);
console.log(player4);
console.log(player5);
console.log(player6);
console.log(player7);
console.log(player8);
console.log(player9);
console.log(player10);
console.log(player11);

//test logs
//console.log('after function');
//console.log(teams);