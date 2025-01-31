import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './infoBox.css'
export default function InfoBox({info}){// we need an obj named info where this infoBox component will be render
    const INIT_URL="https://images.unsplash.com/photo-1722858343990-1604f540c15d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const HOT_URL="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL="https://www.tripsavvy.com/thmb/AadNafzoFYeNvpgWS27abyNrbhU=/3866x2576/filters:fill(auto,1)/rainy-season-01-815021880-5a978a18c06471003794c8f1.jpg";
    return (
        <>
     
        <div className="card-container">
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={info.humidity>80 ? RAIN_URL : info.temp>15 ? HOT_URL: COLD_URL }
                title="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {info.city} <br></br>{info.humidity>80 ? <ThunderstormIcon/> : info.temp>15 ? <WbSunnyIcon/> : <AcUnitIcon/> }
            </Typography>
            <Typography component={"span"} variant="body2" sx={{ color: 'text.secondary' }}>
                <div>Temperature {info.temp} &deg;C</div>
                <div>Minmum Temperature {info.tempMin} &deg;C</div>
                <div>Maximum Temperature {info.tempMax} &deg;C</div>
                <div>Humidity {info.humidity} %</div>
                <div>The weather can be described as <b><i>{info.weather}</i></b> Feels like <b>{info.feelsLike} &deg;C</b></div>
                <div></div>
                </Typography>
            </CardContent>
            <CardActions>
        </CardActions>
        </Card>
        </div>
        </>
        
    )
}