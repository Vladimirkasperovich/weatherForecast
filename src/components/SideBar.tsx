
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';



export type SideBarPropsType = {
    isOpen: boolean
    changeSideBarStatus: () => void
}
export const SideBar = ({isOpen, changeSideBarStatus}: SideBarPropsType) => {
    const toggleDrawer = () => {
        changeSideBarStatus()
    };


    const handleClick = () => {
        alert(1)
    }

    const DrawerList = (
        <Box sx={{width: 250}} role="presentation">
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'Add new city'} onClick={handleClick}/>
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider/>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <LoginRoundedIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'Login'} onClick={handleClick}/>
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider/>
        </Box>
    );
    return (
        <div>
            <Drawer open={isOpen} onClose={toggleDrawer}>
                {DrawerList}
            </Drawer>
        </div>
    );
}