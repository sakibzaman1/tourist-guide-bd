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
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

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


const MuiCard = ({story}) => {

  const {goToTop} = useContext(AuthContext);

    const [expanded, setExpanded] = React.useState(false);
    

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
      <div>
        <Link onClick={goToTop} to={`/storyDetails/${story?._id}`}>
        <Card  className='shadow-2xl' sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img src={story?.travelerImage} alt="" />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          
          title={story.travelerName}
          subheader={story?.date}
        />
        <CardMedia
          component="img"
          style={{ height: "200px" }} 
          image={story?.visitedPlaceImage}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {story?.experience}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon className='hover:text-red-600' />
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
            <Typography paragraph></Typography>
            <Typography paragraph>
              {story?.visitedPlaceName}
            </Typography>
            <Typography paragraph>
              
            </Typography>
            <Typography paragraph>
              
            </Typography>
            <Typography>
              
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
        </Link>
      </div>
    );
};

export default MuiCard;

/*

https://i.ibb.co/k52JQ04/person1.jpg
https://i.ibb.co/WPYpWyr/person2.jpg
https://i.ibb.co/pJGQS9j/person3.jpg
https://i.ibb.co/Wfv90Qv/person4.jpg

*/ 