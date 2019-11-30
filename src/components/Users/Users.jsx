import React from 'react'
import s from './Users.module.css'
import img from '@/components/assets/img/user.png'
import Preloader from '@/components/Common/Preloader/Preloader'

export default function Users (props) {
  const {
    totalUsersCount,
    pageSize, currentPage,
    handlePageChanged,
    users,
    follow,
    unfollow,
  } = props
  const pagesCount = Math.ceil(totalUsersCount / pageSize)
  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <>
      <div className={s.selectPage}>
        <div className={s.pageNumber}>
          {pages.map(pages => {
            return (
              <span
                key={pages + 123}
                className={currentPage === pages
                  ? s.selectPageItem
                  : ''}
                onClick={() => { handlePageChanged(pages) }}
              >
                {pages}
              </span>
            )
          })}
        </div>
        {props.isFetching ? <Preloader /> : (
          users.map(u => (
            <div key={u.id} className={s.userBlock}>
              <span>
                <img
                  src={u.photos.small != null
                    ? u.photos.small
                    : img}
                  className={s.userPhoto}
                  alt="logo" />
                <div>
                  {u.followed ? (
                    <button
                      onClick={() => {
                        unfollow(u.id)
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        follow(u.id)
                      }}
                    >
                      Follow
                    </button>
                  )}
                </div>
              </span>
              <div>
                <p>{u.name}</p>
                <p>{u.status}</p>
              </div>
              <div>
                <p>u.location</p>
                <p>u.country</p>
              </div>
            </div>
          )))}
      </div>
    </>
  )
}
