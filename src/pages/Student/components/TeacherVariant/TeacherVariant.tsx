import React, { FC } from 'react'

import Title from 'components/Title'
import 'components/Form/Form.scss'
import 'components/Input/Input.scss'
import 'components/Button/Button.scss'

const TeacherVariant: FC = () => (
  <div className="TeacherVariant">
    <Title>Вариант учителя</Title>

    <p className="Section-Desc">
      Если ваш школьный учитель составил работу и сообщил вам номер,
      введите&nbsp;его&nbsp;здесь.
    </p>

    <form action="/test" method="POST">
      <div className="Form_oneLine">
        <input
          className="Input Form_oneLine-Input"
          type="tel"
          name="id"
          placeholder="Номер варианта"
        />
        <input className="Button" type="submit" value="Открыть" />
      </div>
    </form>
  </div>
)

export default TeacherVariant
