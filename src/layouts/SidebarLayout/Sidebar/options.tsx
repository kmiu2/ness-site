import { useContext } from 'react'
import { Button, Link, List, ListItem, ListSubheader } from '@mui/material'
import { NavLink as RouterLink } from 'react-router-dom'
import { SidebarContext } from '../../../contexts/SidebarContext'
import {
  HomeTwoTone,
  AccountTreeTwoTone,
  LanguageTwoTone,
  EmailTwoTone,
  GroupsTwoTone,
  InfoTwoTone,
  RuleTwoTone,
  BookTwoTone,
  EventNoteTwoTone,
  FormatListNumberedRtlTwoTone,
  PlaylistAddTwoTone,
  SavingsTwoTone,
  PreviewTwoTone,
} from '@mui/icons-material'
import { MenuWrapper, SubMenuWrapper } from './styles'

interface Option {
  title: string
  options: {
    title: string
    icon: JSX.Element
    path: string
    type: 'router-link' | 'link'
  }[]
}

export const Options = () => {
  const { closeSidebar } = useContext(SidebarContext)

  const menuOptions: Option[] = [
    {
      title: '',
      options: [
        {
          title: 'Home',
          icon: <HomeTwoTone />,
          path: '/',
          type: 'router-link',
        },
      ],
    },
    {
      title: 'Courses',
      options: [
        {
          title: 'Course Map',
          icon: <AccountTreeTwoTone />,
          path: '/courses',
          type: 'router-link',
        },
        {
          title: 'Schedule of Classes',
          icon: <EventNoteTwoTone />,
          path: 'https://classes.uwaterloo.ca/under.html',
          type: 'link',
        },
        {
          title: 'CSEs List',
          icon: <FormatListNumberedRtlTwoTone />,
          path: 'http://ugradcalendar.uwaterloo.ca/page/ENG-BASc-and-BSE-Complementary-Studies-Courses-Eng',
          type: 'link',
        },
        {
          title: 'Non NE TEs List',
          icon: <PlaylistAddTwoTone />,
          path: 'http://ugradcalendar.uwaterloo.ca/page/ENG-Nanotechnology-Engineering#:~:text=the%20lists%20below.-,List%201,-%2D%20200%2Dlevel',
          type: 'link',
        },
        {
          title: 'Prerequisite Checker',
          icon: <RuleTwoTone />,
          path: 'https://ver7ici.github.io/UWCourseMap/',
          type: 'link',
        },
      ],
    },
    {
      title: 'Resources',
      options: [
        {
          title: 'NESS Resource Links',
          icon: <LanguageTwoTone />,
          path: '/resources',
          type: 'router-link',
        },
        {
          title: 'EngSoc Exam Bank',
          icon: <SavingsTwoTone />,
          path: 'https://www.engsoc.uwaterloo.ca/resources/exam-bank/',
          type: 'link',
        },
        {
          title: 'Course Perceptions',
          icon: <PreviewTwoTone />,
          path: 'https://www.eng.uwaterloo.ca/scp_critiques/',
          type: 'link',
        },
      ],
    },
    {
      title: 'About',
      options: [
        {
          title: 'About Us',
          icon: <InfoTwoTone />,
          path: '/about',
          type: 'router-link',
        },
        {
          title: 'Our Team',
          icon: <GroupsTwoTone />,
          path: '/team',
          type: 'router-link',
        },
      ],
    },
    {
      title: 'Connect',
      options: [
        {
          title: 'What is Nano?',
          icon: <BookTwoTone />,
          path: 'https://whatsnano.medium.com/',
          type: 'link',
        },
        {
          title: 'UWaterloo Site',
          icon: <LanguageTwoTone />,
          path: 'https://uwaterloo.ca/nanotechnology-engineering-student-society/',
          type: 'link',
        },
        {
          title: 'Email Us',
          icon: <EmailTwoTone />,
          path: 'mailto:ness@uwaterloo.ca',
          type: 'link',
        },
      ],
    },
  ]

  const renderOptions = (options: Option[]) => {
    return options.map((option) => {
      if (option.title === '') {
        return (
          <List component="div" key={option.title}>
            <SubMenuWrapper>
              <List component="div">{renderSubOptions(option.options)}</List>
            </SubMenuWrapper>
          </List>
        )
      } else {
        return (
          <List
            component="div"
            key={option.title}
            subheader={
              <ListSubheader component="div" disableSticky>
                {option.title}
              </ListSubheader>
            }
          >
            <SubMenuWrapper>
              <List component="div">{renderSubOptions(option.options)}</List>
            </SubMenuWrapper>
          </List>
        )
      }
    })
  }

  const renderSubOptions = (options: Option['options']) => {
    return options.map((option) => {
      if (option.type === 'router-link') {
        return (
          <ListItem component="div" key={option.title}>
            <Button
              disableRipple
              component={RouterLink}
              onClick={closeSidebar}
              to={option.path}
              startIcon={option.icon}
            >
              {option.title}
            </Button>
          </ListItem>
        )
      } else if (option.type === 'link') {
        return (
          <ListItem component="div" key={option.title}>
            <Link
              href={option.path}
              target="_blank"
              width="100%"
              underline="none"
            >
              <Button
                disableRipple
                onClick={closeSidebar}
                startIcon={option.icon}
              >
                {option.title}
              </Button>
            </Link>
          </ListItem>
        )
      }
      return null
    })
  }

  return <MenuWrapper>{renderOptions(menuOptions)}</MenuWrapper>
}
