import React from 'react'
import { connect } from 'react-redux'
import * as axios from 'axios'
import Users from './Users.jsx'
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toogleIsFetching,
} from '../../redux/usersReducer'

class UsersContainer extends React.Component {
  componentDidMount () {
    const { pageSize, currentPage, toogleIsFetching } = this.props
    toogleIsFetching(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
      )
      .then(response => {
        toogleIsFetching(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount / 15)
      })
  }

  onPageChanged = pageNumber => {
    const { toogleIsFetching, setCurrentPage, setUsers, pageSize } = this.props
    setCurrentPage(pageNumber)
    toogleIsFetching(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`,
      )
      .then(response => {
        toogleIsFetching(false)
        setUsers(response.data.items)
      })
  }

  render () {
    const {
      totalUsersCount,
      pageSize,
      currentPage,
      users,
      follow,
      unfollow,
      isFetching,
    } = this.props
    return (
      <>
        <Users
          totalUsersCount={totalUsersCount}
          pageSize={pageSize}
          currentPage={currentPage}
          handlePageChanged={this.onPageChanged}
          users={users}
          polkiju
          follow={follow}
          unfollow={unfollow}
          isFetching={isFetching} />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
}

// const mapDispatchToProps = dispatch => {
// return {
//   follow: userId => {
//     dispatch(followAC(userId))
//   },
//   unfollow: userId => {
//     dispatch(unfollowAC(userId))
//   },
//   setUsers: users => {
//     dispatch(setUsersAC(users))
//   },
//   setCurrentPage: currentPage => {
//     dispatch(setCurrentPage(currentPage))
//   },
//   setTotalUsersCount: totalCount => {
//     dispatch(setTotalUsersCount(totalCount))
//   },
//   toogleIsFetching: isFetching => {
//     dispatch(toogleIsFetching(isFetching))
//   },
// }
// }

export default connect(mapStateToProps, {
  follow: follow,
  unfollow: unfollow,
  setUsers: setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toogleIsFetching,
})(UsersContainer)
