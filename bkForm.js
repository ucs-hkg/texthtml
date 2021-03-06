function testGS(){
    const url = "https://script.google.com/macros/s/AKfycbx809pH5h_GZI0yaBcBvZeqtvsG-Gp60jFbqDm9P6bM3Fs9gr9G/exec"

    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });
}

document.getElementById("btn").addEventListener("click",testGS);