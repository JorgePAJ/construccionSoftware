import DashboardEmpresa from "../components/dashboard";
import ProfileUser from "../components/[profile]";
import CreatePost from "../components/createPost"

const CreatePostPage = () => {
  return (
    <div>
      <DashboardEmpresa>
        <CreatePost/>
      </DashboardEmpresa>
        
    </div>
  );
};

export default CreatePostPage;
