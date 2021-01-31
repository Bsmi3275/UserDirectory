import React, { Component } from "react";
import searchBar from "./searchBar"
import EmpTable from "./EmpTable";
import API from "../utils/API";

class Main extends Component {
    state = {
        result: [],
        filteredResult: [],
        search: ''
    };

    componentDidMount() {
        this.searchUsers();
    };

    searchUsers = () => {
        API.search()
            .then(res => {
                this.setState({ result: res.data.results });
                this.setState({ filteredResult: res.data.results });
                console.log(this.state.result);
            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {

        const { name, value } = event.target;

        this.setState({
            [name]: value
        });

        let filtered = this.state.result.filter(obj => {
            if (obj.name.first.toLowerCase().includes(value.toLowerCase()) || obj.name.last.toLowerCase().includes(value.toLowerCase())) {
                return obj;
            }
        })

        this.setState({ filteredResult: filtered });

    };

    handleSort = event => {
        console.log(event.target.name)
        switch(event.target.name) {

            case 'firstNameAscend':

                let firstAscend = this.state.filteredResult;

                firstAscend.sort((a, b) => {
                    let nameA = a.name.first.toLowerCase();
                    let nameB = b.name.first.toLowerCase();

                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                })

                this.setState({ filteredResult: firstAscend })
                break;

            case 'firstNameDescend':

                let firstDescend = this.state.filteredResult;

                firstDescend.sort((a, b) => {
                    let nameA = a.name.first.toLowerCase();
                    let nameB = b.name.first.toLowerCase();

                    if (nameA < nameB) {
                        return 1;
                    }
                    if (nameA > nameB) {
                        return -1;
                    }
                    return 0;
                })

                this.setState({ filteredResult: firstDescend })
                break;

            case 'lastNameAscend':

                let lastAscend = this.state.filteredResult;

                lastAscend.sort((a, b) => {
                    let nameA = a.name.last.toLowerCase();
                    let nameB = b.name.last.toLowerCase();

                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                })

                this.setState({ filteredResult: lastAscend })
                break;

            case 'lastNameDescend':

                let lastDescend = this.state.filteredResult;

                lastDescend.sort((a, b) => {
                    let nameA = a.name.last.toLowerCase();
                    let nameB = b.name.last.toLowerCase();

                    if (nameA < nameB) {
                        return 1;
                    }
                    if (nameA > nameB) {
                        return -1;
                    }
                    return 0;
                })

                this.setState({ filteredResult: lastDescend })
                break;

            case 'emailAscend':

                let emailAscend = this.state.filteredResult;

                emailAscend.sort((a, b) => {
                    let nameA = a.email.toLowerCase();
                    let nameB = b.email.toLowerCase();

                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                })

                this.setState({ filteredResult: emailAscend })
                break;

            case 'emailDescend':

                let emailDescend = this.state.filteredResult;

                emailDescend.sort((a, b) => {
                    let nameA = a.email.toLowerCase();
                    let nameB = b.email.toLowerCase();

                    if (nameA < nameB) {
                        return 1;
                    }
                    if (nameA > nameB) {
                        return -1;
                    }
                    return 0;
                })

                this.setState({ filteredResult: emailDescend })
                break;
            
            case 'dobAscend':
                
                let dobAscend = this.state.filteredResult;

                dobAscend.sort((a, b) => {
                    let dobA = a.dob.date.slice(0,10);
                    

                    let dobB = b.dob.date.slice(0,10);
                    

                    if (dobA < dobB) {
                        return -1;
                    }
                    if (dobA > dobB) {
                        return 1;
                    }
                    return 0;
                })

                this.setState({ filteredResult: dobAscend })
                break;

            case 'dobDescend':
                
                let dobDescend = this.state.filteredResult;

                dobDescend.sort((a, b) => {
                    let dobA = a.dob.date.slice(0,10);
                    

                    let dobB = b.dob.date.slice(0,10);
                    

                    if (dobA < dobB) {
                        return 1;
                    }
                    if (dobA > dobB) {
                        return -1;
                    }
                    return 0;
                })

                this.setState({ filteredResult: dobDescend })
                break;

        }
    }


    render() {
        return (
            <div>
                <searchBar />
                <EmpTable filteredResults={this.state.filteredResult} />
            </div>   
        );
    }
}

export default Main;