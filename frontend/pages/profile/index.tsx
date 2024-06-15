import ContactInfoForm from "@frontend/Components/Profile/contactInfoForm";
import Layout from "../../Components/Layout/layout";
import ChangePasswordForm from "@frontend/Components/Profile/changePasswordForm";

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
