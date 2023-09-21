

let hospital={
    name:"Royal Hayat Hospital", patients:[
        {
            Id:8357564,
            fullName:"Ahmed Elgendy",
            dateOfBirth:"1990-5-12",
            symp:["caugh","fever","dizziness"]
        },

        {
            Id:6473598,
            fullName:" Jimmy Elshikh",
            dateOfBirth:"1980-11-5",
            symp:["headache","caugh","fever"]
        },

        {
            Id:8489373,
            fullName:"Craig Beauford",
            dateOfBirth:"2005-1-18",
            symp:["skin rashes","fever","exhaust"]
        }
]}
console.log(hospital.name,hospital.patients)



function showPatients(hospital){
    return(<h1>hospital.name</h1>);
        
        for (let i = 0; i < patients.length; i++) {
        console.log(<h2>patients.fullName[i]</h2>)
        console.log(<h2>patients.dateOfBirth[i]</h2>)
        }

        for (let m = 0; m < patients.symp.length; m++) {
        console.log(<ul>patients.symp[m]</ul>);
        }
}



function getPatient(patients){
    let randomNumber=Math.random()*patients.length;
    let randomPatient=Math.floor(randomNumber);
    return randomPatient.Id;
}
console.log(randomPatient.Id);