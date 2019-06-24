import * as rc from "typed-rest-client/RestClient";

interface Employee {
    id: string;
    employee_name: string;
    employee_salary: string;
    employee_age: string;
    employee_image: string;
}

const baseUrl = "http://dummy.restapiexample.com/";
const resource = "api/v1/employees";
const client = new rc.RestClient('Typescript example', baseUrl);

export async function download() {
    const response = await client.get<Employee[]>(resource);

    return response.result;
}
