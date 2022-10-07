

export const SocialIcon = ({children, href}) => {
  return (
    <a href={href} className='home__social-icon' target='_blank' rel="noreferrer" >{children}</a>
  )
}
