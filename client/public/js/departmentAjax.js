$(()=>{ //load

    $.ajax({
        url: "http://localhost:8085/departments/list",
        method:"get",
        dataType: "json",
        success: function(result){
           for(department of result){
               $("#departmentsTable").append(`<tr>
               <td>${department._id}</td>
               <td>${department.name}</td>
               <td>${department.location}</td>
               </tr>`)
           }
           console.log(result);
        },
        error:function(error){
            console.log(error);
        }
    })

    $(":button[id=add]").on("click",function(){ //add button
         _id = $("input[name=id]").val();
         name = $("input[name=name]").val();
         location = $("input[name=location]").val();
         departmentData = {_id,name,location};
        $.ajax({
            url: "http://localhost:8085/departments/add",
            method:"post",
            contentType:"application/json",
            data:JSON.stringify(departmentData),
            dataType: "json",
            success: function(result){
                   $("#departmentsTable").append(`<tr>
                   <td>${departmentData._id}</td>
                   <td>${departmentData.name}</td>
                   <td>${departmentData.location}</td>
                   </tr>`)
               console.log(result);
            },
            error:function(error){
                console.log(error);
            }
        })
    })
})