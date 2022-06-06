export default function Box(props){
return(
    <div className = "box">
        <img className="box-left" src ={props.img}/>
        <div className = "box-right">
            <div className = "box-location">
                <img src = "./images/Fill 219.png" />
                <span>{props.location}</span>
                <a href = {props.googleMapsUrl} >View on google map</a>
            </div>
            <div className = "box-main">
                <h1>{props.title}</h1>
                <p className="box-date">{props.startDate +"-"+props.endDate}</p>
                <p>{props.detail}</p>
            </div>
        </div>
    </div>
)
}
/* title: "Mount Fuji",
        location: "Japan",
        googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        detail: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        img: "./images/Rectangle 77.png"*/