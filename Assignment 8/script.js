let tasks=[
    {
        id:1,
        name:"Drink lots of Water",
        done:true,
    },
    {
        id:2,
        name:"Make sure to get some sun",
        done:false,
    },
    {
        id:3,
        name:"Keep positive mindset",
        done:true,
    },
    {
        id:3,
        name:"Limit Phone Distractions",
        done:false,
    },
    {
        id:3,
        name:"You can do this",
        done:true,
    },
];


function loadTask(){
    const tbody=document.querySelector("tbody");
    tbody.innerHTML="";
    tasks.forEach((task,index)=>{
        tbody.innerHTML+=`<tr>
        <td>${index+1}</td>
        <td>${task.name}</td>
        <td>${task.done?"completed":"pending"}</td>
        <td><button class="btn btn-success btn-sm"><i class="bi bi-pencil"></i></td>
        <td><button class="btn btn-danger btn-sm"><i class="bi bi-trash"></i></td>
        </tr>`;
    });

}
loadTask();

