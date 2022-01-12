import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://bfrdjangonotesapp.herokuapp.com',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

const token = JSON.parse(localStorage.getItem('token'));

if(token){
    apiClient.defaults.headers.common.Authorization = 'Bearer '+token;
}

window.e2 = apiClient;

export default{
    //Login
    login(item){
        return apiClient.post('/api/token/', item)
    },
    // CRUD de notas
    listNotas(){
        return apiClient.get('/apiNotes/NotesClone')
    },
    showNota(id){
        return apiClient.get('/apiNotes/NotesClone/'+id)
    },
    crearNota(item){
        return apiClient.post('/apiNotes/NotesClone/', item)
    },
    actualizarNota(item){
        return apiClient.put('/apiNotes/NotesClone/'+item.id+'/', item)
    },
    borrarNota(item){
        return apiClient.delete('/apiNotes/NotesClone/'+item.id, item)
    }
}