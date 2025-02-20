import { Helmet } from '@modern-js/runtime/head';

const Index = () => (
  <div className="container-box">
    <Helmet>
      <meta content="user" name="name" />
      <title>UserPage</title>
    </Helmet>
    <div>UserPage</div>
  </div>
);

export default Index;
