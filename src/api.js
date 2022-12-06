const API = "http://localhost:8000/api/"

if(process.env.NODE_ENV ==="production"){
    API = "https://back-mytinerary-kingcatwo.onrender.com/api/"
}

export default API