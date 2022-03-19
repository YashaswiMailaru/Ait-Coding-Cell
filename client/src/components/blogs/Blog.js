import Header from './components/Header';
import Home from './components/home/Home';
import View from './components/post/View';
import { BrowserRouter, Switch,Route } from "react-router-dom";
import Createblog from './components/post/Createblog';
import Updateblog from './components/post/Update';

function Blog() {
  return (
    <BrowserRouter>
      <div>
            <Switch>
              <Route exact path = "/blogs/" component ={Home} />
              <Route exact path = "/blogs/view/:id" component ={View} />
              <Route exact path = "/blogs/create" component ={Createblog} />
              <Route exact path = "/blogs/update/:id" component ={Updateblog} />
            </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Blog;