import Home from '@/views/Home'
import About from '@/views/About'
import Gallery from '@/views/Gallery'
import Projects from '@/views/Projects'
import Qualifications from '@/views/Qualifications'
import Page404 from '@/views/404Page'

export default [
  {
    name: 'Home',
    path: '/',
    alias: '/home',
    component: Home
  },
  {
    name: 'About',
    path: '/about',
    component: About
  },
  {
    name: 'Gallery',
    path: '/gallery',
    component: Gallery
  },
  {
    name: 'Projects',
    path: '/projects',
    component: Projects
  },
  {
    name: 'Qualifications',
    path: '/qualifications',
    component: Qualifications
  },
  {
    name: 'Page404',
    path: '*',
    component: Page404
  }
]
