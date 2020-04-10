import React, { FC, useState } from 'react'

import Title from 'components/Title'
import 'components/Form/Form.scss'
import Input from 'components/Input'
import Button from 'components/Button'

const TeacherVariant: FC = () => {
  const [value, setValue] = useState('')

  return (
    <div className="TeacherVariant">
      <Title>Вариант учителя</Title>

      <p className="Section-Desc">
        Если ваш школьный учитель составил работу и сообщил вам номер,
        введите&nbsp;его&nbsp;здесь.
      </p>

      <form action="/test" method="POST">
        <div className="Form_oneLine">
          <Input
            className="Form_oneLine-Input"
            type="tel"
            name="id"
            value={value}
            placeholder="Номер варианта"
            setValue={setValue}
          />
          <Button>Открыть</Button>
        </div>
      </form>
    </div>
  )
}

export default TeacherVariant
