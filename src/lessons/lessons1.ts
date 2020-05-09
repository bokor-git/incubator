type State = {
    age: number,
    user: Array<{ name: string }>
}

export const state: State = {
    age: 23,
    user: [{name: "Alex"}]
};

export const sum = (a: number, b: number) => a + b

type ShowTeamMemberType = {
    members: Array<string>
}
type ShowTeamNameType = {
    name: string
}
//----------Lessons 1

export const ShowTeamMember = (props: ShowTeamMemberType) => console.log("TeamMember : " + props.members)
export const ShowSitesNames = (props: ShowTeamNameType) => console.log("TeamName : " + props.name)
//ShowTeamMember({members: ["Member1", "Member 2"]});
type ShowTeamType = {
    name: string
    members: Array<string>
}
const props:ShowTeamType = {
     name:"Alex",
     members:["Member1", "Member 2"]
}
const ShowTeam = (props: ShowTeamType) => {
    ShowTeamMember({members:props.members});
    ShowSitesNames({name:props.name})
}
//ShowTeam(props)

//----------Task 1


type ShowProfileTypes={
    profile:{
        name:string
        age:number
    }
}


function ShowProfile(props1:ShowProfileTypes) {
    console.log("Profile name: " + props1.profile.name)
    console.log("Profile age: " + props1.profile.age)
}

//ShowProfile({profile:{name:"Alex", age:23}})

//----------Task 2


type ShowPageTypes = {
    name: string
    members: Array<string>
    profile:{
        name:string
        age:number
    }
}

const props2:ShowPageTypes = {
    name: "alex",
    members: ["Member1", "Member 3"],
    profile:{
        name:"Bokor",
        age:23
    }
}
function ShowPage(props:ShowPageTypes) {
    ShowProfile({profile:props.profile}); // todo: передать правильные данные
    ShowSitesNames({name:props.name}); // todo: передать правильные данные
    ShowTeam(props); // todo: передать правильные данные
}
//ShowPage(props2)

//----------Task 3

type ShowSitesNamesType = {
    sites:Array<{title:string}>
}
const props3:ShowSitesNamesType={
    sites:[
        {title:"Title1"},
        {title:"Title2"},
        {title:"Title3"}
    ]
};
function ShowSitesNamesMap(props: ShowSitesNamesType) {
    console.log("Sites: " + props.sites.map(s => s.title));}

//ShowSitesNamesMap(props3)