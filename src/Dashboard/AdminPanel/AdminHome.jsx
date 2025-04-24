import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Card, CardContent, Typography, Avatar, Grid, Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import SchoolIcon from '@mui/icons-material/School';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ClassIcon from '@mui/icons-material/Class';

const AdminHome = () => {
    const { user } = useContext(AuthContext);

    // Mock statistics (replace these with actual data from your backend if available)
    const stats = [
        { id: 1, label: "Total Students", value: 250, icon: <SchoolIcon className="text-blue-600" fontSize="large" /> },
        { id: 2, label: "Courses Offered", value: 42, icon: <ClassIcon className="text-green-600" fontSize="large" /> },
        { id: 3, label: "Registered Users", value: 320, icon: <PeopleAltIcon className="text-purple-600" fontSize="large" /> },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white px-6 py-10">
            <Helmet>
                <title>Admin Panel | Dashboard</title>
            </Helmet>

            <Typography variant="h4" className="text-blue-700 font-bold mt-20 text-center">
                Welcome, {user?.displayName || "Admin"}
            </Typography>

            <Grid container spacing={4} className="mb-10">
                <Grid item xs={12} md={4}>
                    <Card className="shadow-xl">
                        <CardContent className="flex flex-col items-center text-center">
                            <Avatar
                                alt={user?.displayName}
                                src={user?.photoURL}
                                sx={{ width: 100, height: 100, mb: 2 }}
                            />
                            <Typography variant="h6" className="font-semibold text-blue-800">
                                {user?.displayName}
                            </Typography>
                            <Typography variant="body2" className="text-gray-600">
                                {user?.email}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Grid container spacing={3}>
                        {stats.map(stat => (
                            <Grid item xs={12} sm={4} key={stat.id}>
                                <Card className="shadow-md hover:shadow-xl transition-shadow">
                                    <CardContent className="flex flex-col items-center justify-center text-center">
                                        <Box className="mb-2">{stat.icon}</Box>
                                        <Typography variant="h6" className="text-gray-700">
                                            {stat.label}
                                        </Typography>
                                        <Typography variant="h4" className="font-bold text-blue-700">
                                            {stat.value}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

            <Typography className="text-center text-gray-500 mt-10">
                Use the sidebar to manage students, courses, and other admin features.
            </Typography>
        </div>
    );
};

export default AdminHome;
