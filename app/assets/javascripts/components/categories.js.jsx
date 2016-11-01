'use strict';

class Categories extends BaseComponent {
  constructor() {
    super();
    this._bind();
    this.state = {
      categories: [
      {id:1, name:"Social Media", img:"/assets/socialmedia.png"},
      {id:2, name:"Web Ad", img:"/assets/webad.png"},
      {id:3, name:"Web Image", img:"/assets/webimage.png"}
      ]
    };
  }

  render() {
    var categories = this.state.categories.map((category)=> {
      return <Category name={category.name} key={category.id} img={category.img} />
    });
    return(
      <div className="pageBox">

        <h2 className="startingQ">WHAT WOULD</h2>
        <h2 className="startingQ">YOU LIKE TO</h2>
        <h2 className="startingQ">CREATE?</h2>
        <br></br>
        <div className = "categories pageContent">
          <div className="itemList">
            {categories}
          </div>
        </div>
      </div>
    )
  }
}

Categories.defaultProps = {
  categories: []
}
