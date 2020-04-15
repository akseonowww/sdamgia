import React, { FC, memo } from 'react'

import LinkWrap from 'components/Link/_wrap'

interface ILinksProps {
  blockClassName: string
}

const ProfileAuthLinks: FC<ILinksProps> = ({ blockClassName }) => {
  const links = [
    {
      href: '/register',
      text: 'Зарегистрироваться',
    },
    {
      href: '/pass_change',
      text: 'Восстановление пароля',
    },
    {
      href: '/vkauth',
      text: 'Вход через Вконтакте',
    },
  ]

  return (
    <div className={`${blockClassName}-Links`}>
      {links.map(({ href, text }, i) => (
        <LinkWrap
          className={`${blockClassName}-Link`}
          href={href}
          key={`${blockClassName}-Link_${i}`}
        >
          {text}
        </LinkWrap>
      ))}
    </div>
  )
}

export default memo(ProfileAuthLinks)
