const circle = (angle1, angle2) =>{
    let diff = 0; // разность между двумя углами
    let intermediateResult; // промежуточный результат 
    let biggerAngle; // переменная для хранения значения бОльшего угла
    let smalerAngle; // переменная для хранения меньшего угла

    if (angle1 > 360 || angle2 >360) {
        console.log("Error: one of the angles more than 360 degrees");
    }
    
    else {
        diff = angle1 - angle2;
        diff = Math.abs(diff);
        console.log(diff);

        angle1 > angle2 ? 
        (biggerAngle = angle1, smalerAngle = angle2) : (biggerAngle = angle2, smalerAngle = angle1);
        
        intermediateResult = 360-biggerAngle;
        result = intermediateResult + smalerAngle;
        console.log(result);



        diff < result ? console.log(diff) : console.log(result);

    }
    
};
circle(45, 120);