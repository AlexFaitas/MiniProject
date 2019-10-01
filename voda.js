const  letters =["a","b","c","d","e","f","g","h"];

var calculationButton = $("#calc");//pick calc button by his id with jQuery
var startPoint=$("#startingpoint");
var endPoint=$("#endpoint");
var countMoves=$("#countmoves");

calculationButton.click(function(){
    alert(calculateResult());
});



function calculateResult(){
    console.log(`start:${getStart()},end:${getEnd()},moves:${getMoves()}`);
    var start = convertToCoordinatesNotation(getStart());
    var end = convertToCoordinatesNotation(getEnd());
    var allowedMoves = parseInt(getMoves());
    
   

    for(let i=0; i<allowedMoves; i++){
        var possibleCoordinateMoves =possibleKnightMoves(start);
        var possibleAlgebraicMoves = possibleCoordinateMoves.map(move=>convertToChessNotation(move));
        console.log("possibleMoves",possibleAlgebraicMoves);
        start =possibleCoordinateMoves[0];

    }

}


function getMoves(){
    return countMoves.val();
}
function getStart(){
    return startPoint.val();
}
function getEnd(){
    return endPoint.val();
}
function convertToChessNotation(start){
 
    var algebraicResult = letters[start.x-1] + start.y;
    return algebraicResult.toUpperCase(); 
    
}
function convertToCoordinatesNotation(startPoint){

    var xPoint = letters.indexOf(startPoint[0].toLowerCase())+1; //pare to alpharithmitiko tou kai susxetise thesh sto array stwn letters 
    var yPoint = parseInt(startPoint[1]); //pare ton arithmo t
    console.log("xPoint",xPoint,yPoint);

    var coordinates = {
        x:xPoint,
        y:yPoint
    }

    return coordinates;
}
function possibleKnightMoves(currentPoint){
    var xPoint = currentPoint.x;
    var yPoint = currentPoint.y;
    var possibleMoves = [
        {
           x:xPoint-2,
           y:yPoint+1     
        },
        {
            x:xPoint+2,
            y:yPoint+1     
         },
         {
            x:xPoint-2,
            y:yPoint-1 
         },
         {
            x:xPoint+2,
            y:xPoint-1     
         },
         {
            x:xPoint+1,
            y:yPoint-2    
         },
         {
            x:xPoint-1,
            y:yPoint-2     
         },
         {
            x:xPoint-1,
            y:yPoint+2
         },
         {
            x:xPoint+1,
            y:yPoint+2 
         }
    ].filter(move=>move.x >=1 && move.y >=1);
    return possibleMoves;
}