import React from "react";
import { GoTrashcan } from "react-icons/go";
import { useRemovePhotoMutation } from "../store";

const PhotosListItem = ({ photo }) => {
  const [removePhoto, result] = useRemovePhotoMutation();

  const handleRemove = () => {
    removePhoto(photo);
  };

  return (
    <div className='relative  m-2'>
      <img className='h-20 w-20' src={photo.url} alt='random pic' />
      <div
        onClick={handleRemove}
        className='absolute right-0 bottom-20 left-19  text-red-300 cursor-pointer '
      >
        <GoTrashcan className='text-3xl' />
      </div>
    </div>
  );
};

export default PhotosListItem;
