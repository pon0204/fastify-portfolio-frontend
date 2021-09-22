// import AddAPhotoIcon from '@material-ui/icons/AddAPhoto'
import { Icon } from '@iconify/react'
import React, { useState, VFC } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { selectEditedRoom, setEditedRoom } from '../../../slices/roomSlice'


interface props {
  isMe: boolean
}

const RoomFormFile: VFC<props> = ({isMe}) => {
  const [fileUrl, setFileUrl] = useState<string>('')
  const editedRoom = useAppSelector(selectEditedRoom)
  const dispatch = useAppDispatch()

  const compressOption = {
    maxSizeMB: 0.1,
    maxWidthOrHeight: 128,
  }

  const imageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {

    if (event.target.files !== null) {
    const image = event.target.files[0]
    const imageURL: string = URL.createObjectURL(image)
    // const compressFile = await imageCompression(image, compressOption)
    setFileUrl(imageURL)
    isMe ?
    dispatch(setEditedRoom({ ...editedRoom, myPhotoURL: imageURL}))    
    :
    dispatch(setEditedRoom({ ...editedRoom, partnerPhotoURL: imageURL}))
    }
  }

  return (
    <div className='mb-2'>
      <label
        htmlFor={isMe ? 'FileMe':'FilePartner'}
        className="relative block w-32 h-32 mx-auto mt-8 border-2 border-gray-300 rounded-full cursor-pointer"
      >
          <div className="relative">
            <img
              src={isMe ? editedRoom.myPhotoURL: editedRoom.partnerPhotoURL}
              className="w-32 h-32 rounded-full"
              alt=""
            />
            {!fileUrl &&
              <Icon icon="ic:baseline-add-a-photo" className='absolute top-10 left-10 text-4xl bg-white opacity-80' />
            }
          </div>
      </label>
      <input
        className="hidden"
        onChange={imageChange}
        type="file"
        id={isMe ? 'FileMe':'FilePartner'}
        name="file"
        accept="image/png,image/jpg"
      />
    </div>
  )
}

export default RoomFormFile