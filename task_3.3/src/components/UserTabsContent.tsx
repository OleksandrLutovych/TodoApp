import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPost } from "../types/postsType";
import { ITodoApi } from "../types/redux.types";
import UsersExtraData from "./UsersExtraDataTemplate";

interface Albums {
  userId?: number;
  id: number;
  title: string;
}

const UserTabsContent = () => {
  const { id, section } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/${section}`)
      .then((respone) => respone.json())
      .then((data) => setData(data));
  }, [section]);

  return (
    <>
      {data.length > 0 ? (
        <div>
          <ul>
            {section === "posts" &&
              data.map((item: IPost) => (
                <UsersExtraData dataText={item.title} key={item.id} />
              ))}
            {section === "albums" &&
              data.map((item: Albums) => (
                <UsersExtraData dataText={item.title} key={item.id} />
              ))}
            {section === "todos" &&
              data.map((item: ITodoApi) => (
                <UsersExtraData dataText={item.title} key={item.id} />
              ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default UserTabsContent;
