import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import Section from 'components/Section'
import ComplexHeader from 'components/ComplexHeader'
import Title from 'components/Title'
import Grid from 'components/Grid'
import VariantLink from 'components/VariantLink'
import 'components/Link/Link.scss'
import './OurVariants.scss'

const OurVariants: FC = () => (
  <Section className="OurVariants">
    <ComplexHeader className="Section-ComplexHeader">
      <Title>
        <span className="OurVariants-TitleWord1">Тренировочные </span>
        <span className="OurVariants-TitleWord2">варианты</span>
        <span className="Title-Caption">новые октябрьские</span>
      </Title>
      <div className="ComplexHeader-Link ComplexHeader-Link_desktop">
        <Link className="Link Link_static" to="/archive">
          Прошлые месяцы
        </Link>
      </div>
    </ComplexHeader>

    <p className="Section-Desc OurVariants-Desc_mobile">
      Каждый месяц мы составляем варианты для&nbsp;самопроверки. По окончании
      вашей работы вы увидите ответы, решения и свой&nbsp;балл.
    </p>

    <p className="Section-Desc OurVariants-Desc_desktop">
      Каждый месяц для наших читателей мы составляем варианты
      для&nbsp;самопроверки. По окончании вашей&nbsp;работы система проверит
      ответы, покажет правильные решения и рассчитает&nbsp;балл.
    </p>

    <Grid className="Variants">
      <VariantLink
        className="OurVariants-Link"
        data-wordClassName="OurVariants-Word"
        to="/test?id=24890461"
      >
        1
      </VariantLink>
      <VariantLink
        className="OurVariants-Link"
        data-wordClassName="OurVariants-Word"
        to="/test?id=24890462"
      >
        2
      </VariantLink>
      <VariantLink
        className="OurVariants-Link"
        data-wordClassName="OurVariants-Word"
        to="/test?id=24890463"
      >
        3
      </VariantLink>
      <VariantLink
        className="OurVariants-Link"
        data-wordClassName="OurVariants-Word"
        to="/test?id=24890464"
      >
        4
      </VariantLink>
      <VariantLink
        className="OurVariants-Link"
        data-wordClassName="OurVariants-Word"
        to="/test?id=24890465"
      >
        5
      </VariantLink>
      <VariantLink
        className="OurVariants-Link"
        data-wordClassName="OurVariants-Word"
        to="/test?id=24890466"
      >
        6
      </VariantLink>
      <VariantLink
        className="OurVariants-Link"
        data-wordClassName="OurVariants-Word"
        to="/test?id=24890467"
      >
        7
      </VariantLink>
      <VariantLink
        className="OurVariants-Link"
        data-wordClassName="OurVariants-Word"
        to="/test?id=24890468"
      >
        8
      </VariantLink>
      <VariantLink
        className="OurVariants-Link"
        data-wordClassName="OurVariants-Word"
        to="/test?id=24890469"
      >
        9
      </VariantLink>
      <VariantLink
        className="OurVariants-Link"
        data-wordClassName="OurVariants-Word"
        to="/test?id=248904610"
      >
        10
      </VariantLink>
      <VariantLink
        className="OurVariants-Link"
        data-wordClassName="OurVariants-Word"
        to="/test?id=248904611"
      >
        11
      </VariantLink>
      <VariantLink
        className="OurVariants-Link"
        data-wordClassName="OurVariants-Word"
        to="/test?id=248904612"
      >
        12
      </VariantLink>
      <VariantLink
        className="OurVariants-Link"
        data-wordClassName="OurVariants-Word"
        to="/test?id=248904613"
      >
        13
      </VariantLink>
      <VariantLink
        className="OurVariants-Link"
        data-wordClassName="OurVariants-Word"
        to="/test?id=248904614"
      >
        14
      </VariantLink>
      <VariantLink
        className="OurVariants-Link"
        data-wordClassName="OurVariants-Word"
        to="/test?id=248904615"
      >
        15
      </VariantLink>
      <VariantLink
        className="VariantLink_onePerRow Link_static"
        to="/test?a=own_test"
      >
        Ваш персональный вариант
        <div className="VariantLink-Hint" title="Помощь">
          ?
        </div>
      </VariantLink>
    </Grid>

    <div className="ComplexHeader-Link ComplexHeader-Link_mobile">
      <Link className="Link Link_static" to="/archive">
        Варианты прошлых месяцев
      </Link>
    </div>
  </Section>
)

export default OurVariants
