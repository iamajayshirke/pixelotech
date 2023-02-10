import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ExploreIcon from "@mui/icons-material/Explore";
import StarIcon from "@mui/icons-material/Star";
import MessageIcon from "@mui/icons-material/Message";

import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/system";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PublicIcon from "@mui/icons-material/Public";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { Badge } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import profile from "../../assets/AvatarImg.jpeg";

export const mainListItems = (
  <React.Fragment>
    <Box className="flexColumn">
      <IconButton
        className="boxShadowIcon"
        color="inherit"
        size="small"
        sx={{ backgroundColor: "#ffffff", color: "#C3CAD9" }}
      >
        <ExploreIcon fontSize="small" className="boxShadowIcon" />
      </IconButton>

      <IconButton
        className="boxShadowIcon"
        color="inherit"
        size="small"
        sx={{ backgroundColor: "#ffffff", color: "#C3CAD9" }}
      >
        <StarIcon fontSize="small" className="boxShadowIcon" />
      </IconButton>

      <IconButton
        className="boxShadowIcon"
        color="inherit"
        size="small"
        sx={{ backgroundColor: "#ffffff", color: "#C3CAD9" }}
      >
        <Badge variant="dot" color="secondary">
          <MessageIcon fontSize="small" className="boxShadowIcon" />
        </Badge>
      </IconButton>

      <IconButton
        className="boxShadowIcon"
        color="inherit"
        size="small"
        sx={{ backgroundColor: "#ffffff", color: "#C3CAD9" }}
      >
        <TrendingUpIcon fontSize="small" className="boxShadowIcon" />
      </IconButton>

      <IconButton
        className="boxShadowIcon"
        color="inherit"
        size="small"
        sx={{ backgroundColor: "#ffffff", color: "#C3CAD9" }}
      >
        <PublicIcon fontSize="small" className="boxShadowIcon" />
      </IconButton>

      <IconButton
        className="boxShadowIcon"
        color="inherit"
        size="small"
        sx={{ backgroundColor: "#ffffff", color: "#C3CAD9" }}
      >
        <LocationCityIcon fontSize="small" className="boxShadowIcon" />
      </IconButton>
    </Box>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <Box className="flexColumn">
      <IconButton
        className="boxShadowIcon"
        color="inherit"
        size="small"
        sx={{ backgroundColor: "#ffffff", color: "#C3CAD9" }}
      >
        <AddCircleOutlineRoundedIcon fontSize="small" className="boxShadowIcon" />
      </IconButton>
      <Stack direction="column" spacing={2}>
      <Badge variant="dot" color="primary">
      <Avatar alt="Ajay" src={profile} />
        </Badge>
      <Avatar alt="Ajay" src={profile} />
      <Avatar alt="Ajay" src={profile} />
      <Avatar alt="Ajay" src={profile} />
    </Stack>
    </Box>
  </React.Fragment>
);
