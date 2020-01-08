function resetPage(){
    document.getElementById("hwGrade").value = "";
    document.getElementById("hwWeight").value = "";
    document.getElementById("cwGrade").value = "";
    document.getElementById("cwWeight").value = "";
    document.getElementById("testGrade").value = "";
    document.getElementById("testWeight").value = "";
    document.getElementById("participationGrade").value = "";
    document.getElementById("participationWeight").value = "";
    document.getElementById("projectGrade").value = "";
    document.getElementById("projectWeight").value = "";
    document.getElementById("finalWeight").value = "";
    document.getElementById("desiredGrade").value = "";
    document.getElementById("finalGradeNeeded").innerHTML = "";
    document.getElementById("getCurrentGrade").innerHTML = "";
    document.getElementById(1).style.backgroundColor ="";
    document.getElementById(2).style.backgroundColor ="";
    document.getElementById(3).style.backgroundColor ="";
    document.getElementById(4).style.backgroundColor ="";
    document.getElementById(5).style.backgroundColor ="";
}


function getCurrentGrade() {
    var hwGrade = document.getElementById("hwGrade").value;
    var avgHw = avgArray(stringToArray(hwGrade));
    console.log(avgHw);
    var hwWeight = (parseInt(document.getElementById("hwWeight").value))/100;
    var hw = (avgHw * hwWeight);


    var cwGrade = document.getElementById("cwGrade").value;
    var avgCw = avgArray(stringToArray(cwGrade));
    console.log(avgCw);
    var cwWeight = (parseInt(document.getElementById("cwWeight").value))/100;
    var cw = (avgCw * cwWeight);


    var testGrade = document.getElementById("testGrade").value;
    var avgTest = avgArray(stringToArray(testGrade));
    console.log(avgTest);
    var testWeight = (parseInt(document.getElementById("testWeight").value))/100;
    var test = (avgTest * testWeight);


    var participationGrade = document.getElementById("participationGrade").value;
    var avgParticipation = avgArray(stringToArray(participationGrade));
    console.log(avgParticipation);
    var participationWeight = (parseInt(document.getElementById("participationWeight").value))/100;
    var participation = (avgParticipation * participationWeight);


    var projectGrade = document.getElementById("projectGrade").value;
    var avgProject = avgArray(stringToArray(projectGrade));
    console.log(avgProject);
    var projectWeight = (parseInt(document.getElementById("projectWeight").value))/100;
    var project = (avgProject * projectWeight);


    var finalWeight = parseInt(document.getElementById("finalWeight").value);
    var totalWeight = (hwWeight + participationWeight + testWeight + + projectWeight + cwWeight + (finalWeight/100)) * 100;
    var grades = (hw + test + cw + participation + project);

    colorRow(1, avgHw);
    colorRow(2, avgCw);
    colorRow(3, avgTest);
    colorRow(4, avgParticipation);
    colorRow(5, avgProject);




    if(totalWeight !=100 || isNaN(finalWeight)){
        document.getElementById("getCurrentGrade").innerHTML = "ERROR! The weight percentages you have entered do not add up to 100% or the weight you entered is not a number. Please enter a valid weight for all categories.";
    }else{
        var getCurrentGrade = (grades / (100 - finalWeight) * 100);
        getCurrentGrade = Math.round(getCurrentGrade);
        console.log(getCurrentGrade);
        document.getElementById("getCurrentGrade").innerHTML = "Your grade is: " + getCurrentGrade + "%";
    }
    return getCurrentGrade;
}


function finalGradeNeeded() {
    var desiredGrade = parseInt(document.getElementById("desiredGrade").value);
    var finalWeight = parseInt(document.getElementById("finalWeight").value);

    if (isNaN(desiredGrade) || isNaN(finalWeight) || desiredGrade == "") {
        document.getElementById("finalGradeNeeded").innerHTML = "ERROR. This is not a number. Please enter a valid weight and grade."
    }else {
        var finalGradeNeeded = ((desiredGrade - (getCurrentGrade() / 100) * (100 - finalWeight)) / (finalWeight)) * 100;
        console.log(finalGradeNeeded);
        finalGradeNeeded = Math.round(finalGradeNeeded);
        if (finalGradeNeeded > 100){
            document.getElementById("finalGradeNeeded").innerHTML = "You need " + finalGradeNeeded + "% on the final. Better luck next time!";
        }else{
            document.getElementById("finalGradeNeeded").innerHTML = "You need " + finalGradeNeeded + "% on the final. Good luck!";
        }
        return finalGradeNeeded;
    }
}


function colorRow (row, avg){
    if (avg >= 90){
        document.getElementById(row).style.backgroundColor ="#98FF98";
    }

    if (avg >= 80 && avg < 90){
        document.getElementById(row).style.backgroundColor = "#8EEBEC";
    }


    if (avg >= 70 && avg < 80){
        document.getElementById(row).style.backgroundColor = "#FFE87C";
    }

    if (avg >= 60 && avg < 70){
        document.getElementById(row).style.backgroundColor = "#E8A317";
    }

    if (avg < 60){
        document.getElementById(row).style.backgroundColor = "#DC381F";
    }


}

function stringToArray(string){
    var array = string.split(",");
    for(var i = 0; i < array.length; i++){
        array[i] = parseInt(array[i]);
    }
    console.log(array);
    return array;
}


function avgArray(array){
    var num = 0;
    for(var i = 0; i < array.length; i++){
        num += array[i];
    }
    var average = num/(array.length);
    return average;
}
