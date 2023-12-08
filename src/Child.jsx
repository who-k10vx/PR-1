import { Component } from "react";


class Child extends Component {


    constructor(props) {
        super(props)
        this.state = {
            allteacher: this.props.teacher,
            allstudent: this.props.Student
        }
    }


    render() {
        return (
<center>
            <div>
                <h1>All Teacher Data</h1>

                <table border={1} cellPadding={5}>
                    <thead>
                        <tr>
                            <th>grid</th>
                            <th>name</th>
                            <th>email</th>
                            <th>password</th>
                            <th>course</th>
                            <th>city</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.allteacher.map((val)=>{
                                return(
                                    <tr>
                                        <td>{val.grid}</td>
                                        <td>{val.name}</td>
                                        <td>{val.email}</td>
                                        <td>{val.password}</td>
                                        <td>{val.course}</td>
                                        <td>{val.city}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>


                <div>
                <h1>All Student Data</h1>

                <table border={1} cellPadding={5} >
                    <thead>
                        <tr>
                            <th>grid</th>
                            <th>name</th>
                            <th>email</th>
                            <th>password</th>
                            <th>course</th>
                            <th>city</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.allteacher.map((val)=>{
                                return(
                                    <tr>
                                        <td>{val.grid}</td>
                                        <td>{val.name}</td>
                                        <td>{val.email}</td>
                                        <td>{val.password}</td>
                                        <td>{val.course}</td>
                                        <td>{val.city}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            </div>
</center>
            


        )
    }
}


export default Child;
