import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import VisibilityIcon from '@material-ui/icons/Visibility';
// import InstagramIcon from '@material-ui/icons/Instagram';
const SidebarData = [{
        title: 'Home',
        path: "/recipe",
        icon: < HomeIcon / > ,
        cName: 'nav-text'
    },
    {
        title: 'Dark Theme',
        path: '/recipedt',
        icon: < AllInclusiveIcon / > ,
        cName: 'nav-text'
    },
    {
        title: 'About US',
        path: "/about",
        icon: < VisibilityIcon / > ,
        cName: 'nav-text'
    },

];
export default SidebarData;