API = "https://IDK.com";

/*
Resource Object:

{
    id: Null,
    Address: "",
    OperatingHours: {
        Monday: "",
        Tuesday: "",
        Wednesday: "",
        Thursday: "",
        Friday: "",
        Saturday: "",
        Sunday: ""
    },
    Eligibility: "",
    Rules: "",
    Transportation: "",
    PersonalInfo: "",
    AdditionalDetails: "",
    Favorite: False
}

*/

export async function getResourceDetails() {
    try { // GET
        const data = await fetch()
        return data;
    } catch (error) {
        console.log("Error: ", error)
    }
}