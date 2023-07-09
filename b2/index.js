function numberOneTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let spaces = n - i;
        let stars = i;
        let output = "";
        for (let j = 0; j < spaces; j++) {
            output += " ";
        }
        for (let j = 0; j < stars; j++) {
            output += "*";
        }
        document.getElementById("triangle").innerHTML += output + "<br>";
    }
}