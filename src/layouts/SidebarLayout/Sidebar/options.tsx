import { useContext } from 'react'
import { Button, Link, List, ListItem, ListSubheader } from '@mui/material'
import { NavLink as RouterLink } from 'react-router-dom'
import { SidebarContext } from '../../../contexts/SidebarContext'
import {
  HomeTwoTone,
  AccountTreeTwoTone,
  RuleTwoTone,
  LanguageTwoTone,
  EmailTwoTone,
} from '@mui/icons-material'
import { MenuWrapper, SubMenuWrapper } from './styles'

function Options() {
  const { closeSidebar } = useContext(SidebarContext)

  return (
    <>
      <MenuWrapper>
        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/"
                  startIcon={<HomeTwoTone />}
                >
                  Home
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Courses
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/courses"
                  startIcon={<AccountTreeTwoTone />}
                >
                  Course Map
                </Button>
              </ListItem>
              <ListItem component="div">
                <Link
                  href="https://ver7ici.github.io/UWCourseMap/"
                  target="_blank"
                  width="100%"
                  underline="none"
                >
                  <Button
                    disableRipple
                    onClick={closeSidebar}
                    startIcon={<RuleTwoTone />}
                  >
                    Prerequisite Checker
                  </Button>
                </Link>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Connect
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Link
                  href="https://uwaterloo.ca/nanotechnology-engineering-student-society/"
                  target="_blank"
                  width="100%"
                  underline="none"
                >
                  <Button
                    disableRipple
                    onClick={closeSidebar}
                    startIcon={<LanguageTwoTone />}
                  >
                    UWaterloo Site
                  </Button>
                </Link>
              </ListItem>
              <ListItem component="div">
                <Link
                  href="mailto:ness@uwaterloo.ca"
                  target="_blank"
                  width="100%"
                  underline="none"
                >
                  <Button
                    disableRipple
                    onClick={closeSidebar}
                    startIcon={<EmailTwoTone />}
                  >
                    Email Us
                  </Button>
                </Link>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
      </MenuWrapper>
    </>
  )
}

export default Options
