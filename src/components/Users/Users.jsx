import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
  users,
  ...props
}) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        onPageChanged={onPageChanged}
      />
      {users.map((u) => (
        <User
          key={u.id}
          user={u}
          follow={props.follow}
          unfollow={props.unfollow}
          followingInProgress={props.followingInProgress}
        />
      ))}
    </div>
  );
};

export default Users;
