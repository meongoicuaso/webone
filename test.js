//bảng cửu chương
function bangcuchuong(ts2, ts3, ts7) {
    document.write("</div>")
    for (var x = 1; x <= 10; x++) {
        document.write("<div style='width:100px; float:left;'>")
        for (var z = 1; z <= 10; z++) {
            document.write(x + " x " + z + " = " + x * z + "<br>")
        }
        document.write("</div>");
    }
}
document.getElementById("btn2").onclick = () => {
    bangcuchuong()
    // bangcuchuong(2, 3, 7)
}

//Biểu đồ
var itemarray = [0, 0, 0, 0];
document.querySelector(".anh").onchange = (e) => {
    if (e.target.value <= 100 && e.target.value > 0) {
        itemarray.splice(0, 1, e.target.value)
    }
    chart(itemarray)
}
document.querySelector(".phap").onchange = (e) => {
    if (e.target.value <= 100 && e.target.value > 0) {
        itemarray.splice(1, 1, e.target.value)
    }
    chart(itemarray)
}
document.querySelector(".nga").onchange = (e) => {
    if (e.target.value <= 100 && e.target.value > 0) {
        itemarray.splice(2, 1, e.target.value)
    }
    chart(itemarray)
}
document.querySelector(".nhat").onchange = (e) => {
    if (e.target.value <= 100 && e.target.value > 0) {
        itemarray.splice(3, 1, e.target.value)
    }
    chart(itemarray)
}
Chart.defaults.global.legend.display = false;
function chart(ts) {
    new Chart("myChart", {
        type: "horizontalBar",
        data: {
            labels: ["anh", "phap", "nga", "nhat"],
            datasets: [{
                backgroundColor: ["orange", "pink", "darkred", "lightblue"],
                data: ts
            }]
        },
        options: {
            scales: {
                xAxes: [{ ticks: { min: 0, max: 100 } }],
                yAxes: [{ ticks: { fontSize: 20 } }]
            }
        }
    });
}
chart(0, 0, 0, 0)


//Máy tính
document.getElementById("cong").onclick = () => {
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    if (input1.value.length != 0 && input2.value.length != 0) {
        var result = Number(input1.value) + Number(input2.value)
        // document.getElementById("input3").setAttribute("placeholder", result)
        document.getElementById("input3").value = result
    } else {
        document.getElementById("input3").value = "cần nhập số"
    }
}
document.getElementById("tru").onclick = () => {
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    if (input1.value.length != 0 && input2.value.length != 0) {
        var result = Number(input1.value) - Number(input2.value)
        document.getElementById("input3").value = result
    } else {
        document.getElementById("input3").value = "cần nhập số"
    }
}
document.getElementById("nhan").onclick = () => {
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    if (input1.value.length != 0 && input2.value.length != 0) {
        var result = Number(input1.value) * Number(input2.value)
        document.getElementById("input3").value = result
    } else {
        document.getElementById("input3").value = "cần nhập số"
    }
}
document.getElementById("chia").onclick = () => {
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    if (input1.value.length != 0 && input2.value.length != 0) {
        var result = Number(input1.value) / Number(input2.value)
        document.getElementById("input3").value = result
    } else {
        document.getElementById("input3").value = "cần nhập số"
    }
}
document.getElementById("mu").onclick = () => {
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    if (input1.value.length != 0 && input2.value.length != 0) {
        var result = Number(input1.value) ** Number(input2.value)
        document.getElementById("input3").value = result
    } else {
        document.getElementById("input3").value = "cần nhập số"
    }
}



// for (var x = 1; x <= 5; x++) {
//     var tr = document.createElement("tr")
//     document.getElementById("foot").appendChild(tr)
//     for (var z = 1; z <= 7; z++) {
//         var td = document.createElement("td")
//         tr.appendChild(td)
//         td.innerHTML = z
//     }
// }

//đồng hồ bấm giờ
var hour = 0
var minute = 0
var second = 0
var rest;

document.getElementById("displaywatch").innerHTML = "0" + hour + ":" + "0" + minute + ":" + "0" + second
function run() {
    second++
    if (second <= 9) {
        document.getElementById("displaywatch").innerHTML = "0" + hour + ":" + "0" + minute + ":" + "0" + second
    }
    if (second > 9) {
        document.getElementById("displaywatch").innerHTML = "0" + hour + ":" + "0" + minute + ":" + second
    }
    if (second > 60) {
        minute++
        document.getElementById("displaywatch").innerHTML = "0" + hour + ":" + "0" + minute + ":" + second
        second = 0
    }
    if (minute > 9) {
        document.getElementById("displaywatch").innerHTML = "0" + hour + ":" + minute + ":" + second
    }
    if (minute > 60) {
        hour++
        document.getElementById("displaywatch").innerHTML = "0" + hour + ":" + minute + ":" + second
        minute = 0
    }
    if (hour > 24) {
        hour = 0
        document.getElementById("displaywatch").innerHTML = "0" + hour + ":" + minute + ":" + second
    }
}
document.getElementById("batdau").onclick = function () {
    clearInterval(rest);
    rest = setInterval(run, 100);
}
document.getElementById("dunglai").onclick = function () {
    clearInterval(rest);
}
document.getElementById("reset").onclick = function () {
    clearInterval(rest);
    hour = 0;
    minute = 0;
    second = 0;
    document.getElementById("displaywatch").innerHTML = "0" + hour + ":" + "0" + minute + ":" + "0" + second
}


