import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'gatsby'
import axios from 'axios'
import cx from 'classnames'

import { loadVariantsAll, saveVariantsAll } from './utils'
// import Title from 'components/Title'
// import Section from 'components/Section'
// import Grid from 'components/Grid'
// import 'components/Link/Link.scss'
// import VariantsLink from 'components/VariantsLink'
// import 'components/VariantsBox/VariantsBox.scss'
import './LarinVariants.scss'

interface larinVariantsProps {
  id: number
  number: number
}

const LarinVariants = () => {
  const [larinVariants, setLarinVariants] = useState<Array<
    larinVariantsProps
  > | null>(null)
  const [variantsAll, areVariantsAll] = useState<boolean>(false)

  useEffect(() => {
    const variantsAllSaved = loadVariantsAll()
    if (variantsAllSaved) {
      areVariantsAll(variantsAllSaved)
    }

    axios
      .get('http://sidorchik.ru/reshuege/api/larin/')
      .then(response => response.data)
      .then(data =>
        data.map(({ id, number }: larinVariantsProps) => ({
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
    <section className="LarinVariants">
      <h2>
        <span className="LarinVariants-TitleWord1">Все варианты </span>
        <span className="LarinVariants-TitleWord2">Александра&nbsp;</span>
        <span className="LarinVariants-TitleWord3">Ларина</span>
        <span className="Title-Caption">с 2013 года</span>
      </h2>

      <p className="Section-Desc LarinVariants-Desc_desktop">
        Для тех, кто ищет варианты посложнее, чем обычно предлагают на ЕГЭ,
        публикуем задания с развернутым ответом из тренировочных вариантов А.
        <span className="halfspace">&nbsp;</span>А. Ларина. Новые условия
        по субботам, решения по пятницам.
      </p>

      <div className="VariantsBox">
        <div
          className={cx('Variants', 'LarinVariants-Variants', {
            'LarinVariants-Variants_cut': !variantsAll,
          })}
        >
          {larinVariants &&
            larinVariants.map(
              ({ id, number }: larinVariantsProps, i: number) => (
                <Link
                  to={'/test?id=' + id}
                  title={
                    'Александр Ларин, тренировочный вариант ЕГЭ № ' + number
                  }
                  key={i}
                >
                  {number}
                </Link>
              )
            )}
        </div>

        <div
          className="Link Link_pseudo Link_wrap VariantsBox-Control LarinVariants-Control"
          onClick={toggleVariantsAll}
        >
          <u className="Link-U Link_pseudo-U Link_wrap-U">
            {variantsAll ? 'Скрыть' : 'Показать все'}
          </u>
        </div>
      </div>
    </section>
  )
}

export default LarinVariants
