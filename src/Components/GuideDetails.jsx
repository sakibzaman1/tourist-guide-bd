
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

    const loadedGuides = useLoaderData();
    const {name} = useParams();
    const filtered = loadedGuides.find(guide=> guide?.tourGuide?.name.toLowerCase() === name.toLowerCase())
    console.log(filtered)

    const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='flex justify-center py-20 mx-auto bg-slate-200'>
        <Card className='shadow-2xl' sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src={filtered?.tourGuide?.guideImage} alt="" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={filtered?.tourGuide?.name}
        subheader={filtered?.tourGuide?.language}
      />
      <CardMedia
        component="img"
        style={{ height: "200px" }}
        image={filtered?.tourGuide?.guideImage}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <span className='text-2xl font-bold font-Ephesis'>Experience : </span>{filtered?.tourGuide?.experience}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <span className='text-2xl font-bold font-Ephesis'>Skills : </span>{filtered?.tourGuide?.skills}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <span className='text-2xl font-bold font-Ephesis'>Email : </span>{filtered?.tourGuide?.contactInfo?.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <span className='text-2xl font-bold font-Ephesis'>Phone : </span>{filtered?.tourGuide?.contactInfo?.phone}
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
            {filtered?.tourGuide?.experienceText}
          </Typography>
       
        </CardContent>
      </Collapse>
    </Card>
    </div>
  );
};

export default GuideDetails;