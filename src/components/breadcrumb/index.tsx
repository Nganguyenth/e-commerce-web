import { Flex, FlexCol } from '../flex'
import { FeatherIcon } from '../icons/Feather'

type BreadcrumbProps = { title?: string }
export const BreadCrumb = (props: BreadcrumbProps) => {
  return (
    <>
      <section id='BreadcrumbSection'>
        <ul className='rotate-background'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <Flex className='section-container'>
          <FlexCol>
            <h3>{props.title}</h3>
            <nav>
              <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                  <a href='/'>
                    <FeatherIcon type='home' className='feather-home' />
                  </a>
                </li>
                <li className='breadcrumb-item active' aria-current='page'>
                  {props.title}
                </li>
              </ol>
            </nav>
          </FlexCol>
        </Flex>
      </section>
    </>
  )
}
