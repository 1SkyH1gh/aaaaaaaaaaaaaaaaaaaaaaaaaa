import {AvaMini} from "./miniResourses/AvaMini";

export const TestUser:User={
    userDescr:[

        {name:{
                firstName:"Ilya",
                lastName:"Tormanov"
            },
            id:1

        },

    ],
    id:5
}





export type MiniUser={
    id:number,
    name:UserName,
    ava?:JSX.Element,
    tag?:string,
    status?:string


}
export type UserName={
    firstName:string,
    lastName:string
}

export type School={
    id:number,
school:Education
}
export type University={
    id:number,
university?:Education
}
export interface PostsInt{
    id:number,
    value:string
}
export type Education={
    id:number,
    name:University|School,
    typeClass?:string,
    typeSchool?:string,
}
export type User={
    id:number,
    userDescr:MiniUser[],
    city?:string,
    country?:string,
    education?:Education
}