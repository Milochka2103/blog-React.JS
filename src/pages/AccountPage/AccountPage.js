import React /* { useEffect, useState } */ from "react";
import { Menu } from "antd";
import "./AccountPage.css";
import { MailOutlined, SettingOutlined } from "@ant-design/icons";
import EditIcon from "@mui/icons-material/Edit";

export const AccountPage = ({ title }) => {
  /* const { list: users } = useSelector(selectUsersData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const { userId } = useParams();

  const { accountUser, isLoading, error } = useGetSingleUser(
    USERS_URL,
    userId
  );

  const [showEditForm, setShowEditForm] = useState(false);

  const { phone, email, fullname } = accountUser;

 
  const handleEditFormShow = () => {
    setShowEditForm(true);
  };

  if (isLoading) return <h1>Getting a data...</h1>;
  if (error) return <h1>{error.message}</h1>;

 */
  return (
    <div className="userssWrapper">

      <div className="account">
        <h1>{title}</h1>
        <Menu mode="horizontal" defaultSelectedKeys={["mail"]}>
          <Menu.Item key="mail" icon={<MailOutlined />}>
            My data
          </Menu.Item>
          <Menu.SubMenu
            key="SubMenu"
            title="Settings"
            icon={<SettingOutlined />}
          >
            <Menu.Item key="two">Change password</Menu.Item>
          </Menu.SubMenu>
        </Menu>
        <div className="account-data">
          <div className="my-data">
            <span className="span-account">My phone number:</span>
            <button className="editBtn">
              <EditIcon />
            </button>
          </div>
          <div className="my-data">
            <span className="span-account">My e-mail:</span>
            <button className="editBtn">
              <EditIcon />
            </button>
          </div>
          <div className="my-data">
            <span className="span-account">My adress:</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="editBtn">
              <EditIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
