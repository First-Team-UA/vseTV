import Layout from "../Components/Layout";
import Dashboard from "./DashboardPage";
import Profile from "./ProfilePage";
import MyChannels from "./MyChannelsPage";
import Contacts from "./ContactsPage";
import Test from "./TestPage";
import { useRouter } from 'next/router';

const IndexPage = () => {
  const router = useRouter();
  const { query } = router;


  const showDashboard = Object.keys(query).length === 0;

  return (
    <Layout>
      {showDashboard && <Dashboard />}
      {query.profile && <Profile />}
      {query.mychannels && <MyChannels />}
      {query.contacts && <Contacts />}
      {query.test && <Test />}
    </Layout>
  );
};

export default IndexPage;
