const API = "http://localhost:8000/api/"

if(process.env.NODE_ENV ==="production"){
    API = process.env.REACT_APP_URL
}

export default API