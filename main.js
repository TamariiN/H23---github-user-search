
let button = document.querySelector("button")
let input = document.querySelector("input")
let avatarr = document.querySelector(".avatarr")
let namme = document.querySelector("h3")
let loginn = document.querySelector("h4")
let joined = document.querySelector(".joined")
let biio = document.querySelector("p")
let reposs = document.querySelector(".repoos")
let followerss = document.querySelector(".followerss")
let followingg = document.querySelector(".followingg")
let locationn = document.querySelector(".locationn")
let urll = document.querySelector(".urll")
let twitt = document.querySelector(".twitt")
let buildingg = document.querySelector(".buildingg")
let userDetails = document.querySelector(".user-details")

let mode = document.querySelector(".mode")
let body = document.querySelector("body")
let h2 = document.querySelector("h2")
let h3 = document.querySelector("h3")
let searchbar = document.querySelector(".search-bar")
let main = document.querySelector("main")
let insights = document.querySelector("insights")

mode.addEventListener("click", () => {
    body.classList.toggle("darkbody")
    h2.classList.toggle("darkcontent")
    searchbar.classList.toggle("darksearch")
    input.classList.toggle("darksearch")
    userDetails.classList.toggle("darksearch")
    h3.classList.toggle("darkcontent")
    joined.classList.toggle("darkcontent")
    biio.classList.toggle("darkcontent")
    locationn.classList.toggle("darkcontent")
    urll.classList.toggle("darkcontent")
    twitt.classList.toggle("darkcontent")
    buildingg.classList.toggle("darkcontent")
    insights.classList.toggle("darkcontent")
    
})



button.addEventListener("click", () =>{
    fetchUser()
} )

async function fetchUser(){
    try{
        let res = await fetch(`https://api.github.com/users/${input.value}`)
        let data = await res.json()

        if(data.message) {
            userDetails.innerHTML=data.message;
            return
            }

        const {avatar_url, name, login, created_at, bio, public_repos, followers, following, location, url, twitter_username, company } = data
        const createdDate = new Date (data.created_at) 

        console.log(data)
        avatarr.innerHTML = `${avatarr.setAttribute('src', avatar_url)}`
        namme.innerHTML = `${name}`
        loginn.innerHTML = `@${login}`
        joined.innerHTML = `Joined ${createdDate.getDate()} ${getMonthString(createdDate.getMonth())} ${createdDate.getFullYear()}`
        biio.innerHTML = `${bio || "Not Available"}`
        reposs.innerHTML = `${public_repos}`
        followerss.innerHTML = `${followers}`
        followingg.innerHTML = `${following}`
        locationn.innerHTML = `${location || "Not Available"}`
        urll.innerHTML = `${url}`
        twitt.innerHTML = `${twitter_username || "Not Available"}`
        buildingg.innerHTML = `${company ||"Not Available"}`

    }catch (error) {
        console.log(error)
    }


}

function getMonthString(monthNumber){
    switch(monthNumber){
        case 0: return "Jan";
        case 1: return "Feb";
        case 2: return "Mar";
        case 3: return "Apr";
        case 4: return "May";
        case 5: return "Jun";
        case 6: return "Jul";
        case 7: return "Aug";
        case 8: return "Sep";
        case 9: return "Oct";
        case 10: return "Nov";
        case 11: return "Dec";
    }
}