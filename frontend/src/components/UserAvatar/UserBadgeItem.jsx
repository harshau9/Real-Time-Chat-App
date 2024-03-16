import { Badge } from '@chakra-ui/react'
import React from 'react'
import { IoClose } from "react-icons/io5";

function UserBadgeItem({ user, handleFunction, admin }) {
  return (
    <Badge
    display="inline-flex"
    px={2}
    py={1}
    borderRadius="lg"
    margin={1}
    mb={2}
    variant="solid"
    fontSize={12}
    colorScheme="purple"
    cursor="pointer"
    onClick={handleFunction}
  >
    {user.name}
    {admin === user._id && <span> (Admin)</span>}
    <IoClose size={17}/>
  </Badge>

  )
}

export default UserBadgeItem