import { download } from "./asyncDownload";

download()
    .then((result) =>{
        const employees = result;

        employees.forEach(employee => {
            console.log(employee.employee_name);
        });
    })
