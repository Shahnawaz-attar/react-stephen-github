import React from "react";
import { useFetchPhotosQuery, useAddPhotosMutation } from "../store";
import Button from "./Button";
import PhotosListItem from "./PhotosListItem";
import Skeleton from "./Skeleton";

const PhotosList = ({ album }) => {
  const [addPhotos, addPhotoResults] = useAddPhotosMutation();
  const { data, isFetching, error } = useFetchPhotosQuery(album);

  const handleClick = () => {
    addPhotos(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton ClassName='h-12 , w-12 m-2' times={4} />;
  } else if (error) {
    content = <div>Fetching Error ....</div>;
  } else {
    content = data.map(photo => {
      return <PhotosListItem key={photo.id} photo={photo} />;
    });
  }

  useFetchPhotosQuery(album);
  return (
    <div>
      <div className='flex flex-row justify-between items-center m-2'>
        <h3 className='text-lg font-bold'>Photos of {album.title}</h3>
        <Button onClick={handleClick} loading={addPhotoResults.isLoading}>
          + Add Photos
        </Button>
      </div>

      <div className='mx-8 flex flex-row flex-wrap justify-center'>
        {content}
      </div>
    </div>
  );
};

export default PhotosList;
