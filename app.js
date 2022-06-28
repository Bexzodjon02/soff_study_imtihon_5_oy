$.ajax("http://myjson.dit.upm.es/api/bins/emgj", {
    success: function (ress) {
        console.log(ress);
        massiv = ress
        Alldata = ress
        reRender(ress)
    },
    error: function (ress) {
        console.log(ress);
    }
})

function reRender(data) {
    let count = 0
    $('.malumotOl').html('')
    data.map(item => {
        let col = `
             <div class = "head col-4">
                 <div class =" card my-2  text-center">
                    <img class="images img-fluid" src="${item.img}">
                    <h3>${item.name}</h3>
                    <h3>${item.cost}</h3>
                 
                    <button onclick ="sotibOlish(${count})" class="korish mx-5  my-2 btn btn-primary"> Korzinka </button>
                    <i onclick="yurak(this)" class="bi bi-heart "></i>
                 </div>
             </div>
        `
        $(".malumotOl").append(col)
        count++
    })
}
let searchResalt = []

function search(value) {
    searchResalt = Alldata.filter(item => {
        // console.log(item);
        return item.name.toLowerCase().includes(value.value)
    })
    // console.log(searchResalt);
    $(".malumotOl").html("")
    reRender(searchResalt)
}
// function yurak(val) {
//     $(".yurak")
// }

function savat(val) {  
    reRender(Savatcha)
}


let Savatcha = []
let narxi = 0;

function sotibOlish(val) {
    // console.log(val);   
    narxi = massiv[val].cost
    console.log(narxi);
    massiv.map(item => {
        // console.log(item);
        if (massiv[val].cost === item.cost) {

            let filter = Savatcha.filter(arr => {
                return arr.cost == item.cost
            })
            if (filter.length > 0) {
                alert("Buni sotib olgansiz")
            } else {
                // $(".malumotOl").html(" ")
                Savatcha.push(massiv[val])
            }
        }
    })
    Savatcha.map(item => {
        let col = `    
        <div class = "head col-4 my-5">
        <div class =" card my-2  text-center">
           <img class="images img-fluid" src="${item.img}">
           <h3>${item.name}</h3>
           <h3>${item.cost}</h3>
        
           <button onclick ="sotibOlish(${count})" class="korish mx-5  my-2 btn btn-primary"> Korzinka </button>
           <i onclick="yurak(this)" class="bi bi-heart "></i>
           <i class="fas fa-home"></i>
        </div>
    </div>
        `
        $(".malumotOl").append(col)
    })

}
function yurak(val) {
    reRender(Alldata)
}