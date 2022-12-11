import { useAddAlbumMutation, useFetchAlbumQuery } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import AlbumListItem from "./AlbumListItem";

function AlbumsList({ user }) {
  const { data, error, isFetching } = useFetchAlbumQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;

  if (isFetching) {
    content = <Skeleton ClassName='h-10 , w-full' times={3} />;
  } else if (error) {
    content = <div> Error</div>;
  } else {
    content = data.map(album => {
      return <AlbumListItem key={album.id} album={album} />;
    });
  }

  return (
    <div>
      <div className='m-2 flex flex-row justify-between items-center'>
        <h3 className='text-lg- font-bold'>Albums For {user.name}</h3>
        <Button loading={results.isLoading} onClick={handleAddAlbum}>
          + Add Album
        </Button>
      </div>
      <div className='mt-2'>{content}</div>
    </div>
  );
}

export default AlbumsList;
