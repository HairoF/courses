const API_URL = `http://localhost:4000/api`;

export async function fetchCourses(url,data){
    console.log(`log from fetch ${API_URL}${url}`);
    return await fetch(`${API_URL}${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json());
}


export async function fetchCourse(url,id){
    console.log(`log from fetch_2 ${API_URL}${url}:id`);
    return await fetch(`${API_URL}${url}:id`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({courseId: id})
    })
        .then(response => response.json());

}