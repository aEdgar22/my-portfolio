import { ContactInfoItemContainer } from './contactStyles'

export const ContactInfoItem = ({Icon, href, data}) => {
  return (
    <a href={href} target='_blank' rel='noreferrer'>
        <ContactInfoItemContainer>
            <div className="icon__container">
                {<Icon />}
            </div>
            <div className="info__container-text">
                <p>{data}</p>
            </div>
        </ContactInfoItemContainer>
    </a>
  )
}
