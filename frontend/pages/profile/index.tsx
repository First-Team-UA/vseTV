import { ProfileContainer } from '../../styles/profile/profilePage.styled';
import Layout from '../../сomponents/Layout/layout';
import ChangePasswordForm from '@frontend/сomponents/Profile/changePasswordForm';
import ContactInfoForm from '@frontend/сomponents/Profile/contactInfoForm';

const Profile = () => {
  return (
    <Layout>
      <ProfileContainer>
        <ContactInfoForm />
        <ChangePasswordForm />
      </ProfileContainer>
    </Layout>
  );
};

export default Profile;
