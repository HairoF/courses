const API_URL = `http://localhost:4000/api/v1`;

export async function fetchCourses(url,data){
    return await fetch(`${API_URL}${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json());
}


export async function fetchCourse(id){
    return await fetch(`${API_URL}/courses/${id}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({courseId: id})
    })
        .then(response => response.json());

}