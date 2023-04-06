
import axios from "axios";
const TRAINEE_REST_API_URL='http://localhost:8080/traine';
class TraineeServices{
    getTrainee()
    {
        return axios.get(TRAINEE_REST_API_URL);
    }
}

export default new TraineeServices();
