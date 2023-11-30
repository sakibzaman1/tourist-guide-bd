
import { useLoaderData, useParams } from 'react-router-dom';
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
import { useEffect } from 'react';

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


const GuideDetails = () => {

  const [loading, setLoading] = React.useState(true);
    const loadedPackages = useLoaderData();
    const {name} = useParams();
    // const filtered = loadedGuides.find(guide=> guide?.tourGuide?.name.toLowerCase() === name.toLowerCase())
    // console.log(filtered);

    const filtered = loadedPackages.find(pack=> pack?.tourGuides[0]?.name.toLowerCase() === name.toLowerCase());

    console.log(filtered);

    const tourGuide = filtered?.tourGuides[0];
    console.log(tourGuide)

    const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    // Simulate loading delay with setTimeout
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1500); // Adjust the time as needed

    // Cleanup function
    return () => clearTimeout(delay);
  }, []); // Empty dependency array ensures this effect runs once on mount

  if (loading) {
    return  <div className='min-h-screen flex items-center justify-center'>
    <span className="loading loading-ring loading-lg"></span>
 </div> // Render your loading spinner while data is being loaded
  }
  

  return (

    <div className='flex justify-center py-20 mx-auto bg-slate-200'>
        <Card className='shadow-2xl' sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src={tourGuide?.guideImage} alt="" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={tourGuide?.name}
        subheader="Tour Guide"
      />
      <CardMedia
        component="img"
        style={{ height: "200px" }}
        image={tourGuide?.guideImage}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <span className='text-2xl font-bold font-Ephesis'>Experience : </span>{tourGuide?.experience}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <span className='text-2xl font-bold font-Ephesis'>Current Assigned Trip : </span>{filtered?.tripTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <span className='text-2xl font-bold font-Ephesis'>Type of Tour : </span>{filtered?.tourType}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <span className='text-2xl font-bold font-Ephesis'>Language Skills : </span>{tourGuide?.language}
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
          <Typography paragraph><span className='font-Ephesis'>My Thoughts</span></Typography>
          <Typography paragraph>
            {tourGuide?.experienceText}
          </Typography>
       
        </CardContent>
      </Collapse>
    </Card>
    </div>
  );
};

export default GuideDetails;