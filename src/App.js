
import { Layout, Image } from "antd";
import SideMenu from "./components/SideMenu";
import img from '../src/img/ATF.jpg'
import AppRoutes from "./components/AppRoutes";

const {Sider, Content, Footer} = Layout;

const date = new Date().getFullYear()

const logo = img


function App() {
  return (
    <Layout>
      <Sider style={{height:'100vh', backgroundColor:'white'}}>
        <Image src= {logo} preview={false} alt="logo"/>
        <SideMenu/>
      </Sider>
      <Layout>
        <Content style={{}}>
          <AppRoutes/>
        </Content>
        <Footer style={{textAlign:'center', backgroundColor:'black'}}>
          <p style={{color:'white'}}>Copyright &copy; <span>{date}</span> AT Food Restaurant Dashboard</p>
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
