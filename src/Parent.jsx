import { Component } from "react"
import Child from "./Child";

class Parent extends Component {
    constructor() {
        super();
        this.Teacher = [
            {
                grid : 1,
                name : 'kishan',
                email : 'kishan@gmail.com',
                password : 'kishan@123',
                course : ["html","css","bootstrap","js"],
                city : "surat"
            },
            {
                grid : 2,
                name : 'jay',
                email : 'jay@gmail.com',
                password : 'kishan@123',
                course : ["photosho","figma","illustrator","adobe xd"],
                city : "rajkot"
            },
            {
                grid : 3,
                name : 'ajay',
                email : 'ajay@gmail.com',
                password : 'ajay@123',
                course : ["html","css","bootstrap","nodejs"],
                city : "amareli"
            },
            {
                grid : 4,
                name : 'nisha',
                email : 'nisha@gmail.com',
                password : 'nisha@123',
                course : ["html","css","bootstrap","python"],
                city : "vadodara"
            }
        ]

        this.Student =
            [ 
                {
                name: 'Harsh',
                Mobile: 6574736546
            },
            {
                name: "Jatin",
                Mobile: 665342625
            }
            ]
    }
    render() {
        return (
            <Child
                teacher={this.Teacher}
                Student={this.Student}
            />
        )
    }
}


export default Parent
