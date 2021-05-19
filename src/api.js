const API_URL = `http://localhost:4000/api/v1`;

export async function fetchCourses(){
    return await fetch(`${API_URL}/courses`)
        .then(response => response.json());
}


export async function fetchCourse(id){
    return await fetch(`${API_URL}/courses/${id}`)
        .then(response => response.json());
}