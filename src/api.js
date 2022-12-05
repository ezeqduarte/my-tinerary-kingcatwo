const API = "https://back-kingcatwo-production.up.railway.app/api/"

if(process.env.NODE_ENV ==="production"){
    API = process.env.REACT_APP_URL
}

export default API