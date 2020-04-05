import React, { FC, useState, useEffect } from 'react'
import axios from 'axios'
import cx from 'classnames'

import { INewsItemProps } from './NewsItem/NewsItem'
import { getBotList } from 'utils/botList'
import { getNewsList } from 'utils/newsList'
import { getThiefList } from 'utils/thiefList'
import 'components/Link/_white/Link_white.scss'
import './News.scss'

import NewsItem from './NewsItem/NewsItem'
import Link from 'components/Link'
import LinkWrap from 'components/Link/_wrap'

export interface IBotProps {
  url: string
  text: string
  img: string
}

export interface IThiefProps {
  type: string
  text: string
  url: string
  letterCase?: string
}

interface INewsProps {
  className?: string
}

const News: FC<INewsProps> = ({ className }) => {
  const [bots, setBots] = useState<Array<IBotProps> | null>(null)
  const [news, setNews] = useState<Array<INewsItemProps> | null>(null)
  const [thieves, setThieves] = useState<Array<IThiefProps> | null>(null)
  const [sourcesNews, setSourcesNews] = useState<Array<INewsItemProps> | null>(
    null
  )

  useEffect(() => {
    axios
      .get('http://sidorchik.ru/reshuege/api/sidebar/bots/')
      .then((response) => response.data)
      .then((data) =>
        data.map(({ url, text, img }: IBotProps) => ({
          url,
          text,
          img,
        }))
      )
      .then((data) => setBots(data))
      .catch((error) => {
        console.log(error)

        const dataNew = getBotList()
        setBots(dataNew)
      })

    axios
      .get('http://sidorchik.ru/reshuege/api/sidebar/news/')
      .then((response) => response.data)
      .then((data) =>
        data.map(({ type, date, text, url }: INewsItemProps) => ({
          type,
          date,
          text,
          url,
        }))
      )
      .then((data) => setNews(data))
      .catch((error) => {
        console.log(error)

        const dataNew = getNewsList()
        setNews(dataNew)
      })

    axios
      .get('http://sidorchik.ru/reshuege/api/sidebar/thieves/')
      .then((response) => response.data)
      .then((data) =>
        data.map(({ type, text, url }: IThiefProps) => ({
          type,
          text,
          url,
        }))
      )
      .then((data) => setThieves(data))
      .catch((error) => {
        console.log(error)

        const dataNew = getThiefList()
        setThieves(dataNew)
      })

    axios
      .get('http://sidorchik.ru/reshuege/api/sidebar/sources-news/')
      .then((response) => response.data)
      .then((data) =>
        data.map(({ type, date, text, url }: INewsItemProps) => ({
          type,
          date,
          text,
          url,
        }))
      )
      .then((data) => setSourcesNews(data))
      .catch((error) => {
        console.log(error)

        const dataNew = [
          {
            type: 'urgent',
            text: 'Играть в ЕГЭ-игрушку',
            url: 'https://ege.sdamgia.ru/game.htm',
          },
          {
            type: 'urgent',
            text: 'Мобильный справочник',
            url:
              'https://play.google.com/store/apps/details?id=com.ilnur.handbook',
          },
        ]

        setSourcesNews(dataNew)
      })
  }, [])

  return (
    <div className={cx('News', className)}>
      {sourcesNews &&
        sourcesNews.map(
          ({ type, date, text, url }: INewsItemProps, i: number) => (
            <NewsItem type={type} date={date} text={text} url={url} key={i} />
          )
        )}

      <div className="News-Bots">
        {bots &&
          bots.map(({ url, text, img }: IBotProps, i: number) => (
            <a
              className="News-Bot"
              href={url}
              rel="noopener noreferrer"
              title={text}
              key={i}
            >
              <img src={img} alt={text} />
            </a>
          ))}
      </div>

      {[
        {
          type: 'hot',
          date: null,
          text: 'На сайте что-то не так? Отключите адблок',
          url: 'https://ege.sdamgia.ru/img/blockadblock_chrome.jpg',
        },
      ].map(({ type, date, text, url }, i: number) => (
        <NewsItem type={type} date={date} text={text} url={url} key={i} />
      ))}

      <div className="News-List">
        <LinkWrap
          className="Link_static News-Title"
          classNameU="Link_static-U"
          href="https://sdamgia.ru/"
        >
          Новости
        </LinkWrap>

        {news &&
          news.map(({ type, date, text, url }: INewsItemProps, i: number) => (
            <NewsItem type={type} date={date} text={text} url={url} key={i} />
          ))}
      </div>

      <div className="News-Thiefs">
        <div className="News-Title">ЧУЖОЕ НЕ БРАТЬ!</div>

        {thieves &&
          thieves.map(({ type, text, url, letterCase }, i: number) => (
            <Link
              className={cx('Link_static', 'News-Item', {
                [`News-Item_${type}`]: type !== 'default',
              })}
              href={url}
              key={i}
            >
              <div
                className={cx('News-Text', {
                  Smallcapitals: letterCase === 'upper',
                })}
              >
                {text}
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default News
