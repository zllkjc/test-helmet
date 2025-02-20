import { Helmet } from '@modern-js/runtime/head';
import './index.css';
import { Link } from '@modern-js/runtime/router';

const Index = () => (
  <div className="container-box">
    <Helmet>
      <meta content="index" name="name" />
      <title>IndexPage</title>
    </Helmet>
    <div>IndexPage</div>
    <Link to="/user">Go to User Page</Link>
  </div>
);

export default Index;
