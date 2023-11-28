import  { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import swal from 'sweetalert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const MyProfile = () => {

    const {user} = useContext(AuthContext);

    const [expanded, setExpanded] = React.useState(false);

    const handleSubmitStory = (e) => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
        const travelerName = form.get("name");
        const travelerImage = form.get("photo");
        const visitedPlaceName = form.get("visitedPlace");
        const visitedPlaceImage = form.get("visitedPhoto");
        const experience = form.get("experience");
        const date = form.get("date");

        console.log(travelerImage, travelerName, visitedPlaceImage, visitedPlaceName, date, experience);

        const newStory = {travelerImage, travelerName, visitedPlaceImage, visitedPlaceName, date, experience};

        // send data to the server

        fetch('https://tourist-guide-server-seven.vercel.app/stories', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newStory)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if(data.insertedId){
                swal({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Story Added',
                    showConfirmButton: false,
                    showCancelButton: false,
                    timer: 2000
                });
            }
        });
    }

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
      <div className='lg:flex justify-around w-full ml-20'>
        <Card className='w-1/2' sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img src={user?.photoURL} alt="" />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={user?.displayName}
          subheader={user?.email}
        />
        <CardMedia
          component="img"
          height="194"
          image={user?.photoURL}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Happy to be a part of Tourist Guide
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            
            <Typography paragraph>
             {user?.displayName}
            </Typography>
           
          </CardContent>
        </Collapse>
      </Card>
      <div className='w-1/2'>
        <h1 className='text-3xl font-Ephesis'>Add a Story</h1>
      <div className="hero w-full bg-base-200">
  <div className="hero-content">
    
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmitStory} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input name='name' defaultValue={user?.displayName} type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input defaultValue={user?.photoURL}  readOnly name='photo' type="text" placeholder="photo" className="input input-bordered" required />
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Visited Place</span>
          </label>
          <input name='visitedPlace' type="text" placeholder="visited place" className="input input-bordered" required />
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Visited Place Photo URL</span>
          </label>
          <input name='visitedPhoto' type="text" placeholder="photo" className="input input-bordered" required />
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Experience</span>
          </label>
          <input name='experience' type="text" placeholder="experience" className="input input-bordered" required />
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Visited Place Photo URL</span>
          </label>
          <input name='date' type="date" placeholder="date" className="input input-bordered" required />
        
        </div>
        <div className="form-control mt-6">
          <button className="btn text-white hover:bg-green-600 bg-green-500">Add to Story</button>
        </div>
      </form>
    </div>
  </div>
</div>
      </div>
      </div>
    );
};

export default MyProfile;