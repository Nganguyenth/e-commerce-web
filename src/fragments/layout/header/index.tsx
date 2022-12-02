import { useRef, useState } from 'react'
import { Flex, FlexRow } from '../../../components/flex'
import { FeatherIcon } from '../../../components/icons/Feather'
import { ImageView } from '../../../components/image-view'
import { SVGView } from '../../../components/svg-view'
import { HeaderSearch } from './HeaderSearch'

export const Header = () => {
  const mainMenuRef = useRef<HTMLUListElement | null>(null)
  const [open, setOpen] = useState(false)
  const onToggle = () => {
    if (mainMenuRef.current) {
      setOpen(!open)
      const currentRight = mainMenuRef.current.style.right
      mainMenuRef.current.style.right = currentRight !== '0px' ? '0px' : '-410px'
    }
  }

  return (
    <header id='header'>
      <div className='main-header search-header navbar-searchbar'>
        <Flex className='container-fluid-lg'>
          <FlexRow>
            <div className='main-menu'>
              <div className='menu-left'>
                <div className='brand-logo'>
                  <a href=''>
                    <SVGView parentClassName='svg-icon' className='fill-color' href='assets/svg/icons.svg#logo' />
                    <ImageView src='assets/images/logo.png' className='img-fluid blur-up lazyloaded' alt='logo' />
                  </a>
                </div>
              </div>
              <nav>
                <div className='main-navbar'>
                  <div id='mainnav'>
                    <ul ref={mainMenuRef} className='nav-menu' style={{ right: '-410px' }}>
                      <li className='back-btn d-xl-none'>
                        <div className='close-btn'>
                          Menu
                          <span className='mobile-back' onClick={onToggle}>
                            <FeatherIcon type='chevron-right' />
                          </span>
                        </div>
                      </li>
                      <li className='mega-menu dropdown home-menu'>
                        <a className='nav-link menu-title'>home</a>
                      </li>
                      <li className='dropdown'>
                        <a className='nav-link menu-title'>shop</a>
                        <ul className='nav-submenu menu-content'>
                          <li>
                            <a href=''>Shop Canvas Filter</a>
                          </li>
                          <li>
                            <a href=''>Shop Category Filter</a>
                          </li>
                          <li>
                            <a href=''>Shop Filter Hide</a>
                          </li>
                        </ul>
                      </li>
                      <li className='dropdown'>
                        <a href='' className='nav-link menu-title'>
                          product
                        </a>
                        <ul className='nav-submenu menu-content'>
                          <li>
                            <a href=''>Product 4 Images</a>
                          </li>
                          <li>
                            <a href=''>Product 360 View</a>
                          </li>
                        </ul>
                      </li>
                      <li className='mega-menu dropdown ratio_40'>
                        <a className='nav-link menu-title'>
                          <div className='gradient-title'>Voxo plus</div>
                        </a>
                      </li>
                      <li className='dropdown'>
                        <a className='nav-link menu-title'>Pages</a>
                        <ul className='nav-submenu menu-content'>
                          <li>
                            <a href=''>Shop Canvas Filter</a>
                          </li>
                        </ul>
                      </li>
                      <li className='dropdown'>
                        <a className='nav-link menu-title'>Blog</a>
                        <ul className='nav-submenu menu-content'>
                          <li>
                            <a href=''>Shop Canvas Filter</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <HeaderSearch onToggle={onToggle} />
            </div>
          </FlexRow>
        </Flex>
      </div>
    </header>
  )
}
