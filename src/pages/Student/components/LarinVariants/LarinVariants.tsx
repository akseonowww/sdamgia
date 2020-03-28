import React, { FC, useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import cx from 'classnames'

import { loadVariantsAll, saveVariantsAll } from './utils'
import Title from 'components/Title'
import Section from 'components/Section'
import Grid from 'components/Grid'
import 'components/Link/Link.scss'
import VariantLink from 'components/VariantLink'
import 'components/VariantBox/VariantBox.scss'
import './LarinVariants.scss'

interface ILarinVariant {
  id: number
  number: number
}

const LarinVariants: FC = () => {
  const [larinVariants, setLarinVariants] = useState<Array<
    ILarinVariant
  > | null>(null)
  const [variantsAll, areVariantsAll] = useState(false)

  useEffect(() => {
    const variantsAllSaved = loadVariantsAll()
    if (variantsAllSaved != null) {
      areVariantsAll(variantsAllSaved)
    }

    axios
      .get('http://sidorchik.ru/reshuege/api/larin/')
      .then(response => response.data)
      .then(data =>
        data.map(({ id, number }: ILarinVariant) => ({
          id,
          number,
        }))
      )
      .then(data => setLarinVariants(data))
      .catch(error => {
        console.log(error)

        const data = []
        let id = 100000

        for (let number = 280; number > 0; number--, id--) {
          data.push({
            id: id,
            number: number,
          })
        }

        setLarinVariants(data)
      })
  }, [])

  const toggleVariantsAll = useCallback(() => {
    const newValue = !variantsAll

    areVariantsAll(newValue)
    saveVariantsAll(newValue)
  }, [variantsAll])

  return (
    <Section className="LarinVariants">
      <Title>
        <span className="LarinVariants-TitleWord1">Все варианты </span>
        <span className="LarinVariants-TitleWord2">Александра&nbsp;</span>
        <span className="LarinVariants-TitleWord3">Ларина</span>
        <span className="Title-Caption">с 2013 года</span>
      </Title>

      <p className="Section-Desc LarinVariants-Desc_desktop">
        Для тех, кто ищет варианты посложнее, чем обычно предлагают на ЕГЭ,
        публикуем задания с развернутым ответом из тренировочных вариантов А.
        <span className="halfspace">&nbsp;</span>А. Ларина. Новые условия
        по субботам, решения по пятницам.
      </p>

      <div className="VariantBox">
        <Grid
          className={cx('Variants', 'LarinVariants-Variants', {
            'LarinVariants-Variants_cut': !variantsAll,
          })}
        >
          {larinVariants &&
            larinVariants.map(({ id, number }: ILarinVariant, i: number) => (
              <VariantLink
                to={'/test?id=' + id}
                title={'Александр Ларин, тренировочный вариант ЕГЭ № ' + number}
                key={i}
              >
                {number}
              </VariantLink>
            ))}
        </Grid>

        <div
          className="Link Link_pseudo Link_wrap VariantBox-Control LarinVariants-Control"
          onClick={toggleVariantsAll}
        >
          <u className="Link-U Link_pseudo-U Link_wrap-U">
            {variantsAll ? 'Скрыть' : 'Показать все'}
          </u>
        </div>
      </div>
    </Section>
  )
}

export default LarinVariants
