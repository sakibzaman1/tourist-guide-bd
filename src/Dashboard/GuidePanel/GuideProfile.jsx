// TeacherProfile.jsx

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
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
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

const GuideProfile = () => {
  const { user } = useContext(AuthContext);
  const [expanded, setExpanded] = React.useState(false);

  const handleSubmitGuide = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const experience = form.get("experience");
    const language = form.get("language");
    const guideImage = form.get("guideImage");
    const skills = form.get("skills");
    const experienceText = form.get("experienceText");
    const phone = form.get("phone");
    const email = form.get("email");

    const newGuide = {
      name,
      experience,
      language,
      guideImage,
      skills,
      experienceText,
      contactInfo: { phone, email }
    };

    fetch('https://tourist-guide-server-seven.vercel.app/guides', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newGuide)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          swal({
            position: 'top-center',
            icon: 'success',
            title: 'Teacher Added',
            showConfirmButton: false,
            showCancelButton: false,
            timer: 2000
          });
        }
      });
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='flex justify-center my-20'>
      <Card className='w-1/2' sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="profile">
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
          alt="Profile"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Happy to be a part of the Faculty
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
            <Typography paragraph>{user?.displayName}</Typography>
          </CardContent>
        </Collapse>
      </Card>

      <div className='w-1/2'>
        <h1 className='text-3xl font-Ephesis text-center'>Add Teacher Profile</h1>
        <div className="hero w-full bg-base-200">
          <div className="hero-content">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmitGuide} className="card-body">
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
                  <input defaultValue={user?.photoURL} readOnly name='guideImage' type="text" placeholder="photo" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Experience</span>
                  </label>
                  <input name='experience' type="text" placeholder="experience" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Language</span>
                  </label>
                  <input name='language' type="text" placeholder="language" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Skills</span>
                  </label>
                  <input name='skills' type="text" placeholder="skills" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Experience Text</span>
                  </label>
                  <input name='experienceText' type="text" placeholder="experience text" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input defaultValue={user?.email} name='email' type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input name='phone' type="text" placeholder="phone" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                  <button className="btn text-white hover:bg-green-600 bg-green-500">Add Teacher</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideProfile;
