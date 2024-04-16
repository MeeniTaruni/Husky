import axios from 'axios';
export class ScheduleService
{
    static getFlightDetailsBySourceAndDestination(source,destination)
    {
        //let results = axios.get('http://localhost:8093/'+source+'/'+destination).then();
        //console.log(results);
        return axios.get('http://localhost:8093/'+source+'/'+destination);
    }
}