import React from  'react';
import TraineeServices from '../services/TraineeServices';


class TraineeComponent extends React.Component
{
    constructor(props) {
        super(props)
       this.state={
        trainees:[]
       }
    }
     componentDidMount() {

        TraineeServices.getTrainee().then((response) =>{
            this.setState({trainees:response.data})
            
        });
     }

    render(){
        return(
            <div id='tableComponent'>
                  
                  <div> <h2 className='text-center'>TRAINEE  DATA </h2></div>
                  
                     <table className='table table-stripad'>
                          <thead>
                                  <tr id='Hrow'>
                                    <td>Trainee id</td>
                                    <td> Trainee Name </td>
                                    <td> Mobile Number </td>
                                    <td> Date of Birth </td>
                                    <td> Door Number </td>
                                    <td> Street Name</td>
                                    <td> Land mark </td>
                                    <td>City </td>
                                    <td> Pincode</td>
                                    <td>State</td>
                                    <td> Country</td>     
                                  </tr>
                          </thead>
              <tbody id='bodytable'> 
                        { 
                         this.state.trainees.map(
                               trainee =>
                                  <tr key={trainee.traine_id}>
                                    <td>{trainee.traineId}</td>
                                    <td>{trainee.name}</td>
                                    <td>{trainee.mobileNumber}</td>
                                    <td>{trainee.dateOfBirth}</td>
                                    <td>{trainee.address.door_no}</td>
                                    <td>{trainee.address.land_mark}</td>
                                    <td>{trainee.address.street_name}</td>
                                    <td>{trainee.address.pincode}</td>
                                    <td>{trainee.address.city}</td>
                                    <td>{trainee.address.state}</td>
                                    <td>{trainee.address.country}</td>

                                       </tr>
                        )
                        }  
                           </tbody> 
                     </table>
                 
            </div>
        )
    }
}
export default TraineeComponent;