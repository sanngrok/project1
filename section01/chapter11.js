// 함수 선언

function getArea(width, height) { // 매개변수
    function another() {
        // 중첩 함수
        console.log("another");
    }
    
    another();
    let area = width * height;

    return area;
}

let area1 = getArea(10, 20);
console.log(area1);

getArea(10, 50); // 인수
getArea(30, 20);
