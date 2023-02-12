import { IPost } from "../types/postsType";
import { ITodoApi } from "../types/redux.types";
import UsersExtraData from "./UsersExtraDataTemplate";

interface Albums {
  userId?: number;
  id: number;
  title: string;
}

interface IUserTabsContentProps {
  data: Array<IPost | Albums | ITodoApi>;
  section: string;
}

const UserTabsContent = (props: IUserTabsContentProps) => {
  const { data, section } = props;

  return (
    <>
      {data.length > 0 ? (
        <div>
          <ul>
            {section === "posts" &&
              data.map((item: IPost | Albums | ITodoApi) => {
                if (item.hasOwnProperty("title")) {
                  return <UsersExtraData body={item.title} key={item.id} />;
                }
              })}
            {section === "albums" &&
              data.map((item: IPost | Albums | ITodoApi) => {
                if (item.hasOwnProperty("title")) {
                  return <UsersExtraData body={item.title} key={item.id} />;
                }
              })}
            {section === "todos" &&
              data.map((item: IPost | Albums | ITodoApi) => {
                if (item.hasOwnProperty("title")) {
                  return <UsersExtraData body={item.title} key={item.id} />;
                }
              })}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default UserTabsContent;
