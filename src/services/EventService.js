import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://bfrdjangonotesapp.herokuapp.com/api',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default{
    listNotas(){
        return apiClient.get('/NotesClone')
    },
    showNota(id){
        return apiClient.get('/NotesClone/'+id)
    },
    crearNota(item){
        return apiClient.post('/NotesClone/', item)
    },
    actualizarNota(item){
        return apiClient.put('/NotesClone/'+item.id+'/', item)
    },
    borrarNota(item){
        return apiClient.delete('/NotesClone/'+item.id, item)
    }
}