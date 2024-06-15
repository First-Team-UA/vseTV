import ContactInfoForm from "@frontend/сomponents/Profile/contactInfoForm";
import Layout from "../layout";
import ChangePasswordForm from "@frontend/сomponents/Profile/changePasswordForm";

const Profile = () => {
    return (
<Layout>
            <div>
                <h1>Profile</h1>
                <ContactInfoForm />
                <ChangePasswordForm/>
            </div>
</Layout>
    );
};

export default Profile;
