import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class MainContent extends Component {
    state = {pageTitle : "Customers",
         customersCount : 5,
         customers : [
           
             { id :1, name : "Scott" ,phone : 123234 , address : {city : "New Delhi"} ,photo : "https://picsum.photos/id/1011/60" },
             { id: 2, name: "Jones", phone: 56354, address: { city: "New Mumbai" }, photo: "https://picsum.photos/id/1012/60" },
             { id: 3, name: "Allen", phone: 4564234, address: { city: "Bangalore" }, photo: "https://picsum.photos/id/1013/60"  },
             { id: 4, name: "James", phone: "", address: { city: "Hydrabad" }, photo: "https://picsum.photos/id/1014/60" },
             { id: 5, name: "John", phone: "", address: { city: "gurgaoun" }, photo: "https://picsum.photos/id/1015/60 " },
        ]
        };
        // customerNameStyle = (customerName) => {
        //     if(customerName.startsWith("S")) return { backgroundColor : "green"};
        //     else if(customerName.startsWith("J")) return { backgroundColor : "red"};
        //     else return {};
        // };
        // customerNameStyle = (customerName) => {
        //     if(customerName.startsWith("S")) return "green-highlight";
        //     else if(customerName.startsWith("J")) return "red-highlight";
        //     else return "";
        // };
        // instead of writing style for particular condition we can set the using index.css class and apply conditionally on methods
    render(){
        return <div>
            <h4 className="border-bottom m-1 p-1">{this.state.pageTitle}
            <span className=" m-2 ">{this.state.customersCount}</span>
            <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
            </h4>
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Photo</th>
                    <th>Customer Name</th>
                    <th>Phone</th>
                    <th>City</th>
                    
                </tr>
                </thead>
                <tbody> 
                   {this.getCustomerRow()}
                </tbody>
            </table>
        </div>;
    }
    // Executes when the user click on Refresh button
    onRefreshClick = () => {
        // console.log("Refresh clicked");
       this.setState({
        customersCount:7
       }) ;
    }
    getPhoneToRender = (phone) => 
    
        {
          return  phone

            ? (phone) : (<div className="">No Phone</div>);
        }
    getPhoneToRender = (phone) => 
          
    {
        if (phone) {
          return phone
        }

        else {
          return  (<div className="">No Phone</div>);
        } 
        }
    getCustomerRow = () => {
        return this.state.customers.map((customer, index) => {
            return (
                <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td>
                        <img src={customer.photo} alt="Customer"/>
                        <div>
                           <button className="btn btn-sm btn-secondary" on onClick={() => {this.onChangePictureClick(customer , index);}}>Change Picture</button> 
                        </div>
                    </td>
                    <td 
                    // style={{ backgroundColor: customer.name.startsWith('S') ? 'green' : 'red' }} instead of this we can write down the method for the same task 
                        // style={this.customerNameStyle(customer.name)} 
                        //   this the call when i am trying to to give the property using function only 
                        // className={this.customerNameStyle(customer.name)}
                    >{customer.name}</td>
                    <td>{this.getPhoneToRender(customer.phone)}</td>
                    <td>{customer.address.city}</td>
                </tr>
            );
        });
        
    }
    onChangePictureClick =(customer,index) => {
        // console.log(customer);
        // console.log(index);
        var cusArr = this.state.customers;
        cusArr[index].photo ="https://picsum.photos/id/1000/60";
        this.setState({customers : cusArr});
        
        
    }
}