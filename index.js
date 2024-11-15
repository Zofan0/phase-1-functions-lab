// Code your solution in this file!
function distanceFromHqInBlocks(n) {
    return Math.abs(n-42);
}

function distanceFromHqInFeet(n) {
    return Math.abs(n-42)*264;
}

function distanceTravelledInFeet(x, y) {
    return Math.abs(y-x)*264;
}

function calculatesFarePrice(start, destination){
    const xyz = (Math.abs(destination - start))*264
    if (xyz <= 400){
        return 0;
    }
    if (xyz >= 400 && xyz <= 2000) {
        return (xyz-400)*0.02;
    }
    if (xyz >= 2001 && xyz <= 2500) {
        return 25;
    }
    if (xyz >= 2501) {
        return 'cannot travel that far';
    }
}