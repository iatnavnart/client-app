import axios from 'axios';

class UploadFileService {

    upload(data) {
        return axios.post("http://localhost:8888/rest/image/upload", data);
    }
}

export default new UploadFileService();